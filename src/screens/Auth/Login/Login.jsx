import React from "react";
import { useFormik } from "formik";
import { loginInputs } from "../../../data/index";
import { formSchema } from "../../../utils/helper/Schema";

import AutoSlider from "../../../components/custom-slider/index";
import { JoinUs, NightScene, PurpleLogoWithText } from "../../../assets";
import "../../../index.scss";
import Button from "../../../components/common/buttons/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const imagesData = [
    {
      avatar: JoinUs,
    },

    {
      avatar: JoinUs,
    },
    {
      avatar: JoinUs,
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
    <section className="bg-white h-[100vh] gap-12 grid grid-cols-2 ">
      <div className=" max-w-screen-sm w-full mx-auto gap-6 py-20">
        <img src={PurpleLogoWithText} className="pb-6" alt="Logo" />
        <h1 className="text-[22px] font-semibold">Log in</h1>
        <span className="text-[18px] font-normal text-[#696969] ">
          Log in to continue Myscienceland!{" "}
        </span>

        <form className="  " onSubmit={formik.handleSubmit}>
          {loginInputs.map((input) => (
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
                Remember Me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="py-5 px-3 text-[14px] text-[#FF0606] hover:text-[#9C3022] underline p-0 m-0"
            >
              Forgot your password?
            </a>
          </div>

          <Button
            title="Login"
            type="submit"
            onClick={() => console.log("Login clicked!")}
          />
          <h2 className="text-[18px]  text-[#868293] font-normal text-center py-5">
            Don’t have an account?
            <Link
              to={"/Signup"}
              className="underline text-[18px] font-normal cursor-pointer  text-primary"
            >
              SignUp
            </Link>
          </h2>
        </form>
      </div>
      <div
        style={{
          backgroundImage: `url(${NightScene})`,
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
