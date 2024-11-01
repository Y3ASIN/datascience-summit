// components/EventCard.tsx
import React from "react";
import Image from "next/image";

import { Event } from "../constants/types";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="m-4 flex max-w-full flex-col overflow-hidden rounded-lg bg-white p-4 shadow-lg sm:max-w-sm">
      <Image
        className="h-48 w-full object-cover sm:h-64"
        src={event.image}
        alt={event.title}
        width={20}
        height={20}
      />
      <div className="px-4 py-4">
        <h2 className="mb-2 text-center text-lg font-bold sm:text-left sm:text-xl">
          {event.title}
        </h2>
        <p className="text-balance text-sm text-gray-700 sm:text-base">
          {event.description}
        </p>
        <div className="mt-4 text-center sm:text-left">
          <p className="mb-1 text-lg font-bold text-blue-600 sm:text-xl">
            🕒 {event.time}
          </p>
          <p className="text-xs text-gray-600 sm:text-sm">📅 {event.date}</p>
          <p className="text-xs text-gray-600 sm:text-sm">
            📍 {event.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
