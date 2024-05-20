import React from "react";
import { Errorimg } from "../../assets";
const ErrorPage = () => {
  return (
    <div className="container flex items-center justify-between h-screen">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-[#2A2A2A] text-[38px] font-medium">
          WE CAN’T FOUND THIS PAGE
        </h1>
        <div class="border-t border-b border-gray-200 w-[500px] flex-grow h-0"></div>

        <p className="text-[164px] m-0 p-0 text-[#2A2A2A]">404</p>
        <div class="border-t border-b w-[500px] border-gray-200 flex-grow h-0"></div>

        <p className="text-[38px] text-[#2A2A2A] font-medium">Page Lost</p>

        <button className="text-primary px-8 py-2 border border-primary">
          {" "}
          Go back home
        </button>
      </div>
      <div>
        <img src={Errorimg} />
      </div>
    </div>
  );
};

export default ErrorPage;
