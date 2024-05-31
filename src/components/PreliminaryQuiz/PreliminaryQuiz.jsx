import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import Button from '../../components/common/buttons/Button/Button';
import Dropdown from '../../components/common/dropdowns/Dropdowns/Dropdown';
import {
  examBoardDropdownItems,
  qualificationDropdownItems,
  subjectsDropdownItems,
} from '../../data/dashboard';
import { dividerStyle } from '../common/buttons/AddPreferences/style';
import PreliminaryQuizModal from '../common/modals/PreliminaryQuizModal/PreliminaryQuizModal';
import SelectedPrefrences from './SelectedPrefrences';

const PreliminaryQuiz = () => {
  const [modalOpen, setModalOpen] = useState(true); // Modal is open initially
  const [isClosable, setIsClosable] = useState(true); // cclose
  const [displayStartQuiz, setDisplayStartQuiz] = useState(false);
  const [subject, setSubject] = useState('Please select Subject');
  const [examBoard, setExamBoard] = useState('Please select Board');
  const [qualification, setQualification] = useState(
    'Please select qualification'
  );
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  // const handleClose = () => {
  //   if (isClosable) {
  //     setModalOpen(false);
  //   }
  // };
  const [addMorePreferences, setAddMorePreferences] = useState(1);

  const handleAddMore = () => {
    setAddMorePreferences(addMorePreferences + 1);
  };

  const handleReducePreferences = () => {
    setAddMorePreferences(addMorePreferences - 1);
  };
  //   useEffect(() => {
  //     // // Simulate fetching status from backend
  //     // const fetchModalStatus = async () => {
  //     //   // Simulate an API call with a delay
  //     //   setTimeout(() => {
  //     //      // Example: Set to true when backend allows closing
  //     //   }, 5000); // Simulating 5 seconds delay for backend response
  //     // };

  //     setIsClosable(false);
  //   }, []);
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

  return (
    <div>
      <PreliminaryQuizModal
        open={modalOpen}
        onClose={handleClose}
        isClosable={isClosable}
        title="My Custom Modal"
      >
        {displayStartQuiz ? (
          <SelectedPrefrences />
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
      </PreliminaryQuizModal>
    </div>
  );
};

export default PreliminaryQuiz;
