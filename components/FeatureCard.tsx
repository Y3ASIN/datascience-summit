import React from "react";
import Image from "next/image";
import Link from "next/link";

import { EventFeaturing } from "@/constants/types";

interface FeatureCardProps {
  feature: EventFeaturing;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { title, description, date, location, tags, gradientFrom, gradientTo } =
    feature;

  return (
    <div
      className="flex min-h-[480px] w-full max-w-[90%] flex-col rounded-lg p-4 text-white shadow-lg transition duration-300 hover:scale-105 sm:w-[320px] sm:p-6 md:w-[360px]"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <Image
        className="mb-3 sm:mb-5"
        src="/dss-logo.svg"
        alt="dss-logo"
        width={80}
        height={48}
      />
      <hr className="mb-5" />
      <h2 className="mb-2 text-lg font-semibold sm:text-xl">{title}</h2>
      <p className="mb-3 text-sm text-gray-100 sm:text-base">{description}</p>

      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-start sm:space-x-4">
        <div className="flex items-center text-xs text-gray-300 sm:text-sm">
          <svg
            className="mr-1 h-4 w-4 sm:h-5 sm:w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 12H8v-2h2v2zm0-4H8V8h2v2zm4 4h-2v-2h2v2zm0-4h-2V8h2v2z" />
          </svg>
          <span>{date}</span>
        </div>
        <div className="mt-1 flex items-center text-xs text-gray-300 sm:mt-0 sm:text-sm">
          <svg
            className="mr-1 h-4 w-4 sm:h-5 sm:w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.05 4.05a7 7 0 1110.9 10.9l-4.95-4.95a1 1 0 00-1.414 0l-4.95 4.95a7 7 0 010-10.9z" />
          </svg>
          <span>{location}</span>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-1 sm:gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-md bg-gray-800 px-2 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <Link
          href="/register"
          className="rounded-lg bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-300"
        >
          Register Now
        </Link>
        <Link
          href="/about"
          className="rounded-lg border border-white px-3 py-2 text-sm text-white hover:bg-white hover:text-gray-900"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
