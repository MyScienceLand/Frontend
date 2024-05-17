import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import PATHS from "./path";
import { Preloader } from "../components";
import Login from "../pages/login";

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
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Preloader />}>{routing}</Suspense>;
};

export default Routes;
