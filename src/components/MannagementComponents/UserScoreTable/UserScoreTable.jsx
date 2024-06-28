import React from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import { API_ROUTES } from '../../../routes/apiRoutes';
import { setColor } from '../../../utils/helper/HelperFunctions';

const UserScoreTable = () => {
  const classData = useSelector((state) => state.classes);
  const { data } = useFetch(
    API_ROUTES.STUDENT_PERCENTAGE_AND_SCORE(classData.viewTopicsId)
  );
  const productData = [
    {
      name: 'Apple Watch Series 7',
      category: '443',
      price: 296,
      sold: 22,
      profit: 45,
      details: 'sksndsn0',
    },
    {
      name: 'Macbook Pro M1',
      category: '443',
      price: 546,
      sold: 12,
      profit: 125,
      details: 'sksndsn0',
    },
    {
      name: 'Dell Inspiron 15',
      category: '443',
      price: 443,
      sold: 64,
      profit: 247,
      details: 'sksndsn0',
    },
    {
      name: 'HP Probook 450',
      category: '443',
      price: 499,
      sold: 72,
      profit: 103,
      details: 'sksndsn0',
    },

    {
      name: 'Apple Watch Series 7',
      category: '443',
      price: 296,
      sold: 22,
      profit: 45,
      details: 'sksndsn0',
    },
    {
      name: 'Macbook Pro M1',
      category: '443',
      price: 546,
      sold: 12,
      profit: 125,
      details: 'sksndsn0',
    },
    {
      name: 'Dell Inspiron 15',
      category: '443',
      price: 443,
      sold: 64,
      profit: 247,
      details: 'sksndsn0',
    },
    {
      name: 'HP Probook 450',
      category: '443',
      price: 499,
      sold: 72,
      profit: 103,
      details: 'sksndsn0',
    },
  ];
  console.log(data);

  return (
    <>
      <h1 className="text-[26px] font-medium">User Score</h1>
      <div className="flex gap-8 my-6">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-red-500 rounded"></div>
          <span className="text-[#2a2a2a] text-[20px] font-bold mt-2">30%</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-yellow-500 rounded"></div>
          <span className="text-[#2a2a2a] text-[20px] font-bold mt-2">50%</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-green-500 rounded"></div>
          <span className="text-[#2a2a2a] text-[20px]  font-bold mt-2">
            70%
          </span>
        </div>
      </div>
      <div className="bg-[#F8F8F8] flex px-4 rounded py-2">
        <div className="grid grid-cols-[4fr_5fr] w-full">
          <div className="">
            <p className="font-medium text-[18px] text-primary">Student Name</p>
          </div>
          <div className="">
            <p className="font-medium text-[18px] text-primary">Sub Topics</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-6 py-4.5 px-4 bg-primary sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-2 py-4 flex justify-center items-center">
            <p className="font-medium text-white">#</p>
          </div>
          <div className="col-span-2 hidden justify-center items-center sm:flex">
            <p className="font-medium text-white">Topic 1</p>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <p className="font-medium text-white">Topic 2</p>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <p className="font-medium text-white">Topic 3</p>
          </div>
        </div>
        {data &&
          data?.data.map((student, key) => (
            <div
              className="grid grid-cols-6 border-t border-[#AFAFAF] py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-2 flex border-r border-[#AFAFAF] justify-center py-6 items-center">
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <p className="text-sm text-meta-3">
                      ${student.studentName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 border-r border-[#AFAFAF] hidden justify-center items-center sm:flex">
                <p
                  className="text-sm"
                  style={{ color: setColor(student.topic1) }}
                >
                  {student.topic1}
                </p>
              </div>
              <div
                className="col-span-2 border-r 
             border-[#AFAFAF] flex items-center justify-center"
              >
                <p
                  className="text-sm"
                  style={{ color: setColor(student.topic2) }}
                >
                  ${student.topic2}
                </p>
              </div>
              <div className="col-span-2  justify-center text-center flex items-center">
                <p
                  className="text-sm"
                  style={{ color: setColor(student.topic3) }}
                >
                  {student.topic3}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserScoreTable;
