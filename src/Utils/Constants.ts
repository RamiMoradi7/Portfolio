import AMFitness from "../Assets/Images/AMFitness.jpeg";
import Friendify from "../Assets/Images/Friendify.jpeg";
import TrendyThreads from "../Assets/Images/TrendyThreads.png";
import VacationsManagment from "../Assets/Images/VacationsManagment.png";

// Header Nav Items:
export const navItems = [
  { section: "about" },
  { section: "services" },
  { section: "projects" },
  { section: "contact" },
];

// Projects Section:
export type Project = {
  title: string;
  content: string;
  image: string;
  id: string;
};

export const projects: Project[] = [
  {
    title: "AM Fitness",
    content:
      "A fitness application designed to help users track their workouts and goals.",
    image: AMFitness,
    id: "am-fitness",
  },
  {
    title: "Friendify",
    content:
      "Created a Facebook-like application using React, Redux, and Node.js with TypeScript. This project involved implementing real-time notifications and scalable data management with MongoDB",
    image: Friendify,
    id: "friendify",
  },
  {
    title: "Trendy Threads",
    content:
      "Developed a comprehensive E-Commerce site featuring secure payment processing and RESTful APIs, leveraging React, Redux, and Node.js.",
    image: TrendyThreads,
    id: "trendy-threads",
  },
  {
    title: "Vacations Management",
    content:
      "Built a vacation management tool with React, Redux, Node.js, and MySQL, emphasizing performance optimization and security.",
    image: VacationsManagment,
    id: "vacations-management",
  },
];

export const templateID = "template_caj6yju";
export const serviceID = "service_6eehins";
export const publicKey = "Z9geDf8zhi4GhEcXA";
