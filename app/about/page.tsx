import GuestCard from "@/components/GuestCard";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="mx-8 mt-10 h-dvh max-w-96 sm:mx-auto sm:max-w-7xl">
      <h1 className="mb-5 text-center text-4xl font-bold text-text">About</h1>

      <p className="text-start">
        The world is becoming increasingly data-driven, and Daffodil
        International University&#39;s Department of Software Engineering hopes
        to help pave the way for a smart, data-driven Bangladesh. To achieve
        this goal, we host an annual Data Science Summit at which we invite
        thought leaders and industry experts from a wide range of disciplines to
        participate in stimulating discussions and exchange novel viewpoints.
      </p>

      <div className="flex flex-wrap">
        <GuestCard name='sabur khan' img='random' designation='Chairman of Daffodil' organization='Diu' />
      </div>
    </section>
  );
};

export default About;
