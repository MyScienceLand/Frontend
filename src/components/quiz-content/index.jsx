import React from "react";
import { logo } from "../../assets";

const QuizContent = () => {
  const questionArray = [
    {
      text: "Story genetic information",
    },
    {
      text: "Story genetic information",
    },
    {
      text: "Story genetic information",
    },
    {
      text: "Story genetic information",
    },
  ];
  return (
    <div className="bg-[#f0f1f7] py-40  h-screen">
      <div className="container flex-1 flex-col gap-6 justify-center items-center">
        <div className="w-full flex mb-6 justify-center items-center">
          <img src={logo} />{" "}
        </div>

        <div className="bg-white px-6 py-8">
          <h1 className="text-[#696969] mb-4 text-[20px] font-bold">
            Question:1
          </h1>
          <p className="text-secondary mb-4 text-[18px] font-medium">
            What is the function of the nucleolus within the nucleus of
            eukaryotic cells?
          </p>
          <div>
            {questionArray.map((item, index) => (
              <div className="border rounded-sm border-[#696969] mb-6 border-opacity-55 px-6 py-2 ">
                <p className="text-[18px] text-secondary font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="bg-[#232B3E] text-white mt-6 px-6 py-2">
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizContent;
