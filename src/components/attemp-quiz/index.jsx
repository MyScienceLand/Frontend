import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const AtemptQuiz = () => {
  return (
    <div>
      <h1 className="text-[18px] font-medium">Please Attempt Primarily Quiz</h1>
      <p className="text-[16px] text-start font-normal text-[#696969] mb-4">
        Thank you for submitting your preferences! In order to ensure the best
        possible experience and tailor our offerings to your needs, we kindly
        request that you attempt a preliminary quiz.{" "}
      </p>
      <h1 className="text-[18px] my-4 font-medium">Your Selected Subjects</h1>
      <div className="flex items-center mb-4 justify-between">
        <div>
          <p className="text-[16px] text-[#696969] font-medium">(a Levels)</p>
          <p className="text-[16px] text-[#696969] font-medium">(Physics)</p>
          <p className="text-[16px] text-[#696969] font-medium">Edexcel</p>
          <input
            type="radio"
            id="age1"
            name="age"
            value="30"
            className="ml-6"
          />
        </div>
        <div>
          <p className="text-[16px] text-[#696969] font-medium">(a Levels)</p>
          <p className="text-[16px] text-[#696969] font-medium">(Physics)</p>
          <p className="text-[16px] text-[#696969] font-medium">Edexcel</p>
          <input
            type="radio"
            id="age1"
            name="age"
            value="30"
            className="ml-6"
          />
        </div>
        <div>
          <p className="text-[16px] text-[#696969] font-medium">(a Levels)</p>
          <p className="text-[16px] text-[#696969] font-medium">(Physics)</p>
          <p className="text-[16px] text-[#696969] font-medium">Edexcel</p>
          <input
            type="radio"
            id="age1"
            name="age"
            value="30"
            className="ml-6"
          />
        </div>
      </div>
      <p className="text-[18px] font-medium">
        Please click on selected Subjects to attempting primarily Quiz
      </p>
      <div className="">
        <button className="text-[18px] text-center font-normal w-full mt-4 text-white bg-primary py-1">
          Start
        </button>
      </div>
    </div>
  );
};

export default AtemptQuiz;
