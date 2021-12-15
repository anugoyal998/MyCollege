import React, { useEffect } from "react";
import OneSignal from "react-onesignal";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";
//components
import { Home } from "./viewsMobile/home/Home";
import { Footer } from "./viewsMobile/footer/Footer";
import { DepartmentDetails } from "./viewsMobile/departmentDetails/DepartmentDetails";
import {UploadNotes} from './viewsMobile/uploadNotes/UploadNotes'
import { StudyCorner } from "./viewsMobile/studyCorner/StudyCorner";
import { DepartmentDetails1 } from "./viewsMobile/departmentDetails/DepartmentDetails1";
import { Updates } from "./viewsMobile/updates/Updates";

//redux
import { useDispatch } from "react-redux";
import { setAuthAction } from "./redux/actions/auth.action";

export default function AppMobile() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("user")) {
      dispatch(setAuthAction(JSON.parse(Cookies.get("user"))));
    }
  }, [dispatch]);
  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL_APPID,
    });
  }, []);
  return (
    <div className="custom-bg">
      <Route path="/" exact>
        <Home />
        <Footer/>
      </Route>
      <Route path="/branch/:title/:idx" exact component={DepartmentDetails} />
      <Route path="/branch/:title/:idx/sem/:sem" exact component={DepartmentDetails1} />
      <Route path="/upload/notes" exact component={UploadNotes} />
      <Route path="/updates/nitkkr" exact component={Updates} />
      <Route path="/study-corner" exact component={StudyCorner} />
    </div>
  );
}
