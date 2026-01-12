import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the browser to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;