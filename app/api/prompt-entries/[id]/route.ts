import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PromptCraft from '@/models/PromptCraft';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;

    if (!id) {
        return NextResponse.json(
            { error: 'Missing prompt ID in the request' },
            { status: 400 }
        );
    }

    try {
        // Connect to the database
        await connectToDatabase();

        // Fetch the prompt by ID
        const prompt = await PromptCraft.findById(id);

        if (!prompt) {
            return NextResponse.json(
                { error: 'Prompt not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(prompt, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching prompt:', error.message);
            return NextResponse.json(
                { error: 'An error occurred while fetching the prompt' },
                { status: 500 }
            );
        }

        console.error('Unknown error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
};
