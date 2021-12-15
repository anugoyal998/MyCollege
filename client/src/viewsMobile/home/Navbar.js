import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FlexItemsCenter } from "../../styles/global";
import logo from '../../img/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Drawer } from "../helper/drawer/Drawer";
import { Modal } from "../../views/helper/modal/Modal";
import { useSelector } from "react-redux";
import { SearchNavbar } from "../departmentDetails/SearchNavbar";
import { Admin } from "../admin/Admin";
import { Toaster} from "react-hot-toast"
import {LoginModal } from "../../views/auth/LoginModal"
import {SignupModal} from "../../views/auth/SignupModal"
export const Navbar = ({ icon, popup, modal }) => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const handleClick = () => {
    setOpen(!popup ? false : true);
    setModalOpen(modal ? true : false);
  };
  return (
    <>
      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        component={<SearchNavbar />}
      />
      <Drawer
        open={open}
        setOpen={setOpen}
        children={<DrawerChild setOpen={setOpen} setOpenLoginModal={setOpenLoginModal} />}
      />
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
      <FlexItemsCenter className="justify-between px-3">
        <Link to="/">
          <img src={logo} alt="MyCollege" className="w-12" />
        </Link>
        <div className="text-2xl font-bold" onClick={handleClick}>
          {!icon ? <GiHamburgerMenu /> : icon}
        </div>
      </FlexItemsCenter>
    </>
  );
};

const DrawerChild = ({ setOpen,setOpenLoginModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  return (
    <div className="animate__animated animate__fadeInRight bg-white text-black flex flex-col pt-3 px-2 h-screen">
      <Toaster/>
      <Modal open={openModal} setOpen={setOpenModal} component={<Admin />} />
      <div
        className="flex justify-end text-2xl font-bold mb-1"
        onClick={() => setOpen(false)}
      >
        <IoCloseSharp />
      </div>
      <hr />
      <div className="flex items-end flex-col">
        <p className="text-lg font-bold my-1">Home</p>
        <Link to="/study-corner">
          <p className="text-lg font-bold my-1">Study Corner</p>
        </Link>
        <Link to="/updates/nitkkr">
          <p className="text-lg font-bold my-1">Updates</p>
        </Link>
        {user && user.name ? (
          <Link to="/upload/notes">
            <p className="text-lg font-bold my-1">Upload Notes</p>
          </Link>
        ) : (
          <Link to="/">
            <p className="text-lg font-bold my-1">Upload Notes</p>
          </Link>
        )}
        {user && user.name ? (
          <div
            className="text-lg font-bold my-1"
            onClick={() => setOpenModal(true)}
          >
            {user.name}
          </div>
        ) : (
          <div className="text-lg font-bold my-1 cursor-pointer"  onClick={()=> setOpenLoginModal(true)} >Login</div>
        )}
      </div>
    </div>
  );
};
