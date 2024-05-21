import React, { useState } from "react";
import { useFormik } from "formik"; // Assuming you are using Formik for form handling
import { logo, otps } from "../../assets";
import { HiArrowLongLeft } from "react-icons/hi2";
import { otpInputs } from "../../data";

const Otps = () => {
  const [otp, setOtp] = useState(new Array(4)?.fill(""));

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
      otp: "",
      // Add other form fields if necessary
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form values:", values);
    },
  });

  return (
    <section className="h-[100vh] gap-12 grid grid-cols-2">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-8">
        <img src={logo} alt="Logo" className="pb-6 mb-20" />
        <div className="">
          <p className="flex justify-start gap-2 cursor-pointer mt-6 items-center">
            <HiArrowLongLeft />
            Back To Forgot Password
          </p>
          <h1 className="text-primary font-medium text-[18px] mt-4">
            Two-Step Verification
          </h1>
          <img src={otps} className="mt-4 mb-6" />
          <span className="text-[#696969] mt-6 text-[18px] ">
            Please enter the OTP (one time password) to verify your account. A
            Code has been sent to +1*******000
          </span>
          <form onSubmit={formik.handleSubmit}>
            <p className="text-primary text-[14px] mt-6 font-medium">
              Enter 4 Digits Code
            </p>
            <div className="flex justify-between gap-2">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-36 h-12 mt-2 mb-2 text-center text-xl border border-primary rounded "
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
            <p className="text-[#696969] text-[14px] font-medium">
              Didn't get the code? 
              <span className="text-primary cursor-pointer text-[14px] pl-2 font-medium">
                Resend{" "}
              </span>
            </p>{" "}
            <button
              className="text-[#fff] text-[14px] border border-transparent font-normal hover:border hover:border-primary hover:bg-transparent hover:text-[#303033] bg-primary py-2 w-full mt-4"
              type="submit"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-[54px] text-white font-bold">OTP Verification</h1>
        </div>
      </div>
    </section>
  );
};

export default Otps;
