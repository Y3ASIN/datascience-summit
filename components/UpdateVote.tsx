'use client';

import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import VoteIMG from '/vote.svg'
interface UpdateVoteProps {
    promptId: string;
    initialVotes: number;
}

const UpdateVote: React.FC<UpdateVoteProps> = ({ promptId, initialVotes }) => {
    const [votes, setVotes] = useState(initialVotes);
    const [voted, setVoted] = useState(() => {
        // Check if the user has already voted for this prompt
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
            toast.success("Vote successfully registered! Thanks for the vote")
        } catch (error: any) {
            console.error('Error updating vote:', error.response?.data?.error || error.message);
            alert(error.response?.data?.error || 'An error occurred while updating votes.');
        }
    };

    return (
        <div className="text-center">
            <p className="text-xl font-medium text-gray-700 mb-4">
                Votes: <span className="font-bold text-gray-900">{votes}</span>
            </p>
            <div className='flex flex-row'>
                <button
                    className={`px-6 py-3 ${voted
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                        } text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out`}
                    onClick={handleVote}
                    disabled={voted}
                >
                    {voted ? 'Voted' : 'Vote'}
                </button>
            </div>
        </div>
    );
};

export default UpdateVote;
