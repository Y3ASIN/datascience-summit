import React from "react";

interface WaveProps {
  position?: "top" | "bottom";
  color?: string;
}

const Wave: React.FC<WaveProps> = ({
  position = "bottom",
  color = "white",
}) => {
  return (
    <div className={`relative w-full overflow-hidden`}>
      <svg
        className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 h-[100px] w-full md:h-[200px]`}
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
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Wave;
