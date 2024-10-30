import React from "react";
import ownerImg from "../../assets/ownerImg.png";

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, title, children }) => {
  return (
    <div className="p-6 transition-transform duration-300 transform bg-white border border-gray-300 shadow-md hover:scale-105 hover:shadow-xl">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        <a href={href} className="text-blue-700 hover:underline">
          {title}
        </a>
      </h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

const AboutSizearSection: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-top bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${ownerImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-gray-700 bg-opacity-75">
        <div className="max-w-screen-xl px-6 py-20 mx-auto ">
          <div className="flex flex-row items-center gap-10 py-10 pb-20">
            <h2
              className="pl-10 text-6xl font-semibold text-white "
              style={{ fontFamily: "DynaPuff" }}
            >
              About Sizear
            </h2>
            <div className="flex-1 ml-4 border-t border-white"></div>
          </div>
          {/* Section Title */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  );
};

export default AboutSizearSection;
