import React from "react";
import ContactCard from "@/components/ui/about/ContactCard";

const moreSubLinks = [
  {
    title: "Family",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg", // Replace with your actual image path
  },
  {
    title: "Me in Numbers",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg", // Replace with your actual image path
  },
  {
    title: "My Book",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg", // Replace with your actual image path
  },
  {
    title: "Featured in Media",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg", // Replace with your actual image path
  },
  {
    title: "Travel History",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg", // Replace with your actual image path
  },
];

const MoreSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#f5f5dc] bg-opacity-40">
      <div className="max-w-screen-xl pb-10 mx-auto text-center">
        {/* Section title with horizontal lines */}
        <div className="flex items-center justify-center gap-6 py-10">
          <div className="flex-1 h-px bg-gray-400"></div>
          <h2
            className="text-6xl font-semibold text-gray-800"
            style={{ fontFamily: "DynaPuff" }}
          >
            More
          </h2>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreSubLinks.map((link, index) => (
            <ContactCard
              key={index}
              title={link.title}
              description={link.description}
              href={link.href}
              image={link.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreSection;
