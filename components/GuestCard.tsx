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
    <div>
      <Image src={img} width={10} height={10} alt="image" />
      <h3> {name}</h3>
      <p>{designation}</p>
      <p>{organization}</p>
    </div>
  );
};

export default GuestCard;
