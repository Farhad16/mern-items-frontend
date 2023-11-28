import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex items-center justify-center flex-grow sm:px-16 px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
