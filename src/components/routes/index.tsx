import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Login from "../Login";
import Register from "../Register";
import Items from "../items";
import PrivateRoute from "../PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "items",
        element: <PrivateRoute element={<Items />} />,
      },
    ],
  },
]);
