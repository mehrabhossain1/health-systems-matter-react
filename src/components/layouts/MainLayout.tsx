import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SubscribeModal from "../ui/modal/SubscribeModal";
// import Announcement from "../ui/announcement/Announcement";
import ScrollToTop from "@/lib/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Announcement /> */}
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
