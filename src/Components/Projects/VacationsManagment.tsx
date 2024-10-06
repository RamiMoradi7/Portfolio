import Zoom from 'react-medium-image-zoom';
import "react-medium-image-zoom/dist/styles.css";
import { useTitle } from "../../hooks/useTitle";
import ImageCarousel from "./ImageCarousel";
import { vacationsManagmentData, vacationsManagmentDetails } from '../../Utils/VacationsManagmentData';

export default function VacationsManagment(): JSX.Element {
    useTitle("Vacations Managment");

    return (
        <div className="min-h-screen mt-16 bg-gray-50 dark:bg-dark-second px-4 lg:px-8">
            <h2 className="mb-2 text-center font-header text-4xl font-thin uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-4xl">
                Vacations Managment Application
            </h2>
            <ImageCarousel data={vacationsManagmentData} />

            <div className="flex items-center justify-center mt-4">
                <ul className="list-none space-y-8 text-base sm:text-lg text-gray-700 dark:text-gray-300 w-full max-w-6xl">
                    {vacationsManagmentDetails.map(({ title, images }, index) => (
                        <div key={index} className="dark:bg-dark-third bg-gray-100 shadow-md rounded-lg p-4 mb-6 transition-all duration-300 hover:shadow-lg">
                            <li className="flex items-start space-x-4">
                                <span className="flex-shrink-0 text-green-500 text-2xl">●</span>
                                <div className="flex flex-col">
                                    <p className="mb-2">{title}</p>
                                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
                                        {images && images.map((image, imgIndex) => (
                                            <Zoom key={imgIndex}>
                                                <div data-aos={imgIndex % 2 === 0 ? "fade-right" : "fade-left"}>
                                                    <img
                                                        src={image}
                                                        alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                                                        className={`transition-transform duration-500 transform rounded shadow-md mb-2 sm:mb-0 cursor-pointer ${images.length === 1 ? 'w-full sm:w-2/3 lg:w-2/3' : 'sm:w-1/2 lg:w-full'}`} // Ensure full width on mobile
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
