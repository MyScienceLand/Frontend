const handelLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export { handelLogout };
