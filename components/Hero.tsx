import React from "react";
import Countdown from "./Countdown";

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage }) => {
  return (
    <section className="relative">
      <div
        className="relative mb-5 flex h-dvh w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6 lg:px-8">
          <h1 className="relative z-10 text-center text-3xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            Join Us at 4<sup>th</sup> <br className="block" />
            DIU Data Science Summit
          </h1>
          <h3 className="relative flex w-3/5 flex-col rounded-md bg-gray-600 bg-opacity-60 px-1 py-2 text-center text-[10px] font-bold text-blue-300 sm:flex-row sm:text-xl">
            December 20, 2024 <span className="hidden sm:block"> • </span>{" "}
            <br className="block sm:hidden" />
            Daffodil Smart City, Ashulia
          </h3>
        </div>
      </div>

      <Countdown targetDate="2024-12-07" />
    </section>
  );
};

export default HeroSection;
