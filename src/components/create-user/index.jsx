import React from "react";
import Dropdown from "../common/dropdown";
import Upload from "../common/upload";

const CreateUser = () => {
  const dropdownItems = [
    { to: "#", label: "Dashboard" },
    { to: "#", label: "Settings" },
    { to: "#", label: "Earnings" },
    { to: "#", label: "Logout" },
  ];
  return (
    <div>
      <div className="bg-[#f8f8f8] px-4 rounded-lg  rounded py-4 ">
        <h1 className="text-[18px] px-4 font-medium">Teacher Preferences</h1>
      </div>
      <div className="bg-white px-6 py-10  shadow-md">
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <Dropdown dropdownItems={dropdownItems} label="Role" />{" "}
          <div className="flex flex-col justify-center">
            <label className="px-4 mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Email Address{" "}
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="John Doe"
            />{" "}
          </div>
          <div className="flex flex-col justify-center">
            <label className="px-4 mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Name
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="example@email.com"
            />{" "}
          </div>
          <Dropdown dropdownItems={dropdownItems} label="Class" />{" "}
        </div>
        <div className="mt-6">
          <Upload />
        </div>
      </div>
      <button></button>
      <div>
        <div className="bg-[#f8f8f8] px-4 rounded-lg  rounded py-4 ">
          <h1 className="text-[18px] px-4 font-medium">Your Progress</h1>
        </div>
        <div className="bg-white px-6 py-10  shadow-md">
          <div className="grid grid-cols-[1fr_1fr] gap-6">
            <Dropdown dropdownItems={dropdownItems} label="Subject" />{" "}
            <Dropdown dropdownItems={dropdownItems} label="Board" />{" "}
            <Dropdown dropdownItems={dropdownItems} label="Qualification" />{" "}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateUser;
