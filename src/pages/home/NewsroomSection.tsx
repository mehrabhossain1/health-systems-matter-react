import NewsroomCard from "@/components/ui/about/NewsroomCard";
import { motion } from "framer-motion";

// Sample image URLs, replace with actual paths to your images
const newsroomSubLinks = [
  {
    title: "Overview",
    href: "/newsroom/overview",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    img: "/src/assets/newsroom/overviwe.jfif",
  },
  {
    title: "Upcoming events",
    href: "/newsroom/upcoming-events",
    description:
      "For sighted users to preview content available behind a link.",
    img: "/src/assets/newsroom/upcoming-events.jfif",
  },
  {
    title: "Do you know?",
    href: "/newsroom/do-you-know",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    img: "/src/assets/newsroom/do.jfif",
  },
];

const NewsroomSection = () => {
  return (
    <section className="pt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-10 mb-10">
          <h2 className="pl-10 text-5xl font-semibold text-[#01748D]">
            Newsroom
          </h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
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
                imageUrl={item.img}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsroomSection;
