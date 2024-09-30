import "../../App.css";
import BottomNav from "../ui/Navbar/BottomNav";
import FirstNav from "../ui/Navbar/FirstNav";
import MainNav from "../ui/Navbar/MainNav";
import NavLinks from "../ui/Navbar/NavLinks";

const Navbar = () => {
  return (
    <>
      <FirstNav />
      <MainNav />
      <NavLinks />
      <BottomNav />
    </>
  );
};

export default Navbar;
