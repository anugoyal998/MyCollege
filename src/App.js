import dotenv from 'dotenv';
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Cookies from 'js-cookie'
//components
import { Home } from "./views/home/Home";
import { UploadNotes } from './views/uploadNotes/UploadNotes'
//components
import { useDispatch } from 'react-redux'
import { setAuthAction } from './redux/actions/auth.action';

export default function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    if (Cookies.get("user")) {
      // setAuth(JSON.parse(Cookies.get("user")));
      dispatch(setAuthAction(JSON.parse(Cookies.get("user"))));
    }
  },[])
  return (
    <div className="custom-bg">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/upload/notes" exact component={UploadNotes} />
    </div>
  );
}
