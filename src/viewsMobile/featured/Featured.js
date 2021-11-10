import React from "react";

export const Featured = () => {
  return (
    <div className="custom-bg text-center" id="featured">
      <p
        className="text-2xl font-extrabold"
        style={{ fontFamily: "Merriweather" }}
      >
        MyCollege Featured
      </p>
      <MyCard title="All Branches Study Material" />
      <MyCard title="All Updates from NIT KKR" />
      <MyCard title="PYQs" />
      <MyCard title="Senior's Guidance" />
    </div>
  );
};

const MyCard = (props) => {
  const { title } = props;
  return (
    <div className="flex p-5">
      <div className="mx-2 pt-2">
        <i className="fas fa-book-open bg-blue-700 text-white p-2 rounded-md"></i>
      </div>
      <div className="text-left mx-2">
        <p className="text font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam
          q! Iusto, pariatur exercitationem.
        </p>
      </div>
    </div>
  );
};
