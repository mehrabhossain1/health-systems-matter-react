import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SubscribeModal from "../ui/modal/SubscribeModal";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <SubscribeModal />
      <Footer />
    </>
  );
};

export default MainLayout;
