import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  wavePosition?: "top" | "bottom";
}

const WaveSection: React.FC<Props> = ({ children, wavePosition = "top" }) => {
  return (
    <section className="relative overflow-hidden bg-purple-600 py-12 text-white md:py-20">
      {/* Conditional Wave SVG at the top */}
      {wavePosition === "top" && (
        <div className="absolute inset-x-0 top-0 -mt-1 overflow-hidden leading-[0]">
          <svg
            className="relative block h-[50px] w-full md:h-[200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500 200"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,100 C 375,200 1125,0 1500,100 L 1500,200 L 0,200 Z"
              fill="white"
            />
          </svg>
        </div>
      )}

      {/* Content of the section */}
      <div className="container mx-auto px-4 text-center md:px-8">
        {children}
      </div>

      {/* Conditional Wave SVG at the bottom */}
      {wavePosition === "bottom" && (
        <div className="absolute inset-x-0 bottom-0 -mb-1 overflow-hidden leading-[0]">
          <svg
            className="relative block h-[50px] w-full md:h-[200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500 200"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,100 C 375,200 1125,0 1500,100 L 1500,200 L 0,200 Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default WaveSection;
