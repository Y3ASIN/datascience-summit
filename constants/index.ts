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
    images: ["/3rd-summit/p1.jpg", "/3rd-summit/p2.jpg", "/3rd-summit/p3.png"],
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
    image: '/banners/Data Hackathon.png'
  },
  {
    title: "Project Competition",
    link: "https://forms.gle/qMPo8jeAb8vbNShD9",
    image: '/banners/project competition.png'
  },
  {
    title: "Idea Poster Presentation",
    link: "https://forms.gle/sJSJJQnmZJS7EYVo7",
    image: '/banners/Idea Poster.png'
  },
  {
    title: "Promptcraft Challenge",
    link: "https://forms.gle/ppXCMi5xxikqL8zD9",
    image: '/banners/Prompt craft.png'
  },
  {
    title: "Hands-On Workshop",
    link: "https://forms.gle/q1G9g63CQpS3D2zJ8",
    image: '/banners/handson Workshop.png'
  },
];

export const summitEventsData = [
  {
    title: "Poster Presentation",
    description:
      "Showcase innovative ideas on AI in Education at the 4th Data Science Summit 2024.",
    goals: [
      "Encourage innovative thinking in AI for Education.",
      "Promote research and analytical skills.",
      "Improve communication and presentation skills.",
      "Highlight the positive impact of AI on learning.",
    ],
    eligibility: [
      "Open to university, college, and school students with a valid student ID.",
      "Individual or team submissions (max 2 members per team).",
      "Each participant or team can submit only one poster.",
    ],
    registration: {
      fee: [
        { type: "Individual Participant", cost: "500 BDT" },
        { type: "Team (2 Members)", cost: "1,000 BDT" },
      ],
      steps: [
        "Online Registration: Register here. Deadline: [Date]",
        "Topic & Abstract Submission: Submit by [Date]",
        "Poster Submission: Digital posters (PDF format) by [Deadline]",
      ],
      benefits:
        "All participants receive a T-shirt, souvenirs, and certificates.",
    },
    evaluationCriteria: [
      { criterion: "Relevance to Theme", weight: "20%" },
      { criterion: "Innovation & Creativity", weight: "25%" },
      { criterion: "Clarity & Organization", weight: "15%" },
      { criterion: "Technical Depth", weight: "20%" },
      { criterion: "Visual Design", weight: "10%" },
      { criterion: "Q&A Session", weight: "10%" },
    ],
    prizes: [
      { position: "1st Place", amount: "3,000 BDT" },
      { position: "2nd Place", amount: "2,000 BDT" },
      { position: "3rd Place", amount: "1,000 BDT" },
    ],
    totalPrizePool: "6,000 BDT",
  },
  {
    title: "PromptCraft Challenge",
    description:
      "Test and refine your prompt engineering skills to generate precise AI outputs relevant to education.",
    goals: [
      "Master prompt engineering for effective AI output generation.",
      "Promote innovative prompt crafting approaches for education.",
      "Demonstrate prompt-driven AI applications in education, focusing on challenges such as personalized learning, engagement, and accessibility.",
    ],
    eligibility: [
      "Open to university, college, and school students with a valid student ID.",
      "Individual participation only.",
      "Each participant may submit only one prompt.",
    ],
    registration: {
      fee: [{ type: "Individual Participant", cost: "100 BDT" }],
      steps: [
        "Online Registration: Register here. Deadline: [Date]",
        "Prompt Challenge Event: 2:30 PM - 3:30 PM, December 11, 2024, at Daffodil Smart City.",
      ],
      benefits: "Each participant receives a certificate, T-shirt, and snacks.",
    },
    evaluationCriteria: [
      { criterion: "Relevance to Theme", weight: "25%" },
      { criterion: "Prompt Accuracy", weight: "30%" },
      { criterion: "Creativity", weight: "20%" },
      { criterion: "Efficiency", weight: "15%" },
      { criterion: "Presentation Skills", weight: "10%" },
    ],
    prizes: [
      { position: "1st Place", amount: "3,000 BDT" },
      { position: "2nd Place", amount: "2,000 BDT" },
      { position: "3rd Place", amount: "1,000 BDT" },
    ],
    totalPrizePool: "6,000 BDT",
  },
  {
    title: "Project Showcasing",
    description:
      "Showcase innovative AI-driven solutions for educational challenges at the 4th Data Science Summit 2024.",
    goals: [
      "Promote the development of AI solutions for improving education quality, accessibility, and engagement.",
      "Encourage practical data science applications targeting educational challenges.",
      "Provide a platform for feedback from academic and industry experts.",
      "Recognize outstanding projects with innovative approaches, scalability, and impact.",
    ],
    eligibility: [
      "Open to students, researchers, and professionals in data science or related fields.",
      "Team size: 2 members per team.",
      "Projects must address significant educational issues using data science and AI.",
    ],
    registration: {
      fee: [{ type: "Team (2 Members)", cost: "1,000 BDT" }],
      steps: [
        "Online Registration and Abstract Submission: Register by [Date]",
        "Preliminary Project Submission: Submit report and prototype by [Deadline]",
        "Final Presentation: In-person presentation at the summit.",
      ],
      benefits: "All participants receive an event T-shirt and souvenir.",
    },
    evaluationCriteria: [
      { criterion: "Relevance", weight: "20%" },
      { criterion: "Innovation", weight: "20%" },
      { criterion: "Methodology", weight: "20%" },
      { criterion: "Impact", weight: "20%" },
      { criterion: "Scalability and Feasibility", weight: "20%" },
    ],
    prizes: [
      { position: "1st Place", amount: "5,000 BDT" },
      { position: "2nd Place", amount: "3,000 BDT" },
      { position: "3rd Place", amount: "2,000 BDT" },
    ],
    totalPrizePool: "10,000 BDT",
  },
];
