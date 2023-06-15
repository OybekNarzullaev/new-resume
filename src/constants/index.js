import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  UzbFlag,
  EngFlag,
  RusFlag,
  postgresql,
  django,
  python,
  golang,
  jquery,
  cpp,
  redis,
  mysql,
  bepro,
  hamkorbank,
  uzgashkliti,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend developer",
    icon: backend,
  },
  {
    title: "Mentoring",
    icon: creator,
  },
];

const technologies = [
  {
    id: 1,
    name: "HTML 5",
    icon: html,
    per: 80,
    code: "html5",
  },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
    per: 80,
    code: "css3",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
    per: 80,
    code: "javascript",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: typescript,
    per: 70,
    code: "typescript",
  },
  {
    id: 5,
    name: "Python",
    icon: python,
    per: 85,
    code: "python",
  },
  {
    id: 6,
    name: "Golang",
    icon: golang,
    per: 65,
    code: "golang",
  },
  {
    id: 7,
    name: "C++",
    icon: cpp,
    per: 65,
    code: "cpp",
  },
  {
    id: 8,
    name: "React JS",
    icon: reactjs,
    per: 70,
    code: "reactjs",
  },
  {
    id: 9,
    name: "Node JS",
    icon: nodejs,
    per: 65,
    code: "nodejs",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: tailwind,
    per: 60,
    code: "tailwind",
  },
  {
    id: 11,
    name: "Django",
    icon: django,
    per: 75,
    code: "django",
  },
  {
    id: 12,
    name: "Mongo DB",
    icon: mongodb,
    per: 75,
    code: "mongodb",
  },
  {
    id: 13,
    name: "Postgres SQL",
    icon: postgresql,
    per: 70,
    code: "postgresql",
  },
  {
    id: 14,
    name: "My SQL",
    icon: mysql,
    per: 80,
    code: "mysql",
  },
  {
    id: 15,
    name: "Redis",
    icon: redis,
    per: 75,
    code: "redis",
  },
  {
    id: 16,
    name: "Git",
    icon: git,
    per: 65,
    code: "git",
  },
  {
    id: 17,
    name: "Docker",
    icon: docker,
    per: 65,
    code: "docker",
  },
];

const langSkills = [
  {
    name: "Uzbek",
    status: "Native",
    img: UzbFlag,
  },
  {
    name: "English",
    status: "B2",
    img: EngFlag,
  },
  {
    name: "Russian",
    status: "A2",
    img: RusFlag,
  },
];

const experiences = [
  {
    title: "Python/Django and C++ mentor",
    company_name: "BePro IT Academy",
    icon: bepro,
    iconBg: "#383E56",
    date: "June 2021 - December 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack (ReactJS + Golang) developer (Intership)",
    company_name: "Hamkorbank",
    icon: hamkorbank,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack (ReactJS + Django) developer",
    company_name: "O'zGASHKLITI",
    icon: uzgashkliti,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MBX Repayment Service",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antdesign",
        color: "green-text-gradient",
      },
      {
        name: "golang",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Monitoring UzGASHKLITI",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Elektron Geofond",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  langSkills,
};
