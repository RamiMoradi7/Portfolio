import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      if (!isScrolling) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setActiveSection(id);
      setIsScrolling(false);
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsScrolling(false);
    }
  };

  return { activeSection, scrollToSection };
};
