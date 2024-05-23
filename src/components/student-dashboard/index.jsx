import React from "react";
import { bio, lab, physics, student, studentBg, uper } from "../../assets";
import { array } from "yup";
import Chart from "../../components/common/chart";
import ApexChart from "../../components/common/chart";
import BarChart from "../common/barchart";
import CustomTable from "../common/customTable";
import FeedBack from "../feedback";
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
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-12 mt-6">
          {cardsArray &&
            cardsArray?.map((item, index) => {
              return (
                <div key={index} className={item?.className}>
                  {" "}
                  <div className="flex justify-end mt-4">
                    <button className="py-1  px-4 rounded-md bg-white">
                      Courses
                    </button>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <img src={item?.image} alt={item?.text} />{" "}
                    <div>
                      <span className="text-white">{item.text}</span>
                      <p className="text-[16px] text-white font-normal">
                        {item.content}
                      </p>
                      <div className="flex gap-2 justify-center items-center">
                        <img src={uper} />
                        <p className="text-white text-[12px] font-normal">
                          75% higher then last month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* table section */}
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <CustomTable />
          <FeedBack />
        </div>

        {/* chart-sec */}
        <div className="grid grid-cols-[1fr_1fr] mt-20  gap-6">
          <ApexChart />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
