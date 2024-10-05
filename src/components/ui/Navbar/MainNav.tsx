import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
  return (
    <nav className="dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between h-full max-w-screen-xl p-4 mx-auto text-gray-600">
        {/* Left side text with blinking effect */}
        <div className="flex-1 text-xs italic font-medium text-[#01748D] blinking-text text-center md:text-left">
          <span>Becoming A Better Global Health Leader</span>
        </div>

        {/* Logo in the center */}
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} className="h-10" alt="Logo" />
        </Link>

        {/* Social icons on the right */}
        <div className="flex items-center justify-end flex-1 space-x-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
