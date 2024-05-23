import React from "react";
import { useFormik } from "formik";
import { inputs } from "../../data";
import { formSchema } from "../../utils/helper/Schema";
import {
  google,
  joinUs,
  loginBg,
  logo,
  signAvatar,
  signbg,
} from "../../assets";
import AutoSlider from "../../components/custom-slider";
const SignUp = () => {
  const imagesData = [
    {
      avatar: joinUs,
    },

    {
      avatar: signAvatar,
    },
    {
      avatar: joinUs,
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
    <section className="h-[100vh] gap-12 grid grid-cols-2 ">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-16">
        <img src={logo} className="pb-6" />
        <h1 className="text-[22px] font-semibold">Sign up</h1>
        <span className="text-[18px] font-normal text-[#696969] ">
          Log in to continue Myscienceland!{" "}
        </span>
        <button className="flex justify-center gap-2 mt-6 bg-[#F3F6F8] items-center px-6 max-w-[20rem] w-[100%] text-[16px] font-normal mb-6 text-[#2A2A2A] rounded-sm py-2">
          <img src={google} alt="Logo" className="" />
          Sign in with Google
        </button>
        <div class="flex items-center justify-center mb-6">
          <div class="border-t border-b border-[#696969] opacity-10 flex-grow h-0"></div>
          <p class="mx-4 text-[16px] text-[#696969] font-medium ">or</p>
          <div class="border-t border-b border-[#696969] opacity-10 flex-grow h-0"></div>
        </div>
        <form className="  " onSubmit={formik.handleSubmit}>
          {inputs.map((input) => (
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
                Terms & Conditions and Privacy Polic
              </span>
            </h2>
          </div>
          <button
            className="text-[#fff] text-[14px] border border-transparent mt-6 font-normal hover:border hover:border-primary hover:bg-transparent hover:text-[#303033] bg-primary py-2 w-full"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
      <div
        style={{
          backgroundImage: `url(${signbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "164px",
          paddingRight: "164px",
        }}
      >
        <AutoSlider imagesData={imagesData} Heading="Sign up" />
      </div>
    </section>
  );
};

export default SignUp;
