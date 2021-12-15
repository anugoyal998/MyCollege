import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { Navbar } from "../home/Navbar";
//redux actions
import {FaSearch} from 'react-icons/fa'
import { ShowFiles } from "./ShowFiles";


//
const arr = [computer, it, ece, ee, mech, civil, pie];
const numberArr = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
//

export const DepartmentDetails = ({match}) => {
    const { title, idx } = match.params;
    const dispatch = useDispatch();
    useEffect(() => {
      async function fetchData() {
        try {
          const url = process.env.REACT_APP_SERVER_BASE_URL2;
          const response = await axios.post(`${url}/search/branch/notes`, {
            title,
          });
          dispatch(setBranchNotesAction(response.data));
        } catch (err) {
          //   console.log("err in notes branch",err)
        }
        dispatch(setBranchAction(title.toLowerCase()));
      }
      fetchData();
    }, [dispatch, title]);
    return (
        <>
        <div className="pt-3 custom-bg">
            <Navbar icon={<FaSearch/>} drawer={false} modal={true} /> 
        </div>
        <div className="px-2 pt-5 custom-bg">
            <img src={arr[idx]} className="w-full rounded-md shadow-lg" alt="img" />
            <p className="text-xl custom-font font-semibold mt-3">
                {title}
            </p>
            <div className="w-full my-2 border"></div>
            <p className="text-center font-semibold">Folders</p>
            <div className="grid grid-cols-2">
          {numberArr.map((e, key) => {
            return (
              <Link
                to={`/branch/${title}/${idx}/sem/${e}`}
              >
                <div className="bg-blue-700 m-2 p-2 text-white rounded-md">
                  <i class="fas fa-folder"></i> &nbsp; {e} Semester
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full my-2 border"></div>
        <ShowFiles/>
        </div>
        </>
    )
}
