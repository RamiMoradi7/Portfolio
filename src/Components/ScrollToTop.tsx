import { useEffect, useState } from "react";

export default function ScrollToTop(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="fixed z-50 bottom-6 right-8" data-aos="fade-in">
                    <button onClick={scrollToTop}>
                        <svg className="h-12 w-12 text-zinc-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="12" y1="19" x2="12" y2="5" />  <polyline points="5 12 12 5 19 12" /></svg>
                    </button>
                </div>
            )}
        </>
    );
}
