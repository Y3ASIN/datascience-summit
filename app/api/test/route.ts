import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'GET request successful!', success: true });
}
