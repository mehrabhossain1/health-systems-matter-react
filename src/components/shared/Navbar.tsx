import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "../../App.css";
import navbarBottom from "../../assets/navbarbottom.png";
import ownerImg from "../../assets/ownerImg.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-2 text-sm header-top bg-[#01748D]">
        <div className="flex items-center gap-2">
          <img src={ownerImg} alt="owner image" className="w-8 rounded-full" />
          <a href="#" className="text-white">
            About the site owner |
          </a>
        </div>
        <div className="flex space-x-2 gift">
          <a
            href="#"
            className="px-3 py-1 text-white transition bg-orange-500 rounded-md gift-button hover:bg-orange-600"
          >
            GIFT
          </a>
          <a
            href="#"
            className="px-3 py-1 text-white transition bg-red-500 rounded-md get-involved hover:bg-red-600"
          >
            Get involved
          </a>
        </div>
      </div>

      <nav className="bg-[#01748D] dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto text-white">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Health Systems Matter
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded md:p-0 md:bg-transparent md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,150 C 102.89285714285714,173.67857142857144 205.78571428571428,197.35714285714286 314,196 C 422.2142857142857,194.64285714285714 535.7499999999999,168.25 680,139 C 824.2500000000001,109.74999999999999 999.2142857142858,77.64285714285714 1131,79 C 1262.7857142857142,80.35714285714286 1351.392857142857,115.17857142857143 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#01748D"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg> */}

      <img className="w-full" src={navbarBottom} alt="bottom navbar border" />
    </>
  );
};

export default Navbar;
