import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Container from "../shared/Container";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
