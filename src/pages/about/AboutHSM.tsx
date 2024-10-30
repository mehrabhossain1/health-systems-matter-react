import { motion } from "framer-motion";
import heroImage from "../../assets/youtube/bg.jpeg"; // Replace with actual image path
import contentImage from "../../assets/ownerImg.png"; // Replace with actual image path
import { useEffect } from "react";

const AboutHSM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-8 text-gray-800 bg-gray-100 md:p-12 lg:p-20">
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
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <div className="space-y-6">
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            “Information is power” and “Evidence lies at the heart of public
            health policy.” Inspired by the principles of valuing information
            and evidence, Health Systems Matter (HSM) offers essential resources
            on health systems, public health events, and career opportunities.
          </p>
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            HSM serves as an independent, comprehensive global health resource,
            providing updates on public health issues and career opportunities.
            The site hunts crucial reports, current information, and impactful
            articles from global entities, ensuring proper referencing.
          </p>
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            By subscribing or visiting regularly, users can stay informed about
            a wide range of documents and news related to global health issues
            from various organizations and life changing career opportunities.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={contentImage}
            alt="Public Health"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="p-8 mt-12 bg-white rounded-lg shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Why Choose Health Systems Matter?
        </h2>
        <ul className="pl-5 space-y-4 text-lg leading-relaxed list-decimal md:text-xl">
          <li>
            <strong>Comprehensive Content:</strong> The site offers extensive
            coverage of impactful global health issues, incorporating
            information from various organizations and platforms, as well as
            career opportunities worldwide.
          </li>
          <li>
            <strong>Consistent Updates:</strong> HSM ensures everyday social
            media updates, adhering to a committed agenda to keep its audience
            well-informed and engaged.
          </li>
        </ul>
        <p className="mt-6 text-lg leading-relaxed md:text-xl">
          Health Systems Matter, launched on social media (LinkedIn, Instagram,
          and Facebook) on August 10, 2024. On the other hand, this website was
          launched on September 10, 2024, to systematically preserve all the
          posted resources of the initiative for its users.
        </p>
        <p className="mt-6 text-lg leading-relaxed md:text-xl">
          The site, passionately maintained by a health system professional
          Monaemul Islam Sizear, hopes to enlighten many and foster impactful
          careers.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutHSM;
