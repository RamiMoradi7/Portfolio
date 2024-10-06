function Copyrights(): JSX.Element {
    return (
        <footer className="bg-gray-100 dark:bg-dark-second text-white lg:p-20 p-10">
            <section className="container mx-auto">
                <div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex gap-5 flex-col">
                        <p className="text-2xl font-bold text-zinc-800 dark:text-dark-txt">Rami Moradi</p>
                        <p className="text-zinc-800 dark:text-dark-txt">Software Developer</p>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <h3 className="text-xl font-bold border-b text-zinc-800 dark:text-dark-txt border-gray-400 pb-2 mb-4">Quick links</h3>
                        <ul>
                            <li className="m-3 hover:text-gray-300 text-zinc-800 dark:text-dark-txt transition-colors duration-300">
                                <a href="#about">About</a>
                            </li>
                            <li className="m-3 hover:text-gray-300 text-zinc-800 dark:text-dark-txt transition-colors duration-300">
                                <a href="#services">Services</a>
                            </li>
                            <li className="m-3 hover:text-gray-300 text-zinc-800 dark:text-dark-txt transition-colors duration-300">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="m-3 hover:text-gray-300 text-zinc-800 dark:text-dark-txt transition-colors duration-300">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="text-center mt-10">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Rami Moradi. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Copyrights;
