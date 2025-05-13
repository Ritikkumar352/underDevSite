export const personalInfo = {
  name: "Ritik",
  title: "Computer Science Student & Developer",
  email: "ritik352alc@gmail.com",
  email2: "ritik.22b0121085@abes.ac.in",
  phone: "+91 xxxxxxxxx",
  location: "Ghaziabad, India",
  github: "https://github.com/ritikkumar352",
  linkedin: "https://www.linkedin.com/in/ritikkumar352",
  photo: "/assets/Ritik-pfp.png",
  photo2: "/assets/PFP_Grey.jpg",
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
// export const skills = [
//   { name: "Python", level: 90 },
//   { name: "JavaScript", level: 85 },
//   { name: "React", level: 80 },
//   { name: "Java", level: 75 },
//   { name: "C++", level: 70 },
//   { name: "Machine Learning", level: 65 },
//   { name: "SQL", level: 75 },
//   { name: "Git", level: 80 },
// ];

export const skills = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 85 },
  { name: "SQL", level: 75 },
  { name: "React.js", level: 85 },
  { name: "Google Cloud", level: 70 },
  { name: "Docker", level: 80 },
  { name: "C", level: 85 },
  { name: "JavaScript", level: 80 },

  { name: "PHP", level: 65 },

  { name: "Spring Security", level: 80 },
  { name: "Hibernate", level: 75 },
  { name: "REST APIs", level: 80 },
  { name: "Microservices", level: 70 },
  { name: "Python", level: 70 },
  
  { name: "Bootstrap", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Material-UI", level: 70 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Redis", level: 70 },
  
  { name: "AWS", level: 75 },
  
  { name: "Linux", level: 75 },
  { name: "GitHub", level: 85 },
  { name: "Git", level: 80 },
  { name: "Postman", level: 80 },
  { name: "Firebase", level: 70 },
  { name: "IntelliJ IDEA", level: 75 },
  { name: "VS Code", level: 80 },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered mini CRM Platform",
    shortDescription:
      "A comprehensive CRM platform to manage customer relationships and data.",
    description: [
      "Developed a web-based CRM application for managing customer information, communication, creating campaigns and analytics.",
      "Integrated data visualization and reporting features to enhance customer interaction tracking.",
      "Built a user-friendly UI with Admin Login using O-Auth 2 which is fast and secure.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "React",
      "Docker",
      "Firebase",
      "Spring Security",
      "Google Cloud",
      "AWS Amplify",
    ],
    thumbnail: "/assets/project-1/crm-login-page.png",
    images: [
      "/assets/project-1/dashboard.png",
      "/assets/project-1/segment.png",
      "/assets/project-1/campaign.png",
      "/assets/project-1/crm-login-page.png",
    ],
    architectureDiagrams: ["/assets/project-1/Application-flow.jpeg"],
    dbDiagrams: ["/assets/project-1/db-diagrma-code.png"],
    isTeamProject: false,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: personalInfo.photo,
      },
      {
        name: "Priya Sharma",
        role: "UI/UX Designer",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
    github: "https://github.com/Ritikkumar352/miniCrm",
    liveUrl: "https://main.d3pha96ypv251i.amplifyapp.com/",
  },
  {
    id: 2,
    title: "Vid-vault [cloud]",
    shortDescription: "A cloud-based video management application.",
    description: [
      "Built a video management system with cloud storage for easy uploading, streaming, deleting and downloading of videos.",
      "Implemented secure video access and efficient file organization using metadata stored in PostgreSQL while the video file is on GCP Bucket.",
      "Implemented same project using AWS S3 bucket and a simple React UI for the user.",
    ],
    documentation:[
      " Project 2 test documentation",
      " Project 2 test documentation",
      " Project 2 test documentation",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "GCP Bucket",
      "AWS S3",
      "React",
    ],
    thumbnail: "assets/project-2/vidvault-home.png",
    images: ["/assets/project-2/vidvault-home.png"],
    architectureDiagrams: [
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f",
    ],
    dbDiagrams: ["/assets/project-2/vidvault-home.png"],
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
    github: "https://github.com/Ritikkumar352/VidVault",
    liveUrl: "https://vidvault.me/",
  },
  {
    id: 3,
    title: "Campus Dock Ongoing**",
    shortDescription: "A one-stop smart utility app for college students.",
    description: [
      "Facilitates campus-specific services including canteen menus, order tracking, and notifications.",
      "Integrated UPI payment for streamlined transactions during peak hours.",
      "Email-based authentication to filter canteen availability by college.",
    ],
    technologies: [
      "Kotlin",
      "Spring Boot",
      "PostgreSQL",
      "Google Storage bucket",
      "Firebase",
      "TailwindCSS",
    ],
    thumbnail: "/assets/project-3/archit-campus-dock.png",
    images: ["/assets/project-3/archit-campus-dock.png"],
    architectureDiagrams: ["/assets/project-3/archit-campus-dock.png"],
    dbDiagrams: [],
    isTeamProject: true,
    team: [
      {
        name: "Ritik",
        role: personalInfo.role,
        photo: personalInfo.photo,
      },
      {
        name: "Sayed Haneef",
        role: "Backend Developer, Android Developer",
        photo: "/assets/project-2/haneef-campusDock.jpeg",
      },
    ],
    // TODO add the link to the project
    github: "https://github.com/alexjohnson/algo-trader-sim",
    liveUrl: "https://algo-trader-sim.com",
  },
  {
    id: 4,
    title: "Real-Time Chat App, Ongoing**",
    shortDescription:
      "A real-time messaging application with group and direct chat",
    description: [
      "Implemented real-time chat using WebSockets for seamless communication.",
      "Features include group creation, user authentication, and message persistence.",
      "Integrated notifications for message updates and typing indicators.",
    ],
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "WebSockets",
      "Docker",
    ],
    thumbnail: "/assets/under-dev.jpg",
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
    // TODO add the live link to the project
    github: "https://github.com/Ritikkumar352/ChatLive",
    liveUrl: "",
  },
  {
    id: 5,
    title: "User Authentication System",
    shortDescription: "Secure login and registration system and Sessions.",
    description: [
      "Implemented secure user authentication with JWT and OAuth2.",
      "Password hashing and role-based access management.",
      "Integrated Google and email-based sign-in options.",
    ],
    technologies: ["Java", "Spring Boot", "React", "JWT", "OAuth2"],
    thumbnail: "/assets/under-dev.jpg",
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
    github: "https://github.com/Ritikkumar352/authentication_Spring-Boot",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Youtube Bacckend Clone",
    shortDescription:
      "A full-featured backend for a YouTube-like platform, utilizing MERN stack and Cloudinary for video uploads.",
    description: [
      "Developed a scalable backend to handle video uploads, processing, and streaming.",
      "Integrated Cloudinary for efficient video storage and delivery.",
      "Implemented user authentication and video management using the MERN stack.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    thumbnail: "/assets/project-6/diagram-export-13-5-2025-2_11_48-am.png",
    images: ["/assets/project-6/diagram-export-13-5-2025-2_11_48-am.png"],
    architectureDiagrams: [],
    dbDiagrams: ["/assets/project-6/diagram-export-13-5-2025-2_11_48-am.png"],
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
    shortDescription:
      "A web-based system for managing student results, built with PHP and a modern web stack.",
    description: [
      "Developed a comprehensive platform for managing and displaying student results.",
      "Implemented a secure and user-friendly interface using HTML, CSS, Bootstrap, and JavaScript.",
      "Used PHP for backend processing and MySQL for data storage.",
    ],
    technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
    thumbnail: "/assets/project-7/srms-home.png",
    images: [
      "/assets/project-7/home.png",
      "/assets/project-7/register.png",
      "/assets/project-7/admin-login.png",
      "/assets/project-7/profile-1.png",
      "/assets/project-7/profile-2.png",
    ],

    architectureDiagrams: ["/assets/project-7/image.png"],
    dbDiagrams: ["/assets/project-7/image.png"],
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
    liveUrl: "https://ritikkumar352.github.io/SRMS/",
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
    {
      // TODO add those links to the footer
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
