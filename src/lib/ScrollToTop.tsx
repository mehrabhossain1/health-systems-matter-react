import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed:", location);
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
