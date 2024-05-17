import React from "react";
import { useFormik } from "formik";
import { inputs } from "../../data";
import { formSchema } from "../../utils/helper/Schema";
import { google, joinUs, loginBg, logo } from "../../assets";
import AutoSlider from "../../components/custom-slider";

const Login = () => {
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
      <div className=" max-w-screen-sm w-full mx-auto gap-6 py-20">
        <img src={logo} className="pb-6" />
        <h1 className="text-[22px] font-semibold">Log in</h1>
        <span className="text-[18px] font-normal text-[#696969] ">
          Log in to continue Myscienceland!{" "}
        </span>
        <button className="flex justify-center gap-2 mt-6 bg-[#F3F6F8] items-center px-6 max-w-[20rem] w-[100%] text-[16px] font-normal mb-6 text-[#2A2A2A] rounded-sm py-2">
          <img src={google} alt="Logo" className="" />
          Log in with Google
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
                className="border h-10 px-2 border-[] rounded-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[input.name]}
              />
              {formik.touched[input.name] && formik.errors[input.name] && (
                <div className="text-red-500">{formik.errors[input.name]}</div>
              )}
            </div>
          ))}
          <div className="flex justify-between items-center">
            <div>
              <input id="firstName" name="firstName" type="checkbox" />
              <label
                className="text-[14px] font-medium text-[#303033] pl-2"
                for="vehicle1"
              >
                Remember Me{" "}
              </label>
            </div>
            <a
              href="/forgot-password"
              className="py-5 px-3 text-[14px] text-[#FF0606] hover:text-[#9C3022] underline p-0 m-0"
            >
              Forgot your password?
            </a>
          </div>
          <button
            className="text-[#fff] text-[14px] border border-transparent font-normal hover:border hover:border-primary hover:bg-transparent hover:text-[#303033] bg-primary py-2 w-full"
            type="submit"
          >
            Login
          </button>
          <h2 className="text-[18px]  text-[#868293] font-normal text-center py-5">
            Don’t have an account?
            <span className="underline text-[18px] font-normal cursor-pointer  text-primary">
              SignUp
            </span>
          </h2>
        </form>
      </div>
      <div
        style={{
          backgroundImage: `url(${loginBg})`,
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

export default Login;
