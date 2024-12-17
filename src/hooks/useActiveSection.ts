import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
    }
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (location.pathname !== "/") {
      navigate(`/`);
      setActiveSection(id);
    }

    if (section && section.id !== activeSection) {
      window.history.pushState(null, "", `/#${id}`);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return { activeSection, scrollToSection };
};
