import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SubscribeModal from "../ui/modal/SubscribeModal";

const MainLayout = () => {
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
