import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useFetch from '../../../../hooks/useFetch';
import usePost from '../../../../hooks/usePost';
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
  const [displayStartQuiz, setDisplayStartQuiz] = useState(false);
  const { data: qualifications, error: qualificationError } =
    useFetch('/qualifications');
  const { data: subjects, error: subjectError } = useFetch('/subject');
  const { data: boards, error: boardsError } = useFetch('/boards');
  const {
    data: preferencesResponse,
    loading,
    error: preferencesError,
    postData,
  } = usePost('/user-preferences/create');
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleAddMore = () => {
    setPreferences([
      ...preferences,
      {
        qualification: 'Please select qualification',
        subject: 'Please select Subject',
        examBoard: 'Please select Board',
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
    // e.preventDefault();

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

    // Collect IDs for submission
    const payload = preferences.map((pref) => ({
      qualificationId: pref.qualification,
      subjectId: pref.subject,
      boardId: pref.examBoard,
    }));
    postData(payload);
    // if(!error)
    // handleClose();
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Subject preferences added Successfully',
    //   showConfirmButton: true,
    //   timer: 1500,
    // });
    // setTimeout(() => {
    //   setDisplayStartQuiz(true);
    //   handleOpen();
    // }, 1600);
  };
  // useEffect(() => {
  //   if (qualificationError) ToastNotification.error(qualificationError);
  //   if (subjectError) ToastNotification.error(subjectError);
  //   if (boardsError) ToastNotification.error(boardsError);
  // }, [qualificationError, subjectError, boardsError]);
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
        open={modalOpen}
        onClose={handleClose}
        title="Add Your Preferences"
        width={displayStartQuiz ? 400 : 600}
      >
        {displayStartQuiz ? (
          <StartAttemptQuiz />
        ) : (
          <div>
            {preferences.map((preference, index) => (
              <div key={index} className="flex flex-col justify-start">
                {index > 0 && <Divider sx={dividerStyle} />}
                <Dropdown
                  title="Qualification"
                  dropdownItems={qualifications?.data}
                  value={preference.qualification}
                  setValue={(value) =>
                    handleChange(index, 'qualification', value)
                  }
                />
                <Dropdown
                  title="Subjects"
                  dropdownItems={subjects?.data}
                  value={preference.subject}
                  setValue={(value) => handleChange(index, 'subject', value)}
                />
                <Dropdown
                  title="Exam Board"
                  dropdownItems={boards?.data}
                  value={preference.examBoard}
                  setValue={(value) => handleChange(index, 'examBoard', value)}
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
            <h1 className="text-secondary text-[18px] font-bold mt-4 text-center">
              Your Selected Subjects
            </h1>
            <div className="grid grid-cols-3 mt-4 gap-2 text-center">
              <div>
                <p className="text-[18px] font-medium text-[#696969]">
                  (a Levels)
                </p>
                <p className="text-[18px] font-medium text-[#696969]">(GCSE)</p>
                <p className="text-[18px] font-medium text-[#696969]">
                  (Alevel)
                </p>
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#696969]">
                  (Biology)
                </p>
                <p className="text-[18px] font-medium text-[#696969]">
                  (Physics)
                </p>
                <p className="text-[18px] font-medium text-[#696969]">
                  (Chemistry)
                </p>
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#696969]">(AQA)</p>
                <p className="text-[18px] font-medium text-[#696969]">
                  (Edexcel)
                </p>
                <p className="text-[18px] font-medium text-[#696969]">
                  (Edexcel)
                </p>
              </div>
            </div>
          </div>
        )}
      </CustomModal>
    </>
  );
};

export default AddPreferences;
