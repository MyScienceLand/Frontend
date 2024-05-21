import { useFormik } from 'formik';
import React from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { PurpleLogoWithText } from '../../../assets';
import Button from '../../../components/common/buttons/Button/Button';
import { otpInputs } from '../../../data';
import { formSchema } from '../../../utils/helper/Schema';

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      name: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  const navigate = useNavigate();

  return (
    <section className=" h-[100vh] gap-12 grid grid-cols-2 bg-[var(--primary-color)]">
      <div className=" max-w-screen-sm w-full mx-auto gap-6 py-8 ">
        <img src={PurpleLogoWithText} className="pb-6 mb-20" alt="Logo" />
        <div className="flex pt-20 justify-center flex-col">
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
          <form className="  " onSubmit={formik.handleSubmit}>
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
              onClick={() => navigate('/otp-verification')}
            />
          </form>
        </div>
      </div>
      <div className="bg-[var(--secondary-color)]">
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-[54px] text-white font-bold">Forgot password!</h1>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
