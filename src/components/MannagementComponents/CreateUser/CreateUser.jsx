import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import usePost from '../../../hooks/usePost';
import { API_ROUTES } from '../../../routes/apiRoutes';
import ToastNotification from '../../ToastNotification/ToastNotification';
import Button from '../common/buttons/Button/Button';
import Dropdown from '../common/dropdowns/Dropdown/Dropdown';
import Upload from '../common/uploads/Uploads/Uploads';

const CreateUser = ({ setDisplayAssignClass }) => {
  const { data: qualificationsData } = useFetch(API_ROUTES.QUALIFICATIONS);
  const { data: boardsData } = useFetch(API_ROUTES.BOARDS);
  const { data: classesData } = useFetch(API_ROUTES.ALL_CLASSES);

  const {
    data: createTeacherResponse,
    postData: postTeacherData,
    error: createTeacherError,
  } = usePost(API_ROUTES.CREATE_TEACHER);
  const {
    data: createStudentResponse,
    postData: postStudentData,
    error: createStudentError,
  } = usePost(API_ROUTES.CREATE_STUDENT);

  const [qualification, setQualification] = useState(null);
  const [boards, setBoards] = useState(null);
  const [role, setRole] = useState(null);
  const [classes, setClasses] = useState(null);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const roleData = [{ name: 'Teacher' }, { name: 'Student' }];

  const handelSubmitTeacher = () => {
    postTeacherData({
      firstName: firstName,
      email: email,
      boardId: boards?._id,
      qualificationId: qualification?._id,
    });
  };
  useEffect(() => {
    if (createTeacherError) {
      ToastNotification.error(createTeacherError);
      return;
    }
    if (createTeacherResponse) {
      ToastNotification.success(createTeacherResponse?.message);
      setDisplayAssignClass(true);
    }
  }, [createTeacherResponse, createTeacherError]);
  const handelSubmitStudent = () => {
    postStudentData({
      firstName: firstName,
      email: email,
      boardId: boards?._id,
      qualificationId: qualification?._id,
      classId: classes?._id,
    });
  };
  useEffect(() => {
    if (createStudentError) {
      ToastNotification.error(createStudentError);
      return;
    }
    if (createStudentResponse) {
      ToastNotification.success(createStudentResponse?.message);
      setDisplayAssignClass(true);
    }
  }, [createStudentResponse, createStudentError]);

  return (
    <div>
      <div className="bg-[#f8f8f8] px-4 rounded-lg py-4 ">
        <h1 className="text-[18px] px-4 font-medium">
          {role?.name === 'Student' ? '' : 'General Info'}
        </h1>
      </div>
      <div className="bg-white px-6 py-10  shadow-md">
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <Dropdown
            dropdownItems={roleData}
            label="Role"
            setSelectedItem={setRole}
            selectedItem={role}
            placeholder="Select Role"
          />
          <div className="flex flex-col justify-center  rounded-md">
            <label className="px-4 mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Name
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center  rounded-md">
            <label className="px-4 mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Email Address
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-sm"
              placeholder="@exapmle.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Dropdown
            dropdownItems={qualificationsData?.data}
            label="Qualification"
            setSelectedItem={setQualification}
            selectedItem={qualification}
            placeholder="Select Qualification"
          />
          <Dropdown
            dropdownItems={boardsData?.data}
            label="Boards"
            setSelectedItem={setBoards}
            selectedItem={boards}
            placeholder="Select Boards"
          />
          {role?.name === 'Student' && (
            <Dropdown
              dropdownItems={classesData?.data}
              label="Classes"
              setSelectedItem={setClasses}
              selectedItem={classes}
              placeholder="Select Class"
            />
          )}
        </div>
        <div className="mt-6">
          <Upload filePath={''} />
        </div>
      </div>

      <div className="flex justify-center  items-center mt-5">
        <Button
          title="Submit"
          onClick={
            role?.name === 'Student' ? handelSubmitStudent : handelSubmitTeacher
          }
          disabled={!role || !qualification || !boards || !email || !firstName}
        />
      </div>
    </div>
  );
};

export default CreateUser;
