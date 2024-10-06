export default function DownloadCV(): JSX.Element {
    
    const handleDownload = () => {
        const fileURL = `${window.location.origin}/CV.pdf`;
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = 'Rami_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="cursor-pointer relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full hover:from-teal-500 hover:to-green-400 transition-all duration-300 ease-out font-medium shadow-md hover:shadow-teal-600/30 active:scale-95"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                className="text-white transition-transform duration-300 transform group-hover:scale-105"
            >
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                ></path>
            </svg>
            <span className="relative z-10 text-sm">My CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute opacity-0 bottom-full rounded-md py-1 px-2 bg-gray-900 bg-opacity-90 text-white text-xs left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download CV
            </div>
        </button>
    );
}
