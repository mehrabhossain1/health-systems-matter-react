import React from "react";
import ContactCard from "@/components/ui/about/ContactCard"; // Make sure this is the correct import for your card component

const moreSubLinks: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Family",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Me in Numbers",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "My Book",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Featured in media",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Travel history",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

const MoreSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2
          className="text-6xl font-semibold text-gray-800 pe-10"
          style={{ fontFamily: "DynaPuff" }}
        >
          More
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreSubLinks.map((link, index) => (
            <ContactCard
              key={index}
              title={link.title}
              description={link.description}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreSection;
