import React from "react";
import { logo } from "../../assets";
import { TbBulb } from "react-icons/tb";
import { LuClock } from "react-icons/lu";
import { MdOutlineReportProblem } from "react-icons/md";

const QuizContent = () => {
  const questionArray = [
    {
      text: "Formulas, Equations and amounts of substance",
    },
    {
      text: "inorganic Chemistry and the periodic table",
    },
    {
      text: "Transitions metal",
    },
  ];
  return (
    <div className="bg-[#f0f1f7] py-40  h-screen">
      <div className="container flex-1 flex-col gap-6 justify-center items-center">
        <div className="w-full flex mb-6 justify-center items-center">
          <img src={logo} />{" "}
        </div>

        <div className="bg-white px-6 py-8">
          <div className="flex justify-end  items-center gap-2">
            <button className="bg-primary py-1 px-4 text-white flex items-center">
              <TbBulb className="text-white" />
              Hint
            </button>
            <LuClock />
            <span>00:15</span>
          </div>
          <h1 className="text-[#696969] mb-4 text-[20px] font-bold">
            Question:1
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-secondary mb-4 text-[18px] font-medium">
              What is the function of the nucleolus within the nucleus of
              eukaryotic cells?
            </p>
            <div>
              <div className="flex items-start gap-2">
                <span className="text-[14px] font-medium">Report</span>
                <MdOutlineReportProblem />
              </div>
            </div>
          </div>
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
      <div className="w-full gap-4 flex justify-center items-center">
        <button className="border border-[#232B3E] bg-transparent text-[#232B3E] mt-6 px-6 py-2">
          Continue
        </button>
        <button className="bg-[#232B3E] text-white mt-6 px-6 py-2">
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizContent;
