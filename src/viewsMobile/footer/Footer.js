import React from "react";
import { FlexCenterCenter, FlexItemsCenter } from "../../styles/global";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <FlexCenterCenter className="mt-5 py-5 flex-col bg-blue-700 text-white">
      <FlexItemsCenter>
        <Scroll to="contact" smooth={true}>
          <p className="mx-1 text-sm font-semibold cursor-pointer">
            Contact us
          </p>
        </Scroll>
        <a
          className="mx-1 text-sm font-semibold cursor-pointer underline"
          href="https://nitkkr.ac.in"
          target="_blank"
        >
          NIT KKR
        </a>
        <Link to="/updates/nitkkr">
          <p className="mx-1 text-sm font-semibold underline cursor-pointer">
            Updates
          </p>
        </Link>
        <Link to="/study-corner">
          <p className="mx-1 text-sm font-semibold underline cursor-pointer">
            Study Material
          </p>
        </Link>
      </FlexItemsCenter>
      <FlexItemsCenter className="my-3">
        <a href="https://www.facebook.com/anubhav.goyal.397" target="_blank">
          <FaFacebookF className="mx-4 text-2xl" />
        </a>
        <a href="https://instagram.com/bhav_the_best" target="_blank">
          <AiFillInstagram className="mx-4 text-2xl" />
        </a>
        <a href="https://github.com/anugoyal998" target="_blank">
          <AiFillGithub className="mx-4 text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/anubhav-goyal-549ab51b9"
          target="_blank"
        >
          <FaLinkedinIn className="mx-4 text-2xl" />
        </a>
      </FlexItemsCenter>
      <p className="text-sm">&copy; 2021 MyCollege, made with ❤</p>
    </FlexCenterCenter>
  );
};
