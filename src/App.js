import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./screens/global/Layout/Layout";
import ContentWarper from "./screens/global/ContentWarper/ContentWarper";
import Dashboard from "./screens/Dashboard/Dashboard";
import Content from "./screens/Content/Content";
import Quiz from "./screens/Quiz/Quiz";
import Login from "./screens/Auth/Login/Login";
import { token } from "./constants";
import SignUp from "./screens/Auth/SignUp/SignUp";
import Error404Page from "./screens/Error404Page/Error404Page";

function App() {
  const [open, setOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

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
  return (
    <div className="app">
      {!isFullScreen && (
        <Layout
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
          display={token ? "flex" : "none"}
          toggleFullScreen={toggleFullScreen}
          isFullScreen={isFullScreen}
        />
      )}
      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/Signup"
          element={!token ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/*"
          element={
            token ? (
              <ContentWarper open={open}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/content" element={<Content />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="*" element={<Error404Page />} />
                </Routes>
              </ContentWarper>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
