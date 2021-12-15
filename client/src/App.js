import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";
import OneSignal from 'react-onesignal';

//components
import { Home } from "./views/home/Home";
import { Footer } from "./views/footer/Footer";
import { UploadNotes } from "./views/uploadNotes/UploadNotes";
import { DepartmentDetails } from "./views/departmentDetails/DepartmentDetails";
import { DepartmentDetails1 } from "./views/departmentDetails/DepartmentDetails1";
import {Updates } from './views/updates/Updates'
import { StudyCorner } from "./views/studyCorner/StudyCorner";
//redux
import { useDispatch } from "react-redux";
import { setAuthAction } from "./redux/actions/auth.action";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("user")) {
      dispatch(setAuthAction(JSON.parse(Cookies.get("user"))));
    }
  }, [dispatch]);
  useEffect(()=> {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL_APPID
    })
  },[])
  return (
    <div className="custom-bg">
      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      <Route path="/upload/notes" exact component={UploadNotes} />
      <Route path="/branch/:title/:idx" exact component={DepartmentDetails} />
      <Route
        path="/branch/:title/:idx/sem/:sem"
        exact
        component={DepartmentDetails1}
      />
      <Route path="/updates/nitkkr" exact component={Updates} />
      <Route path="/study-corner" exact component={StudyCorner} />
    </div>
  );
}
