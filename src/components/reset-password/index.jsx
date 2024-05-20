import React from "react";
import { Lock } from "../../assets";
import { HiArrowLongLeft } from "react-icons/hi2";

const ResetPassword = () => {
  return (
    <div className="container h-screen gap-4 flex justify-center flex-col items-center">
      <img src={Lock} alt="Lock" />
      <h1 className="text-[54px] text-primary font-medium">
        Successful Password Reset!
      </h1>
      <p className="text-[24px] text-center text-[#696969] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="bg-primary px-4 py-2 cursor-pointer text-white w-full">
        Continue
      </button>
      <p className="flex justify-center gap-2 items-center">
        <HiArrowLongLeft />
        Back To New Password
      </p>
    </div>
  );
};

export default ResetPassword;
