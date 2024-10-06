import { useState } from "react";
import menuIcon from "../../../Assets/Images/AccessibilityIcon.png";

const AccessibilityMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(20);
    const [highContrast, setHighContrast] = useState(false);
    const [screenReaderMode, setScreenReaderMode] = useState(false);
    const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const minFontSize = 14;
    const maxFontSize = 26;

    const increaseFontSize = () => {
        setFontSize((prevFont) => {
            const newFontSize = prevFont + 2;
            if (newFontSize <= maxFontSize) {
                document.documentElement.style.setProperty('font-size', `${newFontSize}px`, 'important');
                return newFontSize;
            }
            return prevFont;
        });
    };

    const decreaseFontSize = () => {
        setFontSize((prevFont) => {
            const newFontSize = prevFont - 2;
            if (newFontSize >= minFontSize) {
                document.documentElement.style.setProperty('font-size', `${newFontSize}px`, 'important');
                return newFontSize;
            }
            return prevFont;
        });
    };

    const toggleHighContrast = () => {
        setHighContrast((prevContrast) => {
            if (!prevContrast) {
                document.documentElement.classList.add("high-contrast");
            } else {
                document.documentElement.classList.remove("high-contrast");
            }
            return !prevContrast;
        });
    };

    const toggleScreenReaderMode = () => {
        setScreenReaderMode((prevMode) => {
            if (!prevMode) {
                document.documentElement.classList.add("screen-reader-mode");
                document.querySelectorAll('.non-essential').forEach(el => {
                    el.setAttribute('aria-hidden', "true");
                });
            } else {
                document.documentElement.classList.remove("screen-reader-mode");
                document.querySelectorAll('.non-essential').forEach(el => {
                    el.setAttribute('aria-hidden', "false");
                });
            }
            return !prevMode;
        });
    };

    const toggleDyslexiaFont = () => {
        setIsDyslexiaFont((prev) => {
            if (prev) {
                document.documentElement.classList.remove('dyslexia-font');
                document.body.style.fontFamily = '';
            } else {
                document.documentElement.classList.add('dyslexia-font');
                document.body.style.fontFamily = "OpenDyslexic";
            }
            return !prev;
        });
    };

    const toggleGrayscaleMode = () => {
        const isGrayscale = document.documentElement.classList.toggle('grayscale');
        document.documentElement.style.filter = isGrayscale ? 'grayscale(100%)' : '';
    };

    const togglePauseAnimations = () => {
        document.body.classList.toggle('paused-animations');
    };

    return (
        <div className={`fixed bottom-0 right-2 z-50 `}>
            <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none transition-transform transform hover:scale-125"
                aria-label="Toggle accessibility menu"
            >
                <img
                    src={menuIcon}
                    alt="Accessibility Menu"
                    className="w-12 h-12 md:w-16 md:h-16 hover:opacity-80"
                    style={{ transition: "opacity 0.3s ease" }}
                />
            </button>

            {isOpen && (
                <div
                    className=" p-6 md:p-8 space-y-6 shadow-lg rounded-xl bg-gray-50 dark:bg-dark-second 
  border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out 
  max-w-2xl">
                    <div className="dark:bg-dark-main">
                        <h3 className="font-bold text-lg  text-zinc-800 dark:text-dark-txt">Accessibility Options</h3>
                        {/* Font Size Section */}
                        <div className=" flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Font Size:</span>
                            <div className="flex space-x-2 items-center">
                                <button
                                    onClick={decreaseFontSize}
                                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm md:text-base"
                                >
                                    -
                                </button>
                                <span className="text-gray-600 dark:text-gray-300">{fontSize}px</span>
                                <button
                                    onClick={increaseFontSize}
                                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm md:text-base"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* High Contrast Mode Section */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">High Contrast:</span>
                            <button
                                onClick={toggleHighContrast}
                                className={`px-4 py-1 rounded-lg text-sm md:text-base ${highContrast ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                            >
                                {highContrast ? "Off" : "On"}
                            </button>
                        </div>

                        {/* Screen Reader Mode Section */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Screen Reader:</span>
                            <button
                                onClick={toggleScreenReaderMode}
                                className={`px-4 py-1 rounded-lg text-sm md:text-base ${screenReaderMode ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                            >
                                {screenReaderMode ? "Off" : "On"}
                            </button>
                        </div>

                        {/* Grayscale Mode */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Grayscale Mode:</span>
                            <button
                                onClick={toggleGrayscaleMode}
                                className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm md:text-base"
                            >
                                Toggle
                            </button>
                        </div>

                        {/* Pause Animations */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Pause Animations:</span>
                            <button
                                onClick={togglePauseAnimations}
                                className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm md:text-base"
                            >
                                Toggle
                            </button>
                        </div>

                        {/* Dyslexia-Friendly Font */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Dyslexia Font:</span>
                            <button
                                onClick={toggleDyslexiaFont}
                                className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm md:text-base"
                            >
                                {isDyslexiaFont ? "Off" : "On"}
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default AccessibilityMenu;
