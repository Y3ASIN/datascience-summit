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
  return <div>{name}</div>;
};

export default GuestCard;
