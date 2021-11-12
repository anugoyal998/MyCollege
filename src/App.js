import dotenv from "dotenv";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { updatesFunction } from "./functions/updatesFunction";
import { setUpdateAction } from "./redux/actions/update.action";
//components
import { Home } from "./views/home/Home";
import { UploadNotes } from "./views/uploadNotes/UploadNotes";
import { Footer } from "./views/footer/Footer";
import { DepartmentDetails } from "./views/departmentDetails/DepartmentDetails";
import { DepartmentDetails1 } from "./views/departmentDetails/DepartmentDetails1";
import { StudyCorner } from "./views/studyCorner/StudyCorner";
import {Updates} from './views/updates/Updates'
//components
import { useDispatch } from "react-redux";
import { setAuthAction } from "./redux/actions/auth.action";

export default function App() {
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
