import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

// import img1 from "../../assets/hero/WhatsApp Image 2024-11-09 at 10.58.34 (1).jpeg";
// import img2 from "../../assets/hero/WhatsApp Image 2024-11-09 at 10.58.34 (2).jpeg";
// import img3 from "../../assets/hero/WhatsApp Image 2024-11-09 at 10.58.34.jpeg";

const HeroSection = () => {
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
        <div className="flex justify-center mb-6 image-container md:w-1/2 md:justify-end md:mt-0">
          {/* <AnimatePresence>
            <motion.img
              src={img1}
              alt="Image 1"
              className="image"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 1.2 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0,
              }}
            />
            <motion.img
              src={img2}
              alt="Image 2"
              className="image"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 1.2 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.img
              src={img3}
              alt="Image 3"
              className="image"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 1.2 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </AnimatePresence> */}
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
