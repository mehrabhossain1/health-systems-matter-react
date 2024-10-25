import { FaFacebook, FaInstagram, FaLinkedin, FaOrcid } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[#243642] text-gray-300">
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
          <ul className="space-y-2">
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

      {/* Copyright */}
      <p className="mt-20 font-serif text-base font-semibold text-center text-gray-300 border-t">
        &copy; Monaemul Islam Sizear {new Date().getFullYear()} All rights
        reserved. Privacy Policy and Terms of use.
      </p>
    </footer>
  );
};

export default Footer;
