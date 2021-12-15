import React, { useState } from "react";
import { ShortInput, ShortButton } from "../../styles/global";
import { Toaster } from "react-hot-toast";
import { Loading } from "../../views/helper/loading/Loading";
import {useSelector} from "react-redux"
import { handleSubscribeUpdates } from "../../views/subscribeToUpdates/functions/handleSubscribeUpdates";

export const SubscribeUpdates = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  const handleClick = () => {
    handleSubscribeUpdates({user,email,setLoading,setEmail})
  };
  return (
    <>
      {loading ? <Loading /> : ""}
      <Toaster />
      <div className="custom-bg mt-5">
        <div className="mx-2 text-white rounded-lg bg-primary px-5 py-5 flex justify-center items-center flex-col">
          <p className="font-semibold text-center">
            Subscribe to get All Updates from NIT KKR
          </p>
          <ShortInput
            type="email"
            placeholder="Enter Email"
            className="text-black w-full mx-2 my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <ShortButton
            className="bg-blue-400 lg:mx-3 mx-2 w-full my-2"
            onClick={handleClick}
          >
            Subscribe
          </ShortButton>
        </div>
      </div>
    </>
  );
};
