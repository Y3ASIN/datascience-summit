import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-8 w-full bg-green-950 py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:flex-row sm:items-center sm:justify-center sm:px-2 sm:align-middle">
        <p className="text-center text-sm sm:text-left sm:text-base">
          Copyright &copy; 2024
        </p>
        <span className="hidden sm:inline-block sm:px-2 sm:text-2xl">•</span>
        <a
          href="https://dslab.daffodilvarsity.edu.bd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm text-teal-500 hover:text-teal-300 sm:text-left"
        >
          Data Science Lab, Daffodil International University
        </a>
      </div>
    </footer>
  );
};

export default Footer;
