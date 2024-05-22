// const token = localStorage.getItem('token');
const storedTheme = localStorage.getItem('theme');
// const token = 0;

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const environment = process.env.REACT_APP_ENVIRONMENT;

export { baseUrl, environment, storedTheme };
