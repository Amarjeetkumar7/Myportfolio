// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import LB from './assets/company_logo/LB.png'
import zeetron from './assets/company_logo/zeetron.png'


// Education Section Logo's

import schoolLogo from "./assets/education_logo/school.jpg";
import collageLogo from "./assets/education_logo/git.jpg";


import hotelLogo from './assets/work_logo/Hotel.png'
import todoLogo from './assets/work_logo/Todo-list.png'
import PlacementLogo from './assets/work_logo/Placement-portal.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    
      { name: 'Js', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      
      { name: 'Js', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: zeetron,
      role: "Fullstack Developer",
      company: "Zeetron Network",
      date: "Jul 2024 - Aug 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.The application was Job Portal website having a section of code enhancer using google gemini to build responsive UI, implement RESTful APIs, and optimize application performance.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        // "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express"
        // "Redux",
        // " Next Js",
      ],
    },
    {
      id: 1,
      img: LB,
      role: "Frontend Engineer",
      company: "Learn and Build",
      date: "July 2023 - Aug 2023",
      desc: "Contributed to innovative projects as a Frontend Engineer using technologies such as HTML, CSS, JavaScript, Tailwind, SQL, Bootstrap, and ReactJS. Develop a Hotel Management application and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        // "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 0,
      img: collageLogo,
      school: "Global institute of Technology, jaipur",
      date: "Sept 2021 - Jun 2021",
      grade: "8.0 CGPA",
      desc: "I completed my B.Tech degree in Computer Science  from Global institute of Technology, Jaipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "St.John's Academy, Bihar",
      date: "Apr 2019 - March 2020",
      grade: "79.8 %",
      desc: "I completed my class 12 education from St.John's Academy, Bihar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "St.John's Academy, Bihar",
      date: "Apr 2017 - March 2018",
      grade: "87.3 %",
      desc: "I completed my class 10 education from St.John's Academy, Bihar, under the CBSE board, where I studied Science",
      degree: "CBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Hotel Management App",
      description:
        "The Hotel App is a dynamic and responsive web application built using React that allows users to explore, book, and manage hotel accommodations with ease. The app features a user-friendly interface and modern design, offering seamless navigation and a smooth booking experience.It is mostly have Frontend path.",
      image: hotelLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Amarjeetkumar7/Hotel-app",
      webapp: "https://hotel-app-liard-ten.vercel.app/",
    },
    {
      id: 1,
      title: "Job Portal",
      description:
        "The Job Placement Portal is a comprehensive web application designed to streamline the placement process for colleges and universities. Built using the MERN stack with Vite for fast development, this platform facilitates smooth interaction between students, college administrators, and recruiters.It include both frontend and backend.",
      image: PlacementLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amarjeetkumar7/Placement-Portal",
      webapp: "https://placement-portal-dusky.vercel.app/",
    },
    {
      id: 2,
      title: "Todo List",
      description:
        "A todo application where user can add todo list, Update todo, Delete todo and show on front user Interfence.In this todo we can add our code and store in code editor. ",
      image: todoLogo,
      tags: ["Next JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amarjeetkumar7/Nextjs-basic",
      webapp: "https://github.com/Amarjeetkumar7/Nextjs-basic",
    },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    

  ];  