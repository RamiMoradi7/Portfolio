
import { useState } from "react";
import Zoom from 'react-medium-image-zoom';

type ImageData = {
    image: string;
    title: string;
};

type ImageCarouselProps = {
    data: ImageData[];
};

export default function ImageCarousel({ data }: ImageCarouselProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="max-w-5xl  mx-auto mt-4">
            <div id="default-carousel" className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                <div className="relative h-80 md:h-96" data-carousel-inner>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 duration-700 ease-in-out transition-all transform ${activeIndex === index ? "opacity-100" : "opacity-0 hidden"}`}
                            data-carousel-item={activeIndex === index ? "active" : ""}
                        >
                            <Zoom>
                                <img src={item.image} loading="lazy" className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
                            </Zoom>
                            <div className="absolute bottom-2 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center text-lg">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                    {data.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition ${activeIndex === index ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                    onClick={goToPrevSlide}
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                <button
                    type="button"
                    className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                    onClick={goToNextSlide}
                    aria-label="Next slide"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
