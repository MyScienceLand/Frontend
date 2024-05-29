import React from "react";

const QuizDesktop = () => {
  const sectionData = [
    {
      course: "A Levels",
      class: "bg-primary px-4 py-2 text-[16px] font-normal",
      style: "bg-[#006C8D] px-4 py-1 text-[16px] font-normal",
      subject: "biology",
    },
  ];
  return (
    <div className="container mx-auto">
      {sectionData.map((item, index) => (
        <div className="flex gap-6 justify-center items-center">
          <div className={item.className}>{item.course}</div>
          <div className={item.style}>{item.subject}</div>
          <div className="text-[16px] px-20 py-2 font-normal border border-[#696969]">
            Paper 1
          </div>
          <div className="text-[16px] px-20 py-2 font-normal border rounded border-[#696969]">
            Paper 2
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizDesktop;
