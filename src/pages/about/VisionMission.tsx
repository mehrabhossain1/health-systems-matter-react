import { motion } from "framer-motion";
import heroImage from "../../assets/youtube/bg.jpeg"; // Replace with actual image path
import { useEffect } from "react";

const VisionMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-8 text-gray-800 bg-gray-100 md:p-12 lg:p-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-12 overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={heroImage}
            alt="Health Systems"
            className="object-cover w-full h-96"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Health Systems Matter
            </h1>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="p-8 mb-12 bg-white rounded-lg shadow-lg"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            Our Vision and Mission
          </h2>
          <h1 className="text-base leading-relaxed text-gray-700">
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
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
