import NewsroomCard from "@/components/ui/about/NewsroomCard";
import { motion } from "framer-motion";

// Sample image URLs, replace with actual paths to your images
const newsroomSubLinks = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", // Placeholder image
  },
  {
    title: "Upcoming events",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", // Placeholder image
  },
  {
    title: "Do you know?",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", // Placeholder image
  },
];

const NewsroomSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-10 py-10 pb-20 mb-5 ">
          <h2 className="pl-10 font-serif text-6xl font-semibold text-[#01748D]">
            Newsroom
          </h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>
        <div className="grid grid-cols-1 gap-2 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {newsroomSubLinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsroomCard
                title={item.title}
                description={item.description}
                href={item.href}
                image={item.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsroomSection;
