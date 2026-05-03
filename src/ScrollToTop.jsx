import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar pathname (URL) change hone par ye scroll top karega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi use kar sakte hain, lekin "instant" professional lagta hai
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;