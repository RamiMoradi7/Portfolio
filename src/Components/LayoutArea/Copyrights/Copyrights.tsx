import { scrollToSection } from "../../../Utils/ScrollToSection";

type ListItem = {
    section: string;
    label: string;
}

const listItems: ListItem[] = [
    { section: "about", label: "About" },
    { section: "experience", label: "Experience" },
    { section: "projects", label: "Projects" },
    { section: "services", label: "Services" },
    { section: "contact", label: "Contact" },
];

function Copyrights(): JSX.Element {
    return (
        <footer className="bg-gray-100 dark:bg-dark-second text-gray-800 dark:text-white lg:p-20 p-10">
            <section className="container mx-auto">
                <div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex gap-5 flex-col">
                        <p className="text-3xl font-bold hover:text-green-500 transition duration-300">Rami Moradi</p>
                        <p className="text-lg">Software Developer</p>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <h3 className="text-xl font-bold border-b-2 text-gray-800 dark:text-gray-200 border-gray-400 pb-2 mb-4">Quick Links</h3>
                        <ul>
                            {listItems.map((item) => (
                                <li key={item.section} className="m-3 transition-colors duration-300">
                                    <a
                                        href={`#${item.section}`}
                                        onClick={(e) => scrollToSection(e, item.section)}
                                        className="hover:text-green-500 dark:hover:text-green-400 text-gray-600 dark:text-gray-300"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <div className="text-center mt-10">
                <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Rami Moradi. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Copyrights;
