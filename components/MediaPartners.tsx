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
            className="h-52 w-56 rounded-md object-contain sm:w-[350px]"
            width={350}
            height={210}
            quality={100}
          />
        </div>
      ))}
    </section>
  );
};

export default MediaPartners;
