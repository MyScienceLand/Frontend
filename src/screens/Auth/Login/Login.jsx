import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  JoinUs,
  NightScene,
  PurpleLogoWithText,
  SignUpImage,
} from '../../../assets';
import ToastNotification from '../../../components/ToastNotification/ToastNotification';
import Button from '../../../components/common/buttons/Button/Button';
import AutoSlider from '../../../components/custom-slider/index';
import { loginInputs } from '../../../data/index';
import usePost from '../../../hooks/usePost';
import '../../../index.scss';
import { formSchema } from '../../../utils/helper/Schema';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  // const [response, setResponse] = useState(null);
  const { data, loading, error, postData } = usePost('/auth/login');
  const imagesData = [
    {
      avatar: JoinUs,
    },

    {
      avatar: SignUpImage,
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
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    console.log(error);
    if (error) {
      ToastNotification.error(error);
    } else if (data && data?.data?.isVerify === true) {
      console.log(data, 'in set local storage');
      ToastNotification.success(data.message);
      localStorage.setItem(
        'token',
        data?.data?.access_token !== undefined ? data?.data?.access_token : ''
      );
      setTimeout(() => {
        navigate('/dashboard');
      }, 10);
    }
  }, [data, navigate, error]);

  const handleLoginUser = async (e) => {
    e.preventDefault();
    await postData(formik.values);
  };
  return (
    <section className="bg-white h-[100vh] gap-12 grid grid-cols-2 ">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-20">
        <img src={PurpleLogoWithText} className="pb-6" alt="Logo" />
        <h1 className="text-[22px] font-semibold">Log in</h1>
        <span className="text-[18px] font-normal text-[var(--text-color)] ">
          Log in to continue MyScienceLand!
        </span>

        <form className=" " onSubmit={(e) => handleLoginUser(e)}>
          {loginInputs.map((input) => (
            <div key={input.id} className="mt-6 flex flex-col gap-2">
              <label
                className="text-[var(--text-color)] text-[18px] font-medium"
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
                    className="border h-10 px-2 border-[] rounded-sm w-full pr-10"
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
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                  </button>
                </div>
              ) : (
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
                className="text-[14px] font-medium text-[var(--text-color)] pl-2"
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

          <Button
            title="Log In"
            type="submit"
            onClick={(e) => handleLoginUser(e)}
          />
          <h2 className="text-[18px]  text-[var(--text-color)] font-normal text-center py-5">
            Don’t have an account?
            <Link
              to={'/Signup'}
              className="underline text-[18px] font-normal cursor-pointer   text-[var(--secondary-color)]"
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
        <AutoSlider imagesData={imagesData} />
      </div>
    </section>
  );
};

export default Login;
