import React, { useState } from "react";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import {Toaster} from 'react-hot-toast'
//components
import { Modal } from "../helper/modal/Modal";
import { SearchPopup } from "./SearchPopup";
import { Admin } from "../admin/Admin";
import { LoginModal } from "../auth/LoginModal";
import { SignupModal } from "../auth/SignupModal";
export const SearchNavbar = () => {
  const user = useSelector((state) => state.authReducer.auth);
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openLoginModal,setOpenLoginModal] = useState(false);
  const [openSignupModal,setOpenSignupModal] = useState(false);
  return (
    <>
    <Toaster/>
      <Modal open={open} setOpen={setOpen} component={<SearchPopup />} />
      <Modal open={openAuth} setOpen={setOpenAuth} component={<Admin/>} />
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
      <div className="flex justify-between items-center z-10 px-14 border-b-2 pb-2">
        <Link to="/">
          <img src={logo} alt="MyCollege" className="w-12" />
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
            <button className="border-2 z-10 bg-white text-lg font-semibold text-blue-700 outline-none py-2 px-3 rounded-md" onClick={()=> setOpenLoginModal(true)}>Login</button>
          )}
        </div>
      </div>
    </>
  );
};
