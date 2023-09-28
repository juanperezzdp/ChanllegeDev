import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Form from "../components/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Form />,
  },
]);
