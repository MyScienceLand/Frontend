import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import PATHS from "./path";
import { Preloader } from "../components";
import Login from "../pages/login";
import StudentDashboard from "../components/student-dashboard";
import ErrorPage from "../components/404";
import ResetPassword from "../components/reset-password";
import ForgotPassword from "../components/forgot-password";

const Contact = lazy(() => import("../pages/login"));
const SignUp = lazy(() => import("../pages/signup"));

const routes = [
  {
    path: "/",
    path: PATHS.Login,
    element: <Login />,
  },
  {
    path: "/sign-up",
    path: PATHS.SignUp,
    element: <SignUp />,
  },
  {
    path: "/404",
    path: PATHS.ErrorPage,
    element: <ErrorPage />,
  },
  {
    path: "/reset-password",
    path: PATHS.ResetPassword,
    element: <ResetPassword />,
  },
  {
    path: "/forgot-password",
    path: PATHS.ForgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: PATHS.StudentDashboard, element: <StudentDashboard /> }],
  },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Preloader />}>{routing}</Suspense>;
};

export default Routes;
