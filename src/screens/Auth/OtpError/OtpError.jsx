import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CrossIcon, PurpleLogoWithText } from '../../../assets';
import Button from '../../../components/common/buttons/Button/Button';
const OtpError = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen">
      <div className="px-8 py-6">
        <img src={PurpleLogoWithText} alt="Logo" width={100} />
      </div>
      <div className="container flex flex-col px-26 justify-center items-center pt-20">
        <img src={CrossIcon} alt="cross icon" />
        <h1 className="text-[#E3002B] text-[56px] font-medium">cross</h1>
        <p className="text-[24px] font-normal">
          OPT doesn’t Match Resend OTP for verification
        </p>
        <Button
          title={'Resend OTP'}
          onClick={() => navigate('/otp-verification')}
        />
      </div>
    </div>
  );
};

export default OtpError;
