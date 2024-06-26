import React from 'react';

const SubjectAndPaper = ({
  className,
  data,
  setPaperId,
  setPaperNumber,
  setSubjectName,
}) => {
  const { subjects, qualification, papers } = data;

  return (
    <div className="rounded-lg overflow-hidden border border-secondary flex-1">
      <div className="bg-secondary py-2 rounded-t-lg">
        <div className="text-[18px] font-medium text-white text-center">
          {subjects.name}
        </div>
      </div>
      <div className="bg-white py-2">
        <div className="text-[18px] font-medium text-secondary text-center">
          {qualification.name}
        </div>
      </div>
      {papers.map((paper, index) => (
        <p
          key={paper._id}
          className={`text-[16px] text-center py-2 border-b border-secondary font-medium ${className}`}
          onClick={() => {
            setPaperNumber(paper.name);
            setPaperId(paper._id);
            setSubjectName(subjects.name);
          }}
        >
          {paper.name}
        </p>
      ))}
    </div>
  );
};

export default SubjectAndPaper;
