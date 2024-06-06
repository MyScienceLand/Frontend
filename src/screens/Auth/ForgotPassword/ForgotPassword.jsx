import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PurpleLogoWithText } from '../../../assets';
import ToastNotification from '../../../components/ToastNotification/ToastNotification';
import Button from '../../../components/common/buttons/Button/Button';
import { authLogoWidth } from '../../../constants';
import { otpInputs } from '../../../data';
import usePost from '../../../hooks/usePost';
import { registerUser } from '../../../redux/slices/authSlice';
import { formSchema } from '../../../utils/helper/Schema';

const ForgotPassword = () => {
  const { data, loading, error, postData } = usePost('/auth/forgotPassword');
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      ToastNotification.error(error);
    } else if (data) {
      ToastNotification.success(data?.data.message);
      dispatch(registerUser({ ...formik.values, otpType: 'forgetPassword' }));
      setTimeout(() => {
        navigate('/otp-verification');
      }, 10);
    }
  }, [data, navigate, error]);
  const handelSendOtp = (e) => {
    e.preventDefault();
    postData(formik.values);
  };
  return (
    <section className=" h-[100vh] gap-12 grid grid-cols-2 bg-[var(--primary-color)]">
      <div className=" max-w-screen-sm w-full mx-auto gap-6 py-8 ">
        <img
          src={PurpleLogoWithText}
          className=" mt-20"
          alt="Logo"
          width={authLogoWidth}
        />
        <div className="flex pt-5 justify-center flex-col">
          <Link
            to={'/login'}
            className="flex justify-start gap-2 mt-6 items-center"
          >
            <HiArrowLongLeft />
            Back To Log In
          </Link>
          <h1 className="text-primary font-medium text-[18px] mt-4">
            Forgot Pssword ?
          </h1>
          <span className="text-[#696969] mb-4 text-[18px] font-normal">
            Enter the email address associated with your account.
          </span>
          <form className="  " onSubmit={(e) => handelSendOtp(e)}>
            {otpInputs.map((input) => (
              <div key={input.id} className="mt-6 flex flex-col gap-2">
                <label
                  className="text-[#000000] text-[18px] font-medium"
                  htmlFor={input.id}
                >
                  {input.label}
                </label>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  className="border h-10 px-2 mb-8 rounded-sm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[input.name]}
                />
                {formik.touched[input.name] && formik.errors[input.name] && (
                  <div className="text-red-500">
                    {formik.errors[input.name]}
                  </div>
                )}
              </div>
            ))}

            <Button
              type="submit"
              className="mt-6"
              title="Continue"
              onClick={(e) => handelSendOtp(e)}
            />
          </form>
        </div>
      </div>
      <div className="bg-[var(--secondary-color)]">
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-[54px] text-[var(--primary-color)] font-bold">
            Forgot password!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
