import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Items from "../pages/items";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Items />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
