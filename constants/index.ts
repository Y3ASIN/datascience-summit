//import {date, location, rightArrow} from '@/public/icons'

import { Event, Guest, Summit } from "./types";

export const navLinks = ["about", "schedule", "previous-summits"];

export const featureData = [
  {
    title: "Data Hackathon",
    description:
      "Get ready for the ultimate challenge at the Data Hackathon! Join data enthusiasts, AI experts, and innovators as they come together to tackle real-world problems, push the limits of machine learning, and dive into the exciting world of big data and AI!",
    date: "11.12.2024",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
    tags: ["ML / AI", "Deep Learning", "Big Data", "AI Ethics"],
    gradientFrom: "#005b92", // Primary color
    gradientTo: "#78b2df", // Secondary color
  },
  {
    title: "Project Competition",
    description:
      "Showcase your innovative projects and compete with others in a high-energy event celebrating tech creativity and practical solutions.",
    date: "11.12.2024",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
    tags: ["Innovation", "Tech Projects", "Prototyping", "Showcase"],
    gradientFrom: "#0b3a6f", // Secondary color
    gradientTo: "#348ed6", // Accent color
  },
  {
    title: "Promptcraft Challenge",
    description:
      "Unleash your creativity by crafting powerful and impactful prompts in this engaging, interactive challenge designed for aspiring creators and innovators.",
    date: "11.12.2024",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
    tags: ["Creativity", "Writing", "Prompt Engineering", "Innovation"],
    gradientFrom: "#01345d",
    gradientTo: "#78b2df",
  },
  {
    title: "Hands-On Workshop",
    description:
      "Engage in practical, skill-building sessions led by experts on cutting-edge topics.",
    date: "11.12.2024",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
    tags: [
      "Skill Development",
      "Practical Learning",
      "Interactive",
      "Hands-On",
      "Professional Growth",
    ],
    gradientFrom: "#348ed6", // Accent color
    gradientTo: "#005b92", // Primary color
  },
  {
    title: "Idea Poster Presentation",
    description:
      "Showcase your innovative ideas on AI, automation, and ethics in an engaging poster presentation, sparking insights and discussions with experts.",
    date: "11.12.2024",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
    tags: [
      "Creative Ideas",
      "Poster Session",
      "Inspiration",
      "Showcase",
      "Knowledge Sharing",
    ],
    gradientFrom: "#0b3a6f", // Accent color
    gradientTo: "#78b2df", // Primary color
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "Data Hackathon",
    description:
      "Join us for a weekend of coding, innovation, and collaboration to solve real-world problems.",
    date: "December 11, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
  },
  {
    id: 2,
    title: "Project Competition",
    description:
      "Showcase your projects and compete for prizes with the best teams in the university.",
    date: "December 11, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
  },
  {
    id: 3,
    title: "Promptcraft Challenge",
    description:
      "Test your creativity and skill in this exciting prompt-based challenge.",
    date: "December 11, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
  },
  {
    id: 4,
    title: "Hands-On Workshop",
    description:
      "Participate in hands-on workshops covering various topics in technology and innovation.",
    date: "December 11, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
  },
  {
    id: 5,
    title: "Idea Poster Presentation",
    description:
      "Showcase your research through engaging posters and get feedback from peers and mentors.",
    date: "December 11, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Daffodil Smart City, Birulia, Dhaka-1216",
  },
];

// data/summits.ts
export const summits: Summit[] = [
  {
    id: 1,
    title: "1st Summit",
    images: ["/1st-summit/p1.png", "/1st-summit/p2.png", "/1st-summit/p3.png"],
  },
  {
    id: 2,
    title: "2nd Summit",
    images: ["/2nd-summit/p1.svg", "/2nd-summit/p2.svg", "/2nd-summit/p3.svg"],
  },
  {
    id: 3,
    title: "3rd Summit",
    images: [
      "/images/summit-4-1.jpg",
      "/images/summit-4-2.jpg",
      "/images/summit-4-3.jpg",
    ],
  },
];

export const guests: Guest[] = [
  {
    name: "Jhone Doe",

    img: "/assets/sabur-khan.jpg",
    designation: "Chairman",
    organization: "DIU",
  },
  {
    name: "Jane Doe",

    img: "/assets/jane-doe.jpg",
    designation: "CEO of Tech Innovate",
    organization: "Tech Innovate Inc.",
  },
  {
    name: "John Smith",

    img: "/assets/john-smith.jpg",
    designation: "Head of Research",
    organization: "Global AI Labs",
  },
  {
    name: "Emily Carter",

    img: "/assets/emily-carter.jpg",
    designation: "Lead Data Scientist",
    organization: "Quantum Solutions",
  },
  {
    name: "Michael Lee",

    img: "/assets/michael-lee.jpg",
    designation: "CTO",
    organization: "Future Vision Technologies",
  },
  {
    name: "Sophia Kim",

    img: "/assets/sophia-kim.jpg",
    designation: "Professor",
    organization: "University of Innovation",
  },
  {
    name: "Carlos Rivera",

    img: "/assets/carlos-rivera.jpg",
    designation: "Founder",
    organization: "Green Tech Enterprises",
  },
  {
    name: "Anna Johnson",

    img: "/assets/anna-johnson.jpg",
    designation: "Chief Product Officer",
    organization: "NextGen Robotics",
  },
];

export const formLinks = [
  {
    title: "Data Hackathon",
    link: "https://forms.gle/eYQLEmVesAPe2cAr9",
  },
  {
    title: "Project Competition",
    link: "https://forms.gle/qMPo8jeAb8vbNShD9",
  },
  {
    title: "Idea Poster Presentation",
    link: "https://forms.gle/sJSJJQnmZJS7EYVo7",
  },
  {
    title: "Promptcraft Challenge",
    link: "https://forms.gle/ppXCMi5xxikqL8zD9",
  },
  {
    title: "Hands-On Workshop",
    link: "https://forms.gle/q1G9g63CQpS3D2zJ8",
  },
];
