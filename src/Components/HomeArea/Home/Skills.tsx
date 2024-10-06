export default function Skills(): JSX.Element {
    const skills = [
        { name: "JavaScript", level: "90%", color: "#007acc" },
        { name: "React", level: "85%", color: "#61dafb" },
        { name: "Redux", level: "80%", color: "#764abc" },
        { name: "Node.js", level: "75%", color: "#68a063" },
        { name: "HTML & CSS", level: "95%", color: "#e34f26" },
        { name: "Tailwind CSS", level: "85%", color: "#38bdf8" },
        { name: "Communication", level: "92%", color: "#f4b400" },
        { name: "Problem Solving", level: "88%", color: "#34a853" }
    ];

    return (
        <div data-aos="fade-in" className="flex justify-center items-center py-12 dark:bg-dark-main">
            <div className="max-w-xl mx-auto w-full text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 font-raleway">
                    Some of My
                </h2>
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 dark:text-green-400 mb-10 font-raleway">
                    Skills
                </h2>
                {skills.map((skill, index) => (
                    <div key={index} className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.level}</span>
                        </div>
                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                            <path
                                className="rc-progress-line-trail"
                                d="M 0.5,0.5 L 99.5,0.5"
                                strokeLinecap="round"
                                stroke="#D9D9D9"
                                strokeWidth="1"
                                fillOpacity="0"
                            />
                            <path
                                className="rc-progress-line-path"
                                d="M 0.5,0.5 L 99.5,0.5"
                                strokeLinecap="round"
                                stroke={skill.color}
                                strokeWidth="3"
                                fillOpacity="0"
                                style={{
                                    strokeDasharray: `${parseInt(skill.level) * 0.98}px, 100px`,
                                    strokeDashoffset: "0px",
                                    transition: "stroke-dashoffset 0.5s ease, stroke-dasharray 0.5s ease",
                                }}
                            />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}
