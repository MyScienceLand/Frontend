import { environment } from "./environment";

let BASE_URL = "";
if (environment === "development") {
  BASE_URL = "http://localhost:3000";
} else {
  BASE_URL = process.env.REACT_APP_API_URL;
}

export { BASE_URL };
