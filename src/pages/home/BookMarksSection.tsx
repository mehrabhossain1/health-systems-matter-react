import BookMarksSectionCard from "@/components/ui/about/BookMarksSectionCard";
import {
  FaBook,
  FaHeartbeat,
  FaUniversity,
  FaInfoCircle,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const bookmarksData = [
  {
    title: "Overview",
    href: "/bookmarks/overview",
    description:
      "The Global Health Bookmarks section indicates the resources either document...",
    Icon: FaBook,
  },
  {
    title: "Key public health organizations",
    href: "/bookmarks/key-public-health-organizations",
    description:
      "Many organizations, both large and small, have long been dedicated to public health and ...",
    Icon: FaHeartbeat,
  },
  {
    title: "Journals",
    href: "/bookmarks/journals",
    description:
      "This list offers an overview of major reputable journals focused on public health and ",
    Icon: FaUniversity,
  },
  {
    title: "Data and facts",
    href: "/bookmarks/data-and-facts",
    description:
      "Since the foundation of the World Health Organization in 1948, the world has experienced.",
    Icon: FaInfoCircle,
  },
  {
    title: "Training and courses",
    href: "/bookmarks/training-and-courses",
    description:
      "This list of online training and courses in global health and health systems can help you choose and enroll in programs to ",
    Icon: FaBook,
  },
  {
    title: "Career scope",
    href: "/bookmarks/career-scope",
    description:
      "This platform offers information on job openings and fellowship opportunities from various organizations. Regularly ",
    Icon: FaInfoCircle,
  },

  {
    title: "Newsletter",
    href: "/bookmarks/newsletter",
    description:
      "A series of blogs and newsletters maintained by organizations and dedicated professionals is available. This section provides ",
    Icon: FaBook,
  },
  {
    title: "YouTube",
    href: "/bookmarks/youtube",
    description:
      "In today's digital landscape, visual platforms are highly engaging, and public health professionals are no exception. Many organizations",
    Icon: FaYoutube,
  },

  {
    title: "Useful sites",
    href: "/bookmarks/useful-sites",
    description:
      "In addition to the resources mentioned above, there are several other valuable sites that may not fit neatly into specific categories. These",
    Icon: FaBook,
  },
  {
    title: "Podcast",
    href: "/bookmarks/podcast",
    description: "Coming soon...",
    Icon: FaInfoCircle,
  },
  {
    title: "Scholarship",
    href: "/bookmarks/scholarship",
    description: "Coming soon...",
    Icon: FaUniversity,
  },
];

// Define animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BookMarksSection = () => {
  return (
    <section className="mt-20 mb-10" id="bookmarks">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-10 mb-10">
          <h2 className="pl-10 text-5xl font-semibold text-[#01748D]">
            Bookmarks
          </h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookmarksData.map((bookmark, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
              transition={{ duration: 0.2, delay: index * 0.1 }} // Staggered effect
            >
              <BookMarksSectionCard
                title={bookmark.title}
                description={bookmark.description}
                href={bookmark.href}
                Icon={bookmark.Icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookMarksSection;
