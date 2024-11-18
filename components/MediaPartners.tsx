import Image from "next/image";
import React from "react";

import { mediaPartners } from "@/constants";

const MediaPartners: React.FC = () => {
  return (
    <section className="mb-10 flex flex-col items-center justify-center gap-3 px-5 sm:flex-row">
      {mediaPartners.map((mPartner) => (
        <div
          key={mPartner.name}
          className="flex items-center justify-center overflow-hidden"
        >
          <Image
            src={mPartner.image}
            alt={mPartner.name}
            className="h-auto w-56 rounded-md object-contain sm:w-[300px]"
            width={500}
            height={400}
            quality={100}
          />
        </div>
      ))}
    </section>
  );
};

export default MediaPartners;
