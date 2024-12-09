import { NextResponse } from 'next/server';
import DataHackathon from '@/models/DataHackathon';
import { connectToDatabase } from '@/lib/mongodb';

export const POST = async (req: Request) => {
    try {
        const body = await req.json();

        // Normalize input field names
        const name = body.name;
        const email = body.email;
        const f1Score = body.f1Score ?? body.f1score; // Handle both 'f1Score' and 'f1score'

        // Validate input
        if (!name || !email || typeof f1Score !== 'number') {
            return NextResponse.json(
                { error: 'All fields are required and f1Score must be a number' },
                { status: 400 }
            );
        }

        // Connect to the database
        await connectToDatabase();

        // Create a new document
        const newEntry = new DataHackathon({ name, email, f1Score });

        // Save the document to the database
        await newEntry.save();

        // Respond with success message
        return NextResponse.json(
            { message: 'Data submitted successfully', data: newEntry },
            { status: 201 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.name === 'ValidationError') {
                return NextResponse.json(
                    { error: 'Validation Error', details: (error as any).errors },
                    { status: 400 }
                );
            }

            console.error('Error handling POST request:', error.message);
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
