import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Replace with your actual logo path
import "../../App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Footer = () => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <footer className="py-10 text-gray-200 bg-gray-800">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="h-auto mb-4 w-72" />
            <p className="text-center text-gray-400 md:text-left">
              Health Systems Matter is dedicated to improving global health
              through strategic information dissemination.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 text-lg font-semibold text-gray-300">
              Quick Links
            </h4>
            <a href="#home" className="hover:text-[#01748D] mb-2">
              Home
            </a>
            <a href="#services" className="hover:text-[#01748D] mb-2">
              Services
            </a>
            <a href="#about" className="hover:text-[#01748D] mb-2">
              About Us
            </a>
            <a href="#contact" className="hover:text-[#01748D] mb-2">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 text-lg font-semibold text-gray-300">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#01748D]"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#01748D]"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#01748D]"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Health Systems Matter. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
