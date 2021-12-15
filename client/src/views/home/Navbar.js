import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Modal } from "../helper/modal/Modal";
import { Admin } from "../admin/Admin";
import { LoginModal } from "../auth/LoginModal";
import { SignupModal } from "../auth/SignupModal";
import logo from '../../img/logo.png';
export const Navbar = ({ rightPat }) => {
  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  return (
    <>
      <Toaster />
      <Modal open={open} setOpen={setOpen} component={<Admin />} />
      <Modal
        open={openLoginModal}
        setOpen={setOpenLoginModal}
        component={<LoginModal setOpenLoginModal={setOpenLoginModal} setOpenSignupModal={setOpenSignupModal} />}
      />
      <Modal
        open={openSignupModal}
        setOpen={setOpenSignupModal}
        component={<SignupModal />}
      />
      <div className="flex justify-between items-center z-10 lg:px-14 px-2">
        <Link to="/">
          <img src={logo} alt="MyCollege" className="w-12" />
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
            <button
              className="border-2 z-10 bg-white text-lg font-semibold text-blue-700 outline-none py-2 px-3 rounded-md"
              onClick={() => setOpenLoginModal(true)}
            >
              Login
            </button>
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
