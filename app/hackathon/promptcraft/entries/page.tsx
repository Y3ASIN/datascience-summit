'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface PromptCraft {
    _id: string;
    name: string;
    prompt: string;
    imageUrl: string;
    votes: number;
}

const AllPrompts = () => {
    const [prompts, setPrompts] = useState<PromptCraft[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrompts = async () => {
            try {
                const response = await axios.get('/api/prompt-entries');
                setPrompts(response.data.data);
            } catch (error) {
                console.error('Error fetching prompts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrompts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-medium text-gray-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">All Prompts</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prompts.map((prompt) => (
                    <li
                        key={prompt._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >
                        <Link href={`/hackathon/promptcraft/entries/${prompt._id}`}>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{prompt.name}</h2>
                                <p className="text-gray-600 mb-4">{prompt.prompt}</p>
                                <img
                                    src={prompt.imageUrl}
                                    alt={prompt.name}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-700 font-medium">Votes: {prompt.votes}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPrompts;
