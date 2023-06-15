import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
