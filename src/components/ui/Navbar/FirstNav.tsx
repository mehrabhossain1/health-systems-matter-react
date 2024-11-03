import { Link } from "react-router-dom";
import ownerImg from "../../../assets/ownerImg.png";
import { Button } from "../button";
import BlinkingButton from "../blinkingButton/BlinkingButton";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Importing icons
import logo from "../../../assets/logo2.png";

const FirstNav = () => {
  return (
    <div className="p-2 text-sm header-top h-16 bg-[#134074]">
      <div className="flex items-center justify-between h-full">
        {/* Grid 1 */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={ownerImg}
              alt="owner image"
              className="w-10 rounded-full"
            />
          </Link>
          <Link
            to="/"
            className="p-2 text-2xl font-semibold text-white transition duration-300 ease-in-out transform rounded-md shadow-lg hover:scale-110 pulse-animation hover:underline underline-offset-8"
          >
            | Sizear
          </Link>
        </div>

        {/* Grid 2. I want logo here */}
        <img className="h-10" src={logo} alt="" />

        {/* Grid 3.  */}
        <div className="flex items-center justify-center space-x-2">
          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center justify-center space-x-2">
              <BlinkingButton children="GIFT" />
              <Button variant="outline" size="sm">
                Get Involved
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-white" />
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
