import {
    mobile,
    backend,
    creator,
    web,
    
    //import technology
    gcp,
    c,
    java,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    nodejs,
    reactjs,
    tailwind,
    typescript,

    //import companies
    alumly_logo,
    nudge,
    // tesla,
    CSSA_logo,    
    
    //import projects
    restaurant,
    alumly_web,
    wechat_min,
    // carrent,
    // jobit,
    //tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "gcp",
      icon: gcp,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "CISDI information Technology Co., Ltds",
      icon: nudge,
      iconBg: "#383E56",
      date: "July 2023 – Augest 2023",
      points: [
        "- Product Management: Designed UX for WeChat Mini-Program using Figma, which is a “sub-application” that exist within the WeChat app, connecting it to social media",
        "- Frontend development: Used Taro, Typescript, React and Sass, and Git to streamline user registration and login with one-time verification code. build login and register pages, and manage a chat page to send messages. Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Founder, primary responsible for product management",
      company_name: "Alumly(web)",
      icon: alumly_logo,
      iconBg: "#E6DEDD",
      date: "March 2022 – June 2023",
      points: [ 
        "- Developing and maintainingManaging: Led a team of 8 in agile website development. Overseeing the user feedback and contributing to alpha and beta test in 40+ users and wrote marketing articles for website advertising on the social platform which has 4000+ users. A platform connecting alumni mentors to student mentees for flexible career-oriented mentorship Management. web applications using React.js and other related technologies.",
        "- Coding: Used JavaScript to collaborate on the design of the main page of the website. Used HTML to design and create the user confirmation email."
      ],
    },
    {
      title: "President",
      company_name: "Georgia Tech Chinese Students and Scholars Association",
      icon: CSSA_logo,
      iconBg: "#383E56",
      date: "May 2023 – Present",
      points: [
        "- A registered student organization has 66 members and helps and collects all the GT Chinese students.",
        "- Managed a team of 7 departments such as finance, publicity, business, and technology departments.",
        "- Led the association to offer mentorship, public activities, hold welcome new student orientations as well as new year celebration parties, connected with the Chinese Embassy in the U.S. and organized a Telecom Fraud Awareness Activities.",
      ],
    },
  ];
  const fun_facts = [
    {
      funfact:
       "hobbies: traveling, go to gym, cooking, reading, playing guitar and piano.",
      name: "Hobbies",
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      funfact:
        "Try to learn a new language, last year I tried Germany",
      name: "New things",
      //image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Restaurant Supply Express",
      description:
      [
      "My first full stack project, I was focus on the frontend part./n",
      "Function: Web-based platform that allows users to order and manage food delivery from various providers, providing a convenient and efficient data collections to management."],
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Ant Design",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/haozihong/GT-CS-4400-Project-Phase4?tab=readme-ov-file",
    },
    {
      name: "Alumly",
      description:
      "My job: 这是我的PM 启蒙project.\n Function: Web application that enables chinese student in Gatech find a mentor, and build the mentorship with alumnus in computer science major and computer engineering major.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: alumly_web,
      source_code_link: "https://github.com/orgs/alum-ly/teams/core",
    },
    {
      name: "WeChat_Mini_program",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Taro",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "notion",
          color: "blue-text-gradient",
        },
      ],
      image: wechat_min,
      source_code_link: "https://seen-piper-871.notion.site/notes-498db18268ec454092b506b09ce645a2?pvs=4",
    },
  ];
  
  export { services, fun_facts, experiences, projects,technologies };