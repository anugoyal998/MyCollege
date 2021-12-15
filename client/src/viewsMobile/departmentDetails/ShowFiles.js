import React from "react";
import { useSelector } from "react-redux";
import { viewToPreview } from "../../functions/viewToPreview";
export const ShowFiles = ({sem}) => {
  let files = useSelector((state) => state.branchNotesReducer.branchNotes);
  if(sem){
    files = files?.filter(file => file.sem === sem)
  }
  return (
    <div>
      <p className="text-center font-semibold">Files</p>
      <div className="flex flex-wrap justify-center">
        {files &&
          files.map((e, key) => {
            let url = e.webViewLink;
            url = viewToPreview(url);
            return (
              <div
                style={{ width: "300px", height: "300px" }}
                className="my-10 mx-2"
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
          })}
      </div>
    </div>
  );
};
