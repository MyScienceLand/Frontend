import React from 'react';
import { Bio, Lab, Physics, Student, StudentBg } from '../../assets/index';

import FeedBack from '../../components/FeedBack/FeedBack';
import DashboardSubjectCard from '../../components/common/cards/DashboardSubjectCard/DashboardSubjectCard';
import BarChart from '../../components/common/charts/BarChart';
import ApexChart from '../../components/common/charts/Chart';
import CustomTableDashboard from '../../components/common/tables/CustomTableDashboard/CustomTableDashboard';
// import CardComponent from '../common/card';
// import CustomTable from '../common/customTable';
// import FeedBack from '../feedback';
const StudentDashboard = () => {
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
  const chartdata = [
    { name: 'Chemistry', quantity: 10 },
    { name: 'Biology', quantity: 20 },
    { name: 'Physics', quantity: 15 },
  ];

  return (
    <div>
      {/* banner image */}
      <div
        style={{
          backgroundImage: `url(${StudentBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 'auto',
          width: '100%',
          padding: '18px',
          borderRadius: '30px',
        }}
      >
        <div>
          <h1 className="text-[var(--primary-color)] text-[42px] font-bold ">
            Hi, Martin
          </h1>
          <p className="text-[var(--primary-color)] text-[28px] font-bold leading-9 ">
            You have complete 5 quiz in last ten days.
            <br /> Start Your learning today!
          </p>
        </div>
        <div className="mt-[-90px] pl-40">
          <img src={Student} alt="Student" />
        </div>
      </div>
      {/* card-section */}
      <div>
        <DashboardSubjectCard cardsArray={cardsArray} />
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
