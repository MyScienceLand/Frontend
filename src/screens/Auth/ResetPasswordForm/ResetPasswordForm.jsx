import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PurpleLogoWithText } from '../../../assets';
import ResetPasswordSuccess from '../../../components/ResetPasswordSuccess/ResetPasswordSuccess';
import ToastNotification from '../../../components/ToastNotification/ToastNotification';
import Button from '../../../components/common/buttons/Button/Button';
import { authLogoWidth } from '../../../constants';
import { resetFormInputs } from '../../../data';
import usePost from '../../../hooks/usePost';
import { API_ROUTES } from '../../../routes/apiRoutes';
import { formSchema } from '../../../utils/helper/Schema';

const ResetPasswordForm = () => {
  const { data, loading, error, postData } = usePost(API_ROUTES.RESET_PASSWORD);
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
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
      ToastNotification.success(data.message);
      setTimeout(() => {
        setDisplaySuccessMessage(true);
      }, 10);
    }
  }, [data, navigate, error]);
  const handelResetPassword = async (e) => {
    e.preventDefault();
    // check if pass  and confirm pass are same
    if (formik.values.password !== formik.values.confirmPassword) {
      ToastNotification.error('Password and Confirm Password should be same');
      return;
    }

    await postData({
      password: formik.values.password,
      email: user.email,
      otp: user.forgetPasswordOtp,
    });
  };
  return (
    <>
      {displaySuccessMessage === true ? (
        <ResetPasswordSuccess />
      ) : (
        <section className=" h-[100vh] gap-12 grid grid-cols-2 bg-[var(--primary-color)]">
          <div className=" max-w-screen-sm w-full mx-auto gap-6 py-8">
            <img
              src={PurpleLogoWithText}
              className="pb-6 "
              alt="Logo"
              width={authLogoWidth}
            />
            <div className="flex pt-20 justify-center flex-col">
              <Link
                to={'/otp-verification'}
                className="flex justify-start gap-2 cursor-pointer mt-6 items-center"
              >
                <HiArrowLongLeft />
                Back To OTP
              </Link>
              <h1 className="text-primary font-medium text-[18px] mt-4">
                Reset Your Password
              </h1>
              <span className="text-[var(--text-color)] mb-4 text-[18px] font-normal">
                Please enter your new password
              </span>
              <form className="  " onSubmit={(e) => handelResetPassword(e)}>
                {resetFormInputs.map((input) => (
                  <div key={input.id} className=" flex flex-col gap-2">
                    <label
                      className="text-[var(--text-color)] text-[18px] font-medium"
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
                    {formik.touched[input.name] &&
                      formik.errors[input.name] && (
                        <div className="text-red-500">
                          {formik.errors[input.name]}
                        </div>
                      )}
                  </div>
                ))}

                <Button
                  type="submit"
                  title={'Continue'}
                  onClick={(e) => handelResetPassword(e)}
                />
              </form>
            </div>
          </div>
          <div className="bg-[var(--secondary-color)]">
            <div className="flex h-screen justify-center items-center">
              <h1 className="text-[54px] text-[var(--primary-color)] font-bold">
                Reset your password
              </h1>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ResetPasswordForm;
