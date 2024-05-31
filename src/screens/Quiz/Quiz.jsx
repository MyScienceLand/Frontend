import React from 'react';

function Quiz() {
  const sectionData = [
    {
      course: 'A Levels',
      className:
        'bg-[var(--secondary-color)] px-6 py-2 text-[16px] text-white font-normal cursor-pointer',
      style:
        'bg-[#006C8D] text-white px-4 py-1 text-[16px] font-normal cursor-pointer',
      subject: 'biology',
    },
    {
      course: 'A Levels',
      className:
        'bg-[var(--secondary-color)] px-6 py-2 text-[16px] text-white font-normal cursor-pointer',
      style:
        'bg-[#006C8D] text-white px-4 py-1 text-[16px] font-normal cursor-pointer',
      subject: 'biology',
    },
    {
      course: 'A Levels',
      className:
        'bg-[var(--secondary-color)] px-6 py-2 text-[16px] text-white font-normal cursor-pointer',
      style:
        'bg-[#006C8D] text-white px-4 py-1 text-[16px] font-normal cursor-pointer',
      subject: 'biology',
    },
  ];
  return (
    <div className="bg-white h-94 py-20">
      {sectionData.map((item, index) => (
        <div className="flex gap-6 justify-center mb-4 items-center">
          <div className={item.className}>{item.course}</div>
          <div className={item.style}>{item.subject}</div>
          <div className="text-[16px] px-40 py-2 font-normal border border-[#696969]">
            Paper 1
          </div>
          <div className="text-[16px] px-40 py-2 font-normal border  rounded border-[#696969]">
            Paper 2
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quiz;
