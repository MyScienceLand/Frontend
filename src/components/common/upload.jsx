import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";

const Upload = () => {
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

  const downloadCSV = () => {
    if (files.length === 0) return;

    const csvContent =
      "data:text/csv;charset=utf-8," +
      files.map((file) => file.name).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "files.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center bg-gray-100">
        <input
          type="file"
          id="fileInput"
          className="hidden"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div
          id="dropArea"
          className="border-2 w-full border-dashed border-[#A1A1A1] rounded-md text-blue-500 cursor-pointer px-4 py-2"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <div className="flex items-center gap-4 justify-start">
            <button
              className="px-8 py-1 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary"
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
      <button
        onClick={downloadCSV}
        className="absolute flex justify-center items-center gap-2 right-4 px-4 py-2  text-primary"
      >
        <BsDownload className="text-primary" />
        Download CSV File{" "}
      </button>
    </div>
  );
};

export default Upload;
