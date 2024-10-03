import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Container from "../shared/Container";
import AboutUsSection from "@/pages/home/AboutUsSection";
import VisionMissionSection from "@/pages/home/VisionMissionSection";
import ActivitiesAndApproach from "@/pages/home/ActivitiesAndApproach";
import TestimonialsSection from "@/pages/home/TestimonialsSection";
import Footer from "../shared/Footer";
import ContactSection from "@/pages/home/ContactSection";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <AboutUsSection />
      <VisionMissionSection />
      <ActivitiesAndApproach />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default MainLayout;
