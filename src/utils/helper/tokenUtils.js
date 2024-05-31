// tokenUtils.js
// import { bake_cookie, read_cookie } from 'react-cookies';

const getToken = () => {
  return localStorage.getItem('apiToken');
};

// function setCookie(name, value, expirationInDays) {
//   const expirationDate = new Date(
//     Date.now() + expirationInDays * 24 * 60 * 60 * 1000
//   );
//   bake_cookie(name, value, { expires: expirationDate });
// }

// // Get the value of a cookie by its name
// function getCookie(name) {
//   return read_cookie(name);
// }

export { getToken };
