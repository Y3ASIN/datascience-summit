import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import PromptCraft from "@/models/PromptCraft";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js' automatic body parsing
  },
};

interface ImgBBResponseData {
  data: {
    url: string;
  };
}

export const POST = async (req: Request) => {
  try {
    console.log("Incoming request to /api/prompt");

    const formData = await req.formData();

    // Type assertions for form fields
    const file = formData.get("image") as File;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const prompt = formData.get("prompt") as string;

    if (!name || !email || !prompt || !file) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, prompt, or image" },
        { status: 400 },
      );
    }

    // Convert file to base64
    const fileBuffer = await file.arrayBuffer();
    const fileString = Buffer.from(fileBuffer).toString("base64");

    console.log("Uploading file to ImgBB...");

    // Upload the file to ImgBB
    const imgBBApiKey = process.env.IMGBB_API_KEY;
    if (!imgBBApiKey) {
      throw new Error("ImgBB API Key is not configured");
    }

    const imgbbResponse = await axios.post<ImgBBResponseData>(
      `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
      new URLSearchParams({
        image: fileString,
      }),
    );

    if (imgbbResponse.status !== 200) {
      console.error("ImgBB upload failed:", imgbbResponse.data);
      return NextResponse.json(
        { error: "Failed to upload image to ImgBB" },
        { status: 500 },
      );
    }

    const imageUrl = imgbbResponse.data.data.url;
    console.log("Image successfully uploaded to ImgBB:", imageUrl);

    console.log("Saving data to MongoDB...");

    // Save the data to MongoDB
    await connectToDatabase();
    const newPromptCraft = new PromptCraft({
      name,
      email,
      prompt,
      imageUrl,
    });

    await newPromptCraft.save();
    console.log("Data saved to MongoDB:", newPromptCraft);

    return NextResponse.json({
      message: "Submission successful!",
      data: newPromptCraft,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error occurred during POST request:", error.message);
      return NextResponse.json(
        { error: "An error occurred while processing your request" },
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
