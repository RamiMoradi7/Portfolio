import { useState, useEffect } from "react";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { navItems } from "../../../Utils/Constants";
import ThemeSwitcher from "../../ThemeSwitcher";
import NavItem from "./NavItem";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <header
        className={`py-4 px-6 md:px-10 border-b border-gray-200  dark:text-dark-txt transition-all duration-300 ${
          isScrolled ? "bg-opacity-80" : "bg-opacity-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <p
            onClick={() => scrollToSection("hero")}
            className="font-raleway cursor-pointer text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] transition-all hover:opacity-80"
          >
            Rami Moradi
          </p>

          <nav className="hidden md:flex gap-8 items-center">
            <ul className="flex space-x-8 text-lg">
              {navItems.map(({ section }) => (
                <NavItem
                  key={section}
                  section={section}
                  activeSection={activeSection}
                  onClick={() => {
                    scrollToSection(section);
                  }}
                />
              ))}
            </ul>
            <div className="ml-4">
              <ThemeSwitcher />
            </div>
          </nav>

          <nav className="md:hidden flex items-center">
            <div className="ml-2">
              <ThemeSwitcher />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-gray-800 focus:outline-none transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              } ml-2`}
            >
              <svg
                className="w-8 h-8 dark:bg-dark-second dark:text-dark-txt"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <nav
        className={`md:hidden dark:bg-dark-second dark:text-dark-txt bg-white w-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="dark:bg-dark-second dark:text-dark-txt flex flex-col items-center space-y-6 py-6">
          {navItems.map(({ section }) => (
            <NavItem
              key={section}
              section={section}
              activeSection={activeSection}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(section);
              }}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
