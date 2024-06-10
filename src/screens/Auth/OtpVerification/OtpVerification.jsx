import { useFormik } from 'formik'; // Assuming you are using Formik for form handling
import React, { useEffect, useState } from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Otp, PurpleLogoWithText } from '../../../assets';
import ToastNotification from '../../../components/ToastNotification/ToastNotification';
import Button from '../../../components/common/buttons/Button/Button';

import { authLogoWidth } from '../../../constants';
import usePost from '../../../hooks/usePost';
import { registerUser } from '../../../redux/slices/authSlice';

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6)?.fill(''));
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { data, loading, error, postData } = usePost('/auth/verify/otp');
  const dispatch = useDispatch();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    const otpArray = paste.split('').slice(0, 6);
    setOtp([...otpArray, ...otp.slice(otpArray.length)]);
    otpArray.forEach((value, index) => {
      if (index < 6) {
        document.querySelectorAll('input[name^="otp"]')[index].value = value;
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    onSubmit: (values) => {},
  });

  useEffect(() => {
    if (error) {
      ToastNotification.error(error);
      setTimeout(() => {
        navigate('/otp-error');
      }, 10);
    }
    if (data) {
      ToastNotification.success(data?.verifyOtp?.message);
      if (user.otpType === 'forgetPassword') {
        navigate('/reset-password');
      }
      localStorage.setItem(
        'token',
        data?.verifyOtp?.access_token !== undefined
          ? data?.verifyOtp?.access_token
          : ''
      );
    }
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [data, error]);

  const handelVerifyOtp = () => {
    if (otp.join('') === '') {
      ToastNotification.error('Please enter Valid OTP');
      return false;
    }
    const otpValue = otp.join('');
    postData({ otp: otpValue, email: user.email });
  };

  const handelForgetPasswordOtp = () => {
    if (otp.join('') === '') {
      ToastNotification.error('Please enter Valid OTP');
      return false;
    }
    const otpValue = otp.join('');
    dispatch(registerUser({ forgetPasswordOtp: otpValue }));
    navigate('/reset-password');
  };

  return (
    <section className="h-[100vh] gap-12 grid grid-cols-2 bg-[var(--primary-color)]">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-8">
        <img src={PurpleLogoWithText} alt="Logo" width={authLogoWidth} />
        <div className="">
          <Link
            to={'/'}
            className="flex justify-start gap-2 cursor-pointer mt-6 items-center"
          >
            <HiArrowLongLeft />
            Back To Forgot Password
          </Link>
          <h1 className="text-primary font-medium text-[18px] mt-4">
            Two-Step Verification
          </h1>
          <img src={Otp} className="mt-4 mb-6" alt="Otp" />
          <span className="text-[var(--text-color)] mt-6 text-[18px] ">
            Please enter the OTP (one time password) to verify your account. A
            Code has been sent to your email: {user.email}
          </span>
          <form onSubmit={formik.handleSubmit}>
            <p className="text-primary text-[14px] mt-6 font-medium">
              Enter 6 Digits Code
            </p>
            <div className="flex justify-between gap-2">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-24 h-12 mt-2 mb-2 text-center text-xl border border-primary rounded"
                    type="text"
                    name={`otp${index}`}
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onPaste={handlePaste}
                  />
                );
              })}
            </div>
            <p className="text-[var(--text-color)] text-[14px] font-medium mb-5">
              Didn't get the code?
              <Link
                to={'/forgot-password'}
                className="text-primary text-[14px] pl-2 font-medium"
              >
                Resend
              </Link>
            </p>

            <Button
              type="submit "
              title="Verify"
              onClick={
                user.otpType === 'signup'
                  ? handelVerifyOtp
                  : handelForgetPasswordOtp
              }
            />
          </form>
        </div>
      </div>
      <div className="bg-[var(--secondary-color)]">
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-[54px] text-[var(--primary-color)] font-bold">
            OTP Verification
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OtpVerification;
