import React from "react";

import { featureData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  date,
  location,
  tags,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className="flex min-h-[480px] w-full max-w-sm transform flex-col rounded-lg p-8 text-white shadow-xl transition duration-300 hover:scale-105"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <Image
        className="mb-8"
        src="/dss-logo.svg"
        alt="dss-logo"
        width={100}
        height={40}
      />

      <hr className="mb-5" />
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
      <p className="mb-5 text-gray-100">{description}</p>
      <div className="mb-6 flex items-center justify-start space-x-4">
        <div className="flex items-center text-sm text-gray-300">
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 12H8v-2h2v2zm0-4H8V8h2v2zm4 4h-2v-2h2v2zm0-4h-2V8h2v2z" />
          </svg>
          <span>{date}</span>
        </div>
        <div className="ml-4 flex items-center text-sm text-gray-300">
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.05 4.05a7 7 0 1110.9 10.9l-4.95-4.95a1 1 0 00-1.414 0l-4.95 4.95a7 7 0 010-10.9z" />
          </svg>
          <span>{location}</span>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-md bg-gray-800 px-2 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex space-x-4">
        <button className="rounded-lg bg-white px-4 py-2 text-gray-900 hover:bg-gray-300">
          Register Now
        </button>
        <Link
          href="/about"
          className="rounded-lg border border-white bg-transparent px-4 py-2 hover:bg-white hover:text-gray-900"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
