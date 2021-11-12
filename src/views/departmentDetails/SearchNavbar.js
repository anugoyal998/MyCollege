import React, { useContext, useState } from "react";
import { Title_Name } from "../../constants/constants";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { GoogleLogin } from "react-google-login";
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import Cookies from 'js-cookie'
//components
import { Modal } from "../helper/modal/Modal";
import { SearchPopup } from "./SearchPopup";
import { Admin } from "../admin/Admin";
export const SearchNavbar = () => {
  const user = useSelector((state) => state.authReducer.auth);
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
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
      <Modal open={open} setOpen={setOpen} component={<SearchPopup />} />
      <Modal open={openAuth} setOpen={setOpenAuth} component={<Admin/>} />
      <div className="flex justify-between items-center z-10 px-14 border-b-2 pb-2">
        <Link to="/">
          <div className="text-2xl font-extrabold text-blue-700">
            {Title_Name}
          </div>
        </Link>
        <div className="flex border-2 rounded-md p-2 items-center bg-white">
          <div className="mx-2">
            <i className="fas fa-search text-gray-400"></i>
          </div>
          <div className="ml-2 mr-20 flex items-center">
            <input
              placeholder="Search"
              className="outline-none cursor-pointer"
              onClick={() => setOpen(true)}
              value=""
            />
          </div>
        </div>
        <div className="items-center flex z-0">
        {user && user.name ? (
            <div
              className="z-10 border-2 rounded-md bg-white py-2 px-4 text-blue-700 font-semibold cursor-pointer w-32 truncate"
              onClick={() => setOpenAuth(true)}
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
      </div>
    </>
  );
};
