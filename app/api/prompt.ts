import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import PromptCraft, { IPromptCraft } from '../../models/PromptCraft';
import multer from 'multer';
import { Readable } from 'stream';
import axios from 'axios';

// Multer setup
const upload = multer({ storage: multer.memoryStorage() });

/**
 * A helper function to handle multer in Next.js `app` routes.
 */
const parseForm = async (req: NextRequest) => {
    const formData = await new Promise<{ fields: any; file: Express.Multer.File }>(
        (resolve, reject) => {
            const multerUpload = upload.single('image');
            const reqStream = Readable.from(req.body);

            multerUpload(reqStream as any, {} as any, (err: any) => {
                if (err) {
                    reject(err);
                } else {
                    const fields = req.body;
                    const file = req.file as Express.Multer.File;
                    resolve({ fields, file });
                }
            });
        }
    );

    return formData;
};

export const POST = async (req: NextRequest) => {
    try {
        // Connect to database
        await connectToDatabase();

        // Parse FormData
        const { fields, file } = await parseForm(req);
        const { name, email, prompt } = fields;

        if (!file) {
            return NextResponse.json(
                { error: 'Image file is required' },
                { status: 400 }
            );
        }

        // Validate fields
        if (!name || !email || !prompt) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, or prompt' },
                { status: 400 }
            );
        }

        // Upload image to ImgBB
        const imgBBApiKey = process.env.IMGBB_API_KEY;

        const imgbbResponse = await axios.post(
            `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
            {
                image: file.buffer.toString('base64'),
            }
        );

        if (imgbbResponse.status !== 200) {
            return NextResponse.json(
                { error: 'Failed to upload image to ImgBB' },
                { status: 500 }
            );
        }

        const imageUrl = imgbbResponse.data.data.url;

        // Save data to MongoDB
        const newPromptCraft: IPromptCraft = new PromptCraft({
            name,
            email,
            prompt,
            imageUrl,
        });

        await newPromptCraft.save();

        return NextResponse.json({
            message: 'Submission successful',
            data: newPromptCraft,
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
};

export const config = {
    api: {
        bodyParser: false, // Disable built-in body parser
    },
};
