import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: "Resume Analyzer & Builder",
    description:
      "A comprehensive AI-powered platform for resume analysis and intelligent resume building. It delivers ATS scoring, predictive insights, and personalized job suggestions based on user profiles.",
    fullDescription:
      "A comprehensive AI-powered platform for resume analysis and intelligent resume building. It delivers ATS scoring, predictive insights, and personalized job suggestions based on user profiles. Integrated analytics and job search features provide actionable guidance for career growth.",
    image: "/resume-analyzer.png",
    tech: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Express"],
    demo: "https://resume-frontend3.vercel.app/",
    github: "https://github.com/Dharaneesh05/Resume-Analyzer-Builder",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A full-stack portfolio showcasing projects and skills with an AI-powered chatbot for interactive user engagement. Features dynamic content rendering, theme switching, and seamless navigation.",
    fullDescription:
      "A full-stack portfolio showcasing projects and skills with an AI-powered chatbot for interactive user engagement. Features dynamic content rendering, theme switching, and seamless navigation for a responsive, modern experience.",
    image: "/portfolio.png",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://portfolio-3tk8.vercel.app/",
    github: "https://github.com/Dharaneesh05/PortVia",
  },
  {
    id: 3,
    title: "SmartFit",
    description:
      "An AI-powered fit recommendation system that reduces online shopping returns by analyzing body measurements and user queries. Leverages computer vision and NLP to deliver personalized sizing insights.",
    fullDescription:
      "An AI-powered fit recommendation system that reduces online shopping returns by analyzing body measurements and user queries. Leverages computer vision and NLP to deliver personalized sizing insights, improving fit accuracy by up to 30%.",
    image: "/Smartfit.png",
    tech: ["Python", "Flask", "NLP", "YOLO", "OpenCV", "MediaPipe"],
    demo: "https://smartfitdeploy2-1.onrender.com/",
    github: "https://github.com/Dharaneesh05/SmartFit",
  },
  {
    id: 4,
    title: "PitchPoint",
    description:
      "A data-driven analytics platform for evaluating Test cricket performance using the Duckworth–Lewis method. Delivers real-time insights, predictive impact analysis, and interactive visualizations.",
    fullDescription:
      "A data-driven analytics platform for evaluating Test cricket performance using the Duckworth–Lewis method. Delivers real-time insights, predictive impact analysis, and interactive visualizations through a responsive, scalable architecture.",
    image: "/pitchpoint.png",
    tech: ["React", "Node.js", "MongoDB", "Data Analytics", "Statistical Modeling", "Interactive Charts"],
    demo: "https://pitch-point-eight.vercel.app/",
    github: "https://github.com/Dharaneesh05/PitchPoint",
  },
  {
    id: 5,
    title: "CineFellas",
    description:
      "A full-stack movie recommendation platform delivering mood-based and multilingual suggestions across 10 genres. Leverages AI-driven content analysis with an intuitive UI to personalize discovery.",
    fullDescription:
      "A full-stack movie recommendation platform delivering mood-based and multilingual suggestions across 10 genres. Leverages AI-driven content analysis with an intuitive UI to personalize discovery and enhance user engagement.",
    image: "/cinefellas.png",
    tech: ["React", "Node.js", "Multilingual Support", "Content Analysis"],
    demo: "https://movierecommend.vercel.app/",
    github: "https://github.com/Dharaneesh05/Movie-Recommendation-System-",
  },
  {
    id: 6,
    title: "House Design Recommendation System",
    description:
      "An AI-driven platform for intelligent house planning with interactive 3D interior and exterior visualizations. Combines real-location mapping and user preferences to deliver personalized design recommendations.",
    fullDescription:
      "An AI-driven platform for intelligent house planning with interactive 3D interior and exterior visualizations. Combines real-location mapping and user preferences to deliver personalized design recommendations and immersive models.",
    image: "/house.png",
    tech: ["Python", "Firebase", "Blender", "GeoPy", "3D Visualization"],
    demo: "https://virtualhome.vercel.app/",
    github: "https://github.com/Dharaneesh05/3D-House-Design-Recommendation-System.git",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "TechNest",
    period: "Jan 2024 - Apr 2024",
    type: "Internship",
    description:
      "Developed web applications using React and Node.js, collaborated with senior developers on enterprise projects, and implemented RESTful APIs.",
    skills: ["React", "Node.js", "MongoDB", "API Development"],
  },
  {
    id: 2,
    role: "AI Developer Intern",
    company: "DevNest",
    period: "Aug 2025 - Sep 2025",
    type: "Internship",
    description:
      "Worked on machine learning projects, implemented AI models for data analysis and prediction, and contributed to research initiatives.",
    skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
  },
] as const;

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "May 2025",
    certificateUrl: "/mongodb.pdf",
  },
  {
    id: 2,
    title: "NVIDIA AI Fundamentals",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Oct 2025",
    certificateUrl: "/nvidia.pdf",
  },
  {
    id: 3,
    title: "Oracle APEX Cloud Developer",
    issuer: "Oracle University",
    date: "May 2025",
    certificateUrl: "/oracle.pdf",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "TechnoFest – FirstPrize(POC)",
    category: "AI / ML Category",
    description: "Developed practical experience in model logic, data flow, and translating user requirements into scalable AI-driven solutions.",
    date: "Aug 2025",
    certificateUrl: "/POC.pdf",
  },
  {
    id: 2,
    title: "BYTS Hackathon – Best Implementation",
    category: "",
    description: "Recognized for strong technical execution, system design, and real-world feasibility.",
    date: "Apr 2025",
    certificateUrl: "/Byts.pdf",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
