import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="h-20 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between h-full p-4 mx-auto text-gray-600 max-w-screen-2xl">
        {/* Logo in the center */}
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} className="h-10" alt="Logo" />
        </Link>

        {/* Social icons on the right */}
        <div className="flex items-center justify-end flex-1 space-x-6">
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-8 text-[#243642] transition-all hover:text-[#01748D]" />
          </Link>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="size-8 text-[#243642] transition-all hover:text-[#01748D]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
