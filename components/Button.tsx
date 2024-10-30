import React from "react";

interface GradientButtonProps {
  text: string;
  //   onClick: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text }) => {
  return (
    <button
      //   onClick={onClick}
      className="transform rounded-[20px] px-8 py-4 text-lg font-bold text-white transition duration-300 ease-in-out hover:scale-105"
      style={{
        background: "linear-gradient(90deg, #00dcf0, #81e496, #63ded6)",
      }}
    >
      {text}
    </button>
  );
};

export default GradientButton;
