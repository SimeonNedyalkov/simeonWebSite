import img1 from "../assets/projects/Screenshot 2024-12-12 095413.png";
import img2 from "../assets/projects/Screenshot 2024-09-01 155000.png";
import img3 from "../assets/projects/Screenshot 2024-09-01 155050.png";
import img4 from "../assets/projects/Screenshot 2024-09-01 161416.png";
import img5 from "../assets/projects/Screenshot 2024-09-05 212729.png";
import img6 from "../assets/projects/Screenshot 2024-09-05 212941.png";
import img7 from "../assets/projects/Screenshot 2024-10-22 101706.png";
import img8 from "../assets/projects/Screenshot 2025-05-03 102951.png";

import programingBasics from "../assets/certificates/Programming Basics - January 2023 - Certificate.pdf";
import programmingFundamentals from "../assets/certificates/Programming Fundamentals with JavaScript - May 2023 - Certificate.pdf";
import jsAdvanced from "../assets/certificates/JS Advanced - September 2023 - Certificate.pdf";
import jsApplications from "../assets/certificates/JS Applications - October 2023 - Certificate.pdf";
import htmlCSS from "../assets/certificates/HTML & CSS - January 2024 - Certificate.pdf";
import angular from "../assets/certificates/Angular - February 2024 - Certificate.pdf";
import typescript from "../assets/certificates/TypeScript - April 2024 - Certificate.pdf";
import jsBackend from "../assets/certificates/JS Back-End - May 2024 - Certificate.pdf";
import reactJS from "../assets/certificates/ReactJS - June 2024 - Certificate.pdf";
import JSWEBDEV from "../assets/certificates/Diploma for JS Web Developer.pdf";

import hundreddaysofCode from "../assets/certificates/UC-978fe1b1-230d-4415-8549-a0b4ddb5c392.pdf";
import { Lenion } from "@/components/ThreedComponents/Lenion";
import { CatDate } from "@/components/ThreedComponents/CatDate";
import { ChooseYourFighter } from "@/components/ThreedComponents/ChooseYourFighter";
import { TehnoTransport } from "@/components/ThreedComponents/TehnoTransport";
import { MagmaHeaven } from "@/components/ThreedComponents/MagmaHeaven";
import { EarthTresureVault } from "@/components/ThreedComponents/EarthTresureVault";
import { MovieMagic } from "@/components/ThreedComponents/MovieMagic";
import { RestaurantFinder } from "@/components/ThreedComponents/RestaurantFinder";

// skills
import TS from "../assets/skills/typescript-icon-svgrepo-com.svg";
import JS from "../assets/skills/javascript-logo-svgrepo-com.svg";
import PY from "../assets/skills/python-svgrepo-com.svg";
import Ang from "../assets/skills/angular-svgrepo-com.svg";
import React from "../assets/skills/react-javascript-js-framework-facebook-svgrepo-com.svg";
import NodeJS from "../assets/skills/node-js-svgrepo-com.svg";
import Flask from "../assets/skills/flask-svgrepo-com.svg";
import NestJS from "../assets/skills/nestjs-svgrepo-com.svg";
import Git from "../assets/skills/git-svgrepo-com.svg";
import Figma from "../assets/skills/figma-svgrepo-com.svg";
import Mocha from "../assets/skills/mocha-svgrepo-com.svg";
import Postman from "../assets/skills/postman-icon-svgrepo-com.svg";
import HTML from "../assets/skills/html-5-svgrepo-com.svg";
import CSS from "../assets/skills/css-3-svgrepo-com.svg";
import MongoDB from "../assets/skills/mongo-svgrepo-com.svg";
import MySQL from "../assets/skills/mysql-logo-svgrepo-com.svg";
import SQLLite from "../assets/skills/sqllite-svgrepo-com.svg";
import Jest from "../assets/skills/jest-snapshot-svgrepo-com.svg";
export const HERO = {
  title: "Software Engineering Student",
  greet: "Hello, I'm",
  name: "Simeon Nedyalkov",
};

export const arrayOfProjects = [
  {
    id: 0,
    name: "Lenion",
    desc: '" Lenion " is React-based application, written in Typescript and SCSS with a futuristic design, utilising three.js / react/three-fiber to build a futuristic 3d clothes shop. With the help of redux to manage the store and state.',
    url: img1,
    alt: "Image1",
    demoUrl: "https://lenion.vercel.app/",
    projectCode: "https://github.com/SimeonNedyalkov/clothing-store",
    technologies: ["React", "Redux", "React Three Fiber", "NestJS"],
  },
  {
    id: 1,
    name: "Cat Date",
    desc: '" Cat-Date " is a fun and interactive Angular-based application, inspired by Tinder, designed exclusively for connecting cats and their owners. Swipe right to find the perfect playmate for your feline friend, schedule playdates, and join a community of cat enthusiasts!',
    url: img2,
    alt: "Image1",
    demoUrl: "https://cat-date-client.vercel.app/",
    projectCode: "https://github.com/SimeonNedyalkov/Cat-Date-Angular",
    technologies: ["Angular", "NodeJS"],
  },
  {
    id: 2,
    name: "Choose Your Figher",
    desc: '" Choose Your Fighter " is a React project where users pick characters like bears, sharks, octopuses, and eagles to battle against the app itself. It demonstrates React skills, interactive UI design, state management, and game logic implementation for an engaging gaming experience.',
    url: img3,
    alt: "Image2",
    demoUrl: "https://choose-your-fighter-client.vercel.app/",
    projectCode: "https://github.com/SimeonNedyalkov/Choose-Your-Figher-React",
    technologies: ["React", "NodeJS"],
  },
  {
    id: 3,
    name: "Tehno Transport",
    desc: '" Tehno Transport " is React-based application, written in Typescript with a functions to handle Yearly techno tests, utilising nest.js as a server and firebase for database handling',
    url: img8,
    alt: "Image8",
    demoUrl: "https://tehno-transport.vercel.app/",
    projectCode: "https://github.com/SimeonNedyalkov/tehnoTransportFrontend",
    technologies: ["React", "NestJS", "Firebase"],
  },
  {
    id: 4,
    name: "Magma Heaven",
    desc: '" Magma Heaven " is an app made with Node.js, Express.js, mongoose, cookie-parser, jsonwebtoken, handlebars, bcypt, express-validators.',
    url: img4,
    alt: "Image3",
    demoUrl: "no",
    projectCode: "https://github.com/SimeonNedyalkov/02.MagmaHeaven",
    technologies: ["NodeJS", "Express", "JsonWebToken", "Mongoose"],
  },
  {
    id: 5,
    name: "Earth Treasure Vault",
    desc: '" Earth Treasure Vault " is an app made on NodeJs with express, mongoose, cookie-parser, jsonwebtoken, handlebars, bcypt and express-validators',
    url: img5,
    alt: "Image4",
    demoUrl: "no",
    projectCode: "https://github.com/SimeonNedyalkov/01.EarthTreasureVault",
    technologies: ["NodeJS", "Express", "JsonWebToken", "Mongoose"],
  },
  {
    id: 6,
    name: "Movie Magic",
    desc: '" Movie Magic " is an app made with Node.js, Express.js, mongoose, cookie-parser, jsonwebtoken, handlebars, bcypt, express-validators.',
    url: img6,
    alt: "Image5",
    demoUrl: "no",
    projectCode: "https://github.com/SimeonNedyalkov/movie-magic",
    technologies: ["NodeJS", "Express", "JsonWebToken", "Mongoose"],
  },
  {
    id: 7,
    name: "Restaurant Finder",
    desc: '" Restaurant Finder " is a React-based app that helps you discover the top-rated restaurants in Varna with just a few simple clicks. Powered by the Google API, it delivers fast and accurate results, making it easy to find the best dining spots in the city.',
    url: img7,
    alt: "Image6",
    demoUrl: "no",
    projectCode: "https://github.com/SimeonNedyalkov/restaurant-finder-react",
    technologies: ["React", "GoogleAPI"],
  },
];

export const arrayOfThreeDs = [
  {
    id: 1,
    component: <Lenion />,
  },
  {
    id: 2,
    component: <CatDate />,
  },
  {
    id: 3,
    component: <ChooseYourFighter />,
  },
  {
    id: 4,
    component: <TehnoTransport />,
  },
  {
    id: 5,
    component: <MagmaHeaven />,
  },
  {
    id: 6,
    component: <EarthTresureVault />,
  },
  {
    id: 7,
    component: <MovieMagic />,
  },
  {
    id: 8,
    component: <RestaurantFinder />,
  },
];
export const arrayWithCerts = [
  {
    name: "Programming Basics",
    link: "https://softuni.bg/certificates/details/158820/c99d8fae",
    file: programingBasics,
  },
  {
    name: "Programming Fundamentals",
    link: "https://softuni.bg/certificates/details/180268/ae4252ad",
    file: programmingFundamentals,
  },
  {
    name: "JS Advanced",
    link: "https://softuni.bg/Certificates/Details/188123/170d0979",
    file: jsAdvanced,
  },
  {
    name: "JS Applications",
    link: "https://softuni.bg/certificates/details/195328/be386887",
    file: jsApplications,
  },
  {
    name: "HTML and CSS",
    link: "https://softuni.bg/certificates/details/205003/be2eb721",
    file: htmlCSS,
  },
  {
    name: "Angular",
    link: "https://softuni.bg/certificates/details/211715/9b3780da",
    file: angular,
  },
  {
    name: "TypeScript",
    link: "https://softuni.bg/certificates/details/215567/8decd9d9",
    file: typescript,
  },
  {
    name: "JS Backend",
    link: "https://softuni.bg/certificates/details/218293/5ac6b938",
    file: jsBackend,
  },
  {
    name: "React JS",
    link: "https://softuni.bg/certificates/details/223093/e1650db6",
    file: reactJS,
  },
  {
    name: "JavaScript Web Developer",
    link: "https://softuni.bg/certificates/details/225822/e1efcc4e",
    file: JSWEBDEV,
  },
  {
    name: "100 Days Of Code",
    link: "https://www.udemy.com/certificate/UC-978fe1b1-230d-4415-8549-a0b4ddb5c392/",
    file: hundreddaysofCode,
  },
];
export const skills = [
  {
    languages: [
      { language: "JavaScript", svg: JS, years: "3+" },
      { language: "TypeScript", svg: TS, years: "1+" },
      { language: "Python", svg: PY, years: "3+" },
      { language: "HTML5", svg: HTML, years: "3+" },
      { language: "CSS3", svg: CSS, years: "3+" },
    ],
    frameworks: [
      { framework: "Angular", svg: Ang, years: "1+" },
      { framework: "React", svg: React, years: "1+" },
      { framework: "NodeJS", svg: NodeJS, years: "1+" },
      { framework: "NestJS", svg: NestJS, years: "1+" },
      { framework: "Flask", svg: Flask, years: "3+" },
    ],
    tools: [
      { tool: "Git", svg: Git, years: "3+" },
      { tool: "Figma", svg: Figma, years: "1+" },
      { tool: "Mocha", svg: Mocha, years: "1+" },
      { tool: "Jest", svg: Jest, years: "1-" },
      { tool: "Postman", svg: Postman, years: "2+" },
    ],
    databases: [
      { database: "MongoDB", svg: MongoDB, years: "1+" },
      { database: "MySQL", svg: MySQL, years: "1+" },
      { database: "SQLite", svg: SQLLite, years: "3+" },
    ],
  },
];

export const github = { repos: 39, commits: 1880 };
export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contacts", href: "/contacts" },
  { label: "Hire Me", href: "/hireme" },
];
