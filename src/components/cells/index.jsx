import React from "react";
import QuizTwo from "../quiz-two";
import { bio } from "../../assets";
import { FaRegClock } from "react-icons/fa";

const Cells = () => {
  return (
    <div className="">
      <h1 className="text-[28px] py-6 px-8 font-medium text-secondary">
        Course Content
      </h1>

      <QuizTwo />
      <div className="px-12">
        <h1 className="text-[18px] font-medium mt-5 text-secondary">
          Study Next
        </h1>
        <div className="bg-[#D6DBFF] rounded-md px-12 py-8">
          <div className="flex justify-between items-center mb-4 ">
            <img src={bio} className="h-[60px]" />
            <button className="text-[12px] shadow-lg px-6 py-2 bg-white font-medium">
              Course
            </button>
          </div>
          <span className="text-[16px] font-medium text-secondary">
            Environmental Chemistry
          </span>
          <div className="flex items-center gap-2">
            <span className="#696969 text-[14px] font-normal">23 Courses</span>
            <FaRegClock />
            <span className="text-[#696969] text-[14px] font-normal">
              45 Hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cells;
