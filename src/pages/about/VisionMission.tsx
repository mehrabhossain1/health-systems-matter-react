import PageTitle from "@/components/shared/PageTitle";
import { useEffect } from "react";

const VisionMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Content Section */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-lg ">
          <PageTitle children="Vision and Mission" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            The vision of Health Systems Matter is to create an evidence-based
            platform that empowers emerging public health professionals to
            become informed and confident global health advocates, dedicated to
            promoting public health issues and contributing to global health.
            Health Systems Matter’s mission is to provide comprehensive, health
            system-focused resources from diverse organizations to enhance the
            capabilities of public health professionals and promote public
            health issues. The platform offers significant news, publications,
            and insights, both historical and current, covering a broad spectrum
            of topics relevant to all public health enthusiasts. The goal of
            this initiative is to cultivate passionate and confident health
            system advocates who recognize the importance of robust health
            systems and are committed to advancing global health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
