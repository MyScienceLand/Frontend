import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

import { Divider } from '@mui/material';
import Swal from 'sweetalert2';
import {
  examBoardDropdownItems,
  qualificationDropdownItems,
  subjectsDropdownItems,
} from '../../../../data/dashboard';
import StartAttemptQuiz from '../../../StartAttemptQuiz';
import Dropdown from '../../dropdowns/Dropdowns/Dropdown';
import CustomModal from '../../modals/CustomModal/CustomModal';
import Button from '../Button/Button';
import { dividerStyle } from './style';

const AddPreferences = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [qualification, setQualification] = useState(
    'Please select qualification'
  );
  const [displayStartQuiz, setDisplayStartQuiz] = useState(false);
  const [subject, setSubject] = useState('Please select Subject');
  const [examBoard, setExamBoard] = useState('Please select Board');
  const [addMorePreferences, setAddMorePreferences] = useState(1);

  const handleAddMore = () => {
    setAddMorePreferences(addMorePreferences + 1);
  };

  const handleReducePreferences = () => {
    setAddMorePreferences(addMorePreferences - 1);
  };

  const handleSubmit = () => {
    handleClose();
    Swal.fire({
      // position: "top-end",
      icon: 'success',
      title: 'Subject preferences added Successfully',
      showConfirmButton: true,
      timer: 1500,
    });
    setTimeout(() => {
      setDisplayStartQuiz(true);
      handleOpen();
    }, 1600);
  };
  console.log(qualification);
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
            <div className="flex flex-col justify-start">
              <Dropdown
                title={'Qualification'}
                dropdownItems={qualificationDropdownItems}
                value={qualification}
                setValue={setQualification}
              />
              <Dropdown
                title={'Subjects'}
                dropdownItems={subjectsDropdownItems}
                value={subject}
                setValue={setSubject}
              />
              <Dropdown
                title={'Exam Board'}
                dropdownItems={examBoardDropdownItems}
                value={examBoard}
                setValue={setExamBoard}
              />
            </div>

            {addMorePreferences > 1 && (
              <div className="flex flex-col justify-start">
                <Divider sx={dividerStyle} />
                <Dropdown
                  title={'Qualification'}
                  dropdownItems={qualificationDropdownItems}
                  value={qualification}
                  setValue={setQualification}
                />
                <Dropdown
                  title={'Subjects'}
                  dropdownItems={subjectsDropdownItems}
                  value={subject}
                  setValue={setSubject}
                />
                <Dropdown
                  title={'Exam Board'}
                  dropdownItems={examBoardDropdownItems}
                  value={examBoard}
                  setValue={setExamBoard}
                />
              </div>
            )}

            {addMorePreferences > 2 && (
              <div className="flex flex-col justify-start">
                <Divider sx={dividerStyle} />
                <Dropdown
                  title={'Qualification'}
                  dropdownItems={qualificationDropdownItems}
                  value={qualification}
                  setValue={setQualification}
                />
                <Dropdown
                  title={'Subjects'}
                  dropdownItems={subjectsDropdownItems}
                  value={subject}
                  setValue={setSubject}
                />
                <Dropdown
                  title={'Exam Board'}
                  dropdownItems={examBoardDropdownItems}
                  value={examBoard}
                  setValue={setExamBoard}
                />
              </div>
            )}
            <div className="flex justify-center flex-col gap-4 mt-4">
              <Button title={'Submit'} onClick={handleSubmit} />
              <Button
                title={'Add More'}
                icon={FaPlus}
                onClick={handleAddMore}
              />
              {addMorePreferences > 1 && (
                <Button
                  title={'Delete'}
                  icon={MdDelete}
                  onClick={handleReducePreferences}
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
