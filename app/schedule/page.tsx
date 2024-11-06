import React from "react";

import { events } from "@/constants";
import ScheduleCard from "@/components/ScheduleCard";
import TitleBar from "@/components/Titlebar";

const Schedule: React.FC = () => {
  return (
    <section className="mx-8 mt-10 flex min-h-screen max-w-full flex-col items-center rounded-sm justify-center gap-4 bg-gray-100 p-4 sm:mx-auto sm:max-w-7xl sm:flex-row sm:flex-wrap sm:px-8">
      {/* <h1 className="mb-6 w-full text-center text-2xl font-bold sm:text-left">
        Schedule
      </h1> */}
      <TitleBar title="Schedule"/>

      {events.map((event) => (
        <ScheduleCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default Schedule;
