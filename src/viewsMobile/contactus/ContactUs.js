import React from "react";
import { FlexItemsCenter, ShortInput, ShortButton } from "../../styles/global";

export const ContactUs = () => {
  return (
    <FlexItemsCenter className="my-5 flex-col justify-center custom-bg px-2 text-center">
      <p className="text-lg font-semibold">Contact Us</p>
      <p className="opacity-70 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dobero et.
      </p>
      <ShortInput placeholder="First Name" className="w-full my-2" />
      <ShortInput placeholder="Last Name" className="w-full my-2" />
      <ShortInput placeholder="Email" className="w-full my-2" />
      <ShortInput placeholder="Phone" className="w-full my-2" />
      <ShortInput placeholder="Subject" className="w-full my-2" />
      <textarea
        placeholder="Message"
        className="w-full my-2 rounded-md border-2 p-2 outline-none h-32"
      />
      <FlexItemsCenter className="justify-end text-right w-full">
      <ShortButton className="bg-blue-700 text-white my-2">Submit</ShortButton>
      </FlexItemsCenter>
    </FlexItemsCenter>
  );
};
