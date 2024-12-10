import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PromptCraft from '@/models/PromptCraft';

export const PUT = async (req: Request) => {
    try {
        const { promptId } = await req.json();

        if (!promptId) {
            return NextResponse.json(
                { error: 'Missing required field: promptId' },
                { status: 400 }
            );
        }

        // Connect to the database and update votes
        await connectToDatabase();
        const prompt = await PromptCraft.findById(promptId);

        if (!prompt) {
            return NextResponse.json(
                { error: 'Prompt not found' },
                { status: 404 }
            );
        }

        prompt.votes += 1; // Increment vote count
        await prompt.save();

        return NextResponse.json({
            message: 'Vote successfully updated',
            votes: prompt.votes,
        });
    } catch (error: any) {
        console.error('Error updating votes:', error.message);
        return NextResponse.json(
            { error: 'An error occurred while updating votes' },
            { status: 500 }
        );
    }
};
