"use client";
import React, { useEffect, useState } from "react";
import { FaCrown, FaTrophy } from "react-icons/fa";

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
        const response = await fetch("/api/leaderboard");
        if (!response.ok) throw new Error("Failed to fetch leaderboard");
        const data = await response.json();
        setLeaderboard(data.leaderboard);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankBadge = (rank: number) => {
    if (rank === 0)
      return (
        <FaCrown className="mx-auto animate-bounce text-2xl text-yellow-500 md:text-3xl" />
      );
    if (rank === 1)
      return (
        <FaTrophy className="mx-auto animate-pulse text-2xl text-gray-500 md:text-3xl" />
      );
    if (rank === 2)
      return (
        <FaTrophy className="mx-auto text-2xl text-amber-700 md:text-3xl" />
      );
    return (
      <span className="mx-auto text-lg font-semibold text-gray-700 md:text-xl">
        {rank + 1}
      </span>
    );
  };

  if (loading)
    return (
      <div className="mt-10 h-screen text-center text-xl font-semibold md:text-2xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="mt-10 text-center text-xl font-semibold text-red-500 md:text-2xl">
        Error: {error}
      </div>
    );

  return (
    <div className="mx-auto mt-12 h-screen max-w-6xl rounded-2xl p-6 shadow-lg">
      <h1 className="mb-8 text-center text-3xl font-extrabold text-gray-800 md:text-4xl">
        Leaderboard
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse overflow-hidden rounded-lg shadow-md">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-white">
              <th className="border px-4 py-3 text-base font-bold tracking-wider md:px-6 md:text-lg">
                Rank
              </th>
              <th className="border px-4 py-3 text-base font-bold tracking-wider md:px-6 md:text-lg">
                Name
              </th>
              <th className="border px-4 py-3 text-base font-bold tracking-wider md:px-6 md:text-lg">
                Email
              </th>
              <th className="border px-4 py-3 text-base font-bold tracking-wider md:px-6 md:text-lg">
                F1 Score
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr
                key={entry.email}
                className={`transform text-center text-gray-700 transition hover:scale-[1.02] ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
                }`}
              >
                <td className="flex items-center justify-center border px-4 py-4 md:px-6">
                  {getRankBadge(index)}
                </td>
                <td className="border px-4 py-4 text-center text-sm md:px-6 md:text-base">
                  {entry.name}
                </td>
                <td className="border px-4 py-4 text-center text-sm text-gray-600 md:px-6 md:text-base">
                  {entry.email}
                </td>
                <td className="border px-4 py-4 text-center text-lg font-bold text-indigo-700 md:px-6 md:text-xl">
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
