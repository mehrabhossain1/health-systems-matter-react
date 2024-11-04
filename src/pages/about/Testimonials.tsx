import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="p-8 text-gray-800 bg-gray-100 md:p-12 lg:p-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="p-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="mb-10 text-[#01748D] text-6xl font-semibold text-center">
            Testimonials
          </h2>
          <h1 className="text-base leading-relaxed text-gray-700">
            Since the site is new, there are no testimonials yet. We will add
            them as they come in. If you'd like, you’re welcome to share your
            feedback, and we can feature your valuable reflections. The idea is
            to feature brief endorsements from global health experts,
            high-profile professionals, and regular visitors of the site, who
            will share their perspectives on the site and its initiative.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
