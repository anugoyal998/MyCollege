import React, { useState } from "react";
import { Input, LongButton } from "../../styles/global";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Loading } from "../helper/loading/Loading";
import {useSelector} from 'react-redux'
import validator from "validator";
export const SubscribeUpdates = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  const handleClick = async () => {
    if(!user){
      toast.error("Login to subscribe to mailing list")
      return
    }
    if(user.email !== email){
      toast.error("Email doesn't match to user's email")
      return
    }
    setLoading((prev) => true);
    if(!validator.isEmail(email)){
      toast.error("Invalid Email")
      setLoading(prev => false)
      return
    }
    try {
      const url = 'http://localhost:5000'
      // await axios.post(`${url}/add/mail/list`,user)
      await axios.post(`/add/mail/list`,user)
      toast.success("Email Added to mailing list")
      setEmail("")
      setLoading(prev => false)
    } catch (error) {
      toast.error("An error occurred")
      setLoading(prev => false)
    }
  };
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
            <p className=";g:text-2xl text-lg font-bold">
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
