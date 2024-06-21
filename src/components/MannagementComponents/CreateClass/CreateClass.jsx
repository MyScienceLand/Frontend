// import React, { useState } from 'react';
// import Dropdown from '../../../components/MannagementComponents/common/dropdowns/Dropdown/Dropdown';
// import SearchDropdown from '../../../components/MannagementComponents/common/dropdowns/SearchDropdown/SearchDropdown';

// import Upload from '../common/upload';

// const CreateClass = () => {
//   const [files, setFiles] = useState([]);

//   const handleFiles = (selectedFiles) => {
//     setFiles(Array.from(selectedFiles));
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     handleFiles(event.dataTransfer.files);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const dropdownItems = [
//     { to: '#', label: 'Dashboard' },
//     { to: '#', label: 'Settings' },
//     { to: '#', label: 'Earnings' },
//     { to: '#', label: 'Logout' },
//   ];

//   return (
//     <>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="grid grid-cols-2 gap-6">
//           <Dropdown dropdownItems={dropdownItems} label="Assign Teacher" />
//           <Dropdown dropdownItems={dropdownItems} label="Qualification" />
//           <Dropdown dropdownItems={dropdownItems} label="Year" />
//           <Dropdown dropdownItems={dropdownItems} label="Start Date" />
//           <Dropdown dropdownItems={dropdownItems} label="End Date" />
//           <input
//             className="border h-10 px-2 border-gray-400 rounded-sm"
//             placeholder="05/31/2024"
//           />
//           <input
//             className="border  px-2 border-gray-400 rounded-sm"
//             placeholder="12/31/2024"
//           />
//           <Upload />

//           <SearchDropdown />
//         </div>
//       </div>

//       <div className="flex justify-center mt-6">
//         <button className="px-4 py-2 text-white bg-primary rounded bg-gray-300">
//           Create Class
//         </button>
//       </div>
//     </>
//   );
// };

// export default CreateClass;

import React from 'react';

function CreateClass() {
  return <div>CreateClass</div>;
}

export default CreateClass;
