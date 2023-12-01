import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f172a]">
      <Navbar />
      <div className="flex justify-center flex-grow sm:p-12 p-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
