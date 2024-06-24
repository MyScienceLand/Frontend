import React from 'react';
import DonutChart from '../common/charts/DonutChart';

import { Bio, Lab, Physics } from '../../assets/index';
import useFetch from '../../hooks/useFetch.js';
import { API_ROUTES } from '../../routes/apiRoutes.js';
import PreLoader from '../common/Preloader/PreLoader.jsx';
import ContinueStudyingCard from '../common/cards/ContinueStudyingCard/ContinueStudyingCard.jsx';
import DashboardSubjectCard from '../common/cards/DashboardSubjectCard/DashboardSubjectCard.jsx';
const QuizSummary = ({ quizId }) => {
  const { data, loading } = useFetch(API_ROUTES.QUIZ_SUMMARY(quizId));
  console.group(data);
  const { topicName, improvments, score, obtainedScore, totalScore } =
    data?.data || {};
  // const { data: continueStudy } = useFetch(API_ROUTES.CONTINUE_STUDY);
  const { data: continueStudy } = useFetch(API_ROUTES.CONTINUE_QUIZ);
  const cardStyle = [
    {
      image: Physics,
      className: 'bg-[#B731D2]  px-8 py2 rounded-lg min-w-[484px]',
    },
    {
      image: Lab,
      className: 'bg-[#006C8D] px-8 py2 rounded-lg min-w-[484px]',
    },
    {
      image: Bio,
      className: 'bg-[#007353] px-8 py2 rounded-lg min-w-[484px]',
    },
  ];
  // const cardsArray = cardStyle.map((card, index) => {
  //   const studyData = continueStudy?.data[index];
  //   return studyData ? { ...card, ...studyData } : card;
  // });
  const relevantCards = continueStudy?.data.slice(0, cardStyle.length) || [];

  const cardsArray = relevantCards.map((studyData, index) => {
    const card = cardStyle[index];
    return studyData ? { ...card, ...studyData } : card;
  });
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <div className="grid gap-8 grid-cols-[1fr_1fr]">
            <div>
              <div className="bg-[#f8f8f8] px-4  rounded py-4 mt-6">
                <h1 className="text-[18px] px-4 font-medium">{topicName}</h1>
              </div>
              <div>
                <div className="bg-white rounded-md py-8">
                  <div className="flex justify-between items-center border-b border-[#696969]  border-opacity-50 mb-6">
                    <p className="text-[#696969] px-6 mb-4 text-[18px] font-medium">
                      Areas For Improvement
                    </p>
                  </div>
                  <div>
                    {improvments.map((item, index) => (
                      <div
                        key={index}
                        className="border-b rounded-sm border-[#696969] mb-6 border-opacity-50 "
                      >
                        <p className="text-[16px] font-normal  px-6 py-2 text-[#696969] ">
                          <span className="text-[#2A2A2A] pr-8">#</span> {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DonutChart
                score={score}
                obtainedScore={obtainedScore}
                totalScore={totalScore}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[18px] font-medium">What’s Next</h1>
            {/* <DashboardSubjectCard cardsArray={cardsArray} /> */}
            {continueStudy?.data.length > 0 ? (
              <DashboardSubjectCard cardsArray={cardsArray} />
            ) : (
              <ContinueStudyingCard />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default QuizSummary;
