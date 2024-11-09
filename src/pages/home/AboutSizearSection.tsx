import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/aboutsizear/meinnumbers.jfif";
import img2 from "../../assets/aboutsizear/featuredinmedia.jfif";
import img3 from "../../assets/aboutsizear/achivments.jfif";
import img4 from "../../assets/aboutsizear/contact.jfif";
import img5 from "../../assets/aboutsizear/mybook.jfif";
import img6 from "../../assets/aboutsizear/travel.jfif";
import img7 from "../../assets/aboutsizear/publications.jfif";
import img8 from "../../assets/aboutsizear/profile.jfif";
import img9 from "../../assets/aboutsizear/edu.jfif";
import img10 from "../../assets/aboutsizear/career.jfif";
import img11 from "../../assets/aboutsizear/family.jfif";
import img12 from "../../assets/aboutsizear/professional.jfif";

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
  imageUrl: string; // Add imageUrl prop
}

const ListItem: React.FC<ListItemProps> = ({
  href,
  title,
  children,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center p-6 transition-all duration-300 transform border border-[#23728D] rounded-md shadow-sm hover:scale-105 hover:shadow-md hover:shadow-orange-500 md:flex-row">
      {/* Left side: Text Content */}
      <div className="flex-1">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          <Link
            to={href}
            className="text-lg hover:underline underline-offset-4 decoration-[#F18A00]"
          >
            {title}
          </Link>
        </h2>
        <p className="text-xs leading-relaxed text-gray-500 line-clamp-2">
          {children}
        </p>
      </div>

      {/* Right side: Image */}
      <div className="flex-shrink-0 w-24 h-24 ml-4">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

const AboutSizearSection: React.FC = () => {
  return (
    <section className="bg-opacity-75" id="about-sizear">
      <div className="max-w-screen-xl px-6 py-20 mx-auto">
        <div className="flex flex-row items-center gap-10 mb-10">
          <h2 className="pl-10 text-5xl font-semibold text-[#23728D]">
            About Sizear
          </h2>
          <div className="flex-1 ml-4 border-t border-[#23728D]"></div>
        </div>
        {/* Section Title */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ListItem
            href="/about-sizear/profile-summary"
            title="Profile summary"
            imageUrl={img8}
          >
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem
            href="/about-sizear/education"
            title="Education"
            imageUrl={img9}
          >
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem
            href="/about-sizear/career-summary"
            title="Career"
            imageUrl={img10}
          >
            Sizear has worked in various national and international
            organizations in the research and program sectors.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="Current Professional Affiliations"
            imageUrl={img12}
          >
            Overview of professional memberships and organizations.
          </ListItem>
          <ListItem
            href="/about-sizear/achievement-awards"
            title="Achievement and Awards"
            imageUrl={img3}
          >
            Recognized for contributions to the industry.
          </ListItem>
          <ListItem
            href="/about-sizear/publications"
            title="Publications"
            imageUrl={img7}
          >
            Publications in various journals and conferences.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="Family"
            imageUrl={img11}
          >
            Personal information about family life.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="Me in Numbers"
            imageUrl={img1}
          >
            A statistical look at my achievements and impact.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="My Book"
            imageUrl={img5}
          >
            Information about my upcoming or published book.
          </ListItem>
          <ListItem
            href="/about-sizear/featured-in-media"
            title="Featured in Media"
            imageUrl={img2}
          >
            Press features and media coverage of my work.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="Travel History"
            imageUrl={img6}
          >
            Places I've traveled and experiences shared.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="Contact me"
            imageUrl={img4}
          >
            Ways to get in touch with me directly.
          </ListItem>
        </div>
      </div>
    </section>
  );
};

export default AboutSizearSection;
