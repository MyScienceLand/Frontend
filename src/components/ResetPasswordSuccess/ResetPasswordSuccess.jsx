import React from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { Lock } from '../../assets/index';
import Button from '../common/buttons/Button/Button';

const ResetPasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-[var(--primary-color)] ">
      <img src={Lock} alt="Lock" className="w-28 h-28" />
      <h1 className="text-3xl font-semibold text-[var(--secondary-color)]">
        Successful Password Reset!
      </h1>
      <p className="text-center text-gray-600 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className=" max-w-screen-sm w-full">
        <Button title="Continue" onClick={() => navigate('/login')} />
      </div>
      <Link
        to="/"
        className="flex items-center gap-2 mt-4 text-[var(--secondary-color)] cursor-pointer"
      >
        <HiArrowLongLeft />
        Back To New Login
      </Link>
    </div>
  );
};

export default ResetPasswordSuccess;
