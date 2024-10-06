import login from "../Assets/Images/Projects/Friendify/Login.png";
import register from "../Assets/Images/Projects/Friendify/Register.png";
import profile from "../Assets/Images/Projects/Friendify/UserProfile.png";
import addPost from "../Assets/Images/Projects/Friendify/AddPost.png";
import notifications from "../Assets/Images/Projects/Friendify/Notifications.png";
import chats from "../Assets/Images/Projects/Friendify/Chats.png";
import API1 from "../Assets/Images/Projects/FriendifyDetails/API1.png";
import API2 from "../Assets/Images/Projects/FriendifyDetails/API2.png";
import backendApp from "../Assets/Images/Projects/FriendifyDetails/BackendApp.png";
import chatModel from "../Assets/Images/Projects/FriendifyDetails/ChatModel.png";
import notificationModel from "../Assets/Images/Projects/FriendifyDetails/NotificationModel.png";
import mongoDb from "../Assets/Images/Projects/FriendifyDetails/MongoDB.png";
import mongoDal from "../Assets/Images/Projects/FriendifyDetails/mongoDal.png";
import postCard from "../Assets/Images/Projects/FriendifyDetails/PostCard.png";
import postList from "../Assets/Images/Projects/FriendifyDetails/PostList.png";
import reusableInput from "../Assets/Images/Projects/FriendifyDetails/reusableComponents.png";
import userProfile from "../Assets/Images/Projects/FriendifyDetails/userProfile.png";
import homePage from "../Assets/Images/Projects/FriendifyDetails/HomePage.png";
import mobileView1 from "../Assets/Images/Projects/FriendifyDetails/mobileView1.png";
import mobileView2 from "../Assets/Images/Projects/FriendifyDetails/mobileView2.png";
import useCallBack from "../Assets/Images/Projects/FriendifyDetails/UseCallBack.png";
import webSockets from "../Assets/Images/Projects/FriendifyDetails/WebSockets.png";

import { ImageCarouselProps } from "../Types/ImageCarousel";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const friendifyData: ImageCarouselProps[] = [
  {
    image: login,
    title: "Login",
  },
  {
    image: register,
    title: "Register",
  },
  {
    image: profile,
    title: "User Profile Page",
  },
  {
    image: addPost,
    title: "Add Post",
  },
  {
    image: notifications,
    title: "Notifications",
  },
  {
    image: chats,
    title: "Chats",
  },
];

export const friendifyProjectDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed a social media platform using React Redux and Node.js with TypeScript.",
  },
  {
    title: "Used MongoDB to achieve scalable and efficient data management.",
    images: [mongoDb, mongoDal],
  },
  {
    title: "Developed and implemented real-time notification system.",
    images: [webSockets, chatModel, notificationModel],
  },
  {
    title:
      "Integrated WebSocket for real-time communication and REST API for efficient data access. ",
    images: [backendApp, API1, API2],
  },
  {
    title:
      "Ensured clean, readable, and scalable code by following design patterns and best practices.",
    images: [reusableInput, homePage, userProfile],
  },
  {
    title:
      "Managed component lifecycle effectively, ensuring optimized performance and efficient updates throughout the application’s runtime.",
    images: [postList, postCard, useCallBack],
  },
  {
    title:
      "Developed high-quality user experiences by integrating responsive design principles with detailed CSS visual designs.",
    images: [mobileView1, mobileView2],
  },
  { title: "Used OOP for modular code that’s easy to reuse and maintain." },
  { title: "Utilized GitHub and Git for effective version control. " },
];
