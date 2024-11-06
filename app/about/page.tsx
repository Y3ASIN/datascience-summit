import React from "react";

import GuestCard from "@/components/GuestCard";
import TitleBar from "@/components/Titlebar";
import { guests } from "@/constants";
import Instruction from "@/components/RegistrationInstruction";

const About: React.FC = () => {
  return (
    <section className="mp-20 mx-6 mt-10 min-h-screen max-w-96 sm:mx-auto sm:max-w-7xl">
      <TitleBar title="About" />

      <p className="text-start">
        The world is becoming increasingly data-driven, and Daffodil
        International University&#39;s Department of Software Engineering hopes
        to help pave the way for a smart, data-driven Bangladesh. To achieve
        this goal, we host an annual Data Science Summit at which we invite
        thought leaders and industry experts from a wide range of disciplines to
        participate in stimulating discussions and exchange novel viewpoints.
      </p>

      <TitleBar title="Our Honorable Guests" subText="text-2xl" />

      <div className="flex flex-wrap justify-center gap-6 rounded-lg bg-gray-100 p-8 shadow-lg">
        {/* Guest Lists */}
        {guests.map((guest, index) => (
          <GuestCard key={index} guest={guest} isFirst={index === 0} />
        ))}
      </div>

      <div className="p-5">
        <TitleBar
          title="Get Set to Compete, Learn, and Win Big!"
          subText="text-3xl"
        />
        <Instruction />
      </div>
    </section>
  );
};

export default About;
