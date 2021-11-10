import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllNotesAction } from "../../redux/actions/branchNotes.action";
import { Loading } from "../../views/helper/loading/Loading";
import {Navbar} from '../home/Navbar'
import {FaSearch} from 'react-icons/fa'
import { viewToPreview } from "../../functions/viewToPreview";
export const StudyCorner = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/search/all/notes`
      );
      dispatch(setAllNotesAction(response.data));
    } catch (err) {
      console.log("error in all notes", err);
    }
  });
  const arr = useSelector((state) => state.branchNotesReducer.allNotes);

  if (arr.length > 0) {
    return (
      <div style={{ background: "#F9FAFB" }} className="pt-3 h-screen">
        <Navbar icon={<FaSearch/>} drawer={false} modal={true} /> 
        <div className="px-2 lg:px-14">
          <p className="text-xl font-bold mt-3">Study Material</p>
          <div className="flex flex-wrap justify-center">
            {arr &&
              arr.map((e, key) => {
                return <MyCard e={e} key={key} />;
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ background: "#F9FAFB" }} className="pt-3 h-screen">
        <Navbar icon={<FaSearch/>} drawer={false} modal={true} />
        <Loading />
      </div>
    );
  }
};


const MyCard = ({e,key})=> {
  let url = e.webViewLink
  url = viewToPreview(url)
  return(
          <div style={{width: "300px", height: "300px"}} className="my-10 mx-5 zoom">
      <iframe  className="rounded-md" src={url}  width="300" height="300" frameBorder="0" scrolling="no"></iframe>
      <p className="capitalize text-center">{e.subject} {e.branch}</p>
      </div>
  )
}