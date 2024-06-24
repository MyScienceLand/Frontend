import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  JoinUs,
  PurpleLogoWithText,
  SignUpSlider,
  signUpBg,
} from "../../../assets";
import ToastNotification from "../../../components/ToastNotification/ToastNotification";
import Button from "../../../components/common/buttons/Button/Button";
import AutoSlider from "../../../components/custom-slider/index";
import { authLogoWidth } from "../../../constants";
import { signupInputs } from "../../../data";
import usePost from "../../../hooks/usePost";
import "../../../index.scss";
import { registerUser } from "../../../redux/slices/authSlice";
import { API_ROUTES } from "../../../routes/apiRoutes";
import { formSchema } from "../../../utils/helper/Schema";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPrivacy, setConfirmPrivacy] = useState(true);
  const { data, loading, error, postData } = usePost(API_ROUTES.REGISTER);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imagesData = [
    { avatar: SignUpSlider },
    { avatar: JoinUs },
    { avatar: SignUpSlider },
  ];

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        ToastNotification.error(
          "Password and Confirm Password should be the same"
        );
        return;
      }

      await postData({
        ...values,
        role: "student",
        termsAndCondition: confirmPrivacy,
      });
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (error) {
      ToastNotification.error(error);
    }
    if (data) {
      ToastNotification.success(data?.data?.message);
      dispatch(registerUser({ ...formik.values, otpType: "signup" }));
      setTimeout(() => {
        navigate("/otp-verification");
      }, 3000);
    }
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [data, error, dispatch, navigate, formik.values]);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    formik.handleSubmit();
    if (!formik.isValid) {
      return;
    }
  };

  return (
    <section className="bg-[--primary-color] h-[100vh] gap-12 grid grid-cols-2">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-16">
        <img src={PurpleLogoWithText} className="pb-6 w-20" alt="Logo" />
        <h1 className="text-[22px] font-semibold">Sign up</h1>
        <span className="text-[18px] font-normal text-[--text-color]">
          Welcome & Join us by creating a free account!
        </span>

        <form className="" onSubmit={handleRegisterUser}>
          {signupInputs.map((input) => (
            <div key={input.id} className="mt-6 flex flex-col gap-2">
              <label
                className="text-[var(--text-color)] text-[18px] font-medium"
                htmlFor={input.id}
              >
                {input.label}
              </label>
              {input.type === "password" && input.name === "password" ? (
                <div className="relative">
                  <input
                    id={input.id}
                    type={showPassword ? "text" : "password"}
                    placeholder={input.placeholder}
                    name={input.name}
                    className="border h-10 px-2 border-[#757575] border-opacity-55 rounded-sm w-full pr-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[input.name]}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-[var(--text-color)]"
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </button>
                </div>
              ) : input.type === "password" &&
                input.name === "confirmPassword" ? (
                <div className="relative">
                  <input
                    id={input.id}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={input.placeholder}
                    name={input.name}
                    className="border h-10 px-2 border-[#757575] border-opacity-55 rounded-sm w-full pr-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[input.name]}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-[var(--text-color)]"
                  >
                    {showConfirmPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </button>
                </div>
              ) : (
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  className="border h-10 px-2 border-[#757575] border-opacity-55 rounded-sm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[input.name]}
                />
              )}
              {formik.touched[input.name] && formik.errors[input.name] && (
                <div className="text-red-500">{formik.errors[input.name]}</div>
              )}
            </div>
          ))}

          <div className="flex justify-start gap-2 items-center">
            <div>
              <input
                id="termsAndConditions"
                name="termsAndConditions"
                type="checkbox"
                onChange={() => setConfirmPrivacy(!confirmPrivacy)}
                value={confirmPrivacy}
                checked={confirmPrivacy}
              />
            </div>
            <h2 className="text-[18px] text-[var(--text-color)] font-normal text-center py-5">
              By creating an account you agree to our
              <span className="underline text-[18px] font-normal cursor-pointer text-[var(--secondary-color)]">
                Terms & Conditions and Privacy Policy
              </span>
            </h2>
          </div>

          <Button title="Create Account" type="submit" />
          <h2 className="text-[18px] text-[var(--text-color)] font-normal text-center py-5">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="underline text-[18px] font-normal cursor-pointer text-[var(--secondary-color)]"
            >
              Log In
            </Link>
          </h2>
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
        <AutoSlider imagesData={imagesData} title={"Sign up"} />
      </div>
    </section>
  );
};

export default SignUp;
