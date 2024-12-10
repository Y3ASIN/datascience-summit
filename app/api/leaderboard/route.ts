import { NextResponse } from 'next/server';
import DataHackathon from '@/models/DataHackathon';
import { connectToDatabase } from '@/lib/mongodb';

export const GET = async (req: Request) => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Fetch leaderboard data (top 10 entries sorted by f1Score in descending order)
        const leaderboard = await DataHackathon.find()
            .sort({ f1Score: -1 });

        // Respond with the leaderboard
        return NextResponse.json({ leaderboard }, { status: 200 });
    } catch (error: unknown) {
        // Handle known error types
        if (error instanceof Error) {
            console.error('Error fetching leaderboard:', error.message);
            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            );
        }

        // Handle unknown errors
        console.error('Unknown error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
};
