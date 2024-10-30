import { useState } from "react";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { navItems } from "../../../Utils/Constants";
import NavItem from "./NavItem";
import ThemeSwitcher from "../../ThemeSwitcher";
import { useNavigate } from "react-router-dom";

export default function Header(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { activeSection, setActiveSection } = useActiveSection();
    const navigate = useNavigate();

    const scrollToSection = (section: string) => {
        if (section) {
            navigate("/");
            setActiveSection(section);
            setIsMenuOpen(false);
        }
    };


    return (
        <div className="fixed w-full dark:bg-dark-second dark:text-dark-txt bg-zinc-100 shadow-md z-50">
            <header className="py-4 px-6 md:px-10 border-b border-gray-200">
                <div className="container mx-auto flex justify-between items-center">
                    <p onClick={() => navigate("/")} className="dark:text-green-400 font-raleway cursor-pointer text-xl font-bold tracking-tight text-gray-800 dark:text-dark-txt">
                        Rami's Portfolio
                    </p>

                    <nav className="hidden md:flex gap-8 items-center">
                        <ul className="flex space-x-8 text-lg">
                            {navItems.map(({ section }) => (
                                <NavItem
                                    key={section}
                                    section={section}
                                    activeSection={activeSection}
                                    onClick={() => scrollToSection(section)}
                                />
                            ))}
                        </ul>
                        <div className="ml-4">
                            <ThemeSwitcher />
                        </div>
                    </nav>

                    <nav className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`text-gray-800 focus:outline-none transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""} ml-2`} // Add margin-left here
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

                        <div className="ml-2">
                            <ThemeSwitcher />
                        </div>
                    </nav>
                </div>
            </header>
            <nav
                className={`md:hidden dark:bg-dark-second dark:text-dark-txt bg-white w-full transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}
            >
                <ul className="dark:bg-dark-second dark:text-dark-txt flex flex-col items-center space-y-6 py-6">
                    {navItems.map(({ section }) => (
                        <NavItem
                            key={section}
                            section={section}
                            activeSection={activeSection}
                            onClick={() => scrollToSection(section)}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
