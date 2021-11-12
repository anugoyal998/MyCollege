import React, { useState } from "react";
import { Title_Name } from "../../constants/constants";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { GoogleLogin } from "react-google-login";
import Cookies from "js-cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import {Modal} from '../helper/modal/Modal'
import {Admin} from '../admin/Admin'
export const Navbar = ({ rightPat }) => {
    const [open,setOpen] = useState(false)
  const user = useSelector((state) => state.authReducer.auth);
  const loginSuccess = async (result) => {
    const data = {
      email: result?.profileObj?.email,
      name: result?.profileObj?.name,
      gid: result?.profileObj?.googleId,
      img: result?.profileObj?.imageUrl,
    };
    try {
      const url = "http://localhost:5000";
      // await axios.post(`${url}/auth/add/user`, data);
      await axios.post(`/auth/add/user`, data);
    } catch (error) {
      toast.error("An error occurred");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    var jsonString = JSON.stringify(data);
    console.log(jsonString);
    Cookies.set("user", jsonString, { expires: 7 });
    toast.success("Login Success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const loginFailure = () => {
    console.log("login failure");
  };
  return (
    <>
      <Toaster />
      <Modal open={open} setOpen={setOpen} component={<Admin/>} />
      <div className="flex justify-between items-center z-10 lg:px-14 px-2">
        <Link to="/">
          <div className="text-2xl font-extrabold text-blue-700">
            {Title_Name}
          </div>
        </Link>
        <div className="flex items-center justify-center ">
          <Link
            to="/study-corner"
            className="text-base mx-2 lg:mx-4 font-semibold text-gray-400"
          >
            Study Corner
          </Link>
          <Scroll to="engDept" smooth={true}>
            <p className="cursor-pointer text-base mx-2 lg:mx-4 font-semibold text-gray-400">
              Branches
            </p>
          </Scroll>
          <Link
            to="/updates/nitkkr"
            className="text-base mx-2 lg:mx-4 font-semibold text-gray-400"
          >
            Updates
          </Link>
          <p className="text-base mx-4 font-semibold text-gray-400">PYQs</p>
          {user && user.name ? (
            <Link
              to="/upload/notes"
              className="text-base mx-2 lg:mx-4 font-semibold text-gray-400"
            >
              Upload Notes
            </Link>
          ) : (
            <Link
              to="/"
              className="text-base mx-2 lg:mx-4 font-semibold text-gray-400"
            >
              Upload Notes
            </Link>
          )}
        </div>
        <div className="items-center flex">
          {user && user.name ? (
            <div
              className="z-10 border-2 rounded-md bg-white py-2 px-4 text-blue-700 font-semibold cursor-pointer w-32 truncate"
              onClick={() => setOpen(true)}
            >
              {user?.name}
            </div>
          ) : (
            <GoogleLogin
              // clientId={`${process.env.REACT_APP_GLOGIN_CLIENT_ID}`}
              clientId="1059830936528-5rkod9g2srlo940h62mi5bmi1oqkbg6b.apps.googleusercontent.com"
              render={(renderProps) => (
                <div
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="z-10 border-2 rounded-md bg-white py-2 px-4 text-blue-700 font-semibold cursor-pointer"
                >
                  Login{" "}
                </div>
              )}
              buttonText=""
              onSuccess={loginSuccess}
              onFailure={loginFailure}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
        {rightPat && (
          <div
            className="absolute top-0 right-0 my-pattern z-0 hidden lg:block"
            style={{ width: "17vw", height: "9vh" }}
          ></div>
        )}
      </div>
    </>
  );
};
