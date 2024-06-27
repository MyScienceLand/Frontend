import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPasswordSuccess from "./components/ResetPasswordSuccess/ResetPasswordSuccess";
import useFetch from "./hooks/useFetch";
import { setUser } from "./redux/slices/userSlice";
import { API_ROUTES } from "./routes/apiRoutes";
import ForgotPassword from "./screens/Auth/ForgotPassword/ForgotPassword";
import Login from "./screens/Auth/Login/Login";
import OtpError from "./screens/Auth/OtpError/OtpError";
import OtpVerification from "./screens/Auth/OtpVerification/OtpVerification";
import ResetPasswordForm from "./screens/Auth/ResetPasswordForm/ResetPasswordForm";
import SignUp from "./screens/Auth/SignUp/SignUp";
import Content from "./screens/Content/Content";
import Dashboard from "./screens/Dashboard/Dashboard";
import Error404Page from "./screens/Error404Page/Error404Page";
import PrimarilyQuiz from "./screens/PrimarilyQuiz/PrimarilyQuiz";
import Quiz from "./screens/Quiz/Quiz";
import StartQuiz from "./screens/StartQuiz/StartQuiz";
import ManagementDashboard from "./screens/apps/ManagementDashboard/ManagementDashboard/ManagementDashboard";
import StudentList from "./screens/apps/ManagementDashboard/StudentList/StudentList";
import TeachersList from "./screens/apps/ManagementDashboard/TeachersList/TeachersList";
// import ContentWarper from './screens/global/ContentWarper/ContentWarper';
import Layout from "./screens/global/Layout/Layout";

function App() {
  const [open, setOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const token = localStorage.getItem("token");
  const { data: userData } = useFetch(API_ROUTES.USER);
  const user = useSelector((state) => state.user);
  // user.role = 'management';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(userData?.data));
  }, [userData]);

  // const token = 1;
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullScreen]);
  const location = useLocation();

  let mainRoute = `/${user?.role}-dashboard`;
  console.log(user?.role);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate(location.pathname);
    }
  }, [token]);
  return (
    <div className="app">
      <ToastContainer />

      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to={mainRoute} />}
        />
        <Route
          path="/Signup"
          element={!token ? <SignUp /> : <Navigate to={mainRoute} />}
        />
        <Route
          path="/forgot-password"
          element={!token ? <ForgotPassword /> : <Navigate to={mainRoute} />}
        />
        <Route
          path="/reset-success"
          element={
            !token ? <ResetPasswordSuccess /> : <Navigate to={mainRoute} />
          }
        />
        <Route
          path="/otp-verification"
          element={!token ? <OtpVerification /> : <Navigate to={mainRoute} />}
        />
        <Route
          path="/reset-password"
          element={!token ? <ResetPasswordForm /> : <Navigate to={mainRoute} />}
        />
        <Route
          path="/success-reset-password"
          element={
            !token ? <ResetPasswordSuccess /> : <Navigate to={mainRoute} />
          }
        />
        <Route
          path="/otp-error"
          element={!token ? <OtpError /> : <Navigate to={mainRoute} />}
        />
        <Route
          path="/*"
          element={
            token ? (
              <Layout
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                open={open}
                display={token ? "flex" : "none"}
                toggleFullScreen={toggleFullScreen}
                isFullScreen={isFullScreen}
              >
                <Routes>
                  <Route path="/student-dashboard" element={<Dashboard />} />
                  <Route
                    path="/student-dashboard/dashboard"
                    element={<Dashboard />}
                  />
                  <Route
                    path="/student-dashboard/content"
                    element={<Content />}
                  />
                  <Route path="/student-dashboard/quiz" element={<Quiz />} />
                  <Route
                    path="/student-dashboard/start-quiz"
                    element={<StartQuiz />}
                  />
                  <Route
                    path="/student-dashboard/primarily-quiz"
                    element={<PrimarilyQuiz />}
                  />
                  <Route path="*" element={<Error404Page />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="*"
          element={<Navigate to={token ? "/student-dashboard" : "/login"} />}
        />
        <Route
          path="/management-dashboard/*"
          element={
            token ? (
              // <ContentWarper open={open}>
              <Routes>
                <Route path="/" element={<ManagementDashboard />} />
                <Route path="/dashboard" element={<ManagementDashboard />} />
                <Route path="/students-list" element={<StudentList />} />
                <Route path="/teachers-list" element={<TeachersList />} />
                <Route path="*" element={<Error404Page />} />
              </Routes>
            ) : // </ContentWarper>
            token === undefined || null ? (
              <Navigate to="/login" />
            ) : (
              <Navigate to={mainRoute} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;

/*

varifyed email:
mudasserasool14@gmail.com
aAbc123@

unvarified email:
mudasserasool15@gmail.com
aAbc123@

{
  "email": "shakiabch21@gmail.com",
  "password": "Admin@12345"
}

{
  "email": "mudasserasool14@gmail.com",
  "password": "Mudasser2024@"
}
  management
  teacher
  admin
  student
*/
