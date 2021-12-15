import React, { useState } from "react";
import { Input, LongButton } from "../../styles/global";
import { Toaster } from "react-hot-toast";
import { Loading } from "../helper/loading/Loading";
import {useSelector} from 'react-redux'
import { handleSubscribeUpdates } from "./functions/handleSubscribeUpdates";
export const SubscribeUpdates = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  const handleClick = ()=> {
      handleSubscribeUpdates({user,email,setLoading,setEmail})
  }
  return (
    <>
      {loading ? <Loading /> : ""}
      <Toaster />
      <div className="custom-bg mt-5">
        <div
          className="hidden mx-5 pt-3 text-white rounded-lg bg-primary px-10 py-5 lg:grid items-center"
          style={{ gridTemplateColumns: ".7fr 1fr" }}
        >
          <div>
            <p className="lg:text-2xl text-lg font-bold">
              Subscribe to get All Updates from NIT KKR
            </p>
          </div>
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter Email"
              className="text-black w-full lg:mx-3 mx-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LongButton
              className="bg-blue-400 lg:mx-3 mx-2"
              onClick={handleClick}
            >
              Subscribe
            </LongButton>
          </div>
        </div>
        <div
          className="lg:hidden mx-5 pt-3 text-white rounded-lg bg-primary px-3 py-5 grid items-center"
          style={{ gridTemplateColumns: ".3fr 1fr" }}
        >
          <div>
            <p className="lg:text-2xl text-base font-bold">
              Subscribe to get All Updates from NIT KKR
            </p>
          </div>
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter Email"
              className="text-black w-full lg:mx-3 mx-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LongButton
              className="bg-blue-400 lg:mx-3 mx-2"
              onClick={handleClick}
            >
              Subscribe
            </LongButton>
          </div>
        </div>
      </div>
    </>
  );
};
