import Zoom from 'react-medium-image-zoom';
import "react-medium-image-zoom/dist/styles.css";
import { useTitle } from "../../hooks/useTitle";
import { amFitnessData, projectDetails } from "../../Utils/AmFitnessData";
import ImageCarousel from "./ImageCarousel";

export default function AMFitness(): JSX.Element {
    useTitle("AM-Fitness");

    return (
        <div className="min-h-screen mt-16 bg-gray-50 dark:bg-dark-second px-4 lg:px-8">
            <h2 className="mb-2 text-center font-header text-4xl font-thin uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-4xl">
                Fitness Tracker Application (Freelance)
            </h2>
            <div className="flex justify-center mb-6">
                <a
                    href="https://am-fitness.onrender.com"
                    className="inline-flex items-center justify-center px-4 py-2 text-md font-medium text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Live Demo
                </a>
            </div>
            <ImageCarousel data={amFitnessData} />
            
            <div className="flex items-center justify-center mt-4">
                <ul className="list-none space-y-8 text-base sm:text-lg text-gray-700 dark:text-gray-300 w-full max-w-6xl">
                    {projectDetails.map(({ title, images }, index) => (
                        <div key={index} className="dark:bg-dark-third bg-gray-100 shadow-md rounded-lg p-4 mb-6 transition-all duration-300 hover:shadow-lg">
                            <li className="flex items-start space-x-4">
                                <span className="flex-shrink-0 text-green-500 text-2xl">●</span>
                                <div className="flex flex-col">
                                    <p className="mb-2">{title}</p>
                                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
                                        {images && images?.map((image, imgIndex) => (
                                            <Zoom key={imgIndex}>
                                                <div data-aos={imgIndex % 2 === 0 ? "fade-right" : "fade-left"}>
                                                    <img
                                                        src={image}
                                                        alt={`Image ${imgIndex + 1}`}
                                                        className="transition-transform duration-500 transform sm:w-1/2 lg:w-full rounded shadow-md mb-2 sm:mb-0 cursor-pointer"
                                                        style={{ maxWidth: '100%', height: 'auto' }}
                                                    />
                                                </div>
                                            </Zoom>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
