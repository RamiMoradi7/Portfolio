import React, { useState } from "react";
import menuIcon from "../../../Assets/Images/AccessibilityIcon.png";

const AccessibilityMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(20);
    const [highContrast, setHighContrast] = useState(false);
    const [screenReaderMode, setScreenReaderMode] = useState(false);
    const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const increaseFontSize = () => {
        setFontSize((prevFont) => {
            const newFontSize = prevFont + 2;
            document.documentElement.style.setProperty('font-size', `${newFontSize}px`, 'important');
            return newFontSize

        });
    };

    const decreaseFontSize = () => {
        setFontSize((prevFont) => {
            const newFontSize = prevFont - 2;
            document.documentElement.style.setProperty('font-size', `${newFontSize}px`, 'important');
            return newFontSize;
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
                const nonEssentialElements = document.querySelectorAll('.non-essential');
                nonEssentialElements.forEach(el => {
                    const element = el as HTMLElement;
                    element.setAttribute('aria-hidden', "true");
                    element.style.display = 'none';
                });
            } else {
                document.documentElement.classList.remove("screen-reader-mode");
                const nonEssentialElements = document.querySelectorAll('.non-essential');
                nonEssentialElements.forEach(el => {
                    const element = el as HTMLElement;
                    element.setAttribute('aria-hidden', "false");
                    element.style.display = '';
                });
            }
            return !prevMode;
        });
    };

    const toggleGrayscaleMode = () => {
        const isGrayscale = document.documentElement.classList.toggle('grayscale');
        if (isGrayscale) {
            document.documentElement.style.filter = 'grayscale(100%)';
        } else {
            document.documentElement.style.filter = '';
        }
    };

    const increaseTextSpacing = () => {
        document.documentElement.style.setProperty('letter-spacing', '0.12em', 'important');
        document.documentElement.style.setProperty('line-height', '1.75', 'important');
        document.documentElement.style.setProperty('word-spacing', '0.16em', 'important');
    };

    const resetTextSpacing = () => {
        document.documentElement.style.setProperty('letter-spacing', '', 'important');
        document.documentElement.style.setProperty('line-height', '', 'important');
        document.documentElement.style.setProperty('word-spacing', '', 'important');
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


    const toggleFocusHighlight = () => {
        document.body.classList.toggle('focus-highlight');
    };

    const togglePauseAnimations = () => {
        document.body.classList.toggle('paused-animations'); // Toggle the class
    };

    const resumeAnimations = () => {
        document.body.classList.remove('paused-animations'); // Remove the class to resume
    };
    return (
        <div className={`fixed bottom-16 right-5 z-50 `}>
            <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none transition-transform transform hover:scale-125"
                aria-label="Toggle accessibility menu"
            >
                <img
                    src={menuIcon}
                    alt="Accessibility Menu"
                    className="w-16 h-16 hover:opacity-80"
                    style={{ transition: "opacity 0.3s ease" }}
                />
            </button>

            {isOpen && (
                <div data-aos="fade-down-left"  className="mt-3 p-5 space-y-4 shadow-2xl rounded-xl backdrop-blur-lg bg-white bg-opacity-90 border border-gray-300 dark:bg-dark-second transition-opacity duration-500"
                >
                    <h3 className="font-bold text-lg text-zinc-800 dark:text-dark-txt">Accessibility Options</h3>

                    {/* Font Size Section */}
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Font Size:</span>
                        <div className="flex space-x-2 items-center">
                            <button
                                onClick={decreaseFontSize}
                                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                            >
                                -
                            </button>
                            <span className="text-gray-600 dark:text-gray-300">{fontSize}px</span>
                            <button
                                onClick={increaseFontSize}
                                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* High Contrast Mode Section */}
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">High Contrast Mode:</span>
                        <button
                            onClick={toggleHighContrast}
                            className={`px-4 py-1 rounded-lg ${highContrast ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                        >
                            {highContrast ? "Off" : "On"}
                        </button>
                    </div>

                    {/* Screen Reader Mode Section */}
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Screen Reader Mode:</span>
                        <button
                            onClick={toggleScreenReaderMode}
                            className={`px-4 py-1 rounded-lg ${screenReaderMode ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                        >
                            {screenReaderMode ? "Off" : "On"}
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Text Spacing:</span>
                        <button
                            onClick={increaseTextSpacing}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            Increase
                        </button>
                        <button
                            onClick={resetTextSpacing}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Grayscale Mode:</span>
                        <button
                            onClick={toggleGrayscaleMode}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            Toggle
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Pause Animations:</span>
                        <button
                            onClick={togglePauseAnimations}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            Pause
                        </button>
                        <button
                            onClick={resumeAnimations}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            Resume
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Dyslexia-Friendly Font:</span>
                        <button
                            onClick={toggleDyslexiaFont}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            {isDyslexiaFont ? "Off" : "On"}
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Highlight Focused Elements:</span>
                        <button
                            onClick={toggleFocusHighlight}
                            className="px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
                        >
                            Toggle
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityMenu;
