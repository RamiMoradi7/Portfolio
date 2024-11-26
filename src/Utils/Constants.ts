import Friendify from "../Assets/Images/Friendify.jpeg";
import TrendyThreads from "../Assets/Images/TrendyThreads.png";
import VacationsManagment from "../Assets/Images/VacationsManagment.png";

// Header Nav Items:
export const navItems = [
  { section: "about" },
  { section: "experience" },
  { section: "projects" },
  { section: "services" },
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
    title: "Friendify",
    content:
      "Developed a Facebook-like application using React, Redux, and Node.js with TypeScript. This project involved implementing real-time notifications and scalable data management with MongoDB",
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
      "Developed a vacation management tool with React, Redux, Node.js, and MySQL, emphasizing performance optimization and security.",
    image: VacationsManagment,
    id: "vacations-management",
  },
];

export const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID!;
export const SERVICE_ID = process.env.REACT_APP_SERVICE_ID!;
export const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY!;
