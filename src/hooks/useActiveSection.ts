import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to the section when a user clicks a navigation item
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    // If we're not on the homepage, navigate back to the homepage
    if (location.pathname !== "/") {
      navigate(`/`);
      setActiveSection(id);
    }

    // Smooth scroll to the section if it exists
    if (section && section.id !== activeSection) {
      window.history.pushState(null, "", `/#${id}`);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section"); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); 
          }
        });
      },
      {
        root: null, 
        rootMargin: "0px",
        threshold: 0.5, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return { activeSection, scrollToSection };
};
