import { useNavigate } from "react-router-dom";
import AMFitness from "../../Assets/Images/AMFitness.png";
import ClickMeBtn from "../HomeArea/Home/ClickMeBtn";

export default function Experience(): JSX.Element {
  const navigate = useNavigate();

  return (
    <section
      className="lg:p-20 p-5 bg-gray-50 dark:bg-dark-main"
      id="experience"
    >
      <div className="lg:container mx-auto">
        <h2 className="mb-3 text-center font-header text-4xl font-thin uppercase bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] sm:text-5xl lg:text-6xl">
          Experience
        </h2>
        <div className="lg:w-2/3 mx-auto">
          <div className="flex justify-center">
            <div
              className="bg-white dark:bg-dark-third rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/projects/am-fitness`)}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={150}
            >
              <img
                src={AMFitness}
                alt={"AM-Fitness"}
                className="w-full h-70 object-cover"
              />
              <div className="p-3 dark:bg-dark-second h-full">
                <h3 className="text-xl font-semibold bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] text-center ">
                  Fitness Tracker Application (Freelance)
                </h3>
                <ClickMeBtn />
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg lg:text-base leading-relaxed">
                  Developed a full-featured fitness tracker using React, Redux,
                  Node.js, and TypeScript, with a scalable Express.js and
                  MongoDB backend.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg lg:text-base leading-relaxed">
                  Integrated key security features like CORS, Rate Limiting, and
                  CSRF protection, and employed React hooks and Tailwind CSS to
                  deliver a responsive, user-friendly interface.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg lg:text-base leading-relaxed">
                  Managed media uploads and maintained clean, modular code to
                  ensure scalability and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
