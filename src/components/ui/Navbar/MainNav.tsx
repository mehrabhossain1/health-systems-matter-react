import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="h-20 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between h-full max-w-screen-xl p-4 mx-auto text-gray-600">
        {/* Logo in the center */}
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} className="h-10" alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
