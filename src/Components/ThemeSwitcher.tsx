import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher(): JSX.Element {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={`text-2xl grid place-items-center bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-second transition-colors duration-300`}
            onClick={toggleTheme}
        >
            <i className={`bx ${theme === 'dark' ? 'bxs-sun' : 'bxs-moon'} transition-transform duration-300`}></i>
        </div>
    );
}
