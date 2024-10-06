type NavItemProps = {
    section: string;
    activeSection: string;
    onClick: () => void;
};

export default function NavItem({ section, activeSection, onClick }: NavItemProps): JSX.Element {
    const isActive = activeSection === section;

    return (
        <li
            onClick={onClick}
            className={`relative cursor-pointer transition-all duration-300 
            ${isActive ? "text-zinc-800 font-bold  dark:text-dark-txt" : "text-gray-500 dark:text-dark-txt"} hover:text-gray-600`}
        >
            <a href={`#${section}`} className="relative z-10">
                {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
            <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-400 transform transition-transform ease-out duration-500
                ${isActive ? "scale-x-100" : "scale-x-0"} origin-left`}
                style={{ width: "100%" }}
            />
        </li>
    );
}
