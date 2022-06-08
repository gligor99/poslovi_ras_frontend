import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
