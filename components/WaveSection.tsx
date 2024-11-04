import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  wavePosition?: "top" | "bottom"; // Add position prop
}

const WaveSection: React.FC<Props> = ({
  children,
  wavePosition = "bottom",
}) => {
  return (
    <section className="relative bg-purple-500 py-12 text-white md:py-20">
      {/* Conditional Wave SVG at the top */}
      {wavePosition === "top" && (
        <div className="wave-top">
          <svg
            className="absolute left-0 top-0 h-[50px] w-full md:h-[200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500 200"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,100
                 C 375,200 1125,0 1500,100
                 L 1500,200
                 L 0,200
                 Z"
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
        <div className="wave-bottom">
          <svg
            className="absolute bottom-0 left-0 h-[50px] w-full md:h-[200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500 200"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,100
                 C 375,200 1125,0 1500,100
                 L 1500,200
                 L 0,200
                 Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default WaveSection;
