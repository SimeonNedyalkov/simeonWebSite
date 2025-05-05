import img1 from "../assets/projects/Screenshot 2024-12-12 095413.png";
import img2 from "../assets/projects/Screenshot 2024-09-01 155000.png";
import img3 from "../assets/projects/Screenshot 2024-09-01 155050.png";
import img4 from "../assets/projects/Screenshot 2024-09-01 161416.png";
import img5 from "../assets/projects/Screenshot 2024-09-05 212729.png";
import img6 from "../assets/projects/Screenshot 2024-09-05 212941.png";
import img7 from "../assets/projects/Screenshot 2024-10-22 101706.png";
import img8 from "../assets/projects/Screenshot 2025-05-03 102951.png";
import { Lenion } from "@/components/ThreedComponents/Lenion";
import { CatDate } from "@/components/ThreedComponents/CatDate";
import { ChooseYourFighter } from "@/components/ThreedComponents/ChooseYourFighter";
import { TehnoTransport } from "@/components/ThreedComponents/TehnoTransport";
import { MagmaHeaven } from "@/components/ThreedComponents/MagmaHeaven";
import { EarthTresureVault } from "@/components/ThreedComponents/EarthTresureVault";
import { MovieMagic } from "@/components/ThreedComponents/MovieMagic";
import { RestaurantFinder } from "@/components/ThreedComponents/RestaurantFinder";
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
