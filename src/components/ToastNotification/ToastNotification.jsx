// // src/components/Notification.jsx
// import { toast } from 'react-toastify';

// const ToastNotification = {
//   success: (message) => {
//     toast.success(message, {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: 5000,
//     });
//   },
//   error: (message) => {
//     toast.error(message, {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: 5000,
//     });
//   },
//   info: (message) => {
//     toast.info(message, {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: 5000,
//     });
//   },
//   warn: (message) => {
//     toast.warn(message, {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: 5000,
//     });
//   },
// };

// export default ToastNotification;
// src/components/Notification.jsx
import { toast } from 'react-toastify';

const ToastNotification = {
  success: (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
    });
  },
  error: (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
    });
  },
  info: (message) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 5000,
    });
  },
  warn: (message) => {
    toast.warn(message, {
      position: 'top-right',
      autoClose: 5000,
    });
  },
};

export default ToastNotification;
