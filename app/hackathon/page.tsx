import Image from "next/image";
import React from "react";
import promptIMG from "@/public/prompt.jpg";
import datathonIMG from "@/public/datahackathon.jpg";

const Submit = () => {
  return (
    <section className="flex min-h-[84dvh] items-center justify-center">
      <div className="rounded-sm bg-gray-100 p-7 py-10">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Competition
        </h1>
        <p className="mx-auto max-w-3xl text-pretty px-2 text-center text-lg text-gray-700">
          Join us for an exciting hackathon where creativity meets technology!
          Collaborate, innovate, and build solutions to real-world challenges
          while connecting with like-minded individuals. Are you ready to make
          an impact?
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href="/hackathon/promptcraft"
            className="max-w-sm transform overflow-hidden rounded bg-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-48 w-full">
              <Image
                className="object-cover"
                src={promptIMG}
                alt="PromptCraft Image"
                layout="fill"
              />
            </div>
            <div className="px-6 py-4">
              <div className="mb-2 text-center text-xl font-bold">
                PromptCraft
              </div>
              <p className="text-center text-gray-600">
                Join the ultimate platform to craft and share creative AI
                prompts.
              </p>
            </div>
          </a>

          <a
            href="/hackathon/data-hackathon"
            className="max-w-sm transform overflow-hidden rounded bg-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-48 w-full">
              <Image
                className="object-cover"
                src={datathonIMG}
                alt="Data Hackathon Image"
                layout="fill"
              />
            </div>
            <div className="px-6 py-4">
              <div className="mb-2 text-center text-xl font-bold">
                Data Hackathon
              </div>
              <p className="text-center text-gray-600">
                Compete in solving real-world data challenges with innovative
                solutions.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Submit;
