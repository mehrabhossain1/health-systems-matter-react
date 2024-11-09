import NewsletterCard from "@/components/ui/about/NewsletterCard";
import { motion } from "framer-motion";
import { FaInfoCircle, FaEnvelope, FaFileAlt } from "react-icons/fa"; // Import icons

const newsletterSubLinks = [
  {
    title: "Overview",
    href: "/newsletter/overview",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: <FaInfoCircle className="w-6 h-6" />,
  },
  {
    title: "Subscribe for newsletter",
    href: "/newsletter/subscribe-for-newsletter",
    description:
      "For sighted users to preview content available behind a link.",
    icon: <FaEnvelope className="w-6 h-6" />,
  },
  {
    title: "All previous issues",
    href: "/newsletter/all-previous-issues",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: <FaFileAlt className="w-6 h-6" />,
  },
];

const NewsletterSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-100" id="newsletter">
      <div className="absolute inset-x-0 top-0 h-32 bg-[#23728D] rounded-b-full transform -translate-y-1/2"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[#23728D] rounded-t-full transform translate-y-1/2"></div>

      <div className="max-w-screen-xl py-12 pb-24 mx-auto">
        <div className="flex flex-row-reverse items-center gap-10 mt-20 mb-4">
          <h2 className="text-5xl font-semibold text-[#F18A00] pe-10">
            Newsletter
          </h2>
          <div className="flex-1 ml-4 border-t border-[#F18A00]"></div>
        </div>
        <p className="w-3/4 mx-auto mb-6 text-base italic text-center text-gray-600">
          Welcome to <span className="font-bold">Health Systems Matter!</span>{" "}
          We’re excited to have you here. Look out for our monthly newsletter,
          which will arrive in your inbox by the first week of each month. We
          look forward to keeping you informed and engaged!
        </p>
        <div className="relative flex justify-center gap-6">
          {newsletterSubLinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative transition-transform duration-300 ${
                index === 1
                  ? "translate-y-0"
                  : index === 0
                  ? "translate-y-6"
                  : "-translate-y-6"
              }`}
            >
              <NewsletterCard
                title={item.title}
                description={item.description}
                href={item.href}
                icon={item.icon}
                cardClassName="h-full" // Make sure the card takes full height
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
