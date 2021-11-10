import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {setAllNotesAction} from '../../redux/actions/branchNotes.action'
import axios from "axios";
export const SearchPopup = () => {
  const [query, setQuery] = useState('');
  const allNotes = useSelector(state => state.branchNotesReducer.allNotes)
  const [searchNotes,setSearchNotes] = useState([]);
  const dispatch = useDispatch()
  useEffect(async () =>{
    if(allNotes.length > 0)return;
    try{
      const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/search/all/notes`)
      dispatch(setAllNotesAction(response.data))
    }catch(err){
      console.log("error in all notes",err)
    }
  },[])
  const searchFilter = (e) => {
    let searchString = e.branch+e.sem+e.subject+e.cc+e.chapter
    return searchString.includes(query)
  }
  useEffect(() => {
      if(query === '')return;
      const arr = allNotes.filter(searchFilter)
      setSearchNotes(arr)
  },[query])
//   console.log(searchNotes)
//   console.log(searchNotes.length)
  return (
    <div className="flex flex-col items-center">
      <div className=" mt-10 rounded-md bg-white absolute top-1" style={{width: '400px'}}>
      <input
        className="animate__animated animate__fadeInDown px-5 py-3 bg-white rounded-md outline-none w-full"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {
        searchNotes.length>0 && (
          <div className="bg-white rounded-md w-full px-2" >
            {
              searchNotes.map((e,key) => {
                return <a href={e.webViewLink} target="_blank">
                  <div className="w-full bg-blue-400 text-white p-2 rounded-md my-2 cursor-pointer">{e.subject}_{e.cc}_{e.chapter}</div>
                </a>
              })
            }
          </div>
        )
      }
      </div>
    </div>
  );
};
