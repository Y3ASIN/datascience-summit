"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { FaArrowLeft } from "react-icons/fa";
import UpdateVote from "@/components/UpdateVote";

interface Prompt {
  _id: string;
  name: string;
  prompt: string;
  imageUrl: string;
  votes: number;
}

const PromptDetails = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  const router = useRouter();
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPrompt = async () => {
      try {
        const response = await axios.get(`/api/prompt-entries/${id}`);
        console.log("Fetched prompt:", response.data);
        setPrompt(response.data); // Ensure this matches the backend structure
      } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage =
          axiosError.response?.data &&
          typeof axiosError.response.data === "object"
            ? (axiosError.response.data as { error?: string }).error
            : axiosError.message;
        console.error("Error fetching prompt:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompt();
  }, [id]);

  if (loading) {
    return (
      <p className="animate-pulse text-center text-lg font-semibold">
        Loading...
      </p>
    );
  }

  if (!prompt) {
    return <p className="text-center text-lg text-red-500">Entry not found.</p>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 shadow transition hover:bg-gray-300"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <div className="shadow-3xl flex w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white md:flex-row">
        {/* Left Side: Image */}
        <div className="flex items-center justify-center bg-gray-200 p-4 md:w-1/2">
          <img
            src={prompt.imageUrl}
            alt={prompt.name}
            className="w-full max-w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center bg-gray-100 p-8 md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            {prompt.name}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {prompt.prompt}
          </p>

          <div className="mt-4">
            <UpdateVote promptId={prompt._id} initialVotes={prompt.votes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptDetails;
