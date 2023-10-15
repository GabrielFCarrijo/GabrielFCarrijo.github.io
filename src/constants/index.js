import {
  Spring,
  grafana,
  postgres,
  java,
  quarkus,
  backend,
  perinity,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  LuizaLabs,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quarkus Developer",
    icon: quarkus,
  },
];

const technologies = [
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Quarkus",
    icon: quarkus,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "Spring",
    icon: Spring,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "LuizaLabs",
    icon: LuizaLabs,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Feature Development: I specialize in creating new functionalities for our projects, enhancing the capabilities of our software.",
      "Grafana Management: I handle the administration and creation of graphical representations using Grafana, ensuring data visualization is effective and informative.",
      "Google Cloud Data Updates: I'm responsible for maintaining and updating data tables on Google Cloud, ensuring data accuracy and accessibility.",
      "Quality Assurance: I prioritize code quality through the creation of unit tests and mutation tests, ensuring our software functions as intended. Additionally, I address everyday tasks such as bug fixes and improvements",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Perinity",
    icon: perinity,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Development of New Features: My primary focus is on creating new functionalities to enhance our systems and meet customer needs.",
      "Customer Support: I engage in addressing customer inquiries and requests, ensuring their concerns and requirements are handled effectively",
      "Code Refactoring: A significant part of my role involves improving existing code by updating it with the latest technologies and best development practices",
      "Microservices Work: I have experience in creating new tools and services using the microservices architecture, enabling greater scalability and modularity.",
      "Utilized Technologies: I work with a diverse set of technologies, including Java 8+, Grafana, JSF, Spring, Junit, Mockito, Quarkus, Jboss, PostgreSQL, and Git to efficiently and effectively perform my tasks.",
    ],
  },
];

const projects = [
  {
    name: "",
    description:
      "All my projects are located on my GitHub.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GabrielFCarrijo",
  },
];

export { services, technologies, experiences, projects };
