import Image from 'next/image';
import React from 'react';
import promptIMG from '@/public/prompt.jpg';
import datathonIMG from '@/public/datahackathon.jpg'

const Submit = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Hackathon</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Join us for an exciting hackathon where creativity meets technology! Collaborate, innovate, and build solutions to real-world challenges while connecting with like-minded individuals. Are you ready to make an impact?
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-4 justify-center items-center">
        <a href="/hackathon/promptcraft" className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-48">
            <Image className="object-cover" src={promptIMG} alt="PromptCraft Image" layout="fill" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">PromptCraft</div>
            <p className="text-gray-600 text-center">Join the ultimate platform to craft and share creative AI prompts.</p>
          </div>
        </a>

        <a href="/hackathon/data-hackathon" className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-48">
            <Image className="object-cover" src={datathonIMG} alt="Data Hackathon Image" layout="fill" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Data Hackathon</div>
            <p className="text-gray-600 text-center">Compete in solving real-world data challenges with innovative solutions.</p>
          </div>
        </a>
      </div>
    </div >
  );
};

export default Submit;
