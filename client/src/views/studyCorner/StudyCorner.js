import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllNotesAction } from "../../redux/actions/branchNotes.action";
import { Loading } from "../helper/loading/Loading";
import { SearchNavbar } from "../departmentDetails/SearchNavbar";
import { viewToPreview } from "../../functions/viewToPreview";

export const StudyCorner = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_SERVER_BASE_URL2;
        const response = await axios.post(`${url}/search/all/notes`);
        dispatch(setAllNotesAction(response.data));
      } catch (err) {
        //   console.log("error in all notes",err)
      }
    }
    fetchData();
  }, [dispatch]);
  const arr = useSelector((state) => state.branchNotesReducer.allNotes);
  if (arr.length > 0) {
    return (
      <div className="pt-3 h-auto custom-bg">
        <SearchNavbar />
        <div className="px-2 lg:px-14">
          <p className="text-xl font-bold mb-3">Study Material</p>
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
      <div className="pt-3 h-screen custom-bg">
        <SearchNavbar />
        <Loading />
      </div>
    );
  }
};

const MyCard = ({ e, key }) => {
  let url = e.webViewLink;
  url = viewToPreview(url);
  return (
    <div
      style={{ width: "300px", height: "300px" }}
      className="my-10 mx-8"
    >
      <iframe
        src={url}
        width="300"
        height="300"
        frameBorder="0"
        scrolling="no"
        title={key}
      ></iframe>
      <p className="capitalize text-center">
        {e.subject} {e.branch}
      </p>
    </div>
  );
};
