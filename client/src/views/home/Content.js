import React from "react";
import { LongButton } from "../../styles/global";
import {Link} from 'react-router-dom'

export const Content = () => {
  return (
    <div className="flex flex-col items-center ">
        <div className="my-pattern absolute right-0 z-0 hidden lg:block" style={{width: '17vw', height: '45vh'}} ></div>
      <p className="mt-40 z-10">
        <span
          className="text-black font-extrabold text-3xl lg:text-4xl custom-font"
        >
          College materials and updates, {" "}
        </span>{" "}
        <span
          className="text-blue-700 font-extrabold text-3xl lg:text-4xl custom-font"
        >
          MyCollege
        </span>
      </p>
      <div className="flex justify-center xl:px-72 lg:px-64 px-60 my-2">
        <p className="text-gray-400 text-center lg:text-base text-sm">
          Lorem iollitia culpa accusantium nobis earum, repellendus dolor cum explicabo.
        </p>
      </div>
      <div className="flex lg:mt-3 mt-1">
        <Link to="/study-corner">
        <LongButton className="bg-blue-700 text-white mx-3">
          Study Corner
        </LongButton>
        </Link>
        <LongButton className="text-blue-700 bg-white mx-3">
          PYQs
        </LongButton>
      </div>
    </div>
  );
};
