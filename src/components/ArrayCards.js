import celia from "../assets/img/web/celiamartinperez.jpg";
import yoga from "../assets/img/web/yogaypilatesoviedo.jpg";
import alicia from "../assets/img/web/elmenudealicia.jpg";
import leandro from "../assets/img/web/leandropereyra.jpg";
import todo from '../assets/img/web/listatareas.jpg'

import { IoLogoWordpress } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const wordpress = <IoLogoWordpress className="text-4xl md:text-6xl text-sky-500" />;
const react = <FaReact className="text-4xl md:text-6xl text-sky-500" />;
const tailwind = <SiTailwindcss className="text-4xl md:text-6xl text-sky-500" />;
const github = <SiGithub className="text-4xl md:text-6xl text-black" />;
const javascript = <SiJavascript className="text-4xl md:text-6xl text-yellow-500" />;

export const ArrayCards = [
  {
    id: 1,
    title: "CeliaMartinPerez.com",
    image: celia,
    skill: [wordpress],
    url: "https://celiamartinperez.com/",
  },
  {
    id: 2,
    title: "YogayPilatesOviedo.com",
    image: yoga,
    skill: [wordpress],
    url: "https://yogaypilatesoviedo.com/",
  },
  {
    id: 3,
    title: "El Menú de Alicia",
    image: alicia,
    skill: [wordpress],
    url: "https://elmenudealicia.es/",
  },
  {
    id: 4,
    title: "LeandroPereyra.com",
    image: leandro,
    skill: [react, tailwind, github],
    github: "https://github.com/leandropereyra/portfolio",
  },
  {
    id: 5,
    title: "Lista de Tareas CRUD",
    image: todo,
    skill: [react, tailwind, github, javascript],
    github: "https://github.com/leandropereyra/todolist",
    url: "https://leandropereyra.github.io/todolist/"
  },
];
