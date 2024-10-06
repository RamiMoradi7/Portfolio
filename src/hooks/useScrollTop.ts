import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, hash]);
};
