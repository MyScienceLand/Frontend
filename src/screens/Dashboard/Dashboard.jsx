import React, { useState } from 'react';
import { Bio, Lab, Physics } from '../../assets/index';
import DashboardBanner from '../../components/DashboardBanner/DashboardBanner';
import DashboardMenuSelector from '../../components/DashboardMenuSelector/DashboardMenuSelector';
import FeedBack from '../../components/FeedBack/FeedBack';
import ContinueStudyingCard from '../../components/common/cards/ContinueStudyingCard/ContinueStudyingCard';
import DashboardSubjectCard from '../../components/common/cards/DashboardSubjectCard/DashboardSubjectCard';
import BarChart from '../../components/common/charts/BarChart';
import ApexChart from '../../components/common/charts/Chart';
import CustomTableDashboard from '../../components/common/tables/CustomTableDashboard/CustomTableDashboard';

const StudentDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('Subjects');
  const [selectedTopic, setSelectedTopic] = useState('Topic');
  const cardsArray = [
    {
      image: Physics,
      text: 'Quantitative Chemistry',
      className: 'bg-[#B731D2]  px-8 py2 rounded-lg min-w-[484px]',
      content: ' Chemistry',
    },
    {
      image: Lab,
      text: 'Biology',
      content: 'Attempt Biology',
      className: 'bg-[#006C8D] px-8 py2 rounded-lg min-w-[484px]',
    },
    {
      image: Bio,
      text: 'Physics',
      content: 'Attempt Biology',
      className: 'bg-[#007353] px-8 py2 rounded-lg min-w-[484px]',
    },
  ];

  return (
    <div>
      <DashboardMenuSelector
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      <DashboardBanner />

      <div>
        {cardsArray.length > 0 ? (
          <DashboardSubjectCard cardsArray={cardsArray} />
        ) : (
          <ContinueStudyingCard />
        )}

        {/* table section */}
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <CustomTableDashboard />
          <BarChart />
        </div>

        {/* chart-sec */}
        <div className="grid grid-cols-[1fr_1fr] mt-5  gap-6">
          <ApexChart />
          <FeedBack />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
