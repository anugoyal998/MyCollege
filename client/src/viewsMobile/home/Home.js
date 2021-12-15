import React from "react";
//components
import { Navbar } from "./Navbar";
import { Content } from "./Content";
import { Featured } from "../../viewsMobile/featured/Featured";
import { EngDepartments } from "../../viewsMobile/engDepartments/EngDepartments";
import { ContactUs } from "../contactus/ContactUs";
export const Home = () => {
  return (
    <div className="custom-bg">
      <div className="pt-3">
        <Navbar popup={true} />
        <Content />
      </div>
      <Featured />
      <EngDepartments />
      <ContactUs />
    </div>
  );
};
