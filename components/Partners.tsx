import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <section className="mb-10 flex flex-col items-center justify-center gap-3 px-5 sm:flex-row">
      <Image
        src="/assets/DIU Logo.svg"
        alt="diu-logo"
        className="w-56 sm:w-[300px]"
        width={500}
        height={400}
      />
      <Image
        src="/assets/ds logo.png"
        alt="ds-logo"
        className="w-56 sm:w-[300px]"
        width={500}
        height={400}
      />
    </section>
  );
};

export default Partners;
