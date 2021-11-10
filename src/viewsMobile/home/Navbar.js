import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FlexItemsCenter } from "../../styles/global";
import { Title_Name } from "../../constants/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Drawer } from "../helper/drawer/Drawer";
import { Modal } from "../../views/helper/modal/Modal";
import { useSelector } from "react-redux";
import { SearchNavbar } from "../departmentDetails/SearchNavbar";
import { Admin } from "../admin/Admin";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import toast, { Toaster} from "react-hot-toast"
import Cookies from 'js-cookie'
export const Navbar = ({ icon, popup, modal }) => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
        children={<DrawerChild setOpen={setOpen} />}
      />
      <FlexItemsCenter className="justify-between px-3">
        <Link to="/">
          <div className="text-2xl font-extrabold text-blue-700">
            {Title_Name}
          </div>
        </Link>
        <div className="text-2xl font-bold" onClick={handleClick}>
          {!icon ? <GiHamburgerMenu /> : icon}
        </div>
      </FlexItemsCenter>
    </>
  );
};

const DrawerChild = ({ setOpen }) => {
  const [openModal, setOpenModal] = useState(false);
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
      await axios.post(`${url}/auth/add/user`, data);
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
          <GoogleLogin
              // clientId={`${process.env.REACT_APP_GLOGIN_CLIENT_ID}`}
              clientId="1059830936528-5rkod9g2srlo940h62mi5bmi1oqkbg6b.apps.googleusercontent.com"
              render={(renderProps) => (
                <div
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="z-10 text-lg font-bold my-1"
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
  );
};
