import React from "react";

interface HeroSectionProps {
  subTitle: string;
  backgroundImage: string; // URL of the background image
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subTitle,
  backgroundImage,
}) => {
  return (
    <div
      className="relative w-full h-dvh flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="space-y-2 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="relative text-white text-3xl sm:text-5xl md:text-7xl font-bold text-center drop-shadow-lg">
          Join Us at 4<sup>th</sup> <br className="block" />
          DIU Data Science Summit
        </h1>
        <h3 className="relative w-3/5 text-blue-300 bg-gray-600 bg-opacity-60 font-bold text-lg sm:text-xl px-1 py-2 rounded-md text-center">
          {subTitle}
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
