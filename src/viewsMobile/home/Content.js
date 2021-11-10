import React from "react";
import { LongButton, ShortButton } from "../../styles/global";
import { Link } from "react-router-dom";
export const Content = () => {
  return (
    <div className="flex flex-col items-center px-2" style={{ height: "91vh" }}>
      <div className="flex flex-col sm:flex-row pt-32 items-center">
        <p
          style={{ fontFamily: "Merriweather" }}
          className="text-2xl text-black font-extrabold"
        >
          Your one Night friend
        </p>
        <p
          style={{ fontFamily: "Merriweather" }}
          className="text-2xl text-blue-700 font-extrabold"
        >
          &nbsp;Before the Exam
        </p>
      </div>
      <p className="text-sm text-gray-400 text-center px-3">
        Lorem ipsum dolor r adipisit volxime iure reiciendis, illo nam.
        Laudantium.
      </p>
      <div className="flex mt-3 sm:hidden">
        <Link to="/study-corner">
          <ShortButton className="bg-blue-700 text-white mx-2">
            Study Corner
          </ShortButton>
        </Link>
        <ShortButton className="text-blue-700 bg-white mx-2">PYQs</ShortButton>
      </div>
      <div className="hidden sm:flex mt-3">
        <Link to="/study-corner">
          <LongButton className="bg-blue-700 text-white mx-2">
            Study Corner
          </LongButton>
        </Link>
        <LongButton className="text-blue-700 bg-white mx-2">PYQs</LongButton>
      </div>
    </div>
  );
};
