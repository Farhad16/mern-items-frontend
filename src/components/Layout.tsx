import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-[#0f172a]">
      <Navbar />
      <div className="flex items-center justify-center flex-grow min-h-screen flex-1 sm:px-16 px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
