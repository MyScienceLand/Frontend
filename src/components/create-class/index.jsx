import React, { useState } from "react";
import Dropdown from "../common/dropdown";
import SearchDropdown from "../common/search-dropdown";

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
      <div className="bg-white px-6 py-10 rounded-lg shadow-md">
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <Dropdown dropdownItems={dropdownItems} label="Assign Teacher" />{" "}
          <Dropdown dropdownItems={dropdownItems} label="Qualification" />{" "}
          <Dropdown dropdownItems={dropdownItems} label="Subject" />{" "}
          <Dropdown dropdownItems={dropdownItems} label="Year" />{" "}
          <input
            className="border h-10 px-2 border-[#696969] border-opacity-55 rounded-sm"
            placeholder="05/31/2024"
          />
          <input
            className="border h-10 px-2 border-[#696969] border-opacity-55 rounded-sm"
            placeholder="12/31/2024"
          />
        </div>

        <div className="flex  items-center justify-center bg-gray-100">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            multiple
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div
            id="dropArea"
            className=" border-2 w-full mt-6 border-dashed border-[#A1A1A1] rounded-md text-blue-500 cursor-pointer px-4 py-2"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <div className="flex  items-center gap-4 justify-start">
              <button
                className="px-8 py-1 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary "
                onClick={() => document.getElementById("fileInput").click()}
              >
                Upload
              </button>
              <p className="text-[#A1A1A1] text-[12px] font-medium">
                or drag and drop file here
              </p>
            </div>
          </div>
          <div id="fileList" className="mt-4">
            {files.map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-10 mt-8 rounded-lg shadow-md">
        <SearchDropdown />
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-4 text-start text-white bg-primary py-2 bg-gray-300 rounded">
          Create Class
        </button>
      </div>
    </>
  );
};

export default CreateClass;
