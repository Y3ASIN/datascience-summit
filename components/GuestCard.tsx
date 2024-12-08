import Image from "next/image";
import React from "react";

import { Guest } from "@/constants/types";

interface Props {
  guest: Guest;
}

const GuestCard: React.FC<Props> = ({ guest }) => {
  const { name, img, designation, organization } = guest;

  return (
    <div className="h-94 w-80 rounded-lg bg-white p-6 text-center shadow-md">
      <div className="mb-4 flex justify-center">
        <Image
          src={img}
          width={330}
          height={350}
          alt={name}
          className="object-fit h-64 w-64 rounded-sm"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{designation}</p>
        <p className="text-sm italic text-gray-500">{organization}</p>
        {/* {category === "chief" && (
          <p className="font-bold text-red-800">Chief Guest</p>
        )}
        {category === "special" && (
          <p className="font-bold text-blue-500">Special Guest</p>
        )}
        {category === "guest" && (
          <p className="font-bold text-green-500">Guest</p>
        )} */}
      </div>
    </div>
  );
};

export default GuestCard;
