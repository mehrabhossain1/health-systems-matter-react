import logo from "../../../assets/logo2.png";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="h-20">
      <div className="grid items-center h-full max-w-screen-xl grid-cols-3 px-4 mx-auto">
        {/* Left Text */}
        <div className="flex justify-start">
          <p className="text-sm italic font-medium tracking-widest text-right text-[#01748D]">
            X
          </p>
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-10" alt="Logo" />
          </Link>
        </div>

        {/* Right Text */}
        <div className="flex justify-end">
          <p className="text-sm italic font-medium tracking-widest text-right text-[#01748D]">
            Becoming a Better <br /> Global Health Leader
          </p>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
