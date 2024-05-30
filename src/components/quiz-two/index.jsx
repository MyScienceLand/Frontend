import React from "react";

const QuizTwo = () => {
  const sectionData = [
    {
      title: "Biology",
      secondtitle: "A Levels",
      subjects: ["Physics", "Biology", "Biology"],
    },
    {
      title: "Biology",
      secondtitle: "GCSE",
      subjects: ["Physics", "Biology", "Biology"],
    },
    {
      title: "Biology",
      secondtitle: "A Levels",
      subjects: ["Physics", "Biology", "Biology"],
    },
  ];

  const classesArray = [
    ["bg-primary text-white", "bg-primary text-white", "bg-primary text-white"],
    [
      "bg-[#006C8D] text-white",
      "bg-[#006C8D] text-white",
      "bg-[#006C8D] text-white",
    ],
    [
      "bg-[#007353] text-white",
      "bg-[#007353] text-white",
      "bg-[#007353] text-white",
    ],
  ];

  return (
    <div className="px-12">
      <h1 className="text-secondary text-[28px] py-6 font-medium">
        Course Content
      </h1>
      <div className="rounded-lg overflow-hidden border border-secondary">
        <div className="flex">
          {sectionData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex-1 border-r last:border-r-0 border-secondary"
            >
              <div className="bg-secondary py-2 rounded-t-lg">
                <div className="text-[18px] font-medium text-white text-center">
                  {section.title}
                </div>
              </div>
              <div className="bg-white py-2">
                <div className="text-[18px] font-medium text-secondary text-center">
                  {section.secondtitle}
                </div>
              </div>
              {section.subjects.map((subject, index) => (
                <p
                  className={`text-[16px] text-center py-2 border-b border-secondary font-medium ${
                    classesArray[sectionIndex][
                      index % classesArray[sectionIndex].length
                    ]
                  } ${
                    index === section.subjects.length - 1 ? "rounded-b-lg" : ""
                  }`}
                  key={index}
                >
                  {subject}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizTwo;