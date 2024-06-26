import React, { useState } from 'react';
import PreLoader from '../../common/Preloader/PreLoader';

const TeacherListComponent = ({
  teacherData,
  loadingTeacherData,
  refetchTeachers,
  setPageNumber,
  pageNumber,
  rowsPerPage,
  totalRecords,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const startIndex = (pageNumber - 1) * rowsPerPage;

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };
  return (
    <>
      <h1 className="text-[#000000] text-[26px] font-medium">
        List Of Teachers
      </h1>
      {loadingTeacherData ? (
        <PreLoader />
      ) : (
        <div className="rounded-lg shadow-md bg-white">
          <div className="grid grid-cols-6 py-4.5 px-4  sm:grid-cols-6 md:px-6 2xl:px-7.5">
            <div className="col-span-1.5 py-6 justify-start flex items-center">
              <p className="font-medium text-primary">#</p>
            </div>
            <div className="col-span-1.5 justify-center hidden items-center sm:flex">
              <p className="font-medium text-primary">Name</p>
            </div>

            <div className="col-span-1.5 justify-center flex items-center">
              <p className="font-medium text-primary">Subject</p>
            </div>
            <div className="col-span-1.5 justify-center flex items-center">
              <p className="font-medium text-primary">Email</p>
            </div>
            <div className="col-span-1.5 justify-center flex items-center">
              <p className="font-medium text-primary">Class Details</p>
            </div>
          </div>
          {teacherData &&
            teacherData.map((teacher, key) => (
              <div
                className="grid grid-cols-6 border-t border-[#AFAFAF] py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5"
                key={key}
              >
                <div className="col-span-1.5 hidden items-center sm:flex py-6">
                  <p className="text-sm text-black text-center">
                    {startIndex + key + 1}
                  </p>
                </div>
                <div className="col-span-1.5 justify-center flex items-center">
                  <p className="text-sm text-black ">{`${
                    teacher.firstName || ''
                  } ${teacher.lastName || ''}`}</p>
                </div>
                <div className="col-span-1.5 justify-center flex items-center">
                  <p className="text-sm text-black ">{teacher.subjectName}</p>
                </div>
                <div className="col-span-1.5 justify-center flex items-center">
                  <p className="text-sm text-meta-3">${teacher.email}</p>
                </div>
                <div className="col-span-1.5 flex justify-center items-center">
                  <button className="bg-transparent rounded-sm border border-[#5E196C]   text-primary hover:bg-primary hover:text-white px-6 py-1">
                    View All
                  </button>
                </div>
              </div>
            ))}
          {/* <Pagination // Todo: Ask Usama to add this
            count={Math.ceil(totalRecords / rowsPerPage)}
            page={pageNumber}
            onChange={handlePageChange}
            color="primary"
            className="flex justify-center mt-6"
          /> */}
        </div>
      )}
    </>
  );
};

export default TeacherListComponent;
