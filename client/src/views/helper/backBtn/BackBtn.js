import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
export const BackBtn = () => {
  const history = useHistory();
  return (
    <p
      onClick={() => {
        history.goBack();
      }}
      className="text-blue-700 font-bold text-3xl m-3 cursor-pointer"
    >
      <FaArrowAltCircleLeft />
    </p>
  );
};
