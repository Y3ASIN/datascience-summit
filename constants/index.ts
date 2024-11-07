//import {date, location, rightArrow} from '@/public/icons'

import { Event, Guest, Summit } from "./types";

export const navLinks = ["about", "schedule", "previous-summits"];

export const featureData = [
  {
    title: "Data Science Summit",
    description:
      "The main edition of the conference dedicated to all issues in data science.",
    date: "21.11.2024",
    location: "Online",
    tags: ["ML / AI", "Deep Learning", "Big Data", "AI Ethics"],
    gradientFrom: "#005b92", // Primary color
    gradientTo: "#78b2df", // Secondary color
  },
  {
    title: "Machine Learning Edition",
    description:
      "A special edition dedicated to machine learning and artificial intelligence.",
    date: "13.06.2024",
    location: "PGE Narodowy, Warsaw",
    tags: [
      "Machine Learning",
      "AI Use Cases",
      "Data Science",
      "Computer Vision",
    ],
    gradientFrom: "#0b3a6f", // Secondary color
    gradientTo: "#348ed6", // Accent color
  },
  {
    title: "Artificial Intelligence Forum",
    description:
      "An in-depth forum on the latest advancements in AI research and applications.",
    date: "22.05.2024",
    location: "Hybrid",
    tags: ["Artificial Intelligence", "Research", "Automation", "Ethics"],
    gradientFrom: "#01345d", // Accent color
    gradientTo: "#78b2df", // Primary color
  },
  {
    title: "Artificial Intelligence Forum",
    description:
      "An in-depth forum on the latest advancements in AI research and applications.",
    date: "22.05.2024",
    location: "Hybrid",
    tags: ["Artificial Intelligence", "Research", "Automation", "Ethics"],
    gradientFrom: "#348ed6", // Accent color
    gradientTo: "#005b92", // Primary color
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "Poster Presentation",
    description:
      "Showcase your research through engaging posters and get feedback from peers and mentors.",
    date: "February 10, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Daffodil International University - Main Hall",
    image: "/assets/events/Poster_presentation.png",
  },
  {
    id: 2,
    title: "Workshop",
    description:
      "Participate in hands-on workshops covering various topics in technology and innovation.",
    date: "February 15, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Daffodil International University - Room 202",
    image: "/assets/events/Workshops.jpg",
  },
  {
    id: 3,
    title: "Hackathon",
    description:
      "Join us for a weekend of coding, innovation, and collaboration to solve real-world problems.",
    date: "March 15-17, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Daffodil International University - Computer Lab",
    image: "/images/hackathon.jpg",
  },
  {
    id: 4,
    title: "Prompt Challenge",
    description:
      "Test your creativity and skill in this exciting prompt-based challenge.",
    date: "March 25, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "Daffodil International University - Auditorium",
    image: "/images/prompt-challenge.jpg",
  },
  {
    id: 5,
    title: "Project Competition",
    description:
      "Showcase your projects and compete for prizes with the best teams in the university.",
    date: "April 5, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Daffodil International University - Exhibition Center",
    image: "/images/project-competition.jpg",
  },
];

// data/summits.ts
export const summits: Summit[] = [
  {
    id: 1,
    title: "1st Summit",
    images: [
      "/1st-summit/p1.png",
      "/1st-summit/p2.png",
      "/1st-summit/p3.png",
    ],
  },
  {
    id: 2,
    title: "2nd Summit",
    images: [
      "/2nd-summit/p1.svg",
      "/2nd-summit/p2.svg",
      "/2nd-summit/p3.svg",
    ],
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
    name: "Sabur Khan",

    img: "/assets/sabur-khan.jpg",
    designation: "Chairman of Daffodil",
    organization: "Daffodil International University",
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
