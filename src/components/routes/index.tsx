// src/routes/index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import Register from "../Register";
import Items from "../items";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="items/*" element={<PrivateRoute element={<Items />} />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
