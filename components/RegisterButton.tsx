import React from "react";
import Image from "next/image";

import { formLink } from "@/constants/types";

interface Links {
  links: formLink;
}

const RegisterButton: React.FC<Links> = ({ links }) => {
  const { title, link } = links;

  return (
    <div className="flex flex-col rounded-md bg-white px-4 py-3 font-poppins shadow-xl">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="my-2 border" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-row items-center justify-center gap-2 rounded-md border bg-blue-800 p-2 font-semibold text-white transition-all duration-150 hover:bg-blue-500 hover:text-gray-200"
      >
        Register Here{" "}
        <Image
          src="/icons/rightArrow.svg"
          alt="right arrow"
          width={25}
          height={25}
        />{" "}
      </a>
    </div>
  );
};

export default RegisterButton;
