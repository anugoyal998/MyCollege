import React, { useState } from "react";
import logo from "../../img/logo.png";
import { Loading } from "../helper/loading/Loading";
import { Toaster } from "react-hot-toast";
import { Input, LongButton } from "../../styles/global";
import { handleSendOtp, handleSignup } from "./functions/handleSignup"


export const SignupModal = () => {
  const [loading, setLoading] = useState(false);
  const [state,setState] = useState({name: '',roll: '',password: '',mobile: '',otp: '',otpByUser: ''});
  console.log(state)
  const handleOnChange = e => {
      setState({...state,[e.target.name]: e.target.value})
  }
  const handleSendOtpClick = ()=> {
      handleSendOtp({setLoading,state,setState})
  }
  const handleSignupClick = ()=> {
      handleSignup({setLoading,state})
  }
  return (
    <div className="bg-white rounded-md flex flex-col md:flex-row items-center p-3 animate__animated animate__zoomIn">
      {loading && <Loading />}
      <Toaster />
      <img src={logo} alt="logo" className="w-12 md:w-96 mx-8" />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold">Welcome to MyCollege </p>
        <div className="border-b-4 rounded-md border-blue-700 w-20 my-1"></div>
        <p className="font-semibold">Signup to get started</p>
        <div className="flex flex-col mt-6 space-y-3">
            <Input type="text" placeholder="Name" value={state.name} onChange={handleOnChange} name="name" />
            <Input type="text" placeholder="Roll No" value={state.roll} onChange={handleOnChange} name="roll" />
            <Input type="password" placeholder="Password" value={state.password} onChange={handleOnChange} name="password"/>
            <div className="flex items-center">
            <Input type="tel" placeholder="Mobile" value={state.mobile} onChange={handleOnChange} name="mobile" className="border-r-0 rounded-tr-none rounded-br-none"/>
            <div className="border-2 py-2 border-l-0 rounded-tr-md rounded-br-md">
            <button className="bg-blue-700 text-white py-1 rounded-md px-1 mr-1" onClick={handleSendOtpClick} >Send OTP</button>
            </div>
            </div>
            <Input type="text" placeholder="Enter OTP" value={state.otpByUser} onChange={handleOnChange} name="otpByUser" />
            <LongButton className="bg-blue-700 text-white" onClick={handleSignupClick} >Signup</LongButton>
        </div>
      </div>
    </div>
  );
};
