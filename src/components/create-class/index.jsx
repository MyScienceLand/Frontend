import React, { useState } from "react";
import Dropdown from "../common/dropdown";
import SearchDropdown from "../common/search-dropdown";
import Upload from "../common/upload";

const CreateClass = () => {
  const [files, setFiles] = useState([]);

  const handleFiles = (selectedFiles) => {
    setFiles(Array.from(selectedFiles));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const dropdownItems = [
    { to: "#", label: "Dashboard" },
    { to: "#", label: "Settings" },
    { to: "#", label: "Earnings" },
    { to: "#", label: "Logout" },
  ];

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-6">
          <Dropdown dropdownItems={dropdownItems} label="Qualification" />
          <Dropdown dropdownItems={dropdownItems} label="Year" />
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Start Date{" "}
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="Start Date"
            />{" "}
          </div>
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              End Date{" "}
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="End Date"
            />{" "}
          </div>
          <Dropdown dropdownItems={dropdownItems} label="Start Date" />
          <Dropdown dropdownItems={dropdownItems} label="End Date" />
          <Upload />
          <SearchDropdown />
        </div>
        <h1 className="text-[20px] font-medium mt-6">
          Select Subject And Teacher
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Subject{" "}
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="Chemistry"
            />{" "}
          </div>
          <Dropdown dropdownItems={dropdownItems} label="Select Teacher" />
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Subject{" "}
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="Chemistry"
            />{" "}
          </div>
          <Dropdown dropdownItems={dropdownItems} label="Select Teacher" />
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Subject{" "}
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="Chemistry"
            />{" "}
          </div>
          <Dropdown dropdownItems={dropdownItems} label="Select Teacher" />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 text-white bg-primary rounded bg-gray-300">
          Continue
        </button>
      </div>
    </>
  );
};

export default CreateClass;
