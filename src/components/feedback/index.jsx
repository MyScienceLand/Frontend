import React from "react";

const FeedBack = () => {
  const contentArray = [
    {
      content: "Carbon-13 Spectroscopy",
    },
    {
      content: "Carbon-13 Spectroscopy",
    },
    {
      content: "Carbon-13 Spectroscopy",
    },
  ];
  return (
    <div className=" shadow-lg rounded-md mt-6">
      <div className="bg-[#F8F8F8] px-8 rounded  py-2">
        <h1 className="text-[18px] font-medium">Feedback</h1>
      </div>
      <div className="bg-white px-6 py-4">
        <div className="flex justify-start items-center gap-6">
          <p className="text-[18px] font-medium text-secondary">Score</p>
          <span className="bg-primary text-white px-4 py-1">-9621</span>
        </div>
        <p>Work On:</p>
        <div className="border border-[#696969] px-4 py-2 rounded-md">
          {contentArray.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-8 border border-[#696969] px-4 py-2 rounded-md mb-4 mt-4"
            >
              <span>#</span> <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
