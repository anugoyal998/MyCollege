import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setAuthAction } from "./redux/actions/auth.action";
import { Home } from "./viewsMobile/home/Home";
import { Footer } from "./viewsMobile/footer/Footer";
import {DepartmentDetails} from './viewsMobile/departmentDetails/DepartmentDetails'
import {DepartmentDetails1} from './viewsMobile/departmentDetails/DepartmentDetails1'
import { UploadNotes } from "./viewsMobile/uploadNotes/UploadNotes";
import { Updates } from "./viewsMobile/updates/Updates";
import { StudyCorner } from "./viewsMobile/studyCorner/StudyCorner";
import { updatesFunction } from "./functions/updatesFunction";
import axios from "axios"
import {setUpdateAction} from './redux/actions/update.action'
export default function AppMobile() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("user")) {
      dispatch(setAuthAction(JSON.parse(Cookies.get("user"))));
    }
  }, []);
  const func = async () => {
    const res = await updatesFunction();
    // console.log(res);
    try {
      const url = process.env.REACT_APP_SERVER_BASE_URL;
      // const response = await axios.get(`${url}/get/update/db`);
      const response = await axios.get(`/get/update/db`);
      dispatch(setUpdateAction(response.data.updates));
    } catch (error) {
      console.log("error in setupdate redux");
    }
  };
  useEffect(async () => {
    func();
  }, []);
  setInterval(async () => {
    func();
    console.log("updates");
  }, 1200000);
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
