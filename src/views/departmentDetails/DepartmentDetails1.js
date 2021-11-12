import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios"
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
import {setBranchNotesAction} from  "../../redux/actions/branchNotes.action"
//redux actions

//components
import { SearchNavbar } from "./SearchNavbar";
import { ShowFiles } from "./ShowFiles";
//components

//
const arr = [computer, it, ece, ee, mech, civil, pie];
//
export const DepartmentDetails1 = ({ match }) => {
  const { title, idx , sem} = match.params;
  const dispatch = useDispatch();
  useEffect(async () => {
    try{
      // const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/search/branch/notes`,{title})
      const response = await axios.post(`/search/branch/notes`,{title})
      dispatch(setBranchNotesAction(response.data))
    }catch(err){
      console.log("err in notes branch",err)
    }
    dispatch(setBranchAction(title.toLowerCase()))
  }, []);
  return (
    <>
      <div className="pt-3 custom-bg">
        <SearchNavbar />
      </div>
      <div className="px-14 pt-5 custom-bg">
        <img src={arr[idx]} className="w-full rounded-md shadow-lg" />
        <p className="text-3xl custom-font font-semibold mt-3">{title} / {sem} Semester</p>
        <div className="w-full my-2 border"></div>
        <ShowFiles sem={sem} />
      </div>
    </>
  );
};
