import React from "react";

interface TitleBarProps {
  title: string;
  subText?: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, subText }) => {
  return (
    <div className="my-12 text-center">
      <h1 className={`mb-2 font-bold ${subText ? subText : "text-5xl"}`}>
        {title}
      </h1>
      <div className="mt-2 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      </div>
    </div>
  );
};

export default TitleBar;
