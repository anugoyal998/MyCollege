import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../home/Navbar";
import { Footer } from "../footer/Footer";
import _ from "lodash";
import { Loading } from "../../views/helper/loading/Loading";
export const Updates = () => {
  const update = useSelector((state) => state.updateReducer.updates);
  if (update.length > 0) {
    return (
      <>
        <div className="custom-bg pt-3">
          <Navbar popup={true} />
          <div className="px-2">
            <p className="font-semibold text-lg my-2">
              Recent Updates from NIT KKR
            </p>
            {update &&
              update.map((e, key) => {
                return <MyCard e={e} key={key} />;
              })}
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <div className="custom-bg pt-3 h-screen">
        <Navbar popup={true} />
        <Loading />
      </div>
    );
  }
};

const MyCard = (props) => {
  const { e } = props;
  let s = e;
  let x = s.substr(0, 5);
  if (x === "https") {
    s = s.substr(26);
  } else {
    s = s.substr(25);
  }
  s = s.substr(0, s.length - 4);
  return (
    <div className="my-2">
      <a href={e} target="_blank">
        <p className="bg-primary text-white p-2 rounded-lg">{s}</p>
      </a>
    </div>
  );
};
