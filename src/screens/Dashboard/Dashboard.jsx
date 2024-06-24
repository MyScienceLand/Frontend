import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Bio, Lab, Physics } from '../../assets/index';
import DashboardBanner from '../../components/DashboardBanner/DashboardBanner';
import DashboardMenuSelector from '../../components/DashboardMenuSelector/DashboardMenuSelector';
import FeedBack from '../../components/FeedBack/FeedBack';
import ContinueStudyingCard from '../../components/common/cards/ContinueStudyingCard/ContinueStudyingCard';
import DashboardSubjectCard from '../../components/common/cards/DashboardSubjectCard/DashboardSubjectCard';
import BarChart from '../../components/common/charts/BarChart';
import ApexChart from '../../components/common/charts/Chart';
import CustomTableDashboard from '../../components/common/tables/CustomTableDashboard/CustomTableDashboard';
import useFetch from '../../hooks/useFetch';
import { updateQuiz } from '../../redux/slices/quizSlice';
import { API_ROUTES } from '../../routes/apiRoutes';

const StudentDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('Subjects');
  const [selectedTopic, setSelectedTopic] = useState('Topic');
  const dispatch = useDispatch();

  const { data: completedQuiz } = useFetch(API_ROUTES.COMPLETED_QUIZ);
  const { data: continueStudy } = useFetch(API_ROUTES.CONTINUE_QUIZ);
  const { data: progress } = useFetch(API_ROUTES.PROGRESS);
  const { data: barGraphData } = useFetch(API_ROUTES.SPENT_TIME_GRAPH);
  const { data: subjectGraphData } = useFetch(API_ROUTES.SUBJECTS_GRAPH);
  const { data: feedbackData } = useFetch(API_ROUTES.FEEDBACK);

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

  useEffect(() => {
    dispatch(
      updateQuiz({
        isPending: false,
      })
    );
  }, [continueStudy]);

  return (
    <div>
      {/* {JSON.stringify(continueStudy?.data)} */}
      <DashboardMenuSelector
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      {completedQuiz && (
        <DashboardBanner completedQuiz={completedQuiz?.data.completedQuiz} />
      )}

      <div>
        {continueStudy?.data.length > 0 ? (
          <DashboardSubjectCard cardsArray={cardsArray} />
        ) : (
          <ContinueStudyingCard />
        )}

        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <CustomTableDashboard progress={progress?.data} />
          <BarChart barGraphData={barGraphData?.data} />
        </div>
        <div className="grid grid-cols-[1fr_1fr] mt-5  gap-6">
          <ApexChart subjectGraphData={subjectGraphData?.data} />
          <FeedBack feedbackData={feedbackData?.data} />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
