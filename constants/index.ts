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
    images: ["/2nd-summit/p1.jpg", "/2nd-summit/p2.jpg", "/2nd-summit/p3.png"],
  },
  {
    id: 3,
    title: "3rd Summit",
    images: ["/3rd-summit/p1.jpg", "/3rd-summit/p2.jpg", "/3rd-summit/p3.png"],
  },
];

export const guests: Guest[] = [
  {
    name: "Prof. M. Lutfar Rahman, PhD",
    img: "/guests/vc.jpg",
    designation: "Vice Chancellor",
    organization: "Daffodil International University",
    category: "chief",
  },
  {
    name: "Professor Dr. S.M. Mahbub Ul Haque Majumder",
    img: "/guests/provc.jpg",
    designation: "Pro Vice Chancellor",
    organization: "Daffodil International University",
    category: "special",
  },
  {
    name: "Professor Dr. Syed Akhter Hossain",
    img: "/guests/dean.jpg",
    designation: "Dean and Professor of FSIT",
    organization: "Daffodil International University",
    category: "special",
  },
  {
    name: "Dr. Imran Mahmud",
    img: "/guests/dept head.jpeg",
    designation: "Head of Software Engineering Department",
    organization: "Daffodil International University",
    category: "special",
  },
  {
    name: "Nikhil Patel",
    img: "/guests/Nikhil Patel.jpg",
    designation: "Senior SAP Consultant ",
    organization: "Deloitte Consulting LLP, Houston, Texas",
    category: "special",
  },
  // {
  //   name: "Sophia Kim",
  //   img: "/assets/sophia-kim.jpg",
  //   designation: "Professor",
  //   organization: "University of Innovation",
  //   category: "guest",
  // },
  // {
  //   name: "Carlos Rivera",
  //   img: "/assets/carlos-rivera.jpg",
  //   designation: "Founder",
  //   organization: "Green Tech Enterprises",
  //   category: "guest",
  // },
];

export const formLinks = [
  {
    title: "Data Hackathon",
    link: "https://forms.gle/eYQLEmVesAPe2cAr9",
    instructions: [
      "Send money to 01799531233",
      "Payment methods: Bkash or Rocket",
    ],
    image: "/banners/Data Hackathon.png",
  },
  {
    title: "Project Competition",
    link: "https://forms.gle/qMPo8jeAb8vbNShD9",
    instructions: [
      "Send money to 01777002924",
      "Payment methods: Bkash or Nagad",
    ],
    image: "/banners/project competition.png",
  },
  {
    title: "Idea Poster Presentation",
    link: "https://forms.gle/sJSJJQnmZJS7EYVo7",
    instructions: [
      "Send money to 01841268946",
      "Payment methods: Bkash or Nagad",
    ],
    image: "/banners/Idea Poster.png",
  },
  {
    title: "Promptcraft Challenge",
    link: "https://forms.gle/ppXCMi5xxikqL8zD9",
    instructions: [
      "Send money to 01929278283",
      "Payment methods: Bkash or Nagad",
    ],
    image: "/banners/Prompt craft.png",
  },
  {
    title: "Hands-On Workshop",
    link: "https://forms.gle/q1G9g63CQpS3D2zJ8",
    instructions: [
      "Send money to 017XXXXXX",
      "Payment methods: Bkash or Nagad",
    ],
    image: "/banners/Handson Workshop.png",
  },
];

export const summitEventsData = [
  {
    title: "Data Hackathon",
    description:
      "Develop innovative AI-driven solutions for real-world educational challenges at the 4th Data Science Summit 2024.",
    goals: [
      "Promote innovation in AI for Education.",
      "Foster collaboration and critical thinking.",
      "Advance practical AI skills.",
      "Create impactful solutions for education.",
    ],
    eligibility: [
      "Open to university, college, and school students with a valid student ID.",
      "Teams of up to 3 members.",
      "Solutions must address an educational challenge with the potential for positive impact.",
    ],
    registration: {
      fee: [{ type: "Team (up to 3 members)", cost: "1,500 BDT" }],
      steps: [
        "Step 1: Online Registration - Go to the 'Register Now' section. Registration Deadline - 31 November.",
        "Step 2: Payment - Send 1,500 BDT to 01799531233 via Bkash or Rocket.",
        "Step 3: Confirmation - Team leaders receive a confirmation email with event details.",
      ],
      benefits:
        "Each participant receives a T-shirt, souvenirs, and certificates.",
    },
    competitionFormat: [
      "Hackathon Challenge: Participants will receive a real-world educational dataset.",
      "Objective: Apply ML techniques to solve educational challenges (e.g., personalized learning, student engagement, accessibility).",
      "Timeframe: The Data Hackathon will take place from 3:30 PM - 4:30 PM on December 11, 2024.",
      "Team Composition: Teams may have up to 3 members, with one designated team leader.",
    ],
    evaluationCriteria: [
      { criterion: "Relevance to Theme", weight: "20%" },
      { criterion: "Innovation", weight: "25%" },
      { criterion: "Feasibility", weight: "20%" },
      { criterion: "Technical Execution", weight: "25%" },
      { criterion: "Presentation", weight: "10%" },
    ],
    prizes: [
      { position: "1st Place", amount: "10,000 BDT" },
      { position: "2nd Place", amount: "6,000 BDT" },
      { position: "3rd Place", amount: "4,000 BDT" },
    ],
    totalPrizePool: "20,000 BDT",
    codeOfConduct: [
      "Submit Original Work: All work must be created during the hackathon.",
      "Respectful Collaboration: Engage professionally and respect feedback from peers and judges.",
      "Adhere to Event Guidelines: Follow all instructions, deadlines, and competition rules.",
    ],
    supportAndResources: [
      "Pre-Event Workshop: Workshops on ML and AI applications in education will be provided.",
      "Mentorship: Registered teams can request mentorship from AI and data science experts.",
      "Data Access: The summit will provide educational datasets, or participants may bring relevant data.",
    ],
  },
  {
    title: "Idea Poster Presentation",
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
        "Step 1: Online Registration - Go to the 'Register Now' section. Registration Deadline - 31 November.",
        "Step 2: Payment - Send the respective amount (500 BDT for individuals or 1,000 BDT for teams) to 01841268946 via Bkash or Nagad.",
        "Step 3: Confirmation - Submit the transaction ID on the portal for verification. ",
        // "Step 4: Topic & Abstract Submission - Submit.",
        // "Step 5: Poster Submission - Upload digital posters (PDF format).",
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
        "Step 1: Online Registration - Go to the 'Register Now' section. Registration Deadline - 31 November.",
        "Step 2: Payment - Send 100 BDT to 01929278283 via Bkash or Nagad.",
        "Step 3: Confirmation - Submit the transaction ID during registration confirmation on the portal.",
        "Step 4: Attend the Prompt Challenge Event - 2:30 PM - 3:30 PM, December 11, 2024, at Daffodil Smart City.",
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
        "Step 1: Online Registration and Abstract Submission - Go to the 'Register Now' section. Registration Deadline - 31 November.",
        "Step 2: Payment - Send 1,000 BDT to 01777002924 via Bkash or Nagad.",
        "Step 3: Confirmation - Submit the transaction ID on the portal for verification.",
        // "Step 4: Preliminary Project Submission - Submit report and prototype.",
        "Step 4: Final Presentation - In-person presentation at the summit.",
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

export const partners = [
  { name: "diu logo", image: "/assets/DIU Logo.svg" },
  { name: "ds club logo", image: "/assets/DS Club.png" },
  { name: "cpc", image: "/assets/cpc.jpg" },
  { name: "cis", image: "/assets/cis.jpg" },
  { name: "itm", image: "/assets/itm.jpg" },
  { name: "creative", image: "/assets/creative.jpg" },
];

export const organizers = [
  { name: "swe logo", image: "/assets/swe logo.svg" },
  { name: "ds lab logo", image: "/assets/ds logo.png" },
];

export const mediaPartners = [
  {
    name: "somokal",
    image: "/mediaPartners/daily-samakal.jpg",
  },
  {
    name: "daily-star",
    image: "/mediaPartners/daily-star.jpg",
  },
  {
    name: "jai jai din",
    image: "/mediaPartners/jai jai din.jpg",
  },
  {
    name: "business standard",
    image: "/mediaPartners/business standard.png",
  },
];
