import React, { useState } from "react";

const ReportQuestion = () => {
  const [formData, setFormData] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    textArea: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-[18px] mb-4 border-b border-[#696969] border-opacity-50  font-bold">
        Report Question{" "}
      </h2>
      <p className="text-[18px]">
        {" "}
        Select an option or write your reason to report this question
      </p>
      <div className="border px-4 py-2 rounded-md  border-opcaity-50">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">
            {" "}
            <p className="">Lorem ipsum dolor sit amet, consectetur</p>
          </span>
        </label>
      </div>
      <div className="border p-4 rounded-md">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">
            {" "}
            <p className="">Lorem ipsum dolor sit amet, consectetur</p>
          </span>
        </label>
      </div>
      <div className="border p-4 rounded-md">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">
            {" "}
            <p className="">Lorem ipsum dolor sit amet, consectetur</p>
          </span>
        </label>
      </div>
      <div>
        <textarea
          name="textArea"
          value={formData.textArea}
          onChange={handleChange}
          rows="4"
          placeholder="Write Your reason here"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button className="bg-primary px-4 py-2 w-full text-white">Start</button>
    </div>
  );
};

export default ReportQuestion;
