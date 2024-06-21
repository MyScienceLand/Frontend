import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { Bio } from '../../assets';

const NextStudyCard = () => {
  return (
    <div className="px-12">
      <h1 className="text-[18px] font-medium mt-5 text-secondary">
        Study Next
      </h1>
      <div className="bg-[#D6DBFF] rounded-md px-12 py-8">
        <div className="flex justify-between items-center mb-4 ">
          <img src={Bio} className="h-[60px]" alt="bio" />
          <button className="text-[12px] shadow-lg px-6 py-2 bg-white font-medium rounded-md">
            Chemistry
          </button>
        </div>
        <span className="text-[16px] font-bold text-secondary">
          Environmental Chemistry
        </span>
        <div className="flex items-center gap-5">
          <span className="#696969 text-[14px] font-normal">23 Courses</span>
          <div className="flex  items-center gap-2">
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

export default NextStudyCard;
