import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiRedux, SiExpress, SiTailwindcss } from 'react-icons/si';
import { BiLogoFirebase } from 'react-icons/bi';

import flavoro from './assets/projects/flavoro.png';
import weather from './assets/projects/weather.png';
import backroads from './assets/projects/backroads.png';
import ecommerce from './assets/projects/e-commerce.png';
import unsplash from './assets/projects/unsplash.png';
import passwordGen from './assets/projects/password-generator.png';
import crud_firebase from './assets/projects/crud-firebase.png';
import bazaar from './assets/projects/bazaar.png';
import pagination from './assets/projects/pagination.png';
import wikipedia from './assets/projects/wikipedia.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Node js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon: <SiRedux className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Express js',
    icon: <SiExpress className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Firebase',
    icon: <BiLogoFirebase className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithub className='h-16 w-16 text-emerald-500' />,
    text: '',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: bazaar,
    url: 'https://legendary-eclair-a5c2b0.netlify.app/',
    github: 'https://github.com/Prajwal-tagde/mern-bazaar-frontend',
    title: 'E-commerce',
    text: 'React js, Redux Toolkit, Tailwind CSS, firebase',
  },
  {
    id: nanoid(),
    img: flavoro,
    url: 'https://flavoro-food.netlify.app/',
    github: '#github',
    title: 'Flavoro Food',
    text: 'React js, Redux Toolkit, Tailwind CSS',
  },
  {
    id: nanoid(),
    img: weather,
    url: 'https://live-weather-forecast-app7.netlify.app/',
    github: '#',
    title: 'Live Weather ForeCast',
    text: 'React js, API',
  },
  {
    id: nanoid(),
    img: pagination,
    url: 'https://prajwal-tagde.github.io/pagination-js/',
    github: 'https://github.com/Prajwal-tagde/pagination-js',
    title: 'Pagination API',
    text: 'Javascript, API',
  },
  {
    id: nanoid(),
    img: wikipedia,
    url: 'https://prajwal-tagde.github.io/wikipedia-api-project/',
    github: 'https://github.com/Prajwal-tagde/wikipedia-api-project',
    title: 'Wikipedia API',
    text: 'Javascript, API',
  },
  {
    id: nanoid(),
    img: backroads,
    url: 'https://backroads-projectc-07.netlify.app/',
    github: '#',
    title: 'Backroads Website',
    text: 'React js',
  },
  {
    id: nanoid(),
    img: crud_firebase,
    url: 'https://react-firebase-crud-a.netlify.app/',
    github: '#github',
    title: 'Firebase CRUD',
    text: 'React js, Firebase, Tailwind CSS',
  },
  {
    id: nanoid(),
    img: ecommerce,
    url: 'https://e-commerce-react-new.netlify.app/',
    github: '#',
    title: 'E-Commerce',
    text: 'React js, BootStrap',
  },
  {
    id: nanoid(),
    img: unsplash,
    url: 'https://unsplash-image-search-app.netlify.app/',
    github: '#',
    title: 'Unsplash Image Search App',
    text: 'React js, BootStrap, API',
  },
  {
    id: nanoid(),
    img: passwordGen,
    url: 'https://passwords-generator-react.netlify.app/',
    github: '#',
    title: 'Password Generator',
    text: 'React js',
  },
];
