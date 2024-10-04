import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VisionMissionSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="py-20 mt-20">
      <div className="max-w-screen-xl w-full px-[20px] mx-auto">
        {/* Section Title */}
        <h1 className="text-5xl font-light text-center text-gray-800 mb-14">
          Vision and Mission
        </h1>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 mb-14 lg:flex-row">
          {/* Left Side Content */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-2/3"
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Vision</h2>
            <p className="mb-4 text-gray-700">
              The vision of Health Systems Matter is to create an evidence-based
              platform that empowers emerging public health professionals to
              become informed and confident global health advocates, dedicated
              to promoting public health issues and contributing to global
              health.
            </p>

            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Mission
            </h2>
            <p className="mb-4 text-gray-700">
              Health Systems Matter’s mission is to provide comprehensive,
              health system-focused resources from diverse organizations to
              enhance the capabilities of public health professionals and
              promote public health issues. The platform offers significant
              news, publications, and insights, both historical and current,
              covering a broad spectrum of topics relevant to all public health
              enthusiasts.
            </p>

            <h2 className="mb-4 text-xl font-semibold text-gray-700">Goal</h2>
            <p className="text-gray-700">
              The goal of this initiative is to cultivate passionate and
              confident health system advocates who recognize the importance of
              robust health systems and are committed to advancing global
              health.
            </p>
          </div>

          {/* Right Side Image Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col gap-4 lg:w-1/3"
          >
            <img
              src="https://via.placeholder.com/400x250" // Replace with your image URL
              alt="Health Advocacy"
              className="object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/400x250" // Replace with your image URL
              alt="Public Health"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
