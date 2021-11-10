import React, { useState } from "react";
import { ShortInput, ShortButton } from "../../styles/global";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Loading } from "../../views/helper/loading/Loading";
import validator from "validator";
import {useSelector} from "react-redux"

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
      await axios.post(`${url}/add/mail/list`,user)
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
        <div className="mx-2 text-white rounded-lg bg-primary px-5 py-5 flex justify-center items-center flex-col">
          <p className="font-semibold text-center">
            Subscribe to get All Updates from NIT KKR
          </p>
          <ShortInput
            type="email"
            placeholder="Enter Email"
            className="text-black w-full mx-2 my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <ShortButton
            className="bg-blue-400 lg:mx-3 mx-2 w-full my-2"
            onClick={handleClick}
          >
            Subscribe
          </ShortButton>
        </div>
      </div>
    </>
  );
};
