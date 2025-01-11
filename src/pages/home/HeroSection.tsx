import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

// import img1 from "../../assets/hero/hero1.jpeg";
// import img2 from "../../assets/hero/hero2.jpeg";
// import img3 from "../../assets/hero/hero3.jpeg";

const HeroSection = () => {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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
        {/* <div className="relative flex items-center justify-center w-full h-56 max-w-screen-sm p-4 mx-auto mb-6 overflow-hidden md:w-1/2">
          <img
            className="absolute w-48 animate-move-right-left"
            src={img1}
            alt="Image 1"
          />
          <img
            className="absolute h-full animate-move-left-right"
            src={img2}
            alt="Image 2"
          />
          <img
            className="absolute w-56 animate-move-left-right-two"
            src={img3}
            alt="Image 3"
          />
        </div> */}

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
            className="mb-2 font-serif text-2xl font-light md:text-3xl md:mb-10 md:mt-5"
          >
            Don't Settle. <br /> Explore to be Enriched with{" "}
            <span className="inline-block px-6 py-2 bg-[#EE8922] text-white font-semibold rounded-full cursor-pointer hover:bg-[#D57A1F] transition-colors">
              HSM
            </span>
          </motion.h2>
        </motion.div>

        {/* Sticky Social Media Icons */}
        <div className="fixed right-0 z-50 flex-col hidden mr-6 space-y-4 transform -translate-y-1/2 md:flex top-1/2">
          <a
            href="https://www.facebook.com/p/health-systems-matter-61564171250656"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#3b5998] text-white rounded-full shadow-lg hover:shadow-xl transition"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/104141138/admin/dashboard"
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
