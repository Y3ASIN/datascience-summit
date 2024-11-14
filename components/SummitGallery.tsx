"use client";

import React from "react";
import Image from "next/image";

import { summits } from "@/constants";
import TitleBar from "./Titlebar";

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
            <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-3">
              {summit.images.map((image, index) => (
                <Image
                  width={400}
                  height={300}
                  key={index}
                  src={image}
                  quality={100}
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
