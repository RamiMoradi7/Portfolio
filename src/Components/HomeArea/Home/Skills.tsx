export default function Skills(): JSX.Element {
    const skills = [
        { name: "JavaScript / TypeScript", },
        { name: "Node.js", },
        { name: "React", },
        { name: "Redux", },
        { name: "HTML & CSS", },
        { name: "Problem Solving", },
        { name: "Tailwind CSS", },
        { name: "Communication", },
    ];

    return (
        <div data-aos="fade-in" className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
            <div className="max-w-xl mx-auto w-full text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 font-raleway">
                    Some of My
                </h2>
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 dark:text-green-400 mb-10 font-raleway">
                    Skills
                </h2>
            </div>
            {skills.map(({ name }, index) =>
                <div
                    key={index}
                    data-aos="fade-in"
                    data-aos-delay={index * 100}
                    className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 dark:bg-dark-second rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                            className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="font-medium dark:text-dark-txt">{name}</span>
                    </div>
                </div>)}
        </div>
    );
}
