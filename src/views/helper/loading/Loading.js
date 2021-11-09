import React from "react";

export const Loading = () => {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-10"
      style={{
        background: "rgba(196, 196, 196, 0.3)",
        transition: "all .3s ease",
      }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
