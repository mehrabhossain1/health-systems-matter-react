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
  const itemVariants2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-between max-w-screen-xl p-6 mx-auto md:flex-row-reverse md:p-12">
      {/* Lottie animation on top for smaller screens */}
      <div className="flex justify-centermb-6 md:w-1/2 md:justify-end md:mt-0">
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
          className="mb-2 font-sans text-3xl font-bold leading-tight md:text-5xl text-[#F18A00] underline"
        >
          Knowledge for Solutions!
        </motion.h2>

        {/* Second line */}
        <motion.h2
          variants={itemVariants}
          className="mb-2 font-serif text-2xl font-light leading-tight md:text-5xl md:mb-10 md:mt-5"
        >
          Don't Settle.
        </motion.h2>

        {/* Third line */}
        <motion.h2
          variants={itemVariants2}
          className="font-serif text-2xl font-medium leading-tight md:text-5xl md:text-center"
        >
          Explore to be Enriched with{" "}
          <span className="text-[#01748D] font-semibold">HSM</span>
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default HeroSection;
