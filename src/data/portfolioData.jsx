
export const personalInfo = {
  name: "Ritik",
  title: "Computer Science Student & Developer",
  email: "ritik352alc@gmail.com",
  phone: "+91 xxxxxxxxx",
  location: "Ghaziabad, India",
  github: "https://github.com/ritikkumar352",
  linkedin: "https://www.linkedin.com/in/ritikkumar352",
  photo: "/assets/PFP_Yellow.png",
  role: "Full Stack Developer",
  bio: [
    "Hi! I'm a third-year Computer Science student at ABES Engineering College, with a strong interest in software development and scalable web systems.",
    "I’ve worked extensively with Java, Spring Boot, SQL, and also built full-stack applications using React, Tailwind CSS, and Docker.",
    "I've developed and deployed real-world projects involving Google OAuth 2.0, REST APIs, and campaign management systems, hosted on platforms like AWS (Amplify, EC2) and GCP (Compute Engine).",
  ],
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "ABES Engineering College",
    location: "Ghaziabad, India",
    period: "2022 - 2026",
    description: "Focus on software development, and data structures.",
  },
  // {
  //   degree: "Full Stack Web Development Bootcamp",
  //   institution: "Tech Academy Online",
  //   location: "Remote",
  //   period: "Summer 2023",
  //   description:
  //     "12-week intensive program covering MERN stack development and modern web practices.",
  // },

  // TODO add 12 th grade education here
];

// TODO update a whole list of skills
export const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Java", level: 75 },
  { name: "C++", level: 70 },
  { name: "Machine Learning", level: 65 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 80 },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered mini CRM Platform",
    shortDescription:
      "A machine learning application that helps students optimize their study schedule",
    description: [
      "Developed an intelligent study planner that uses machine learning to optimize study schedules based on individual learning patterns.",
      "Implemented spaced repetition algorithms and personalized learning path recommendations.",
      "Built a responsive web interface with real-time progress tracking and analytics dashboard.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Flask",
      "React",
      "MongoDB",
      "Chart.js",
    ],
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    ],
    architectureDiagrams: [
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef",
    ],
    dbDiagrams: ["https://images.unsplash.com/photo-1544383835-bda2bc66a55d"],
    isTeamProject: false,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: "/assets/PFP_Yellow.png",
      },
      {
        name: "Priya Sharma",
        role: "UI/UX Designer",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        name: "Michael Lee",
        role: "Backend Developer",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
    ],
    github: "https://github.com/Ritikkumar352/miniCrm",
    liveUrl: "https://main.d3pha96ypv251i.amplifyapp.com/",
  },
  {
    id: 2,
    title: "Vid-vault cloud",
    shortDescription:
      "Mobile-friendly app to help students navigate university campus",
    description: [
      "Created an interactive campus map application to help new students find buildings and services.",
      "Implemented real-time location tracking, shortest path algorithms, and accessibility features.",
      "Designed for both web and mobile use with responsive layouts and offline capabilities.",
    ],
    technologies: [
      "JavaScript",
      "React Native",
      "Node.js",
      "MongoDB",
      "Google Maps API",
    ],
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    ],
    architectureDiagrams: [
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f",
    ],
    dbDiagrams: [],
    isTeamProject: false,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: "/assets/PFP_Yellow.png",
      },
    ],
    github: "https://github.com/alexjohnson/campus-navigator",
    liveUrl: "https://campus-navigator-demo.com",
  },
  {
    id: 3,
    title: "Campus Dock Ongoing**",
    shortDescription: "Educational platform for learning financial algorithms",
    description: [
      "Built a simulator that allows students to implement and test trading algorithms without financial risk.",
      "Developed a comprehensive data visualization system for analyzing algorithm performance.",
      "Integrated historical market data and created realistic market scenarios for algorithm testing.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "React", "D3.js", "Flask"],
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],
    architectureDiagrams: [],
    dbDiagrams: [],
    isTeamProject: true,
    team: [
      {
        name: "Ritik Kumar",
        role: "Full Stack Developer",
        photo: "public/assets/PFP_Yellow.png",
      },
      {
        name: "Sayed Haneef",
        role: "Backend Developer and Android Developer",
        photo: "public/assets/2024-05-05 (7).png",
      },
    ],
    github: "https://github.com/alexjohnson/algo-trader-sim",
    liveUrl: "https://algo-trader-sim.com",
  },
  {
    id: 4,
    title: "Real Time Chat Application, Ongoing**",
    shortDescription: "Educational platform for learning financial algorithms",
    description: [
      "Built a simulator that allows students to implement and test trading algorithms without financial risk.",
      "Developed a comprehensive data visualization system for analyzing algorithm performance.",
      "Integrated historical market data and created realistic market scenarios for algorithm testing.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "React", "D3.js", "Flask"],
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],
    architectureDiagrams: [],
    dbDiagrams: [],
    isTeamProject: true,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      },
      {
        name: "Taylor Wilson",
        role: "Frontend Developer",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
    github: "https://github.com/alexjohnson/algo-trader-sim",
    liveUrl: "https://algo-trader-sim.com",
  },
  {
    id: 5,
    title: "User Authentication System",
    shortDescription: "Educational platform for learning financial algorithms",
    description: [
      "Built a simulator that allows students to implement and test trading algorithms without financial risk.",
      "Developed a comprehensive data visualization system for analyzing algorithm performance.",
      "Integrated historical market data and created realistic market scenarios for algorithm testing.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "React", "D3.js", "Flask"],
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],
    architectureDiagrams: [],
    dbDiagrams: [],
    isTeamProject: true,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: personalInfo.photo,
      },
      {
        name: "Taylor Wilson",
        role: "Frontend Developer",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
    github: "https://github.com/alexjohnson/algo-trader-sim",
    liveUrl: "https://algo-trader-sim.com",
  },
  {
    id: 6,
    title: "Youtube Bacckend Clone",
    shortDescription: "Educational platform for learning financial algorithms",
    description: [
      "Built a simulator that allows students to implement and test trading algorithms without financial risk.",
      "Developed a comprehensive data visualization system for analyzing algorithm performance.",
      "Integrated historical market data and created realistic market scenarios for algorithm testing.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "React", "D3.js", "Flask"],
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],
    architectureDiagrams: [],
    dbDiagrams: [],
    isTeamProject: false,
    team: [
      {
       name: "Ritik",
        role: personalInfo.role,
        photo: personalInfo.photo,
      },
      {
        name: "Taylor Wilson",
        role: "Frontend Developer",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
    github: "https://github.com/alexjohnson/algo-trader-sim",
    liveUrl: "https://algo-trader-sim.com",
  },
  {
    id: 7,
    title: "SRMS (Student Result Management System)",
    shortDescription: "Educational platform for learning financial algorithms",
    description: [
      "Built a simulator that allows students to implement and test trading algorithms without financial risk.",
      "Developed a comprehensive data visualization system for analyzing algorithm performance.",
      "Integrated historical market data and created realistic market scenarios for algorithm testing.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "React", "D3.js", "Flask"],
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],
    architectureDiagrams: [],
    dbDiagrams: [],
    isTeamProject: true,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: personalInfo.photo,
      },
      {
        name: "Taylor Wilson",
        role: "Frontend Developer",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
    github: "https://github.com/alexjohnson/algo-trader-sim",
    liveUrl: "https://algo-trader-sim.com",
  },
];

export const contactInfo = {
  email: "ritik352alc@gmail.com",
  phone: "+91 xxxxxxxxx",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/ritikkumar352",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ritikkumar352",
      icon: "linkedin",
    },
    {  // TODO add those links to the footer
      platform: "Twitter",
      url: "https://twitter.com/ritikkumar352",
      icon: "twitter",
    },
    {
      platform: "Discord",
      url: "https://discord.com/invite/ritikkumar352",
      icon: "discord",
    },
  ],
};
