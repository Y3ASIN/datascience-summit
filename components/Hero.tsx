import React from "react";
import Image from "next/image";

import Countdown from "./Countdown";

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage }) => {
  return (
    <section className="relative">
      <div className="relative mb-0 flex h-[450px] max-w-full items-center justify-center">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={80}
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            Join Us at the 4<sup>th</sup> <br className="block" />
            DIU Data Science Summit
          </h1>
          <h3 className="flex w-3/5 flex-col items-center rounded-md bg-gray-600 bg-opacity-60 px-2 py-2 text-center text-[10px] font-bold text-blue-300 sm:flex-row sm:text-xl">
            December 11, 2024 <span className="hidden sm:block"> • </span>
            <br className="block sm:hidden" /> Daffodil Smart City, Ashulia
          </h3>
        </div>
      </div>

      <Countdown targetDate="2024-12-11" />
    </section>
  );
};

export default HeroSection;
