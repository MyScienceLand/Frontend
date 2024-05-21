// import React from 'react';
// import { HiArrowLongLeft } from 'react-icons/hi2';
// import { Lock } from '../../assets/index';
// import Button from '../common/buttons/Button/Button';

// const ResetPasswordSuccess = () => {
//   return (
//     <div className="container h-screen gap-4 flex justify-center flex-col items-center">
//       <img src={Lock} alt="Lock" />
//       <h1 className="text-[54px] text-[var(--text-color)] font-medium">
//         Successful Password Reset!
//       </h1>
//       <p className="text-[24px] text-center text-[var(--text-color)] font-normal">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua.
//       </p>

//       <Button title="Continue" />
//       <p className="flex justify-center gap-2 items-center">
//         <HiArrowLongLeft />
//         Back To New Password
//       </p>
//     </div>
//   );
// };

// export default ResetPasswordSuccess;
import React from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { Lock } from '../../assets/index';
import Button from '../common/buttons/Button/Button';

const ResetPasswordSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-white ">
      <img src={Lock} alt="Lock" className="w-28 h-28" />
      <h1 className="text-3xl font-semibold text-purple-700">
        Successful Password Reset!
      </h1>
      <p className="text-center text-gray-600 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className=" max-w-screen-sm w-full">
        <Button title="Continue" />
      </div>
      <Link
        to="/"
        className="flex items-center gap-2 mt-4 text-purple-700 cursor-pointer"
      >
        <HiArrowLongLeft />
        Back To New Login
      </Link>
    </div>
  );
};

export default ResetPasswordSuccess;
