import React, { useEffect, useState } from "react";
import { Navbar } from "../home/Navbar";
import { Footer } from "../footer/Footer";
import { Loading } from "../../views/helper/loading/Loading";
import axios from "axios"
export const Updates = () => {
    const [update,setUpdate] = useState([])
  useEffect(()=> {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_SERVER_BASE_URL2
        const response = await axios.get(`${url}/get/update/db`) 
        setUpdate(response.data.updates)
      } catch (error) {
        // console.log("error in get db data", error)
      }
    }
    fetchData()
  },[])
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
      <a href={e} target="_blank" rel="noreferrer">
        <p className="bg-primary text-white p-2 rounded-lg">{s}</p>
      </a>
    </div>
  );
};
