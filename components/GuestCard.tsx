import React from "react";

interface Props {
  img: String;
  name: String;
  designation: String;
  organization: String;
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
