import { useTitle } from "../../../hooks/useTitle";
import Experience from "../../Experience/Experience";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Services from "./Services";

export default function Main(): JSX.Element {
  useTitle("Rami Moradi");

  return (
    <>
      <main className="max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden">
        <HeroSection />
        <AboutMe />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <Experience />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <Projects />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <Services />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <ContactMe />
      </main>
    </>
  );
}
