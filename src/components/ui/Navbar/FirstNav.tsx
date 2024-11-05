import { Link } from "react-router-dom";
import ownerImg from "../../../assets/ownerImg.png";
import { Button } from "../button";
import BlinkingButton from "../blinkingButton/BlinkingButton";
import logo from "../../../assets/logo3.png";
import "./css/blink.css";

const FirstNav = () => {
  return (
    <div className="p-2 text-sm header-top h-full bg-[#0A2240]">
      {/*  sticky top-0 z-50 */}
      <div className="flex items-center justify-between h-full">
        {/* Grid 1 */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={ownerImg}
              alt="owner image"
              className="w-8 rounded-full"
            />
          </Link>
          <Link
            to="/"
            className="p-2 text-xl decoration-[#F18A00] font-normal text-[#F18A00] hover:text-[#ffb452] hover:decoration-[#ffb452] transition duration-300 ease-in-out transform rounded-md shadow-lg hover:scale-110 pulse-animation hover:underline underline-offset-8"
          >
            | Sizear
          </Link>
        </div>

        {/* Grid 2. I want logo here */}
        <Link to="/">
          <img className="h-12" src={logo} alt="Logo" />
          <p className="text-[#F18A00] text-center italic blink">
            Becoming a better global health leader
          </p>
        </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
