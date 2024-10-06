import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      threshold: 0.5,
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
    if (section) {
      setIsScrolling(true);
      section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setActiveSection(id);
        setIsScrolling(false);
      }, 500);
    }
  };

  return { activeSection, setActiveSection: scrollToSection };
};
