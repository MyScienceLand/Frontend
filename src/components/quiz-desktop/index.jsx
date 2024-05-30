import React from "react";

const QuizDesktop = () => {
  const sectionData = [
    {
      course: "A Levels",
      className:
        "bg-primary px-4 py-2 text-[16px] text-white font-normal cursor-pointer",
      style:
        "bg-[#006C8D] text-white px-4 py-1 text-[16px] font-normal cursor-pointer",
      subject: "biology",
    },
    {
      course: "A Levels",
      className:
        "bg-primary px-4 py-2 text-[16px] text-white font-normal cursor-pointer",
      style:
        "bg-[#006C8D] text-white px-4 py-1 text-[16px] font-normal cursor-pointer",
      subject: "biology",
    },
    {
      course: "A Levels",
      className:
        "bg-primary px-4 py-2 text-[16px] text-white font-normal cursor-pointer",
      style:
        "bg-[#006C8D] text-white px-4 py-1 text-[16px] font-normal cursor-pointer",
      subject: "biology",
    },
  ];
  return (
    <div className="">
      {sectionData.map((item, index) => (
        <div className="flex gap-2 justify-start mb-4 items-center">
          <div className={item.className}>{item.course}</div>
          <div className={item.style}>{item.subject}</div>
          <div className="text-[16px] w-[43rem] px-4 py-2 font-normal border border-[#696969]">
            Paper 1
          </div>
          <div className="text-[16px] w-[43rem] py-2 px-4 font-normal border  rounded border-[#696969]">
            Paper 2
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizDesktop;
