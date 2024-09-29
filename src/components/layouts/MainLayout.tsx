import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Container from "../shared/Container";
import AboutUsSection from "@/pages/home/AboutUsSection";
import VisionMissionSection from "@/pages/home/VisionMissionSection";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <AboutUsSection />
      <VisionMissionSection />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
