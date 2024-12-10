'use client';

import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaThumbsUp, FaCheckCircle } from 'react-icons/fa';

interface UpdateVoteProps {
    promptId: string;
    initialVotes: number;
}

const UpdateVote: React.FC<UpdateVoteProps> = ({ promptId, initialVotes }) => {
    const [votes, setVotes] = useState(initialVotes);
    const [voted, setVoted] = useState(() => {
        const votedPrompts = Cookies.get('votedPrompts');
        return votedPrompts ? JSON.parse(votedPrompts).includes(promptId) : false;
    });

    const handleVote = async () => {
        if (voted) {
            toast.error("You have already voted for this prompt.");
            return;
        }

        try {
            const response = await axios.put('/api/prompt-entries/vote', { promptId });
            setVotes(response.data.votes);

            const votedPrompts = Cookies.get('votedPrompts');
            const updatedVotedPrompts = votedPrompts
                ? [...JSON.parse(votedPrompts), promptId]
                : [promptId];
            Cookies.set('votedPrompts', JSON.stringify(updatedVotedPrompts), { expires: 365 });
            setVoted(true);
            toast.success("Vote successfully registered! Thanks for your vote.");
        } catch (error: any) {
            console.error('Error updating vote:', error.response?.data?.error || error.message);
            alert(error.response?.data?.error || 'An error occurred while updating votes.');
        }
    };

    return (
        <div className="text-center">
            <ToastContainer />
            {/* Votes Display */}
            <p className="text-xl font-medium text-gray-700 mb-4 flex items-center justify-center">
                <span
                    className="font-bold text-gray-900 text-2xl transition-all duration-300 transform"
                    key={votes}
                >
                    {votes}
                </span>
                <span className="ml-2 text-sm text-gray-500">votes</span>
            </p>

            {/* Vote Button */}
            <div className="flex justify-center">
                <button
                    className={`px-6 py-3 flex items-center gap-2 ${voted
                        ? 'bg-green-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 active:scale-95'
                        } text-white font-semibold rounded-lg shadow-md transition-transform duration-300 ease-in-out`}
                    onClick={handleVote}
                    disabled={voted}
                    aria-label={voted ? 'Already Voted' : 'Vote for this prompt'}
                >
                    {voted ? (
                        <FaCheckCircle className="text-white text-lg" />
                    ) : (
                        <FaThumbsUp className="text-white text-lg" />
                    )}
                    {voted ? 'Voted' : 'Vote'}
                </button>
            </div>
        </div>
    );
};

export default UpdateVote;
