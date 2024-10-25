import React from "react";

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, title, children }) => {
  return (
    <div className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <h2 className="mb-2 text-xl font-semibold">
        <a href={href} className="text-blue-600 hover:underline">
          {title}
        </a>
      </h2>
      <p className="text-gray-700">{children}</p>
    </div>
  );
};

const AboutSizearSection: React.FC = () => {
  return (
    <div className="container p-4">
      <h1 className="mb-6 text-2xl font-bold">About Sizear</h1>{" "}
      {/* Section Title */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ListItem href="/docs" title="Profile summary">
          Re-usable components built using Radix UI and Tailwind CSS.
        </ListItem>
        <ListItem href="/docs/installation" title="Education">
          How to install dependencies and structure your app.
        </ListItem>
        <ListItem href="/docs/primitives/typography" title="Career">
          Styles for headings, paragraphs, lists...etc.
        </ListItem>
        <ListItem
          href="/docs/primitives/typography"
          title="Current Professional Affiliations"
        >
          Styles for headings, paragraphs, lists...etc.
        </ListItem>
        <ListItem
          href="/docs/primitives/typography"
          title="Achievement and Awards"
        >
          Styles for headings, paragraphs, lists...etc.
        </ListItem>
        <ListItem href="/docs/primitives/typography" title="Publications">
          Styles for headings, paragraphs, lists...etc.
        </ListItem>
        <ListItem href="/docs/primitives/typography" title="Contact me">
          Styles for headings, paragraphs, lists...etc.
        </ListItem>
      </div>
    </div>
  );
};

export default AboutSizearSection;
