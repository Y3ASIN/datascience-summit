import React from "react";

interface GradientButtonProps {
  text: string;
  //   onClick: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text }) => {
  return (
    <a
      href="/register"
      //   onClick={onClick}
      className="text-md transform text-center rounded-lg px-3 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-105 sm:rounded-[20px] sm:px-8 sm:py-4 sm:text-center sm:text-lg"
      style={{
        background: "linear-gradient(90deg, #78b2df, #348ed6, #78b2df)",
      }}
    >
      {text}
    </a>
  );
};

export default GradientButton;
