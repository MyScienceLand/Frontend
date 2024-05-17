import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./screens/global/Layout/Layout";
import ContentWarper from "./screens/global/ContentWarper/ContentWarper";
import Dashboard from "./screens/Dashboard/Dashboard";
import Content from "./screens/Content/Content";
import Quiz from "./screens/Quiz/Quiz";
import Login from "./screens/Auth/Login/Login";
import { token } from "./constants";

// const token = 0;
function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // localStorage.setItem("token", "token");
  // console.log(token);
  return (
    <div className="app">
      <Layout
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
        display={token ? "flex" : "none"}
      />
      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
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
