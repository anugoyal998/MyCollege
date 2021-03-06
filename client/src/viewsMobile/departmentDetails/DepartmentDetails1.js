import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
//images
import computer from "../../img/computer-lg.jpg";
import it from "../../img/it-lg.jpg";
import ece from "../../img/ece-lg.jpg";
import ee from "../../img/ee-lg.jpg";
import mech from "../../img/mech-lg.jpg";
import civil from "../../img/civil-lg.jpg";
import pie from "../../img/pie-lg.jpg";
//images
//redux actions
import { setBranchAction } from "../../redux/actions/branch.action";
import { setBranchNotesAction } from "../../redux/actions/branchNotes.action";
import { Navbar } from "../home/Navbar";
//redux actions
import { FaSearch } from "react-icons/fa";
import { ShowFiles } from "./ShowFiles";

//
const arr = [computer, it, ece, ee, mech, civil, pie];
//

export const DepartmentDetails1 = ({ match }) => {
  const { title, idx, sem } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
        try{
            const url = process.env.REACT_APP_SERVER_BASE_URL2
          const response = await axios.post(`${url}/search/branch/notes`,{title})
          dispatch(setBranchNotesAction(response.data))
        }catch(err){
        //   console.log("err in notes branch",err)
        }
        dispatch(setBranchAction(title.toLowerCase()))
    }
    fetchData();
  }, [dispatch,title]);
  return (
    <>
      <div className="pt-3 custom-bg">
        <Navbar icon={<FaSearch />} drawer={false} modal={true} />
      </div>
      <div className="px-2 pt-5 custom-bg">
        <img src={arr[idx]} className="w-full rounded-md shadow-lg" alt="img" />
        <p className="text-xl custom-font font-semibold mt-3">{title} / {sem} Semester</p>
        <div className="w-full my-2 border"></div>
        <ShowFiles sem={sem} />
      </div>
    </>
  );
};
