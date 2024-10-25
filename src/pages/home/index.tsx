import AboutUsSection from "./AboutUsSection";
import BookMarksSection from "./BookMarksSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";
import NewsroomSection from "./NewsroomSection";
import ResourcesSection from "./ResourcesSection";
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
    </>
  );
};

export default Home;
