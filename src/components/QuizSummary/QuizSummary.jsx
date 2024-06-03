import React from 'react';
import DonutChart from '../common/charts/DonutChart';

import { bio, lab, physics } from '../../assets';
import DashboardSubjectCard from '../common/cards/DashboardSubjectCard/DashboardSubjectCard.jsx';
const QuizSummary = () => {
  const questionArray = [
    {
      text: 'Story genetic information',
    },
    {
      text: 'Story genetic information',
    },
    {
      text: 'Story genetic information',
    },
  ];

  const cardsArray = [
    {
      image: physics,
      text: 'Quantitative Chemistry',
      className: 'bg-[#B731D2]  px-8 py2 rounded-lg min-w-[484px]',
      content: ' Chemistry',
    },
    {
      image: lab,
      text: 'Biology',
      content: 'Attempt Biology',
      className: 'bg-[#006C8D] px-8 py2 rounded-lg min-w-[484px]',
    },
    {
      image: bio,
      text: 'Physics',
      content: 'Attempt Physics', // Fixed typo here
      className: 'bg-[#007353] px-8 py2 rounded-lg min-w-[484px]',
    },
  ];

  return (
    <>
      <div className="grid gap-8 grid-cols-[1fr_1fr]">
        <div>
          <div className="bg-[#f8f8f8] px-4  rounded py-4 mt-6">
            <h1 className="text-[18px] px-4 font-medium">Topic name</h1>
          </div>
          <div>
            <div className="bg-white rounded-md py-8">
              <div className="flex justify-between items-center border-b border-[#696969]  border-opacity-50 mb-6">
                <p className="text-[#696969] px-6 mb-4 text-[18px] font-medium">
                  Areas For Improvement
                </p>
              </div>
              <div>
                {questionArray.map((item, index) => (
                  <div
                    key={index}
                    className="border-b rounded-sm border-[#696969] mb-6 border-opacity-50 "
                  >
                    <p className="text-[16px] font-normal  px-6 py-2 text-[#696969] ">
                      <span className="text-[#2A2A2A] pr-8">#</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <DonutChart />
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-medium">What’s Next</h1>
        <DashboardSubjectCard cardsArray={cardsArray} />
      </div>
    </>
  );
};

export default QuizSummary;
