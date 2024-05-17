import PATHS from "../routes/path";

const inputs = [
  {
    id: 1,
    type: "name",
    label: "User Name",
    placeholder: "User Name",
    name: "name",
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

export { inputs, navLinks };
