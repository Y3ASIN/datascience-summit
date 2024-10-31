import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  name: string;
  designation: string;
  organization: string;
}

const GuestCard: React.FC<Props> = ({
  name,
  img,
  designation,
  organization,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
      <div className="flex justify-center mb-4">
        <Image 
          src={img} 
          width={80} 
          height={80} 
          alt="profile image" 
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{designation}</p>
      <p className="text-sm text-gray-500 italic">{organization}</p>
    </div>
  );
};

export default GuestCard;
