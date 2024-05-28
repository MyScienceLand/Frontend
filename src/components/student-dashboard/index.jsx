import React from "react";
import { bio, lab, physics, student, studentBg, uper } from "../../assets";
import { array } from "yup";
import Chart from "../../components/common/chart";
import ApexChart from "../../components/common/chart";
import BarChart from "../common/barchart";
import CustomTable from "../common/customTable";
import FeedBack from "../feedback";
import CardComponent from "../common/card";
const StudentDashboard = () => {
  const cardsArray = [
    {
      image: physics,
      text: "Quantitative Chemistry",
      className: "bg-[#B731D2]  px-8 py2 rounded-lg min-w-[484px]",
      content: " Chemistry",
    },
    {
      image: lab,
      text: "Biology",
      content: "Attempt Biology",
      className: "bg-[#006C8D] px-8 py2 rounded-lg min-w-[484px]",
    },
    {
      image: bio,
      text: "Physics",
      content: "Attempt Biology",
      className: "bg-[#007353] px-8 py2 rounded-lg min-w-[484px]",
    },
  ];
  const chartdata = [
    { name: "Chemistry", quantity: 10 },
    { name: "Biology", quantity: 20 },
    { name: "Physics", quantity: 15 },
  ];

  return (
    <div className="">
      {/* banner image */}
      <div
        style={{
          backgroundImage: `url(${studentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "auto",
          width: "100%",
          padding: "18px",
          borderRadius: "30px",
        }}
      >
        <div>
          <h1 className="text-[#AAFCD8] text-[42px] font-bold ">Hi, Martin</h1>
          <p className="text-white text-[28px] font-bold leading-9 ">
            You have complete 5 quiz in last ten days.
            <br /> Start Your learning today!
          </p>
        </div>
        <div className="mt-[-90px] pl-40">
          <img src={student} />
        </div>
      </div>
      {/* card-section */}
      <div>
        <CardComponent cardsArray={cardsArray} />
        {/* table section */}
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <CustomTable />
          <BarChart />
        </div>

        {/* chart-sec */}
        <div className=" grid grid-cols-[1fr_1fr] gap-6 mt-8 bg-[#f0f1f7] ">
          <ApexChart />
          <FeedBack />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
