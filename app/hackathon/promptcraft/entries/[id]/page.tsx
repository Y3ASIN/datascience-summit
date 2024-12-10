'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import UpdateVote from '@/components/UpdateVote';

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
                console.log('Fetched prompt:', response.data);
                setPrompt(response.data); // Ensure this matches the backend structure
            } catch (error: any) {
                console.error('Error fetching prompt:', error.response?.data?.error || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrompt();
    }, [id]);

    if (loading) {
        return <p className="text-center text-lg font-semibold animate-pulse">Loading...</p>;
    }

    if (!prompt) {
        return <p className="text-center text-lg text-red-500">Entry not found.</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-6">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
            >
                <FaArrowLeft />
                <span>Back</span>
            </button>

            <div className="bg-white rounded-xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row shadow-3xl">
                {/* Left Side: Image */}
                <div className="md:w-1/2 flex items-center justify-center p-4 bg-gray-200">
                    <img
                        src={prompt.imageUrl}
                        alt={prompt.name}
                        className="w-full max-w-full rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-100">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{prompt.name}</h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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
