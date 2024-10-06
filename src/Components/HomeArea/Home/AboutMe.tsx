import sectionImage from "../../../Assets/Images/RamiProfile.jpg";

export default function AboutMe(): JSX.Element {
    return (
        <>
            <section id="about" className="sm:p-10 lg:p-20 bg-gray-50 dark:bg-dark-second dark:text-dark-txt" data-aos="fade-down">
                <h2 className="ml-4 font-raleway  text-5xl sm:text-3xl lg:text-5xl dark:text-green-500 uppercase mb-4">
                    WHO AM I?
                </h2>

                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <img
                            className="w-full h-auto max-w-md rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
                            src={sectionImage}
                            alt="Rami Moradi Full Stack Developer"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-green-600 dark:text-green-400">
                            Software Developer
                        </h2>
                        <p className="text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-300 mb-5">
                            Providing Innovative Web Solutions
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            Hello there! I'm a Full Stack Web Developer, passionate about building scalable and efficient web solutions.
                            My goal is to deliver clean and user-friendly applications that create value for businesses.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            With expertise in React.js, NodeJS, and MongoDB, I bring innovative approaches to web development,
                            ensuring high-performance solutions. I have a strong learning ability, allowing me to adapt quickly to new technologies.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            A team player who thrives under pressure, I strive to deliver quality products that exceed customer expectations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
