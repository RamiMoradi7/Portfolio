import "react-medium-image-zoom/dist/styles.css";
import adminDashboard from "../Assets/Images/Projects/AMFitness/AdminDashboard.png";
import contactMe from "../Assets/Images/Projects/AMFitness/ContactMe.png";
import createPlan from "../Assets/Images/Projects/AMFitness/CreatePlan.png";
import homePage from "../Assets/Images/Projects/AMFitness/HomePage.png";
import homePageSection from "../Assets/Images/Projects/AMFitness/HomePageSection.png";
import Login from "../Assets/Images/Projects/AMFitness/Login.png";
import trainingPlans from "../Assets/Images/Projects/AMFitness/Plans.png";
import weeklyFitnessData from "../Assets/Images/Projects/AMFitness/WeeklyFitness.jpeg";
import backendApp1 from "../Assets/Images/Projects/AMFitnessDetails/BackendApp1.png";
import backendApp2 from "../Assets/Images/Projects/AMFitnessDetails/BackendApp2.png";
import hooks from "../Assets/Images/Projects/AMFitnessDetails/ReactHooks.png";
import useFetchHook from "../Assets/Images/Projects/AMFitnessDetails/useFetchHook.png";
import appHomePage from "../Assets/Images/Projects/AMFitnessDetails/ReactHomePage.png";
import securityMiddleware from "../Assets/Images/Projects/AMFitnessDetails/SecurityMiddleware.png";
import mobileView from "../Assets/Images/Projects/AMFitnessDetails/mobileView.png";
import tailwindConfig from "../Assets/Images/Projects/AMFitnessDetails/tailwindConfig.png";
import tailwindContainer from "../Assets/Images/Projects/AMFitnessDetails/tailwindContainer.png";
import userModel from "../Assets/Images/Projects/AMFitnessDetails/UserModel.png";
import usersService from "../Assets/Images/Projects/AMFitnessDetails/usersService.png";
import userDashboard from "../Assets/Images/Projects/AMFitnessDetails/UserDashboard.png";
import backendStructure from "../Assets/Images/Projects/AMFitnessDetails/BackendStructure.png";
import authController from "../Assets/Images/Projects/AMFitnessDetails/AuthController.png";

import { ImageCarouselProps } from "../Types/ImageCarousel";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const amFitnessData: ImageCarouselProps[] = [
  {
    image: homePage,
    title: "Home Page",
  },
  {
    image: homePageSection,
    title: "Home Section",
  },
  {
    image: contactMe,
    title: "Contact",
  },
  {
    image: Login,
    title: "Login",
  },
  {
    image: adminDashboard,
    title: "Admin Dashboard",
  },
  {
    image: createPlan,
    title: "Create Training Plan",
  },
  {
    image: trainingPlans,
    title: "TrainingPlans",
  },
  {
    image: weeklyFitnessData,
    title: "Weekly Fitness Data",
  },
];

export const projectDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed a fitness tracker application using React, Redux, Node.js, and TypeScript.",
  },
  {
    title: "Used MongoDB to achieve scalable and efficient data management.",
    images: [userModel, usersService],
  },
  {
    title:
      "Developed a scalable backend with Express.js, integrating CORS, Rate Limiter, File Upload, and CSRF protection.",
    images: [backendApp1, backendApp2, securityMiddleware],
  },
  {
    title:
      "Utilized React hooks including useState, useEffect, and custom hooks to build reusable and maintainable components.",
    images: [hooks, useFetchHook],
  },
  {
    title:
      "Ensured clean, readable, and scalable code by following design patterns and best practices.",
    images: [appHomePage, userDashboard],
  },
  {
    title:
      "Utilized Tailwind CSS to build a responsive design that ensures optimal user experience across all devices.",
    images: [tailwindConfig, tailwindContainer, mobileView],
  },
  {
    title:
      "Managed file uploads for profile pictures and other media using Express File Upload.",
  },
  {
    title:
      "Ensured maintainability and scalability by writing modular and reusable code across all layers of the application.",
    images: [backendStructure, authController],
  },
];
