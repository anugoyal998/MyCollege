import React from "react";
import { useSelector } from "react-redux";
import { ShortButton } from "../../styles/global";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const Admin = () => {
  const user = useSelector((state) => state.authReducer.auth);
  const handleOnClick = () => {
    Cookies.remove("user");
    toast.success("Logout successful");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  if (user)
    return (
      <div className="animate__animated animate__fadeInDown flex flex-col items-center space-x-3 bg-white sm:p-8 xs:p-5 p-3 shadow-lg rounded-lg">
        <div className="flex justify-center items-center">
          <img
            src={user?.img}
            alt={`${user.name}`}
            className="rounded-full border"
          />
          <div className="ml-3">
            <p className="text-lg font-semibold capitalize">{user?.name}</p>
            <p className="text-lg italic">{user.email}</p>
          </div>
        </div>
        <ShortButton
          className="bg-blue-700 text-white mx-3 w-full mt-6"
          onClick={handleOnClick}
        >
          Logout
        </ShortButton>
      </div>
    );
  else return null;
};
