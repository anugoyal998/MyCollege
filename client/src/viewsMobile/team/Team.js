import React from "react";
import { FlexItemsCenter } from "../../styles/global";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 pt-4 text-center">
      <p className="text-xl font-bold">Meet our Developers</p>
      <p className="opacity-70 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. ilus?
      </p>
      <Card name="Anubhav" role="Full Stack Developer" />
        <Card name="Nicky" role="Frontend Developer" />
    </div>
  );
};

const Card = ({name,role}) => {
    return (
      <div className="mt-3 zoom cursor-pointer w-full">
        <div className="bg-white h-72 rounded-md shadow-md">{name}</div>
        <p className="font-semibold">{name}</p>
        <p className="text-blue-700">{role}</p>
        <FlexItemsCenter className="justify-center">
            <AiFillLinkedin className="mr-3 text-2xl"/>
            <AiFillGithub className="mr-3 text-2xl"/>
        </FlexItemsCenter>
      </div>
    );
  };
  