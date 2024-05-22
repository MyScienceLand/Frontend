import { useFormik } from 'formik'; // Assuming you are using Formik for form handling
import React, { useState } from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { Otp, PurpleLogoWithText } from '../../../assets';
import Button from '../../../components/common/buttons/Button/Button';

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6)?.fill(''));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: '',
      // Add other form fields if necessary
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form values:', values);
    },
  });

  return (
    <section className="h-[100vh] gap-12 grid grid-cols-2 bg-[var(--primary-color)]">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-8">
        <img src={PurpleLogoWithText} alt="Logo" className="pb-6 mb-20" />
        <div className="">
          <p className="flex justify-start gap-2 cursor-pointer mt-6 items-center">
            <HiArrowLongLeft />
            Back To Forgot Password
          </p>
          <h1 className="text-primary font-medium text-[18px] mt-4">
            Two-Step Verification
          </h1>
          <img src={Otp} className="mt-4 mb-6" alt="Otp" />
          <span className="text-[var(--text-color)] mt-6 text-[18px] ">
            Please enter the OTP (one time password) to verify your account. A
            Code has been sent to +1*******000
          </span>
          <form onSubmit={formik.handleSubmit}>
            <p className="text-primary text-[14px] mt-6 font-medium">
              Enter 6 Digits Code
            </p>
            <div className="flex justify-between gap-2">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-24 h-12 mt-2 mb-2 text-center text-xl border border-primary rounded "
                    type="text"
                    name={`otp${index}`}
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
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
              onClick={() => navigate('/reset-password')}
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
