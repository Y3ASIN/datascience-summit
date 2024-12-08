import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import PromptCraft, { IPromptCraft } from '../../../models/PromptCraft';
import axios from 'axios';

// Disable automatic body parsing
export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper to convert ReadableStream to Buffer
async function streamToBuffer(stream: ReadableStream<Uint8Array> | null): Promise<Buffer> {
    if (!stream) {
        throw new Error('ReadableStream is null');
    }

    const chunks: Uint8Array[] = [];
    const reader = stream.getReader();
    let done = false;

    while (!done) {
        const { value, done: streamDone } = await reader.read();
        if (value) chunks.push(value);
        done = streamDone;
    }

    return Buffer.concat(chunks);
}

// Helper to parse multipart form-data manually
async function parseMultipartForm(request: NextRequest): Promise<{
    fields: Record<string, string>;
    fileBuffer: Buffer;
}> {
    const contentType = request.headers.get('content-type') || '';
    const boundary = contentType.split('boundary=')[1];

    if (!boundary) {
        throw new Error('Missing boundary in content-type');
    }

    const body = await streamToBuffer(request.body);
    const parts = body.toString().split(`--${boundary}`);
    const fields: Record<string, string> = {};
    let fileBuffer: Buffer | null = null;

    for (const part of parts) {
        const [headers, ...rest] = part.split('\r\n\r\n');
        if (!headers) continue;

        const dispositionMatch = headers.match(/name="([^"]+)"/);
        const filenameMatch = headers.match(/filename="([^"]+)"/);

        const bodyContent = rest.join('\r\n\r\n').trim();
        if (filenameMatch) {
            // File part
            fileBuffer = Buffer.from(bodyContent, 'binary');
        } else if (dispositionMatch) {
            // Field part
            const name = dispositionMatch[1];
            fields[name] = bodyContent;
        }
    }

    if (!fileBuffer) {
        throw new Error('No file found in the form data');
    }

    return { fields, fileBuffer };
}

export const POST = async (req: NextRequest) => {
    try {
        console.log('Incoming request to /api/prompt');
        console.log('ImgBB API Key:', process.env.IMGBB_API_KEY);

        // Parse multipart form-data
        const { fields, fileBuffer } = await parseMultipartForm(req);
        const { name, email, prompt } = fields;

        if (!name || !email || !prompt) {
            console.log('Validation failed: Missing required fields');
            return NextResponse.json(
                { error: 'Missing required fields: name, email, or prompt' },
                { status: 400 }
            );
        }

        console.log('Uploading file to ImgBB...');

        // Upload the fileBuffer to ImgBB
        const imgBBApiKey = process.env.IMGBB_API_KEY;
        if (!imgBBApiKey) {
            console.error('ImgBB API Key is missing');
            return NextResponse.json(
                { error: 'ImgBB API Key is not configured' },
                { status: 500 }
            );
        }


        const imgbbResponse = await axios.post(
            `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
            new URLSearchParams({
                image: fileBuffer.toString('base64'),
            })
        );

        if (imgbbResponse.status !== 200) {
            console.error('ImgBB upload failed:', imgbbResponse.data);
            return NextResponse.json(
                { error: 'Failed to upload image to ImgBB' },
                { status: 500 }
            );
        }

        const imageUrl = imgbbResponse.data.data.url;
        console.log('Image successfully uploaded to ImgBB:', imageUrl);

        console.log('Saving data to MongoDB...');

        // Save the data to MongoDB
        await connectToDatabase();
        const newPromptCraft: IPromptCraft = new PromptCraft({
            name,
            email,
            prompt,
            imageUrl,
        });

        await newPromptCraft.save();
        console.log('Data saved to MongoDB:', newPromptCraft);

        return NextResponse.json({
            message: 'Submission successful!',
            data: newPromptCraft,
        });
    } catch (error) {
        console.error('Error occurred during POST request:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
};
