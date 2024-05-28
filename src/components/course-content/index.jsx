import React from "react";

const CourseContent = () => {
  const subjectArray = [
    { text: "physics" },
    { text: "Biology" },
    { text: "Biology" },
  ];
  return (
    <div className="container mx-auto rounded-lg">
      <div className="bg-secondary py-2 rounded-lg">
        <div className="text-[18px] font-medium text-secondary">Biology</div>
      </div>
      <div className="">
        {subjectArray.map((subject, index) => (
          <p
            className="text-[16px] bg-primary text-center py-2 border-b rounded-lg border-secondary font-medium text-white"
            key={index}
          >
            {subject.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
