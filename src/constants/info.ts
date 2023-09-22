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


export const personalInfo: { name: string, fullName: string, occupation: string, bio: string, overview: string } = {
    name: 'Vinicius',
    fullName: 'Vinicius Schuelter',
    occupation: 'Sofware Engineer',
    bio: 'I am a <b>Sofware Engineer</b>,<br />front-end specialist with experience<br />building web applications.',
    overview: `I'm a skilled software developer with experience building web applications. I specialize in
    Angular and have professional experience working with Typescript, RxJs, NgRx, Css and Html. I
    also have knowledge to work with Vue, React, or any framework JS based. I'm a quick learner and
    collaborate closely with clients to create efficient, scalable, and user-friendly solutions that
    solve real-world problems.`
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
    title: 'Senior Software Engineer',
    companyName: 'Texo IT',
    img: 'https://media.licdn.com/dms/image/C560BAQF7RGUDJfRzCw/company-logo_100_100/0/1648757860867?e=1703721600&v=beta&t=ogdLwj8hENmv8QK72n4Lbb9GL24taX938H1fic3V3Ac',
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
    companyName: 'Tesla',
    img:  'https://media.licdn.com/dms/image/C4D0BAQGZvWx-LS7jAA/company-logo_100_100/0/1611608048115?e=1703721600&v=beta&t=81s759cTsee3ln-zsbeiKInlW8vYh5dfNKthdCcdJHg',
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
    title: 'Senior Fullstack Developer',
    companyName: 'TIVIT',
    img:  'https://media.licdn.com/dms/image/C4E0BAQGabNv-OuPDTA/company-logo_100_100/0/1638373049053?e=1703721600&v=beta&t=T7JtsknlaNgFhekxxNVRbUcpdkoPJPbfcLLl76x13XI',
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
    title: 'Senior Software Engineer',
    companyName: 'Sysmar Informática LTDA',
    img: 'https://media.licdn.com/dms/image/C4D0BAQEAZGbWkPy1hA/company-logo_100_100/0/1626891533269?e=1703721600&v=beta&t=M9NThWw5G9Y-qltwR1UnPyJ5o2h3kFckscxfQ1zAuMo',
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