import { connectToDatabase } from '@/lib/mongodb';
import PromptCraft from '@/models/PromptCraft';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    try {
        await connectToDatabase();

        const entry = await PromptCraft.find();

        if (!entry) {
            return NextResponse.json(
                { error: 'Entry not found' },
                { status: 404 }
            );
        }

        console.log('Entry retrieved:', entry);

        return NextResponse.json({
            message: 'Fetched entry successfully!',
            data: entry,
        });
    } catch (error: any) {
        console.error('Error fetching entry:', error.message);
        return NextResponse.json(
            { error: 'An error occurred while fetching the entry' },
            { status: 500 }
        );
    }
};
