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

const frontSkills = [
  {
    name: "JavaScript",
    icon: javascript,
    per: 80,
    code: "javascript",
  },
  {
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
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer (Golang, React JS)",
    company_name: "Hamkorbank ATB",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer (Python, Django, React JS)",
    company_name: "O'zGASHKLITI",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
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
};
