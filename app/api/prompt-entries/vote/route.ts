import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PromptCraft from '@/models/PromptCraft';

export const PUT = async (req: Request) => {
    try {
        const body = await req.json();
        const { promptId } = body;

        if (!promptId) {
            return NextResponse.json(
                { error: 'Missing required field: promptId' },
                { status: 400 }
            );
        }

        // Connect to the database
        await connectToDatabase();

        // Find the prompt by ID
        const prompt = await PromptCraft.findById(promptId);

        if (!prompt) {
            return NextResponse.json(
                { error: 'Prompt not found' },
                { status: 404 }
            );
        }

        // Increment the vote count
        prompt.votes = (prompt.votes || 0) + 1; // Ensure votes is initialized to 0 if undefined
        await prompt.save();

        return NextResponse.json(
            {
                message: 'Vote successfully updated',
                votes: prompt.votes,
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error updating votes:', error.message);
            return NextResponse.json(
                { error: 'An error occurred while updating votes' },
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
