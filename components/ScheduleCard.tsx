import React from "react";

import { Event } from "../constants/types";

interface EventCardProps {
  event: Event;
}

const ScheduleCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, description, time, date, location } = event;

  return (
    <section className="flex min-w-full flex-col space-x-0 space-y-3 rounded-md bg-white px-4 py-4 align-middle sm:flex-row sm:space-x-4 sm:space-y-0">
      <div className="flex w-full flex-col items-start justify-center sm:w-1/3">
        <div className="group mt-2 flex flex-col justify-start">
          <h1 className="mb-2 font-poppins text-xl font-bold sm:text-2xl">
            {title}
          </h1>
          <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-300 group-hover:w-20 sm:h-1 sm:w-20 group-hover:sm:w-40"></div>
        </div>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>

      <div className="rounded-sm border border-slate-400 sm:border-r-2"></div>

      <div className="flex flex-col items-start justify-center space-y-1 sm:space-y-3">
        <h2 className="text-md font-bold sm:text-xl">
          🕒 Time : <span className="text-primary">{time}</span>
        </h2>
        <h2 className="text-md sm:text-xl">
          📅 Date : <span className="text-primary">{date}</span>{" "}
        </h2>
        <h2 className="text-md sm:text-xl">
          📍 Location : <span>{location}</span>{" "}
        </h2>
      </div>
    </section>
  );
};

export default ScheduleCard;
