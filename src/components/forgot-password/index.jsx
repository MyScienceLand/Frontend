import React from "react";
import { useFormik } from "formik";
import { otpInputs } from "../../data";
import { formSchema } from "../../utils/helper/Schema";
import { google, joinUs, loginBg, logo } from "../../assets";
import AutoSlider from "../../components/custom-slider";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const ForgotPassword = () => {
  const imagesData = [
    {
      avatar: joinUs,
    },

    {
      avatar: joinUs,
    },
    {
      avatar: joinUs,
    },
  ];
  const formik = useFormik({
    initialValues: {
      password: "",
      name: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <section className=" h-[100vh] gap-12 grid grid-cols-2 ">
      <div className=" max-w-screen-sm w-full mx-auto gap-6 py-8">
        <img src={logo} className="pb-6 mb-20" />
        <div className="flex pt-20 justify-center flex-col">
          <p className="flex justify-start gap-2 mt-6 items-center">
            <HiArrowLongLeft />
            Back To New Password
          </p>
          <h1 className="text-primary font-medium text-[18px] mt-4">
            Forgot Pssword ?
          </h1>
          <span className="text-[#696969] mb-4 text-[18px] font-normal">
            {" "}
            Enter the email address or mobile number associated with your
            account.
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

            <button
              className="text-[#fff] text-[14px] border border-transparent font-normal hover:border hover:border-primary hover:bg-transparent hover:text-[#303033] bg-primary py-2 w-full"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-[54px] text-white font-bold">Forgot password!</h1>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
