import React from "react";
import { cross, logo } from "../../assets";

const OtpError = () => {
  return (
    <div className=" h-screen">
      <div className="px-8 py-6">
        <img src={logo} />
      </div>
      <div className="container flex flex-col px-26 justify-center items-center pt-20">
        <img src={cross} />
        <h1 className="text-[#E3002B] text-[56px] font-medium">cross</h1>
        <p className="text-[24px] font-normal">
          OPT doesn’t Match Resend OTP for verification
        </p>
        <button className="bg-[#5E196C] text-white mt-6 px-6 py-2 w-full">
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OtpError;
