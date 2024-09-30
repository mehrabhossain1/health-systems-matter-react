import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const MainNav = () => {
  return (
    <nav className="dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto text-gray-600">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="Logo" />
        </a>
        <div className="flex items-center space-x-6">
          <span className="text-lg font-medium">Follow Us</span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            // className="hover:text-blue-400"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            // className="hover:text-blue-400"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
