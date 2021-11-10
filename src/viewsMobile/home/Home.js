import React from "react";
//components
import { Navbar } from "./Navbar";
import { Content } from "./Content";
import { Featured } from "../../viewsMobile/featured/Featured";
import { EngDepartments } from "../../viewsMobile/engDepartments/EngDepartments";
import { Team } from "../team/Team";
import { ContactUs } from "../contactus/ContactUs";
import { SubscribeUpdates } from "../subscribeToUpdates/SubscribeToUpdates";
export const Home = () => {
  return (
    <div className="custom-bg">
      <div className="pt-3">
        <Navbar popup={true} />
        <Content />
      </div>
      <Featured />
      <EngDepartments />
      <Team />
      <ContactUs />
      <SubscribeUpdates />
    </div>
  );
};
