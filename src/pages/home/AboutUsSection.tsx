import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="py-32 mt-20 border bg-gray-50"
    >
      <div className="max-w-screen-xl w-full px-[20px] mx-auto">
        {/* Section Title with Underline */}
        <div className="flex items-center mb-10 space-x-4">
          <h1 className="text-5xl font-light text-gray-800">About Us</h1>
          <div className="flex-grow border-b-2 border-gray-500"></div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col gap-8 mb-12 lg:flex-row">
          {/* Left Side Title */}
          <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold text-gray-700">
              About Health Systems Matter (HSM)
            </h2>
          </div>

          {/* Right Side Main Content */}
          <div className="lg:w-2/3">
            <p className="mb-4 text-lg text-gray-700">
              “Information is power” and “Evidence lies at the heart of public
              health policy.” Inspired by the principles of valuing information
              and evidence, Health Systems Matter (HSM) offers essential
              resources on health systems, public health events, and career
              opportunities.
            </p>
            <p className="text-gray-700">
              HSM serves as an independent, comprehensive global health
              resource, providing updates on public health issues and career
              opportunities. The site hunts crucial reports, current
              information, and impactful articles from global entities, ensuring
              proper referencing.
            </p>
          </div>
        </div>

        {/* Subsection with Video */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Subsection Left */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-semibold text-gray-700">
              Our Journey So Far
            </h3>
            <p className="mt-4 text-gray-600">
              Launched on social media platforms in August 2024 and followed by
              the website launch in September 2024, HSM is designed to preserve
              and present key resources for its growing community of users.
            </p>
          </div>

          {/* Video Right */}
          <div className="lg:w-2/3">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="HSM Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
