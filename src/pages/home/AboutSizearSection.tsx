import React from "react";

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, title, children }) => {
  return (
    <div className="p-6 transition-all duration-300 transform border border-gray-300 shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-orange-500">
      <h2 className="mb-4 text-2xl font-semibold text-[#F18A00]">
        <a href={href} className=" hover:underline">
          {title}
        </a>
      </h2>
      <p className="leading-relaxed text-gray-300">{children}</p>
    </div>
  );
};

const AboutSizearSection: React.FC = () => {
  return (
    <div className="bg-fixed bg-top bg-no-repeat bg-cover bg-[#23728D]">
      <div className="bg-opacity-75">
        <div className="max-w-screen-xl px-6 py-20 mx-auto">
          <div className="flex flex-row items-center gap-10 py-10 pb-20">
            <h2 className="pl-10 font-serif text-6xl font-semibold text-white">
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
              Styles for headings, paragraphs, lists, etc.
            </ListItem>
            <ListItem
              href="/docs/primitives/typography"
              title="Current Professional Affiliations"
            >
              Overview of professional memberships and organizations.
            </ListItem>
            <ListItem
              href="/docs/primitives/typography"
              title="Achievement and Awards"
            >
              Recognized for contributions to the industry.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Publications">
              Publications in various journals and conferences.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Family">
              Personal information about family life.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Me in Numbers">
              A statistical look at my achievements and impact.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="My Book">
              Information about my upcoming or published book.
            </ListItem>
            <ListItem
              href="/docs/primitives/typography"
              title="Featured in Media"
            >
              Press features and media coverage of my work.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Travel History">
              Places I've traveled and experiences shared.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Contact me">
              Ways to get in touch with me directly.
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSizearSection;
