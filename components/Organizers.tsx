import Image from "next/image";
import React from "react";

import { organizers } from "@/constants";

const Organizers: React.FC = () => {
  return (
    <section className="mb-10 flex flex-col items-center justify-center gap-3 px-5 sm:flex-row">
      {organizers.map((organizer) => (
        <Image
          key={organizer.name}
          src={organizer.image}
          alt={organizer.name}
          className="h-28 w-40 sm:h-auto sm:w-[300px]"
          width={300}
          height={200}
        />
      ))}
    </section>
  );
};

export default Organizers;
