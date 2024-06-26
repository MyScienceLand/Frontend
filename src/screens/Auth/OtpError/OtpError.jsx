import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CrossIcon, PurpleLogoWithText } from "../../../assets";
import ToastNotification from "../../../components/ToastNotification/ToastNotification";
import Button from "../../../components/common/buttons/Button/Button";
import usePost from "../../../hooks/usePost";
import { API_ROUTES } from "../../../routes/apiRoutes";

const OtpError = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const {
    data: resentOtpResponse,
    postData: postDataForgetPassword,
    error,
  } = usePost(API_ROUTES.RESEND_OTP);
  const handelResendOtp = () => {
    postDataForgetPassword({ email: user.email });
  };
  useEffect(() => {
    if (error) {
      ToastNotification.error(error);
      return;
    }
    if (resentOtpResponse) {
      ToastNotification.success(resentOtpResponse?.data?.message);
      navigate("/otp-verification");
    }
  }, [resentOtpResponse]);
  return (
    <div className="h-screen">
      <div className="px-8 py-6">
        <img src={PurpleLogoWithText} alt="Logo" width={100} />
      </div>
      <div className="container mx-auto flex flex-col px-64 justify-center items-center pt-20">
        <img src={CrossIcon} alt="cross icon" />
        <h1 className="text-[#E3002B] text-[54px] font-medium">Opps</h1>
        <p className="text-[24px] font-normal mb-4">
          OPT doesn’t Match Resend OTP for verification
        </p>
        <div className="w-full">
          <Button
            title={"Resend OTP"}
            onClick={handelResendOtp}
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default OtpError;
