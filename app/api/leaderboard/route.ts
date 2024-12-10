import { NextResponse } from 'next/server';
import DataHackathon from '@/models/DataHackathon';
import { connectToDatabase } from '@/lib/mongodb';

export const GET = async (req: Request) => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Fetch leaderboard data (top 10 entries sorted by f1Score)
        const leaderboard = await DataHackathon.find()
            .sort({ f1Score: -1 }) // Descending order
        // Respond with the leaderboard
        return NextResponse.json({ leaderboard }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching leaderboard:', error.message);
            return NextResponse.json(
                { error: 'Internal Server Error' },
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
