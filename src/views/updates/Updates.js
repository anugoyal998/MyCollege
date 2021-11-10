import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../home/Navbar";
import {Footer} from '../footer/Footer'
import _ from "lodash";
import { Loading } from "../helper/loading/Loading";
export const Updates = () => {
  const update = useSelector((state) => state.updateReducer.updates);
  // console.log(update);
  if(update.length>0){
    return (
        <div style={{ background: "#F9FAFB" }} className="pt-3">
          <Navbar />
          <div className="px-2 lg:px-14 mt-4">
            <p className="font-bold text-xl mb-2">Recent Updates from NIT KKR</p>
            {update &&
              update.map((e, key) => {
                return <MyCard e={e} key={key} />;
              })}
          </div>
          <Footer/>
        </div>
      );
  }else{
      return(
          <div style={{ background: "#F9FAFB" }} className="pt-3 h-screen">
              <Navbar/>
              <Loading/>
          </div>
      )
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
        <p className="zoom-sm bg-primary text-white p-2 text-lg rounded-lg">{s}</p>
      </a>
    </div>
  );
};
