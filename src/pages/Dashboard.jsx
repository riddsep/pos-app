import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Dashboard;
