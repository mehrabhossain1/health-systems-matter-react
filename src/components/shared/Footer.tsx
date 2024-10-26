import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaOrcid,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#0A2240] text-gray-300">
      <div className="max-w-[1200px] mx-auto">
        {/* Horizontal line with Back to Top button aligned right */}
        <div className="flex items-center justify-center gap-5 pb-6">
          <div className="flex-1 border-t border-gray-200">
            {/* Placeholder to push button to the right */}
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-[#F18A00] transition duration-300"
            aria-label="Back to Top"
          >
            <span className="tracking-[3px]">BACK TO TOP</span>
            <FaArrowUp className="text-2xl" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-3">
          {/* First Grid */}
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="Logo" className="mb-6 w-80" />
            <p className="pb-10 text-center">
              Founded in 2024, HSM is a career development platform for public
              health professionals around the world.
            </p>
            <p className="font-bold text-center">Health Systems Matter</p>
            <p className="text-center">Dhaka, Bangladesh</p>
          </div>

          {/* Second Grid */}
          <div className="flex flex-col">
            <ul className="space-y-2 md:ps-24">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="#bookmarks" className="hover:underline">
                  Bookmarks
                </a>
              </li>
              <li>
                <a href="#newsroom" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:underline">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#site-owner" className="hover:underline">
                  About the Site Owner
                </a>
              </li>
            </ul>
          </div>

          {/* Last Grid */}
          <div className="flex flex-col items-center justify-center">
            <blockquote className="mb-6 italic text-[#F18A00] text-center">
              “Believe work can be better. Know deeper. Do Better.”
            </blockquote>
            <p className="font-semibold text-center">
              Scope of Collaboration and Support
            </p>

            <div className="flex mt-4 space-x-4">
              <FaFacebook size={32} />
              <FaLinkedin size={32} />
              <FaInstagram size={32} />
              <FaOrcid size={32} />
            </div>
          </div>
        </div>

        {/* Improved Copyright Section */}
        <div className="flex justify-between pt-6 mt-10 text-white border-t border-gray-200">
          <p className="text-sm text-center text-gray-200">
            &copy; {new Date().getFullYear()} Monaemul Islam Sizear. All rights
            reserved.
          </p>
          <p className="text-sm text-center text-gray-200">
            <a href="#privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <span className="px-2">|</span>
            <a href="#terms-of-use" className="hover:underline">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
