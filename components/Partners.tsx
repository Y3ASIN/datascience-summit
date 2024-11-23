import Image from "next/image";

import { partners } from "@/constants";

const Partners: React.FC = () => {
  return (
    <section className="mx-auto mb-10 flex w-full flex-row items-center justify-start gap-3 space-x-5 overflow-x-auto px-5 pl-5 pr-5 sm:max-w-7xl sm:flex-row">
      {partners.map((partner) => (
        <Image
          key={partner.name}
          src={partner.image}
          alt={partner.name}
          className="h-auto w-56 sm:w-[300px]"
          width={500}
          height={400}
          quality={100}
        />
      ))}
    </section>
  );
};

export default Partners;
