import { motion } from "framer-motion";
import React from "react";

const Overview = () => {
  return (
    <div className="relative flex flex-col items-center p-8 text-center bg-gray-100 md:p-16">
      {/* Background Image */}
      <img
        src="https://via.placeholder.com/1500x800"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full pointer-events-none opacity-10"
      />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Heading */}
        <motion.h1
          className="mb-4 text-3xl font-semibold text-gray-800 md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Health System Library aspires to be a comprehensive repository of
          essential resources on health systems and global health. By compiling
          major reports, books, groundbreaking publications, significant policy
          briefs and presentations, thought-provoking interviews, and insightful
          analyses, it supports public health professionals in their pursuit of
          knowledge and professional development. Resources are organized by
          topic to facilitate systematic access. Each resource is sourced from
          esteemed organizations, with due credit given to acknowledge their
          invaluable contributions.
        </motion.h1>

        {/* Additional Description Text */}
        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-700 md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          This section supports those working in health systems by providing
          knowledge that boosts confidence and aids career growth. Ultimately,
          it aims to systematically present all major global health resources
          and major actors’ initiatives.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Overview;
