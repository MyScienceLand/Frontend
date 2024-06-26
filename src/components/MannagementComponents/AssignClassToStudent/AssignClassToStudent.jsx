import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import usePost from '../../../hooks/usePost';
import { API_ROUTES } from '../../../routes/apiRoutes';
import ToastNotification from '../../ToastNotification/ToastNotification';
import Button from '../common/buttons/Button/Button';
import SearchDropdown from '../common/dropdowns/SearchDropdown/SearchDropdown';

const AssignClassToStudent = () => {
  const { data: allStudentsData } = useFetch(API_ROUTES.EXCLUDED_STUDENTS);
  const { data: allClassesData } = useFetch(API_ROUTES.ALL_CLASSES);
  const {
    data: assignClassResponse,
    error: assignClassError,
    postData: postAssignClassData,
  } = usePost(API_ROUTES.ASSIGN_CLASS_TO_STUDENTS);

  const [selectedClass, setSelectedClass] = useState(null);
  const [students, setStudents] = useState([]);

  const handleSelect = (option) => {
    setSelectedClass(option);
  };
  // console.log(selectedClass);
  const handelAssignClass = () => {
    postAssignClassData({
      classId: selectedClass?._id,
      studentIds: students,
    });
  };
  useEffect(() => {
    if (assignClassError) {
      ToastNotification.error(assignClassError);
      return;
    }
    if (assignClassResponse) {
      ToastNotification.success(assignClassResponse?.message);
    }
  }, [assignClassResponse, assignClassError]);

  return (
    <div>
      <div>
        <h1 className="text-[26px] font-medium text-[#2a2a2a]">
          Select Students
        </h1>
        <SearchDropdown
          data={allStudentsData?.data}
          setStudents={setStudents}
          students={students}
        />
      </div>
      <div className="mt-4">
        <h1 className="text-[26px] font-medium text-[#2a2a2a]">Select Class</h1>

        <div className="grid grid-cols-2 gap-4 bg-white   px-12 py-8 shadow-lg rounded-lg mt-2">
          {allClassesData &&
            allClassesData?.data.map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 border border-[#696969] border-opacity-45 rounded ${
                  selectedClass?._id === option?._id
                    ? 'bg-[var(--secondary-color)] text-white'
                    : 'bg-white'
                }`}
                onClick={() => handleSelect(option)}
              >
                {option?.className}
              </button>
            ))}
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <Button title={'Latter'} />
        <Button title={'Submit'} onClick={handelAssignClass} />
      </div>
    </div>
  );
};

export default AssignClassToStudent;
