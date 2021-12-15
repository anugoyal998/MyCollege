import React, { useState } from "react";
import logo from "../../img/logo.png";
import { Input, LongButton } from "../../styles/global";
import { handleSendOtp } from "./functions/handleSignup";
import {Loading} from '../helper/loading/Loading'
import { Toaster } from "react-hot-toast";
import { handleLogin } from "./functions/handleLogin";

export const LoginModal = ({ setOpenLoginModal, setOpenSignupModal }) => {
  const handleClick = () => {
    setOpenLoginModal(false);
    setOpenSignupModal(true);
  };
  const [state, setState] = useState({mobile: '',password: '',otp: '',otpByUser: ''});
  const [loading, setLoading] = useState(false)
  const handleOnChange = e => {
    setState({...state,[e.target.name]: e.target.value})
  }
  const handleSendOtpClick = () => {
    handleSendOtp({setLoading,state,setState})
  }
  const handleLoginClick = () => {
    handleLogin({state,setLoading})
  }
  return (
    <div className="bg-white rounded-md flex flex-col md:flex-row items-center p-3 animate__animated animate__zoomIn">
      {loading && <Loading />}
      <Toaster/>
      <img src={logo} alt="logo" className="w-12 md:w-96 mx-8 " />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold">Welcome to MyCollege </p>
        <div className="border-b-4 rounded-md border-blue-700 w-20 mt-1"></div>
        <p className="font-semibold">Login to continue</p>
        <div className="flex flex-col mt-6 space-y-3">
        <div className="flex items-center">
            <Input type="tel" placeholder="Mobile" value={state.mobile} onChange={handleOnChange} name="mobile" className="border-r-0 rounded-tr-none rounded-br-none"/>
            <div className="border-2 py-2 border-l-0 rounded-tr-md rounded-br-md">
            <button className="bg-blue-700 text-white py-1 rounded-md px-1 mr-1" onClick={handleSendOtpClick}  >Send OTP</button>
            </div>
          </div>
          <Input type="text" placeholder="Enter OTP" onChange={handleOnChange} value={state.otpByUser} name="otpByUser" />
          <Input type="password" placeholder="Password" value={state.password} onChange={handleOnChange} name="password"/>
          <LongButton className="bg-blue-700 text-white" onClick={handleLoginClick}  >Login</LongButton>
        </div>
        <div className="w-10 h-10 border-2 border-black flex justify-center items-center rounded-full text-black font-semibold my-3">
          Or
        </div>
        <div>Don't have a account?</div>
        <div>
          Create a new account{" "}
          <span
            className="underline text-blue-500 cursor-pointer"
            onClick={handleClick}
          >
            here
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
