import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/youtube/bg.jpeg";

const YoutubeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#0A2240] pt-20 pb-20" id="youtube">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto overflow-x-hidden lg:flex-row">
        {/* Text Section */}
        <div className="mb-8 lg:w-1/2 lg:mb-0 lg:pr-8" data-aos="fade-right">
          <div className="flex flex-row items-center gap-10 pb-10">
            <h2 className="text-5xl font-semibold text-white">Youtube</h2>
            <div className="flex-1 ml-4 border-t border-white"></div>
          </div>
          <p className="text-base text-slate-300">
            Health Systems Matter plans to launch a YouTube channel dedicated to
            exploring global health system issues and documenting expert
            knowledge through interviews. This initiative is currently in the
            planning phase and is scheduled for implementation next year. To
            stay informed about the channel's launch, please remain engaged with
            the site. Subscribe to our newsletter and follow our social media
            pages to receive updates.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2" data-aos="fade-left">
          <img
            src={bg}
            alt="YouTube Channel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
