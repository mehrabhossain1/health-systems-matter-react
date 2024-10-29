import BookMarksSectionCard from "@/components/ui/about/BookMarksSectionCard";
import bg from "../../assets/bookmarks/bg.webp";
import {
  FaBook,
  FaHeartbeat,
  FaUniversity,
  FaInfoCircle,
} from "react-icons/fa";

const bookmarksData = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    Icon: FaBook,
  },
  {
    title: "Key public health organizations",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
    Icon: FaHeartbeat,
  },
  {
    title: "Major journals",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    Icon: FaUniversity,
  },
  {
    title: "Data and facts",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaInfoCircle,
  },
  {
    title: "Training and courses",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaBook,
  },
  {
    title: "Career scope",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaInfoCircle,
  },
  {
    title: "Scholarship",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaUniversity,
  },
  {
    title: "Newsletter",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaBook,
  },
  {
    title: "YouTube",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaUniversity,
  },
  {
    title: "Podcast",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaInfoCircle,
  },
  {
    title: "Useful sites",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    Icon: FaBook,
  },
];

const BookMarksSection = () => {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover md:py-28"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-10 py-10 pb-20 mb-5 ">
          <h2
            className="pl-10 text-6xl font-semibold text-white"
            style={{ fontFamily: "DynaPuff" }}
          >
            Bookmarks
          </h2>
          <div className="flex-1 ml-4 border-t border-white"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookmarksData.map((bookmark, index) => (
            <BookMarksSectionCard
              key={index}
              title={bookmark.title}
              description={bookmark.description}
              href={bookmark.href}
              Icon={bookmark.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookMarksSection;
