import React, { useState } from 'react';

import QuizComponent from '../../components/QuizComponent/QuizComponent';
import PaperCard from '../../components/common/cards/PaperCard/PaperCard';
import { topicArray } from '../../data/quiz';

function Quiz() {
  const sectionData = [
    {
      course: 'A Levels',
      className:
        'bg-purple-800 text-white px-4 py-2 text-[16px] font-normal cursor-pointer w-24  rounded-sm',
      subject: 'Biology',
      papers: ['Paper 1', 'Paper 2'],
    },
    {
      course: 'GCSE',
      className:
        'bg-cyan-700 text-white px-4 py-2 text-[16px] font-normal cursor-pointer w-24  rounded-sm',
      subject: 'Chemistry',
      papers: ['Paper 1', 'Paper 2'],
    },
    {
      course: 'A Levels',
      className:
        'bg-green-700 text-white px-4 py-2 text-[16px] font-normal cursor-pointer w-24  rounded-sm',
      subject: 'Physics',
      papers: ['Paper 1', 'Paper 2'],
    },
  ];

  const [selectPaper, setSelectPaper] = useState(false);
  const [topicAndStartPaper, setTopicAndStartPaper] = useState('');

  const handleSelectPaper = (paper) => {
    setSelectPaper(true);
  };

  console.log(topicAndStartPaper);
  return (
    <>
      {topicAndStartPaper ? (
        <QuizComponent topicAndStartPaper={topicAndStartPaper} />
      ) : selectPaper ? (
        <PaperCard
          topicArray={topicArray}
          setTopicAndStartPaper={setTopicAndStartPaper}
        />
      ) : (
        <div className="bg-white py-10">
          {sectionData.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 justify-center mb-4 items-center"
            >
              <div className={item.className}>{item.course}</div>
              <div className="bg-gray-300 text-black px-4 py-2 text-[16px] font-normal cursor-pointer w-24 rounded-sm">
                {item.subject}
              </div>
              {item.papers.map((paper, idx) => (
                <button
                  key={idx}
                  className="text-[16px] px-40 py-2 font-normal border border-gray-400 rounded-sm"
                  onClick={() => handleSelectPaper(paper)}
                >
                  {paper}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Quiz;
