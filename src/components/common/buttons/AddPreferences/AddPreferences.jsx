import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useFetch from '../../../../hooks/useFetch';
import usePost from '../../../../hooks/usePost';
import { API_ROUTES } from '../../../../routes/apiRoutes';
import StartAttemptQuiz from '../../../StartAttemptQuiz';
import ToastNotification from '../../../ToastNotification/ToastNotification';
import Dropdown from '../../dropdowns/Dropdowns/Dropdown';
import CustomModal from '../../modals/CustomModal/CustomModal';
import Button from '../Button/Button';
import { dividerStyle } from './style';

const AddPreferences = () => {
  const [preferences, setPreferences] = useState([
    {
      qualification: 'Please select qualification',
      subject: 'Please select Subject',
      examBoard: 'Please select Board',
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectsData, setSubjectsData] = useState();
  const [qualificationsData, setQualificationsData] = useState();
  const [boardsData, setBoardsData] = useState();
  const token = localStorage.getItem('token');
  const [displayQuizSummery, setDisplayQuizSummery] = useState(false);
  const [isCloseAbleModal, setIsCloseAbleModal] = useState(true);

  const [displayStartQuiz, setDisplayStartQuiz] = useState(false);
  const { data: userPreferences, refetch: refetchPreferences } = useFetch(
    API_ROUTES.PREFERENCES
  );
  const {
    data: qualifications,
    error: qualificationError,
    refetch: refetchQualifications,
  } = useFetch(API_ROUTES.QUALIFICATIONS);
  const {
    data: subjects,
    error: subjectError,
    refetch: refetchSubjects,
  } = useFetch(API_ROUTES.SUBJECTS);
  const {
    data: boards,
    error: boardsError,
    refetch: refetchBoards,
  } = useFetch(API_ROUTES.BOARDS);
  const {
    data: preferencesResponse,
    loading,
    error: preferencesError,
    postData,
  } = usePost(API_ROUTES.CREATE_PREFERENCES);
  const handleOpen = () => {
    refetchPreferences();
    refetchQualifications();
    refetchSubjects();
    refetchBoards();
    if (userPreferences) {
      setModalOpen(true);
    }
  };

  const handleClose = () => setModalOpen(false);
  const handleAddMore = () => {
    if (preferences.length >= 3) {
      ToastNotification.error('You can only add up to three preferences.');
      return;
    }
    const firstPreference = preferences[0];
    setPreferences([
      ...preferences,
      {
        qualification: firstPreference.qualification,
        subject: 'Please select Subject',
        examBoard: firstPreference.examBoard,
      },
    ]);
  };

  const handleReducePreferences = (index) => {
    if (index > 0) {
      setPreferences(preferences.filter((_, i) => i !== index));
    }
  };

  const handleChange = (index, field, value) => {
    const newPreferences = [...preferences];
    newPreferences[index][field] = value;
    setPreferences(newPreferences);
  };

  useEffect(() => {
    if (preferencesError) {
      ToastNotification.error(preferencesError);
    } else if (preferencesResponse) {
      ToastNotification.success(preferencesResponse?.message);
      handleClose();
      Swal.fire({
        icon: 'success',
        title: 'Subject preferences added Successfully',
        showConfirmButton: true,
        timer: 1500,
      });
      setTimeout(() => {
        setDisplayStartQuiz(true);
        handleOpen();
      }, 1600);
    }
  }, [preferencesResponse, preferencesError]);

  const handleSubmit = async () => {
    if (
      preferences.some(
        (pref) =>
          pref.qualification === 'Please select qualification' ||
          pref.subject === 'Please select Subject' ||
          pref.examBoard === 'Please select Board'
      )
    ) {
      ToastNotification.error(
        'Please complete all preferences before submitting.'
      );
      return;
    }

    const payload = preferences.map((pref) => ({
      qualificationId: pref.qualification,
      subjectId: pref.subject,
      boardId: pref.examBoard,
    }));
    postData(payload);
  };
  useEffect(() => {
    if (userPreferences?.data?.length > 0) {
      const userPreferenceSubjectIds = userPreferences.data.map(
        (item) => item.subjects.name
      );
      const filteredSubjects =
        subjects &&
        subjects?.data.filter(
          (subject) => !userPreferenceSubjectIds.includes(subject.name)
        );
      setSubjectsData(filteredSubjects);

      // find those qualifications that are not in userPreferences
      const userPreferenceQualification = userPreferences.data.map(
        (item) => item.qualification.name
      );
      const filteredQualifications = qualifications?.data.filter(
        (qualification) =>
          userPreferenceQualification.includes(qualification.name)
      );
      setQualificationsData(filteredQualifications);

      // BOARD
      const userPreferenceBoard = userPreferences.data.map(
        (item) => item.board.name
      );
      const filteredBoard = boards?.data.filter((board) =>
        userPreferenceBoard.includes(board.name)
      );
      setBoardsData(filteredBoard);
    } else {
      setSubjectsData(subjects?.data);
      setQualificationsData(qualifications?.data);
      setBoardsData(boards?.data);
    }
  }, [userPreferences]);
  useEffect(() => {
    if (displayQuizSummery) {
      handleClose();
    }
  }, [displayQuizSummery]);

  useEffect(() => {
    if (token) {
      refetchPreferences();
    }
  }, [token]);

  const [isPreliminarily, setIsPreliminarily] = useState(false);

  useEffect(() => {
    if (
      userPreferences &&
      userPreferences.data.some((item) => !item.isPrimilary)
    ) {
      setIsPreliminarily(true);
    }
  }, [userPreferences]);
  useEffect(() => {
    if (userPreferences?.data?.length < 1 || isPreliminarily === true) {
      setModalOpen(true);
      setIsCloseAbleModal(false);
      if (isPreliminarily === true) {
        setDisplayStartQuiz(true);
      }
    }
  }, [userPreferences, isPreliminarily]);
  const clearPreferences = () => {
    setPreferences([
      {
        qualification: 'Please select qualification',
        subject: 'Please select Subject',
        examBoard: 'Please select Board',
      },
    ]);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        type="button"
        className="-m-2.5 px-8 h-10 flex justify-center gap-2 items-center bg-[var(--accent-color)] text-[var(--primary-color)]  hover:text-gray-500 rounded-md"
      >
        <IoAddCircleOutline />
        Add Preferences
      </button>

      <CustomModal
        // open={modalOpen}
        open={(token && userPreferences?.data?.length < 1) || modalOpen}
        onClose={handleClose}
        title={
          displayStartQuiz
            ? 'Please Attempt Preliminary Quiz'
            : 'Add your preferences'
        }
        width={800}
        isClosable={isCloseAbleModal}
        displayCrossButton={displayStartQuiz ? false : true}
      >
        {displayStartQuiz ? (
          <StartAttemptQuiz
            setDisplayQuizSummery={setDisplayQuizSummery}
            handleClose={handleClose}
            setDisplayStartQuiz={setDisplayStartQuiz}
            clearPreferences={clearPreferences}
            setIsPreliminarily={setIsPreliminarily}
          />
        ) : (
          <div>
            {preferences.map((preference, index) => (
              <div key={index} className="flex flex-col justify-start">
                {index > 0 && <Divider sx={dividerStyle} />}
                <Dropdown
                  title="Qualification"
                  dropdownItems={qualificationsData}
                  value={preference.qualification}
                  setValue={(value) =>
                    handleChange(index, 'qualification', value)
                  }
                  disabled={index !== 0}
                />
                {subjectsData && (
                  <Dropdown
                    key={preference.subject}
                    title="Subjects"
                    dropdownItems={subjectsData.filter(
                      (subject) =>
                        !preferences
                          .slice(0, index)
                          .some((pref) => pref.subject === subject.name)
                    )}
                    value={preference.subject}
                    setValue={(value) => handleChange(index, 'subject', value)}
                  />
                )}
                <Dropdown
                  title="Exam Board"
                  dropdownItems={boardsData}
                  value={preference.examBoard}
                  setValue={(value) => handleChange(index, 'examBoard', value)}
                  disabled={index !== 0}
                />
              </div>
            ))}

            <div className="flex justify-center flex-col gap-4 mt-4">
              <Button title="Submit" onClick={handleSubmit} />
              <Button title="Add More" icon={FaPlus} onClick={handleAddMore} />
              {preferences.length > 1 && (
                <Button
                  title="Delete Last"
                  icon={MdDelete}
                  onClick={() =>
                    handleReducePreferences(preferences.length - 1)
                  }
                />
              )}
            </div>

            {userPreferences?.data.length > 0 && (
              <>
                <h1 className="text-secondary text-center text-[18px] font-bold mt-4">
                  Your Selected Subjects
                </h1>
                <div className="grid grid-cols-[1fr_1fr_1fr] text-center mt-4">
                  {userPreferences?.data.map((item, index) => (
                    <div key={index}>
                      <p className="text-[16px] text-[#696969] font-medium">
                        {item.subjects.name}
                      </p>
                      <p className="text-[16px] text-[#696969] font-medium">
                        {item.qualification.name}
                      </p>
                      <p className="text-[16px] text-[#696969] font-medium">
                        {item.board?.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </CustomModal>
    </>
  );
};

export default AddPreferences;
