import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "ABOUT", to: "/about" },
    {
      name: "RESOURCES",
      to: "/resources",
      subLinks: [
        { name: "Overview", to: "/resources/overview" },
        { name: "Essential reading list", to: "/resources/reading-list" },
        { name: "Report", to: "/resources/reports" },
        { name: "Topic Wise Reports", to: "/resources/topic-reports" },
        { name: "Major Reports", to: "/resources/major-reports" },
        { name: "Articles", to: "/resources/articles" },
        { name: "Policy primer and Presentations", to: "/resources/policy" },
        { name: "Books", to: "/resources/books" },
        { name: "Interviews and insights", to: "/resources/interviews" },
        { name: "Commentaries and blogs", to: "/resources/blogs" },
        { name: "Tools and Resources/Platforms/Site", to: "/resources/tools" },
      ],
    },
    {
      name: "BOOKMARKS",
      to: "/bookmarks",
      subLinks: [
        { name: "Overview", to: "/bookmarks/overview" },
        {
          name: "Key public health organizations",
          to: "/bookmarks/organizations",
        },
        { name: "Major journals", to: "/bookmarks/journals" },
        { name: "Data and facts", to: "/bookmarks/data-facts" },
        { name: "Training and courses", to: "/bookmarks/training" },
        { name: "Career scope", to: "/bookmarks/career" },
        { name: "Scholarship", to: "/bookmarks/scholarship" },
        { name: "Newsletter", to: "/bookmarks/newsletter" },
        { name: "YouTube", to: "/bookmarks/youtube" },
        { name: "Podcast", to: "/bookmarks/podcast" },
        { name: "Useful sites", to: "/bookmarks/sites" },
      ],
    },
    { name: "NEWSROOM", to: "/newsroom" },
    { name: "BLOG", to: "/blog" },
    { name: "NEWSLETTER", to: "/newsletter" },
    { name: "YOUTUBE", to: "/youtube" },
    { name: "CONTACT", to: "/contact" },
  ];

  return (
    <nav className="bg-[#01748D] sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-5 mx-auto border-b max-w-7xl">
        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            className="text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links - Hidden on mobile, visible on larger screens */}
        <ul className="flex items-center justify-center hidden mx-auto space-x-8 md:flex">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.to}
                className="text-white transition-all duration-300 nav-link hover:text-white hover:underline"
              >
                {link.name}
              </Link>
              {/* Submenu */}
              {link.subLinks && (
                <ul className="absolute left-0 z-20 w-48 mt-2 text-black bg-white shadow-lg dropdown-menu">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name}>
                      <Link
                        to={subLink.to}
                        className="block px-4 py-2 transition-all duration-300 hover:bg-[#01748D] hover:text-white"
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu (visible when isMenuOpen is true) */}
        <div
          className={`${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 ease-in-out md:hidden w-full flex flex-col items-center space-y-4 mt-4`}
        >
          <ul className="flex flex-col items-center space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-white transition-all duration-300 hover:text-white hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
