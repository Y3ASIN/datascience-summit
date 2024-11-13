import React from "react";

// import GuestCard from "@/components/GuestCard";
// import TitleBar from "@/components/Titlebar";
// import { guests } from "@/constants";
// import Instruction from "@/components/RegistrationInstruction";
import EventDetails from "@/components/EventDetails";
import { summitEventsData } from "@/constants";

const About: React.FC = () => {
  return (
    <section className="mp-20 mx-6 mt-10 min-h-screen max-w-96 sm:mx-auto sm:max-w-7xl">

      <EventDetails sections={summitEventsData} />
    </section>
  );
};

export default About;
