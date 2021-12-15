import React from "react";
import { FlexItemsCenter, Input, LongButton } from "../../styles/global";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export const ContactUs = () => {
  return (
    <div
      className="grid pt-5 px-5 custom-bg"
      id="contact"
      style={{ gridTemplateColumns: ".5fr 1fr" }}
    >
      <div className="bg-blue-700 text-white rounded-md">
        <div className="lg:ml-10 ml-5 mt-10">
          <p className="text-2xl font-semibold">Contact Us</p>
          <p className="opacity-70 text-sm lg:text-base ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            illum numquam at sequi esse excepturi quae libero et.
          </p>
          <FlexItemsCenter className="mt-5 cursor-pointer">
            <FiPhoneCall className="mr-3 text-lg lg:text-xl" />
            <p className="text-sm lg:text-base">+91 9991090056</p>
          </FlexItemsCenter>
          <FlexItemsCenter className="mt-3 cursor-pointer">
            <HiOutlineMail className="mr-3 text-lg lg:text-xl" />
            <p className="text-sm lg:text-base">anugoyal998@gmail.com</p>
          </FlexItemsCenter>
          <FlexItemsCenter className="mt-3">
            <a
              href="https://www.facebook.com/anubhav.goyal.397"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="text-2xl mr-5" />
            </a>
            <a
              href="https://github.com/anugoyal998"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl mr-5" />
            </a>
            <a
              href="https://instagram.com/bhav_the_best"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="text-2xl mr-5" />
            </a>
          </FlexItemsCenter>
        </div>
      </div>
      <div className="pt-10 px-5">
        <p className="text-xl my-5 font-bold">Send Message</p>
        <FlexItemsCenter className="justify-between my-5">
          <Input placeholder="First Name" className="w-full mx-2 lg:mx-5" />
          <Input placeholder="Last Name" className="w-full mx-2 lg:mx-5" />
        </FlexItemsCenter>
        <FlexItemsCenter className="justify-between my-5">
          <Input placeholder="Email" className="w-full mx-2 lg:mx-5" />
          <Input placeholder="Phone" className="w-full mx-2 lg:mx-5" />
        </FlexItemsCenter>
        <FlexItemsCenter className="justify-between my-5">
          <Input placeholder="Subject" className="w-full mx-2 lg:mx-5" />
        </FlexItemsCenter>
        <FlexItemsCenter className="justify-between my-5">
          <textarea
            placeholder="Message"
            className="w-full mx-2 lg:mx-5 rounded-md border-2 p-3 outline-none h-32"
          />
        </FlexItemsCenter>
        <FlexItemsCenter className="justify-end mx-2 lg:mx-5">
          <LongButton className="bg-blue-700 text-white">Submit</LongButton>
        </FlexItemsCenter>
      </div>
    </div>
  );
};
