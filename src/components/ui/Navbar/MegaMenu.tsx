import { useState } from "react";
import { Link } from "react-router-dom";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#01748D] sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-white">Your Logo Here</div>

        {/* Nav Links */}
        <ul className="flex items-center justify-center space-x-8">
          <li className="relative group">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Services
            </button>
            {/* Mega Menu */}
            {isMenuOpen && (
              <div className="mega-menu">
                <div className="container">
                  <div className="mega-menu-column">
                    <h3>Design</h3>
                    <Link to="/web-design">Web Design</Link>
                    <Link to="/graphic-design">Graphic Design</Link>
                    <Link to="/branding">Branding</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h3>Development</h3>
                    <Link to="/frontend">Frontend Development</Link>
                    <Link to="/backend">Backend Development</Link>
                    <Link to="/fullstack">Fullstack Development</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h3>Marketing</h3>
                    <Link to="/seo">SEO</Link>
                    <Link to="/content-marketing">Content Marketing</Link>
                    <Link to="/social-media">Social Media Marketing</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Additional Navigation Links */}
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
