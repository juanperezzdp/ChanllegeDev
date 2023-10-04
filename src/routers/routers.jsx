import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Form from "../components/Form";
import Cetificate from "../components/Cetificate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/certificate",
    element: <Cetificate />,
  },
]);
