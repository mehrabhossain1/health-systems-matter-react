import BookMarksSectionCard from "@/components/ui/about/BookMarksSectionCard";
import bg from "../../assets/bookmarks/bg.webp";

const bookmarksData = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Key public health organizations",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Major journals",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Data and facts",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Training and courses",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Career scope",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Scholarship",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Newsletter",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "YouTube",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Podcast",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Useful sites",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
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
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Bookmarks
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookmarksData.map((bookmark, index) => (
            <BookMarksSectionCard
              key={index}
              title={bookmark.title}
              description={bookmark.description}
              href={bookmark.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookMarksSection;
