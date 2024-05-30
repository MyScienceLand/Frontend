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
