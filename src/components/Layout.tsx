import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Header - Your Common Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
