'use client';
import React, { useEffect, useState } from 'react';
import { FaCrown, FaEnvelope, FaTrophy } from 'react-icons/fa';

interface LeaderboardEntry {
    name: string;
    email: string;
    f1Score: number;
}

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch('/api/leaderboard');
                if (!response.ok) throw new Error('Failed to fetch leaderboard');
                const data = await response.json();
                setLeaderboard(data.leaderboard);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    const getRankBadge = (rank: number) => {
        if (rank === 0)
            return <FaCrown className="text-yellow-500 text-2xl md:text-3xl mx-auto animate-bounce" />;
        if (rank === 1)
            return <FaTrophy className="text-gray-500 text-2xl md:text-3xl mx-auto  animate-pulse" />;
        if (rank === 2)
            return <FaTrophy className="text-amber-700 text-2xl md:text-3xl mx-auto" />;
        return (
            <span className="text-lg md:text-xl font-semibold text-gray-700 mx-auto">
                {rank + 1}
            </span>
        );
    };

    if (loading)
        return <div className="text-center h-screen text-xl md:text-2xl font-semibold mt-10">Loading...</div>;
    if (error)
        return (
            <div className="text-center text-xl md:text-2xl font-semibold text-red-500 mt-10">
                Error: {error}
            </div>
        );

    return (
        <div className="max-w-6xl mx-auto mt-12 p-6 h-screen shadow-lg rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
                Leaderboard
            </h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
                            <th className="border px-4 md:px-6 py-3 text-base md:text-lg font-bold tracking-wider">
                                Rank
                            </th>
                            <th className="border px-4 md:px-6 py-3 text-base md:text-lg font-bold tracking-wider">
                                Name
                            </th>
                            <th className="border px-4 md:px-6 py-3 text-base md:text-lg font-bold tracking-wider">
                                Email
                            </th>
                            <th className="border px-4 md:px-6 py-3 text-base md:text-lg font-bold tracking-wider">
                                F1 Score
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((entry, index) => (
                            <tr
                                key={entry.email}
                                className={`text-center text-gray-700 hover:scale-[1.02] transform transition ${index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'
                                    }`}
                            >
                                <td className="border px-4 md:px-6 py-4 flex justify-center items-center">
                                    {getRankBadge(index)}
                                </td>
                                <td className="border px-4 md:px-6 py-4 text-sm md:text-base text-center">
                                    {entry.name}
                                </td>
                                <td className="border px-4 md:px-6 py-4 text-sm md:text-base text-center text-gray-600">
                                    {entry.email}
                                </td>
                                <td className="border px-4 md:px-6 py-4 text-lg md:text-xl font-bold text-indigo-700 text-center">
                                    {entry.f1Score}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Leaderboard;
