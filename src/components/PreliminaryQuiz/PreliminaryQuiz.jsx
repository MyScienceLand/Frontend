// import { Divider } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { FaPlus } from 'react-icons/fa6';
// import { MdDelete } from 'react-icons/md';
// import Swal from 'sweetalert2';
// import Button from '../../components/common/buttons/Button/Button';
// import Dropdown from '../../components/common/dropdowns/Dropdowns/Dropdown';
// import useFetch from '../../hooks/useFetch';
// import ToastNotification from '../ToastNotification/ToastNotification';
// import { dividerStyle } from '../common/buttons/AddPreferences/style';
// import PreliminaryQuizModal from '../common/modals/PreliminaryQuizModal/PreliminaryQuizModal';
// import SelectedPrefrences from './SelectedPrefrences';

// const PreliminaryQuiz = () => {
//   const [preferences, setPreferences] = useState([
//     {
//       qualification: 'Please select qualification',
//       subject: 'Please select subject',
//       examBoard: 'Please select exam board',
//     },
//   ]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [isClosable, setIsClosable] = useState(true);
//   const [displayStartQuiz, setDisplayStartQuiz] = useState(false);
//   const { data: qualifications, error: qualificationError } =
//     useFetch('/qualifications');
//   const { data: subjects, error: subjectError } = useFetch('/subject');
//   const { data: boards, error: boardsError } = useFetch('/boards');

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (token) {
//       setModalOpen(true);
//     }
//   }, [token]);

//   useEffect(() => {
//     if (qualificationError) ToastNotification.error(qualificationError);
//     if (subjectError) ToastNotification.error(subjectError);
//     if (boardsError) ToastNotification.error(boardsError);
//     console.log(qualificationError, subjectError, boardsError);
//   }, [qualificationError, subjectError, boardsError]);

//   useEffect(() => {
//     setIsClosable(false);
//   }, []);

//   const handleOpen = () => setModalOpen(true);
//   const handleClose = () => setModalOpen(false);

//   const handleAddMore = () => {
//     setPreferences([
//       ...preferences,
//       {
//         qualification: 'Please select qualification',
//         subject: 'Please select subject',
//         examBoard: 'Please select exam board',
//       },
//     ]);
//   };

//   const handleReducePreferences = (index) => {
//     if (index > 0) {
//       setPreferences(preferences.filter((_, i) => i !== index));
//     }
//   };

//   const handleChange = (index, field, value) => {
//     const newPreferences = [...preferences];
//     newPreferences[index][field] = value;
//     setPreferences(newPreferences);
//   };

//   const handleSubmit = () => {
//     if (
//       preferences.some(
//         (pref) =>
//           pref.qualification === 'Please select qualification' ||
//           pref.subject === 'Please select subject' ||
//           pref.examBoard === 'Please select exam board'
//       )
//     ) {
//       ToastNotification.error(
//         'Please complete all preferences before submitting.'
//       );
//       return;
//     }
//     handleClose();
//     Swal.fire({
//       icon: 'success',
//       title: 'Subject preferences added Successfully',
//       showConfirmButton: true,
//       timer: 1500,
//     });
//     setTimeout(() => {
//       setDisplayStartQuiz(true);
//       handleOpen();
//     }, 1600);
//   };

//   console.log;
//   return (
//     <div>
//       <PreliminaryQuizModal
//         open={modalOpen}
//         onClose={handleClose}
//         // isClosable={isClosable}
//         isClosable={true}
//         title="My Custom Modal"
//       >
//         {displayStartQuiz ? (
//           <SelectedPrefrences />
//         ) : (
//           <div>
//             {preferences.map((preference, index) => (
//               <div key={index} className="flex flex-col justify-start">
//                 {index > 0 && <Divider sx={dividerStyle} />}
//                 <Dropdown
//                   title="Qualification"
//                   dropdownItems={qualifications?.data}
//                   value={preference.qualification}
//                   setValue={(value) =>
//                     handleChange(index, 'qualification', value)
//                   }
//                 />
//                 <Dropdown
//                   title="Subjects"
//                   dropdownItems={subjects?.data}
//                   value={preference.subject}
//                   setValue={(value) => handleChange(index, 'subject', value)}
//                 />
//                 <Dropdown
//                   title="Exam Board"
//                   dropdownItems={boards?.data}
//                   value={preference.examBoard}
//                   setValue={(value) => handleChange(index, 'examBoard', value)}
//                 />
//               </div>
//             ))}
//             <div className="flex justify-center flex-col gap-4 mt-4">
//               <Button title="Submit" onClick={handleSubmit} />
//               <Button title="Add More" icon={FaPlus} onClick={handleAddMore} />
//               {preferences.length > 1 && (
//                 <Button
//                   title="Delete Last"
//                   icon={MdDelete}
//                   onClick={() =>
//                     handleReducePreferences(preferences.length - 1)
//                   }
//                 />
//               )}
//             </div>
//             <h1 className="text-secondary text-[18px] font-bold mt-4 text-center">
//               Your Selected Subjects
//             </h1>
//             <div className="grid grid-cols-3 mt-4 gap-2 text-center">
//               <div>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (a Levels)
//                 </p>
//                 <p className="text-[18px] font-medium text-[#696969]">(GCSE)</p>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (Alevel)
//                 </p>
//               </div>
//               <div>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (Biology)
//                 </p>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (Physics)
//                 </p>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (Chemistry)
//                 </p>
//               </div>
//               <div>
//                 <p className="text-[18px] font-medium text-[#696969]">(AQA)</p>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (Edexcel)
//                 </p>
//                 <p className="text-[18px] font-medium text-[#696969]">
//                   (Edexcel)
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </PreliminaryQuizModal>
//     </div>
//   );
// };

// export default PreliminaryQuiz;
import React from 'react';

const PreliminaryQuiz = () => {
  return <div></div>;
};

export default PreliminaryQuiz;
