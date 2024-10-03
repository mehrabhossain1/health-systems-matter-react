import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#01748D] sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-5 mx-auto border-b max-w-7xl">
        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <ul className="items-center justify-center hidden mx-auto space-x-8 md:flex">
          {[
            "ABOUT",
            "RESOURCES",
            "BOOKMARKS",
            "NEWSROOM",
            "BLOG",
            "NEWSLETTER",
            "YOUTUBE",
            "CONTACT",
          ].map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                className="text-white transition-all duration-300 hover:text-white hover:underline"
              >
                {link}
              </Link>
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
            {[
              "ABOUT",
              "RESOURCES",
              "BOOKMARKS",
              "NEWSROOM",
              "BLOG",
              "NEWSLETTER",
              "YOUTUBE",
              "CONTACT",
            ].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-white transition-all duration-300 hover:text-white hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
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
