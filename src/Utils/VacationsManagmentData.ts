import homePage from "../Assets/Images/Projects/VacationsManagment/HomePage.png";
import login from "../Assets/Images/Projects/VacationsManagment/Login.png";
import addVacation from "../Assets/Images/Projects/VacationsManagment/AddVacation.png";
import editVacation from "../Assets/Images/Projects/VacationsManagment/EditVacation.png";
import vacations from "../Assets/Images/Projects/VacationsManagment/Vacations.png";
import reports from "../Assets/Images/Projects/VacationsManagment/ReportsPage.png";
import backendApp from "../Assets/Images/Projects/VacationManagmentDetails/BackendApp.png";
import dataBase from "../Assets/Images/Projects/VacationManagmentDetails/Database.png";
import dockerCompose1 from "../Assets/Images/Projects/VacationManagmentDetails/DockerCompose1.png";
import dockerCompose2 from "../Assets/Images/Projects/VacationManagmentDetails/DockerCompose2.png";
import dockerFileBackend from "../Assets/Images/Projects/VacationManagmentDetails/DockerFileBackend.png";
import dockerFileFrontend from "../Assets/Images/Projects/VacationManagmentDetails/DockerFileFrontend.png";
import mainTsx from "../Assets/Images/Projects/VacationManagmentDetails/mainTsx.png";
import mySqlConnection from "../Assets/Images/Projects/VacationManagmentDetails/mySqlConnection.png";
import securityMiddleware from "../Assets/Images/Projects/VacationManagmentDetails/SecurityMiddleware.png";
import unitTest1 from "../Assets/Images/Projects/VacationManagmentDetails/UnitTests1.png";
import unitTest2 from "../Assets/Images/Projects/VacationManagmentDetails/UnitTest2.png";
import vacationsSchema1 from "../Assets/Images/Projects/VacationManagmentDetails/VacationSchema.png";
import vacationsSchema2 from "../Assets/Images/Projects/VacationManagmentDetails/VacationSchema2.png";
import vacationsService1 from "../Assets/Images/Projects/VacationManagmentDetails/getVacationsService1.png";
import vacationsService2 from "../Assets/Images/Projects/VacationManagmentDetails/VacationsService2.png";
import { ImageCarouselProps } from "../Types/ImageCarousel";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const vacationsManagmentData: ImageCarouselProps[] = [
  {
    image: homePage,
    title: "Home Page",
  },
  {
    image: login,
    title: "Login",
  },
  {
    image: vacations,
    title: "Vacations Page",
  },
  {
    image: addVacation,
    title: "Add Vacation",
  },
  {
    image: editVacation,
    title: "Edit Vacation",
  },
  {
    image: reports,
    title: "Reports",
  },
];

export const vacationsManagmentDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed a vacations management app using React, Redux, Node.js, and TypeScript. ",
    images: [mainTsx],
  },
  {
    title: " Architected solutions to optimize performance and scalability. ",
  },
  {
    title:
      "Used MySQL for relational data storage and optimized query performance.",
    images: [dataBase, mySqlConnection, vacationsSchema1, vacationsSchema2],
  },
  {
    title:
      "Utilized Docker for consistent and scalable container-based application deployment.",
    images: [
      dockerFileBackend,
      dockerFileFrontend,
      dockerCompose1,
      dockerCompose2,
    ],
  },
  {
    title:
      "Implemented unit testing to ensure functionality and enhance code quality.",
    images: [unitTest1, unitTest2],
  },
  {
    title:
      "Secured application with Express rate limiting, CORS, SQL injection prevention, and DoS protection.",
    images: [
      backendApp,
      securityMiddleware,
      vacationsService1,
      vacationsService2,
    ],
  },
];
