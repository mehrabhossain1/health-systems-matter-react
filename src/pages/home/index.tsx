import BottomNav from "@/components/ui/Navbar/BottomNav";
import AboutSizearSection from "./AboutSizearSection";
import AboutUsSection from "./AboutUsSection";
import BookMarksSection from "./BookMarksSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";
import NewsroomSection from "./NewsroomSection";
import ResourcesSection from "./ResourcesSection";
import TestimonialsSection from "./TestimonialsSection";
import YoutubeSection from "./YoutubeSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ResourcesSection />
      <BookMarksSection />
      <NewsletterSection />
      <NewsroomSection />
      <YoutubeSection />
      <ContactSection />
      <AboutSizearSection />
      <BottomNav />
      <TestimonialsSection />
    </>
  );
};

export default Home;
