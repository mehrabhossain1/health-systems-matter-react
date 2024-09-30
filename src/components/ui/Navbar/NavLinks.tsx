import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#01748D] py-4 border-b">
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
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
          <li>
            <Link
              to="/about"
              className="text-white hover:text-white hover:underline"
            >
              ABOUT
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/resources"
              className="text-white hover:text-white hover:underline"
            >
              RESOURCES
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/bookmarks"
              className="text-white hover:text-white hover:underline"
            >
              BOOKMARKS
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/newsroom"
              className="text-white hover:text-white hover:underline"
            >
              NEWSROOM
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/blog"
              className="text-white hover:text-white hover:underline"
            >
              BLOG
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/newsletter"
              className="text-white hover:text-white hover:underline"
            >
              NEWSLETTER
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/youtube"
              className="text-white hover:text-white hover:underline"
            >
              YOUTUBE
            </Link>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-white hover:underline"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (visible when isMenuOpen is true) */}
        <div
          className={`${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 ease-in-out md:hidden w-full flex flex-col items-center space-y-4 mt-4`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/about"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                RESOURCES
              </Link>
            </li>
            <li>
              <Link
                to="/bookmarks"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOKMARKS
              </Link>
            </li>
            <li>
              <Link
                to="/newsroom"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                NEWSROOM
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/newsletter"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                NEWSLETTER
              </Link>
            </li>
            <li>
              <Link
                to="/youtube"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                YOUTUBE
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
