import css from '../lib/icons/css.png';
import docker from '../lib/icons/docker.png';
import figma from '../lib/icons/figma.png';
import git from '../lib/icons/git.png';
import html from '../lib/icons/html.png';
import javascript from '../lib/icons/javascript.png';
import mongodb from '../lib/icons/mongodb.png';
import nodejs from '../lib/icons/nodejs.png';
import reactjs from '../lib/icons/reactjs.png';
import redux from '../lib/icons/redux.png';
import tailwind from '../lib/icons/tailwind.png';
import typescript from '../lib/icons/typescript.png';
import threejs from '../lib/icons/threejs.svg';
import ap from '../lib/images/ap.jpg'
import texo from '../lib/images/texo-it.jpg'
import feracode from '../lib/images/feracode.png'
import tivit from '../lib/images/tivit.jpg'
import sysmar from '../lib/images/sysmar.jpg'
import zellim from '../lib/images/zellim.png'
import onelog from '../lib/images/onelog-brf.png'
import shellbox from '../lib/images/shellbox.png'
import pokeapi from '../lib/images/pokeapi.jpg'
import signals from '../lib/images/signals.jpg'
import dc137 from '../lib/images/dimension-c137.jpg'
import freetoplay from '../lib/images/free-to-play.jpg'
import skateshop from '../lib/images/skateshop-vr.jpg'
import superheroes from '../lib/images/superheroes.jpg'


export const personalInfo: { name: string, fullName: string, occupation: string, bio: string, overview: string, projectsOverview: string, studyOverview: string  } = {
    name: 'Vinicius',
    fullName: 'Vinicius Schuelter',
    occupation: 'Sofware Engineer',
    bio: 'I am a <b>Sofware Engineer</b>,<br />front-end specialist with experience<br />building web applications.',
    overview: `I'm a skilled software developer with experience building web applications. I specialize in
    Angular and have professional experience working with Typescript, RxJs, NgRx, Css and Html. I
    also have knowledge to work with Vue, React, or any framework JS based. I'm a quick learner and
    collaborate closely with clients to create efficient, scalable, and user-friendly solutions that
    solve real-world problems.`,
    projectsOverview: ` The Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to the home page.`,
    studyOverview: `The following repositories show my knowledge through study projects 
    I created. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`
} 

export const mainlySkills: { name: string, img: string}[] = [
    { name: 'Coder Passionate', img: '' },
    { name: 'Angular Specialist', img: '' },
    { name: 'Frontend Developer', img: '' },
    { name: 'Backend Developer', img: '' },
    { name: 'Javascript Frameworks', img: '' },
];

export const workExperiences: { title: string, companyName: string, img: string, date: string, points: string[]}[] = [
  {
    title: 'Senior Fullstack Developer(heavy backend)',
    companyName: 'AP Digital Services',
    img: ap,
    date: 'Oct 2023 - Present',
    points: [
      'AP Digital Services was born in 2015 with the concern and desire to put theto be human as a central point ofexperiences digital. One of our biggest motivations is the transformation of our clients businesses, through technology and incredible people;',
      'Allocated in the Raizen/Shell, development and maintenance of AWS serveles;s',
      'Developing and maintaining AWS lambda`s using mainly Node.js, dynamoDB, MySQL and terraform pipeline;',
      'Collaborating with cross-functional teams, product managers, and other developers to create high-quality products;',
      'Participating in code reviews and providing constructive feedback to other developers;',
      'Skills: Node.js · AWS · Typscript · Serveless · Terraform · DynamoDB · MySQL · Redis ',
    ],
  },
  {
    title: 'Senior Software Engineer',
    companyName: 'Texo IT',
    img: texo,
    date: 'May 2022 - Jul 2023 · 1 yr 3 mos',
    points: [
      'Texo IT is an outsourcing company specialized in software development. formed by specialists in software engineering, working in all phases of the development cycle, with a strong focus on highly complex projects.',
      'Allocated in the TOTVS client, development and maintenance of Scheduling/YMS system, focusing on cargo management (1 year)',
      'Allocated in the TOTVS client, development and maintenance of the Collector mobile application, focusing on service order management (3 months)',
      'Developing and maintaining web/mobile applications using mainly Angular 12+, Java 11, Ionic 5  and other related technologies;',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products;',
      'Implementing responsive design and ensuring cross-browser compatibility;',
      'Participating in code reviews and providing constructive feedback to other developers;',
      'Skills: Angular · Spring Boot · HTML · Java · SASS · RxJS · TypeScript',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    companyName: 'Feracode',
    img: feracode,
    date: 'Feb 2019 - May 2022 · 3 yrs 4 mos',
    points: [
      'Feracode are a software and web developer house. We design solutions for the client increase his revenue and the scalability of his business through custom apps. The mission is to connect the world with the best brands and update the standard of online technology',
      'In this company, i was finally able to focus on what i love to work with, fron-end. As a result, gain extensive experience with Angular 9+, Html/CSS, Typescript, RxJs, NgRx, Javascript, Git and more',
      'I worked essentially with Bootstrap as a standard style, standardizing all project responsiveness and creating components based on bootstrap standards;',
      'Dashboard feature (I worked as a reordering with DnD using the lib gridster2);',
      'Contacts feature (I worked as a virtualization using libs like cdk-virtual-scroller / ngx-virtual-scroller);',
      'Vault feature (I worked as 2FA with QrCode using lib easyqrcodejs);',
      'Project feature (I worked as virtualization + DnD using libs cdk-virtual-scroller / cdk-drap-drop)',
      'Calendar feature (I worked as a date scheduler using libs fullcalendar / momentjs / date-fns;;',
      'Several components using libs like ngx-perfect-scrollbar, ngx-dropzone, quilljs, panzoom, grapesjs, popper.js and many others;',
      'Skills: Angular · Node · TypeS · NgRx · HTML · Node.js · React.js · MongoDB · SASS · RxJS',
    ],
  },
  {
    title: 'Senior Fullstack Developer(heavy frontend)',
    companyName: 'TIVIT',
    img: tivit,
    date: 'May 2021 - Dec 2021 · 8 mos',
    points: [
      'TIVIT is a Brazilian multinational and technology one-stop-shop, present in the market since 1998 and with operations in ten countries in Latin America. The company offers diverse services such as agile software development, hybrid and public cloud, cybersecurity, highly complex operations, among others, which support customers on their digital transformation journey.',
      'Allocated at the BRF client, working on a modernization project for the logistics system;',
      'Developing and maintaining webapplications using mainly Angular 12+, Material UI, .NET 3.5 and other related technologies;',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Skills: Angular Material · Angular · .NET Framework · HTML · SASS · RxJS · TypeScript',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'Sysmar Informática LTDA',
    img: sysmar,
    date: 'Mar 2014 - Mar 2019 · 5 yrs 1 mo',
    points: [
      'IT company that provides integrated ICT (Information and Communication Technology) solutions for Public Management, developing innovations in practices and technologies.',
      'In this company I had the opportunity to work as several solutions that help in public management, I can mention some of the products I had contact with:',
      'SysSaude (Project focused on health management);',
      'SysSocial (Project aimed at social management);',
      'SysGp / SysHolerite (Project aimed at managing rh / emission of payslips);',
      'SysFrotas (Project aimed at vehicle fleet management);',
      'SysPatrimonio (Project aimed at wealth management);',
      'SysArr (Project focused on tax management);',
      'Es-Portal (Project aimed at transparency portal',
      'Skills: Angular (Framework) · Jsf · Primefaces · Spring Boot · AngularJS · Microsoft SQL Server · PostgreSQL · Java · Delphi · MySQL',
    ],
  },
];

export const stacks: { name: string; icon: string }[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

export const workedProjects: { name: string, description: string, tags: {name: string, color: string }[], image: string, projectLink: string }[] = [
  {
    name: 'Zellim',
    description:'Powerfull Webapp, the main slogan is "All the tools you need to communicate and collaborate in an easy-to-u".',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: zellim,
    projectLink: 'https://www.zellim.com/',
  },
  {
    name: 'Onelog',
    description:
      'A simple and fast Web application that has arrived to facilitate the entire delivery process, bringing more autonomy and agility in everyday life.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: '.net',
        color: 'green-text-gradient',
      },
      {
        name: 'material',
        color: 'pink-text-gradient',
      },
    ],
    image: onelog,
    projectLink: 'https://onelog.brf.com/login',
  },
  {
    name: 'Shellbox',
    description:
      'Fueling your vehicle or purchasing from Shell Select just got faster, easier and safer! Shell Box is app for you to pay without having to leave your car.',
    tags: [
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'aws',
        color: 'green-text-gradient',
      },
      {
        name: 'serveless',
        color: 'pink-text-gradient',
      },
    ],
    image: shellbox,
    projectLink: 'https://promo.shell.com.br/shellbox/',
  },
]

export const studyProjects: { name: string, description: string, tags: {name: string, color: string }[], image: string, projectLink: string }[] = [
  {
    name: 'Fun with Pokeapi',
    description:'Studying and having fun coding a Angular project with PokeAPI.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: pokeapi,
    projectLink: 'https://github.com/viniciusschuelter/fun-with-pokemon-api-angular',
  },
  {
    name: 'Playground Angular Signal',
    description: 'Studying and having fun coding a Angular project with new Signal feature.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'signal',
        color: 'green-text-gradient',
      },
      {
        name: 'rxjs',
        color: 'pink-text-gradient',
      },
    ],
    image: signals,
    projectLink: 'https://github.com/viniciusschuelter/playground-angular-signal',
  },
  {
    name: 'Dimension C-137',
    description: 'Studying and having fun coding a Vue project with Rick and Morty API.',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'aws',
        color: 'green-text-gradient',
      },
      {
        name: 'serveless',
        color: 'pink-text-gradient',
      },
    ],
    image: dc137,
    projectLink: 'https://github.com/viniciusschuelter/dimension-c-137',
  },
  {
  name: 'Free to Play Astro',
  description: 'Studying and having fun coding a Astro project with Free to play API',
  tags: [
    {
      name: 'astro',
      color: 'blue-text-gradient',
    },
    {
      name: 'js frameworks',
      color: 'green-text-gradient',
    },
    {
      name: 'public api',
      color: 'pink-text-gradient',
    },
  ],
  image: freetoplay,
  projectLink: 'https://github.com/viniciusschuelter/free-to-play-astro',
  },
  {
  name: 'React Skateshop VR',
  description:'Studying and having fun coding a React project with Three.js',
  tags: [
    {
      name: 'react',
      color: 'blue-text-gradient',
    },
    {
      name: 'three.js',
      color: 'green-text-gradient',
    },
    {
      name: 'vr',
      color: 'pink-text-gradient',
    },
  ],
  image: skateshop,
  projectLink: 'https://github.com/viniciusschuelter/react-skateboard-vr',
  },
  {
  name: 'Superheroes Flutter',
  description: 'Studying and having fun coding a React project with Three.js',
  tags: [
    {
      name: 'flutter',
      color: 'blue-text-gradient',
    },
    {
      name: 'dart',
      color: 'green-text-gradient',
    },
    {
      name: 'marvel api',
      color: 'pink-text-gradient',
    },
  ],
  image: superheroes,
  projectLink: 'https://github.com/viniciusschuelter/superheroes',
  }
]