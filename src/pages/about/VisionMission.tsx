import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/about/vision.jfif"; // Image for the page

const VisionMission = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Content Section */}
        <div className="flex flex-col items-center p-8 mb-12 space-y-8 bg-white md:flex-row md:space-y-0">
          {/* Text Section */}
          <div className="w-full px-4 space-y-6 md:w-2/3">
            <PageTitle children="Vision and Mission" />
            <p className="text-lg leading-relaxed text-gray-700">
              The vision of Health Systems Matter is to create an evidence-based
              platform that empowers emerging public health professionals to
              become informed and confident global health advocates, dedicated
              to promoting public health issues and contributing to global
              health. Health Systems Matter’s mission is to provide
              comprehensive, health system-focused resources from diverse
              organizations to enhance the capabilities of public health
              professionals and promote public health issues. The platform
              offers significant news, publications, and insights, both
              historical and current, covering a broad spectrum of topics
              relevant to all public health enthusiasts. The goal of this
              initiative is to cultivate passionate and confident health system
              advocates who recognize the importance of robust health systems
              and are committed to advancing global health.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={img}
              alt="Vision and Mission"
              className="object-cover w-full h-auto p-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
