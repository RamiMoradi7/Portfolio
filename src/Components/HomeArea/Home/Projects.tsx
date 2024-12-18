import { useNavigate } from "react-router-dom";
import { Project, projects } from "../../../Utils/Constants";
import ClickMeBtn from "./ClickMeBtn";

export const ProjectCard = ({
  title,
  content,
  image,
  id,
  delay,
}: Project & { delay: number }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-dark-third rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/projects/${id}`)}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={delay}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-70 object-cover"
      />

      <div className="p-5 dark:bg-dark-second h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-zinc-800 dark:text-dark-txt">
            {title}
          </h3>
          <ClickMeBtn />
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{content}</p>
      </div>
    </div>
  );
};

export default function Projects(): JSX.Element {
  return (
    <section
      className="lg:p-20 p-2 bg-gray-50 dark:bg-dark-main"
      id="projects"
    >
      <div className="lg:container mx-auto">
        <h2 className="mb-3 text-center font-header text-4xl font-thin uppercase bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] sm:text-5xl lg:text-6xl">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
