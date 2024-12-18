import handWave from "../../../Assets/Images/hand-wave.svg";
import profileImage from "../../../Assets/Images/RamiProfile.png";
import DownloadCV from "./DownloadCV";
import SocialButtons from "./SocialButtons";

export default function HeroSection() {
  return (
    <section
      className="dark:bg-dark-main pt-12 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 p-2 sm:justify-between"
      id="hero"
      data-aos="fade-down"
    >
      <div className="text sm:w-[60%]">
        <div
          className="grid grid-cols-9 w-fit sm:flex gap-2 mb-2 xl:mb-6"
          style={{ opacity: 1 }}
        >
          <p className="text-xl sm:text-2xl mb-3 sm:mb-0 lg:text-3xl col-span-6">
            Hello, there
          </p>
          <div
            className="col-span-3"
            style={{
              transformOrigin: "right bottom",
              transform: "none",
            }}
          >
            <img
              alt="wave"
              loading="lazy"
              width={30}
              height={30}
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={handWave}
            />
          </div>
        </div>
        <h1
          className="text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          style={{
            opacity: 1,
            transform: "translateY(0rem) translateZ(0px)",
            transformOrigin: "right bottom",
          }}
        >
          <p className="inline mr-2">I'm</p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Rami Moradi
          </span>
          <p className="text-2xl">a Software Developer</p>
        </h1>
        <p
          className="mt-3 text-xs pb-3 font-bold"
          style={{
            opacity: 1,
            transform: "translateY(0rem) translateZ(0px)",
          }}
        >
          (React / NodeJS / MongoDB / MySQL / TypeScript)
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="h-image flex items-center justify-center w-[280px] h-[250px] xl:w-[350px] xl:h-[300px] relative mb-8 sm:mb-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] rounded-full opacity-40"></div>
          <img
            className="w-full h-full max-w-[280px] xl:max-w-[350px] rounded-full shadow-xl transform transition duration-500 hover:scale-105"
            src={profileImage}
            alt="Rami Moradi Full Stack Developer"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-[350px] mx-auto gap-4 mt-6">
          <SocialButtons />
          <DownloadCV />
        </div>
      </div>
    </section>
  );
}
