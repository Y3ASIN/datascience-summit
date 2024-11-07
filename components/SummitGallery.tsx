"use client";

import React from "react";
import Image from "next/image";

import { summits } from "@/constants";
import TitleBar from "./Titlebar";

// Lightbox component to display selected image
// const Lightbox: React.FC<{ image: string; onClose: () => void }> = ({
//   image,
//   onClose,
// }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//       <Image
//         src={image}
//         alt="Lightbox"
//         className="max-h-full max-w-full"
//         onClick={onClose}
//         width={100}
//         height={100}
//       />
//       <button onClick={onClose} className="absolute right-4 top-4 text-white">
//         ✖
//       </button>
//     </div>
//   );
// };

const SummitGallery: React.FC = () => {

  return (
    <section className="mx-2 mt-10 max-w-full">
      <TitleBar title="Previous Summits" subText="text-3xl" />

      <div className="flex flex-col gap-8">
        {summits.map((summit) => (
          <div key={summit.id} className="w-full space-y-4">
            <h2 className="text-center text-2xl font-semibold">
              {summit.title}
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 p-2">
              {summit.images.map((image, index) => (
                <Image
                  width={100}
                  height={100}
                  key={index}
                  src={image}
                  alt={`${summit.title} - ${index + 1}`}
                  className="h-80 w-full transform cursor-pointer rounded-lg object-contain shadow-md transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummitGallery;
