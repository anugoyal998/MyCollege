import React from "react";
import { FlexItemsCenter } from "../../styles/global";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

export const Team = () => {
  return (
    <div
      className="grid px-5 pt-5 custom-bg"
      style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
    >
      <div className="mt-5">
        <p className="text-3xl font-bold">Meet our Developers</p>
        <p className="opacity-70">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          culpa cumssitatibus tempora earum?
        </p>
      </div>
        <Card name="Anubhav" role="Full Stack Developer" />
        <Card name="Nicky" role="Frontend Developer" />
    </div>
  );
};

const Card = ({name,role}) => {
  return (
    <div className="m-5 zoom cursor-pointer">
      <div className="bg-white h-72 rounded-md shadow-md">{name}</div>
      <p className="font-semibold">{name}</p>
      <p className="text-blue-700">{role}</p>
      <FlexItemsCenter>
          <AiFillLinkedin className="mr-3 text-2xl"/>
          <AiFillGithub className="mr-3 text-2xl"/>
      </FlexItemsCenter>
    </div>
  );
};
