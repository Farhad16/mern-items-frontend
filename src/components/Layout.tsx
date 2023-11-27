import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
