import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import lottie from "../../lotties/banner.json";
import Lottie from "lottie-react";

const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto md:flex-row-reverse md:p-12">
        <div className="flex justify-center mb-6 md:w-1/2 md:justify-end md:mt-0">
          {/* Lottie animation placeholder */}
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
            autoplay={defaultOptions.autoplay}
            style={{ height: "400px", width: "400px" }}
          />
        </div>

        <motion.div
          className="text-[#243642] text-center md:text-left md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="mb-10 font-sans text-3xl font-bold underline-offset-[14px] leading-tight md:text-5xl text-[#EE8922] underline"
          >
            Knowledge for Solutions!
          </motion.h2>
          <motion.h2
            variants={itemVariants}
            className="mb-2 font-serif text-2xl font-light md:text-4xl md:mb-10 md:mt-5"
          >
            Don't Settle. Explore to be Enriched with{" "}
            <span className="inline-block px-6 py-2 bg-[#EE8922] text-white font-semibold rounded-full cursor-pointer hover:bg-[#D57A1F] transition-colors">
              HSM
            </span>
          </motion.h2>
        </motion.div>

        {/* Sticky Social Media Icons */}
        <div className="fixed right-0 z-50 flex-col hidden mr-6 space-y-4 transform -translate-y-1/2 md:flex top-1/2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#3b5998] text-white rounded-full shadow-lg hover:shadow-xl transition"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#0077b5] text-white rounded-full shadow-lg hover:shadow-xl transition"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
