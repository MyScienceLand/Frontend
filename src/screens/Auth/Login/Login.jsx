import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Google,
  JoinUs,
  NightScene,
  PurpleLogoWithText,
  SignUpSlider,
} from '../../../assets';
import ToastNotification from '../../../components/ToastNotification/ToastNotification';
import Button from '../../../components/common/buttons/Button/Button';
import AutoSlider from '../../../components/custom-slider/index';
import { authLogoWidth } from '../../../constants';
import { loginInputs } from '../../../data/index';
import usePost from '../../../hooks/usePost';
import '../../../index.scss';
import { registerUser } from '../../../redux/slices/authSlice';
import { API_ROUTES } from '../../../routes/apiRoutes';
import { formSchema } from '../../../utils/helper/Schema';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const { data, loading, error, postData } = usePost(API_ROUTES.LOGIN);
  const imagesData = [
    {
      avatar: JoinUs,
    },
    {
      avatar: SignUpSlider,
    },
    {
      avatar: JoinUs,
    },
  ];
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      await postData(values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    if (error) {
      if (
        error === 'Your Email is not verified Please firstly verify your Email'
      ) {
        dispatch(registerUser({ ...formik.values, otpType: 'signup' }));
        ToastNotification.error(error);
        navigate('/otp-verification');
        return;
      }
      ToastNotification.error(error);
    } else if (data && data?.login?.isVerify === true) {
      ToastNotification.success(data?.message);
      localStorage.setItem(
        'token',
        data?.login?.access_token !== undefined ? data?.login?.access_token : ''
      );
      setTimeout(() => {
        navigate(`/${data?.login?.role}-dashboard`);

        localStorage.setItem('role', data?.login?.role);
      }, 10);
    }
  }, [data, navigate, error]);

  return (
    <section className="bg-white h-[100vh] gap-12 grid grid-cols-2 ">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-20">
        <img
          src={PurpleLogoWithText}
          className="pb-6"
          alt="Logo"
          width={authLogoWidth}
        />
        <h1 className="text-[22px] font-semibold">Log in</h1>
        <span className="text-[18px] font-normal text-[secondary] ">
          Log in to continue MyScienceLand!
        </span>
        <button className="flex justify-center gap-2 my-8 bg-[#F3F6F8] items-center px-6 max-w-[20rem] w-[100%] text-[16px] font-normal  text-[#2A2A2A] rounded-sm py-2">
          <img src={Google} alt="Logo" className="" />
          Log in with Google
        </button>
        <form className=" " onSubmit={formik.handleSubmit}>
          {loginInputs.map((input) => (
            <div key={input.id} className="mt-6 flex flex-col gap-2">
              <label
                className="text-[secondary] text-[18px] font-medium"
                htmlFor={input.id}
              >
                {input.label}
              </label>
              {input.type === 'password' ? (
                <div className="relative">
                  <input
                    id={input.id}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={input.placeholder}
                    name={input.name}
                    className="border h-10 px-2 border-[#757575] rounded-sm w-full pr-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[input.name]}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-[secondary]"
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
              ) : (
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  className="border h-10 px-2 border-[#757575] rounded-sm"
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
          <div className="flex justify-between items-center">
            <div>
              <input
                id="rememberPassword"
                name="rememberPassword"
                type="checkbox"
                onChange={handleRememberMe}
                value={rememberMe}
              />
              <label
                className="text-[14px] font-medium text-[secondary] pl-2"
                htmlFor="rememberPassword"
              >
                Remember Me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="py-5 px-3 text-[14px] text-[#FF0606] hover:text-[#9C3022] underline p-0 m-0"
            >
              Forgot your password?
            </Link>
          </div>

          <Button title="Log In" type="submit" onClick={formik.handleSubmit} />
          <h2 className="text-[18px]  text-[secondary] font-normal text-center py-5">
            Don’t have an account?{' '}
            <Link
              to={'/Signup'}
              className="underline text-[18px] font-normal cursor-pointer   text-primary"
            >
              SignUp
            </Link>
          </h2>
        </form>
      </div>
      <div
        style={{
          backgroundImage: `url(${NightScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '164px',
          paddingRight: '164px',
        }}
      >
        <AutoSlider imagesData={imagesData} title={'Log In'} />
      </div>
    </section>
  );
};

export default Login;
