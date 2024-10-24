// import AboutUsSection from "./AboutUsSection";

import AboutUsSection from "./AboutUsSection";
import ActivitiesAndApproach from "./ActivitiesAndApproach";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";
import VisionMissionSection from "./VisionMissionSection";
// import VisionMissionSection from "./VisionMissionSection";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <AboutUsSection />
        <VisionMissionSection />
        <ActivitiesAndApproach />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
