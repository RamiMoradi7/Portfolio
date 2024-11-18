import { useEffect } from "react";
import profileImage from "../../../Assets/Images/RamiProfile.jpg";
import Typed from "typed.js";
import SocialButtons from "./SocialButtons";
import DownloadCV from "./DownloadCV";

export default function HeroSection(): JSX.Element {
    useEffect(() => {
        const options = {
            strings: ['a Software Developer', 'a Frontend Developer', 'a Backend Developer', 'a Full Stack Developer', 'a Full Stack Web Developer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed('.typing', options);
        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <section id="hero" className=" relative min-h-screen flex flex-col justify-center items-center  dark:bg-dark-main dark:text-dark-txt lg:p-20 md:p-8 sm:p-2" data-aos="fade-in">
            <div className="dark:bg-dark-second container mx-auto text-center rounded-xl">
                <div className="relative rounded-xl">
                    <img
                        className="rounded-full border-4 border-green-600 shadow-2xl h-64 w-64 mx-auto transition-transform duration-500 hover:scale-110 hover:rotate-2"
                        src={profileImage}
                        alt="Rami Moradi"
                    />

                    <div className="mt-8 flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-white font-raleway" data-aos="fade-up">
                            Hello, I'm <span className="text-green-600 dark:text-green-400">Rami Moradi</span>.
                        </h1>

                        <h2 className="lg:text-2xl text-gray-700 dark:text-gray-300">
                            I'm <span className="typing font-bold text-green-700 dark:text-green-400"></span>
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic tracking-wide">
                            (React / NodeJS / MongoDB / MySQL / TypeScript)
                        </p>
                        <div data-aos="fade-right">
                            <p className="text-sm mb-3 text-gray-600 dark:text-gray-400 italic tracking-wide">
                                Let's connect!
                            </p>
                            <SocialButtons />
                        </div>
                        <DownloadCV />
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className="w-72 h-72 bg-gradient-to-r from-green-400 to-blue-300 rounded-full opacity-10 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
