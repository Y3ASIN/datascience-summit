import React from "react";
import Image from "next/image";

import { formLink } from "@/constants/types";

interface Links {
  links: formLink;
}

const RegisterButton: React.FC<Links> = ({ links }) => {
  const { title, link, image, instructions } = links;

  return (
    <section className="flex w-full max-w-prose flex-col items-center rounded-md bg-white px-4 py-3 font-poppins shadow-xl sm:h-[400px] sm:w-[380px]">
      <div className="w-full">
        <Image
          src={image}
          alt="banner"
          width={500}
          height={350}
          className="rounded-md"
        />
        <h1 className="mt-2 text-center text-xl font-semibold sm:text-2xl">
          {title}
        </h1>
        <div className="my-2 w-full border" />

        {instructions && (
          <ul className="mt-4 list-inside list-disc text-pretty text-xs text-gray-700 sm:text-[15px] sm:leading-8">
            {instructions.map((instruction, idx) => (
              <li key={idx}>{instruction}</li>
            ))}
          </ul>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-md border bg-blue-800 px-4 py-2 font-semibold text-white transition-all duration-150 hover:bg-blue-500 hover:text-gray-200"
        >
          Register Here
          <Image
            src="/icons/rightArrow.svg"
            alt="right arrow"
            width={20}
            height={20}
          />
        </a>
      </div>
    </section>
  );
};

export default RegisterButton;
