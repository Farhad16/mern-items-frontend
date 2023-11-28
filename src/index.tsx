import ReactDOM from "react-dom/client";
import "./index.css";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
