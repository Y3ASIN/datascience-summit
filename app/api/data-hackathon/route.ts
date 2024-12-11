import { NextResponse } from "next/server";
import DataHackathon from "@/models/DataHackathon";
import { connectToDatabase } from "@/lib/mongodb";

interface RequestBody {
  name: string;
  email: string;
  f1Score?: number; // Optional if `undefined` might be passed
  f1score?: number; // Alternative for f1Score
  userData?: string[];
}

export const POST = async (req: Request) => {
  try {
    const body: RequestBody = await req.json();

    // Normalize input field names
    const name = body.name;
    const email = body.email;
    const f1Score = body.f1Score ?? body.f1score; // Handle both 'f1Score' and 'f1score'
    const userData = body.userData;

    // Validate input
    if (
      !name ||
      !email ||
      typeof f1Score !== "number" ||
      !Array.isArray(userData)
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid input. name, email, f1Score, and userData are required.",
        },
        { status: 400 },
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Create a new document
    const newEntry = new DataHackathon({ name, email, f1Score, userData });

    // Save the document to the database
    await newEntry.save();

    // Respond with success message
    return NextResponse.json(
      { message: "Data submitted successfully", data: newEntry },
      { status: 201 },
    );
  } catch (error: unknown) {
    // Check if error is an instance of Error
    if (error instanceof Error) {
      if (error.name === "ValidationError") {
        return NextResponse.json(
          { error: "Validation Error" },
          { status: 400 },
        );
      }

      console.error("Error handling POST request:", error.message);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 },
      );
    }

    console.error("Unknown error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
};
