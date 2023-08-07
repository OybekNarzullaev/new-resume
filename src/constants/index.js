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
  LoanControl,
  MonitoringDshk,
  AdminDshk,
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

const programmingLanguages = [
  {
    id: 1,
    name: "JavaScript",
    icon: javascript,
    per: 80,
    code: "javascript",
  },
  {
    id: 2,
    name: "TypeScript",
    icon: typescript,
    per: 70,
    code: "typescript",
  },
  {
    name: "Python",
    icon: python,
    per: 85,
    code: "python",
  },
  {
    name: "Golang",
    icon: golang,
    per: 65,
    code: "golang",
  },
  {
    name: "C++",
    icon: cpp,
    per: 65,
    code: "cpp",
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
const frontSkills = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
    per: 60,
    code: "tailwind",
  },
  {
    name: "React JS",
    icon: reactjs,
    per: 70,
    code: "reactjs",
  },

  {
    name: "Node JS",
    icon: nodejs,
    per: 65,
    code: "nodejs",
  },
  {
    name: "Django",
    icon: django,
    per: 75,
    code: "django",
  },

  {
    name: "Mongo DB",
    icon: mongodb,
    per: 75,
    code: "mongodb",
  },
  {
    name: "Postgres SQL",
    icon: postgresql,
    per: 70,
    code: "postgresql",
  },

  {
    name: "Git",
    icon: git,
    per: 65,
    code: "git",
  },

  {
    name: "Docker",
    icon: docker,
    per: 65,
    code: "docker",
  },
];

const backSkills = [
  {
    name: "Python",
    icon: python,
    per: 85,
    code: "python",
  },
  {
    name: "Golang",
    icon: golang,
    per: 65,
    code: "golang",
  },

  {
    name: "Django",
    icon: django,
    per: 75,
    code: "django",
  },

  {
    name: "Node JS",
    icon: nodejs,
    per: 65,
    code: "nodejs",
  },

  {
    name: "Mongo DB",
    icon: mongodb,
    per: 75,
    code: "mongodb",
  },
  {
    name: "Postgres SQL",
    icon: postgresql,
    per: 70,
    code: "postgresql",
  },

  {
    name: "Git",
    icon: git,
    per: 65,
    code: "git",
  },

  {
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
    title: "Mentor by C++ and Python, Django",
    company_name: "BePRO IT Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - December 2021",
    points: ["Training school teachers in Python and Django."],
  },
  {
    title: "Full stack Developer (Golang, React JS)",
    company_name: "Hamkorbank ATB",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2022 - May 2022",
    points: [
      "Developing frontend and backend applications using React.js, Golang and other related technologies.",
      "Project integration with other services like Uzcard and Humo.",
    ],
  },

  {
    title: "Full stack Developer (Python, Django, React JS)",
    company_name: "O'zGASHKLITI",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Django and other related technologies.",
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
    name: "Auto payment to pay off loans",
    description:
      "Web-based platform that allows auto payment to pay off loans. In this project I worked as frontend develeloper. Design was based on Ant Design. This project included implementing many complex RestfullAPI services between Golang and React app.",
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
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
    ],
    image: LoanControl,
    source_code_link: "https://github.com/",
  },
  {
    name: "Monitoring DSHK",
    description:
      "Web application that allows users of a company called UZGASHKLITI to do their work online. In this project I worked as full stack developer. I created some api services in backend side with django application as well as I designed and maintained front side using React JS. I alse used Leaflet JS, flowbite-react libraries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
    ],
    image: MonitoringDshk,
    source_code_link: "https://github.com/",
  },
  {
    name: "Admin panel DSHK",
    description:
      "Web application that allows admins to control all their works, contracts, workers and seeing different statistics related to this. In this project I also worked as full stack developer. I created some api services in backend side with django application as well as I designed and maintained front side using React JS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: AdminDshk,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  experiences,
  testimonials,
  projects,
  frontSkills,
  backSkills,
  langSkills,
  programmingLanguages,
  technologies,
};
