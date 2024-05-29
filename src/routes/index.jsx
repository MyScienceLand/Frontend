import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Login from "../pages/login";
import StudentDashboard from "../components/student-dashboard";
import ErrorPage from "../components/404";
import ResetPassword from "../components/reset-password";
import ResetForm from "../components/reset-form";
import Otps from "../components/otp-verification";
import Sidebar from "../components/common/sidebar";
import OtpError from "../components/otp-error";
import QuizContent from "../components/quiz-content";
import CourseContent from "../components/course-content";

const Contact = lazy(() => import("../pages/login"));
const SignUp = lazy(() => import("../pages/signup"));

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reset-form",
    element: <ResetForm />,
  },
  {
    path: "/otp",
    element: <Otps />,
  },

  {
    path: "/student-dashboard",
    element: <StudentDashboard />,
  },
  {
    path: "/otp-error",
    element: <OtpError />,
  },
  {
    path: "/quiz",
    element: <QuizContent />,
  },
  {
    path: "/course-content",
    element: <CourseContent />,
  },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<h1>Loading</h1>}>{routing}</Suspense>;
};

export default Routes;
