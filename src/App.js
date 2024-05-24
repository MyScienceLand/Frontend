import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ResetPasswordSuccess from './components/ResetPasswordSuccess/ResetPasswordSuccess';
// import { token } from './constants';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './screens/Auth/ForgotPassword/ForgotPassword';
import Login from './screens/Auth/Login/Login';
import OtpVerification from './screens/Auth/OtpVerification/OtpVerification';
import ResetPasswordForm from './screens/Auth/ResetPasswordForm/ResetPasswordForm';
import SignUp from './screens/Auth/SignUp/SignUp';
import Content from './screens/Content/Content';
import Dashboard from './screens/Dashboard/Dashboard';
import Error404Page from './screens/Error404Page/Error404Page';
import Quiz from './screens/Quiz/Quiz';
import ContentWarper from './screens/global/ContentWarper/ContentWarper';
import Layout from './screens/global/Layout/Layout';
function App() {
  const [open, setOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const token = localStorage.getItem('token');
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
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [token]);
  return (
    <div className="app">
      <ToastContainer />
      {!isFullScreen && (
        <Layout
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
          display={token ? 'flex' : 'none'}
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
          path="/forgot-password"
          element={!token ? <ForgotPassword /> : <Navigate to="/" />}
        />
        <Route
          path="/reset-success"
          element={!token ? <ResetPasswordSuccess /> : <Navigate to="/" />}
        />
        <Route
          path="/otp-verification"
          element={!token ? <OtpVerification /> : <Navigate to="/" />}
        />
        <Route
          path="/reset-password"
          element={!token ? <ResetPasswordForm /> : <Navigate to="/" />}
        />
        <Route
          path="/success-reset-password"
          element={!token ? <ResetPasswordSuccess /> : <Navigate to="/" />}
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

/*

varifyed email:
mudasserasool14@gmail.com
aAbc123@

unvarified email:
mudasserasool15@gmail.com
aAbc123@
*/
