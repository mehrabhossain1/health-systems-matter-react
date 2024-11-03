import { motion } from "framer-motion";

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
    <div className="bg-[#F7F7F7]">
      <div className="flex flex-col items-center justify-between max-w-screen-xl p-6 mx-auto md:flex-row-reverse md:p-12">
        {/* Lottie animation on top for smaller screens */}
        <div className="flex justify-center mb-6 md:w-1/2 md:justify-end md:mt-0">
          {/* <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          autoplay={defaultOptions.autoplay}
          style={{ height: "350px", width: "350px" }}
          className="md:mr-4"
        /> */}
        </div>

        {/* Hero text with framer-motion animation */}
        <motion.div
          className="text-[#243642] pb-20 text-center md:text-left md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* First line */}
          <motion.h2
            variants={itemVariants}
            className="mb-2 font-sans text-3xl font-bold underline-offset-[14px] leading-tight md:text-5xl text-[#F18A00] underline"
          >
            Knowledge for Solutions!
          </motion.h2>

          {/* Second line */}
          <motion.h2
            variants={itemVariants}
            className="mb-2 font-serif text-2xl font-light leading-tight md:text-5xl md:mb-10 md:mt-5"
          >
            Don't Settle. Explore to be Enriched with{" "}
            <span className="text-[#383F6D] font-semibold">HSM</span>
          </motion.h2>

          {/* Third line */}
          {/* <motion.h2
          variants={itemVariants2}
          className="font-serif text-2xl font-medium leading-tight md:text-5xl md:text-center"
        >
          
        </motion.h2> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
