import PATHS from "../routes/path";

const inputs = [
  {
    id: 2,
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    name: "first_name",
  },
  {
    id: 3,
    type: "text",
    label: "Last Name",
    placeholder: "Last Name",
    name: "last_name",
  },
  {
    id: 4,
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    name: "password",
  },
  {
    id: 5,
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm Password",
    name: "confirm_password",
  },
];
const loginInputs = [
  {
    id: 1,
    type: "text",
    label: "User Name",
    placeholder: "User Name",
    name: "username",
  },

  {
    id: 2,
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    name: "password",
  },
];
const navLinks = [
  { id: 1, label: "Home", path: PATHS.home },
  { id: 2, label: "About", path: PATHS.about },
  { id: 3, label: "Contact", path: PATHS.contact },
];

export { inputs, navLinks, loginInputs };
