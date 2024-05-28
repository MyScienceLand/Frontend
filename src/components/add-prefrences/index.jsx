import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Dropdown from "../common/dropdown";
import Swal from "sweetalert2";

const AddPrefrences = () => {
  const dropdownItems = [
    { to: "#", label: "Dashboard" },
    { to: "#", label: "Settings" },
    { to: "#", label: "Earnings" },
    { to: "#", label: "Logout" },
  ];
  const handleSubmit = () => {
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Subject preferences added Successfully",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[18px] font-medium text-secondary">
          {" "}
          Add Your Prferences{" "}
        </h1>
        <MdOutlineCancel className="text-primary text-[25px] cursor-pointer" />
      </div>
      <div className="flex flex-col justify-start">
        <Dropdown dropdownItems={dropdownItems} />
        <Dropdown dropdownItems={dropdownItems} />
        <Dropdown dropdownItems={dropdownItems} />
      </div>
      <div className="flex justify-center flex-col gap-4 mt-4">
        <button
          onClick={handleSubmit}
          className="text-[18px] rounded  py-1 text-white  bg-primary font-medium"
        >
          Submit
        </button>
        <button className="text-[18px] py-1 rounded bg-primary text-white font-medium">
          Add More
        </button>
      </div>
      <h1 className="text-secondary text-[18px] font-bold mt-4">
        Your Selected Subjects
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] mt-4">
        <div>
          {" "}
          <p className="text-[18px] font-medium text-[#696969]">
            (a Levels)
          </p>{" "}
          <p className="text-[18px] font-medium text-[#696969]">(GCSE)</p>{" "}
          <p className="text-[18px] font-medium text-[#696969]">(Alevel)</p>{" "}
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#696969]">(Biology)</p>{" "}
          <p className="text-[18px] font-medium text-[#696969]">(Physics)</p>{" "}
          <p className="text-[18px] font-medium text-[#696969]">(Chemistry)</p>{" "}
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#696969]">(AQA)</p>{" "}
          <p className="text-[18px] font-medium text-[#696969]">(Edexcel)</p>{" "}
          <p className="text-[18px] font-medium text-[#696969]">(Edexcel)</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddPrefrences;
