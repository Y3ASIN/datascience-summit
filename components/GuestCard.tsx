import Image from "next/image";
import React from "react";

import { Guest } from "@/constants/types";

interface Props {
  guest: Guest;
  isFirst: boolean;
}

const GuestCard: React.FC<Props> = ({ guest, isFirst }) => {
  const { name, img, designation, organization } = guest;

  return (
    <div
      className={`max-w-xs rounded-lg bg-white p-6 text-center shadow-md ${isFirst ? "flex flex-row items-center space-x-4" : ""}`}
    >
      <div className="mb-4 flex justify-center">
        <Image
          src={img}
          width={80}
          height={80}
          alt="profile image"
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{designation}</p>
        <p className="text-sm italic text-gray-500">{organization}</p>
      </div>
    </div>
  );
};

export default GuestCard;
