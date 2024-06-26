import React, { useState } from 'react';
import TeacherListComponent from '../../../../components/MannagementComponents/TeachersListComponent/TeachersListComponent';
import useFetch from '../../../../hooks/useFetch';
import { API_ROUTES } from '../../../../routes/apiRoutes';

const TeachersList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage] = useState(10);
  const {
    data: teacherData,
    loading: loadingTeacherData,
    refetch: refetchTeachers,
  } = useFetch(
    API_ROUTES.ALL_TEACHERS + `?page=${pageNumber}&limit=${rowsPerPage}`
  );
  return (
    <div>
      <TeacherListComponent
        teacherData={teacherData?.data.teachers}
        loadingTeacherData={loadingTeacherData}
        refetchTeachers={refetchTeachers}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        rowsPerPage={rowsPerPage}
        totalRecords={teacherData?.data.total}
      />
    </div>
  );
};

export default TeachersList;
