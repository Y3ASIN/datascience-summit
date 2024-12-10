import React from "react";

import GuestCard from "./GuestCard";
import { guests } from "@/constants";

const GuestList: React.FC = () => {
  const chairman = guests.filter((guest) => guest.category === "chairman");
  const chiefGuests = guests.filter((guest) => guest.category === "chief");
  const specialGuests = guests.filter((guest) => guest.category === "special");
  // const regularGuests = guests.filter((guest) => guest.category === "guest");

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">Honour of Guest</h2>
      <div className="mb-3 flex justify-center gap-4">
        {chairman.map((guest) => (
          <GuestCard key={guest.name} guest={guest} />
        ))}
      </div>
      <h2 className="mb-4 text-2xl font-bold">Chief Guest</h2>
      <div className="flex flex-wrap gap-4">
        {chiefGuests.map((guest) => (
          <GuestCard key={guest.name} guest={guest} />
        ))}
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-bold">Special Guests</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {specialGuests.map((guest) => (
          <GuestCard key={guest.name} guest={guest} />
        ))}
      </div>

      {/* <h2 className="mb-4 mt-8 text-2xl font-bold">Guests</h2>
      <div className="flex flex-wrap gap-4">
        {regularGuests.map((guest) => (
          <GuestCard key={guest.name} guest={guest} />
        ))}
      </div> */}
    </div>
  );
};

export default GuestList;
