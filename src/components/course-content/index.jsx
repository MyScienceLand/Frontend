import React from "react";

const CourseContent = () => {
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
      <h1 className="text-[28px] font-medium text-secondary">Course Content</h1>
      <div className=" flex space-x-6">
        {sectionData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="rounded-lg overflow-hidden border border-secondary flex-1"
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
            <div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
