import { connectToDatabase } from '@/lib/mongodb';
import PromptCraft from '@/models/PromptCraft';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Fetch all entries from the PromptCraft collection
        const entries = await PromptCraft.find();

        if (!entries || entries.length === 0) {
            return NextResponse.json(
                { error: 'No entries found' },
                { status: 404 }
            );
        }

        console.log('Entries retrieved:', entries);

        return NextResponse.json({
            message: 'Fetched entries successfully!',
            data: entries,
        }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching entries:', error.message);
            return NextResponse.json(
                { error: 'An error occurred while fetching the entries' },
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
