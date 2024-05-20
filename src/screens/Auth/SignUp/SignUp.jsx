import React from "react";
import { useFormik } from "formik";

import { PurpleLogoWithText, JoinUs, signUpBg } from "../../../assets";
import AutoSlider from "../../../components/custom-slider/index";
import { signupInputs } from "../../../data";
import { formSchema } from "../../../utils/helper/Schema";
import { SignUpImage } from "../../../assets";
import Button from "../../../components/common/buttons/Button/Button";
const SignUp = () => {
  const imagesData = [
    {
      avatar: SignUpImage,
    },

    {
      avatar: JoinUs,
    },
    {
      avatar: SignUpImage,
    },
  ];
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <section className="bg-white h-[100vh] gap-12 grid grid-cols-2 ">
      <div className=" max-w-screen-sm w-full mx-auto gap-6 py-16">
        <img src={PurpleLogoWithText} className="pb-6" alt="Logo" />
        <h1 className="text-[22px] font-semibold">Sign up</h1>
        <span className="text-[18px] font-normal text-[#696969] ">
          Log in to continue Myscienceland!
        </span>

        <div class="flex items-center justify-center mb-6">
          <div class="border-t border-b border-[#696969] opacity-10 flex-grow h-0"></div>
          <p class="mx-4 text-[16px] text-[#696969] font-medium ">or</p>
          <div class="border-t border-b border-[#696969] opacity-10 flex-grow h-0"></div>
        </div>
        <form className="  " onSubmit={formik.handleSubmit}>
          {signupInputs.map((input) => (
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
                className="border h-10 px-2 border-[#696969] border-opacity-55 rounded-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[input.name]}
              />
              {formik.touched[input.name] && formik.errors[input.name] && (
                <div className="text-red-500">{formik.errors[input.name]}</div>
              )}
            </div>
          ))}

          <div className="flex justify-center gap-2 items-center">
            <div>
              <input id="firstName" name="firstName" type="checkbox" />
            </div>
            <h2 className="text-[18px]  text-[#868293] font-normal text-center py-5">
              By creating account you agree to our{" "}
              <span className="underline text-[18px] font-normal cursor-pointer  text-primary">
                Terms & Conditions and Privacy Policy
              </span>
            </h2>
          </div>

          <Button
            title="Create Account"
            type="submit"
            onClick={() => console.log("Login clicked!")}
          />
        </form>
      </div>
      <div
        style={{
          backgroundImage: `url(${signUpBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "164px",
          paddingRight: "164px",
        }}
      >
        <AutoSlider imagesData={imagesData} />
      </div>
    </section>
  );
};

export default SignUp;
