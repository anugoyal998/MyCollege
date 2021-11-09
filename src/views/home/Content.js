import React from "react";
import { LongButton } from "../../styles/global";

export const Content = () => {
  return (
    <div className="flex flex-col items-center ">
        <div className="my-pattern absolute right-0 z-0 hidden lg:block" style={{width: '17vw', height: '45vh'}} ></div>
      <p className="mt-40 z-10">
        <span
          style={{ fontFamily: "Merriweather" }}
          className="text-black font-extrabold text-3xl lg:text-4xl"
        >
          Your one Night friend{" "}
        </span>{" "}
        <span
          style={{ fontFamily: "Merriweather" }}
          className="text-blue-700 font-extrabold text-3xl lg:text-4xl"
        >
          Before the Exam
        </span>
      </p>
      <div className="flex justify-center xl:px-72 lg:px-64 px-60 my-2">
        <p className="text-gray-400 text-center lg:text-base text-sm">
          Lorem ipsum dolor r adipisit volxime iure reiciendis, illo nam. Laudantium.
        </p>
      </div>
      <div className="flex lg:mt-3 mt-1">
        <LongButton className="bg-blue-700 text-white mx-3">
          Get Started
        </LongButton>
        <LongButton className="text-blue-700 bg-white mx-3">
          Get Started
        </LongButton>
      </div>
    </div>
  );
};
