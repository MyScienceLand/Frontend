import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import PATHS from "./path";
import { Preloader } from "../components";
import Login from "../pages/login";

const Contact = lazy(() => import("../pages/login"));

const routes = [
  {
    path: "/",
    path: PATHS.Login,
    element: <Login />,
  },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Preloader />}>{routing}</Suspense>;
};

export default Routes;
