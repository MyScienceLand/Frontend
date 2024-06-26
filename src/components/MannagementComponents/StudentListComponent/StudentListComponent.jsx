import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MalePic } from '../../../assets';
import useDelete from '../../../hooks/useDelete';
import { API_ROUTES } from '../../../routes/apiRoutes';
import ToastNotification from '../../ToastNotification/ToastNotification';
import PreLoader from '../../common/Preloader/PreLoader';

const StudentListComponent = ({
  studentsData,
  loadingStudentsData,
  refetchStudents,
  setPageNumber,
  pageNumber,
  rowsPerPage,
  totalRecords,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const {
    data: deleteStudentResponse,
    loading,
    error,
    deleteData,
  } = useDelete(API_ROUTES.DELETE_STUDENT);

  const handleDeleteStudent = async (id) => {
    await deleteData(id);
  };

  useEffect(() => {
    if (error) {
      ToastNotification.error(error);
      return;
    } else if (deleteStudentResponse) {
      ToastNotification.success(deleteStudentResponse?.message);
      refetchStudents();
    }
  }, [deleteStudentResponse, error]);

  const startIndex = (pageNumber - 1) * rowsPerPage;

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <div>
      <h1 className="text-[#000000] text-[26px] mb-4 font-medium">
        Students List
      </h1>
      {loadingStudentsData || loading ? (
        <PreLoader />
      ) : (
        <>
          <div className="rounded-lg shadow-md bg-white">
            <div className="grid grid-cols-6 py-4.5 px-4 sm:grid-cols-7 md:px-7 2xl:px-7.5">
              <div className="col-span-1.5 py-6 justify-center flex items-center">
                <p className="font-medium text-primary">#</p>
              </div>
              <div className="col-span-1.5 justify-center hidden items-center sm:flex">
                <p className="font-medium text-primary">Image</p>
              </div>
              <div className="col-span-1.5 justify-center flex items-center">
                <p className="font-medium text-primary">Name</p>
              </div>
              <div className="col-span-1.5 justify-center flex items-center">
                <p className="font-medium text-primary">Email</p>
              </div>
              <div className="col-span-1.5 justify-center flex items-center">
                <p className="font-medium text-primary">Class Name</p>
              </div>
              <div className="col-span-1.5 justify-center flex items-center">
                <p className="font-medium text-primary">Actions</p>
              </div>
            </div>
            {studentsData &&
              studentsData.map((product, key) => (
                <div
                  className="grid grid-cols-7 border-t border-[#AFAFAF] py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5"
                  key={key}
                >
                  <div className="col-span-1.5 hidden justify-center items-center sm:flex">
                    <p className="text-sm text-black ">
                      {startIndex + key + 1}
                    </p>
                  </div>
                  <div className="col-span-1.5 flex py-6 justify-center items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="h-12.5 w-15 rounded-md">
                        <img src={MalePic} alt="Product" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1.5 hidden justify-center items-center sm:flex">
                    <p className="text-sm text-black ">{`${
                      product.firstName || ''
                    } ${product.lastName || ''}`}</p>
                  </div>
                  <div className="col-span-1.5 justify-center flex items-center">
                    <p className="text-sm text-black ">{product.email}</p>
                  </div>
                  <div className="col-span-1.5 flex justify-center items-center">
                    <button className="bg-transparent rounded-sm border border-[#5E196C] text-primary hover:bg-primary hover:text-white px-6 py-1">
                      View All
                    </button>
                  </div>
                  <div className="col-span-1.5 justify-center flex items-center">
                    <div
                      className={`rounded-full p-2 ${
                        selectedItemIndex === key ? 'bg-[#F6F1FF]' : ''
                      }`}
                      onClick={() => {
                        setSelectedItemIndex(
                          selectedItemIndex === key ? -1 : key
                        );
                        handleDeleteStudent(product._id);
                      }}
                    >
                      <RiDeleteBinLine className="text-[#de2d30] text-[25px]" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Pagination
            count={Math.ceil(totalRecords / rowsPerPage)}
            page={pageNumber}
            onChange={handlePageChange}
            color="primary"
            className="flex justify-center mt-6"
          />
        </>
      )}
    </div>
  );
};

export default StudentListComponent;
