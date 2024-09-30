import { FaFacebook, FaLinkedin } from "react-icons/fa";

const MainNav = () => {
  return (
    <nav className="bg-[#01748D] dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto text-white border-b">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Health Systems Matter
          </span>
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
