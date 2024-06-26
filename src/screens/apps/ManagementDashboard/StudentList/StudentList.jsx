import React, { useState } from 'react';
import StudentListComponent from '../../../../components/MannagementComponents/StudentListComponent/StudentListComponent';
import useFetch from '../../../../hooks/useFetch';
import { API_ROUTES } from '../../../../routes/apiRoutes';
const StudentList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage] = useState(10);
  const {
    data: studentsData,
    loading: loadingStudentsData,
    refetch: refetchStudents,
  } = useFetch(
    API_ROUTES.ALL_STUDENTS + `?page=${pageNumber}&limit=${rowsPerPage}`
  );
  return (
    <div>
      <StudentListComponent
        studentsData={studentsData?.data.student}
        loadingStudentsData={loadingStudentsData}
        refetchStudents={refetchStudents}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        rowsPerPage={rowsPerPage}
        totalRecords={studentsData?.data.total}
      />
    </div>
  );
};

export default StudentList;
