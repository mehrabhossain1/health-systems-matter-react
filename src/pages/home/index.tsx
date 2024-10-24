// import AboutUsSection from "./AboutUsSection";

import AboutUsSection from "./AboutUsSection";
import ActivitiesAndApproach from "./ActivitiesAndApproach";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";
import TestSection from "./TestSection";
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
        <TestSection />
      </div>
    </>
  );
};

export default Home;
