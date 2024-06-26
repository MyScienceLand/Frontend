import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import usePost from '../../../hooks/usePost';

import Swal from 'sweetalert2';
import { CreateClassFile } from '../../../assets';
import { API_ROUTES } from '../../../routes/apiRoutes';
import ToastNotification from '../../ToastNotification/ToastNotification';
import Button from '../common/buttons/Button/Button';
import Dropdown from '../common/dropdowns/Dropdown/Dropdown';
import SearchDropdown from '../common/dropdowns/SearchDropdown/SearchDropdown';
import Upload from '../common/uploads/Uploads/Uploads';

const CreateClass = () => {
  const [files, setFiles] = useState([]);
  const [qualification, setQualification] = useState(null);
  const [year, setYear] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [students, setStudents] = useState([]);
  const [teacherAssigned, setTeacherAssigned] = useState([]);
  const { data: qualificationsData } = useFetch(API_ROUTES.QUALIFICATIONS);
  const { data: allStudentsData } = useFetch(API_ROUTES.EXCLUDED_STUDENTS);
  const { data: subjectsData } = useFetch(API_ROUTES.SUBJECTS);
  const { data: allTeachersData } = useFetch(API_ROUTES.ALL_TEACHERS);
  const {
    data: createClassResponse,
    postData,
    error: createClassError,
  } = usePost(API_ROUTES.CREATE_CLASS);

  const handleFiles = (selectedFiles) => {
    setFiles(Array.from(selectedFiles));
  };

  const handleTeacherAssignment = (subjectId, teacherId) => {
    setTeacherAssigned((prevAssignments) => {
      const existingAssignment = prevAssignments.find(
        (assignment) => assignment.subjectId === subjectId
      );
      if (existingAssignment) {
        return prevAssignments.map((assignment) =>
          assignment.subjectId === subjectId
            ? { subjectId, teacherId }
            : assignment
        );
      } else {
        return [...prevAssignments, { subjectId, teacherId }];
      }
    });
  };

  const handleCreateClass = () => {
    const classData = {
      className: 'string',
      qualificationId: qualification?._id || 'string',
      year: year?.value || 'string',
      startDate,
      endDate,
      studentIds: students,
      teacherAssigned,
    };
    postData(classData);
  };

  useEffect(() => {
    if (createClassError) {
      ToastNotification.error(createClassError);
      return;
    } else if (createClassResponse?.statusCode == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Class Created Successfully!',
        showConfirmButton: true,
        timer: 1500,
      });
    }
  }, [createClassResponse, createClassError]);

  const years = [
    { to: '#', name: 'year-1', value: 'year-1' },
    { to: '#', name: 'year-2', value: 'year-2' },
    { to: '#', name: 'year-3', value: 'year-3' },
    { to: '#', name: 'year-4', value: 'year-4' },
  ];

  return (
    <>
      <div className="flex justify-end mr-4 mb-6 mt-6">
        <Button title={'Create Class'} onClick={handleCreateClass} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-6">
          <Dropdown
            dropdownItems={qualificationsData?.data}
            label="Qualification"
            setSelectedItem={setQualification}
            selectedItem={qualification}
            placeholder="Select Qualification"
          />
          <Dropdown
            dropdownItems={years}
            label="Year"
            setSelectedItem={setYear}
            selectedItem={year}
            placeholder="Select Year"
          />
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Start Date
            </label>
            <input
              className="border h-10 px-2 py-6 border-[#696969] border-opacity-55 rounded-md"
              placeholder="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              End Date
            </label>
            <input
              className="border h-10 px-2 py-6 border-[#696969] border-opacity-55 rounded-md"
              placeholder="End Date"
              type="date"
              value={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <Upload filePath={CreateClassFile} />
          {allStudentsData && (
            <SearchDropdown
              data={allStudentsData?.data}
              setStudents={setStudents}
              students={students}
            />
          )}
        </div>
        <h1 className="text-[20px] font-medium mt-20">
          Select Subject And Teacher
        </h1>

        {subjectsData &&
          subjectsData?.data.map((subject) => {
            const selectedTeacher = allTeachersData?.data.teachers.find(
              (teacher) =>
                teacher.email ===
                teacherAssigned.find(
                  (assignment) => assignment.subjectId === subject._id
                )?.teacherId
            );

            return (
              <div key={subject._id} className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col justify-center">
                  <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
                    Subject
                  </label>
                  <input
                    className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-md"
                    placeholder={subject.name}
                    disabled
                  />
                </div>
                <Dropdown
                  dropdownItems={allTeachersData?.data.teachers || []}
                  label="Select Teacher"
                  placeholder="Select Teacher"
                  setSelectedItem={(teacher) =>
                    handleTeacherAssignment(subject._id, teacher.email)
                  }
                  selectedItem={selectedTeacher || null}
                />
              </div>
            );
          })}
      </div>

      <div className="flex justify-center mt-6">
        <Button title="Continue" onClick={handleCreateClass} />
      </div>
    </>
  );
};

export default CreateClass;
