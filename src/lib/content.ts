export const profile = {
  name: "Tsegaye Talegngeta",
  role: "Full-stack Developer",
  company: "Pitron Tech Solutions",
  location: "Addis Ababa, Ethiopia",
  email: "ttalegn29@gmail.com",
  cv: "/Tsegaye_Talegngeta_CV.pdf",
  siteUrl: "https://tsegaye-talegngeta.vercel.app",
  intro:
    "Full-stack developer. Go services that move money, and the React and Next.js apps that sit on top of them.",
  meta: "Addis Ababa, Ethiopia · Available for new projects",
  stamp: { top: "Currently filed at", name: "Pitron Tech", since: "Since Jun 2026" },
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/tsegaye27" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tsegaye-talegngeta27" },
  { label: "Telegram", href: "https://t.me/tsegayetalegn" },
] as const;

export const tabs = [
  { id: "experience", no: "01", label: "Experience" },
  { id: "projects", no: "02", label: "Projects" },
  { id: "about", no: "03", label: "About" },
  { id: "contact", no: "04", label: "Contact" },
] as const;

export type TabId = (typeof tabs)[number]["id"];

export const experience = [
  {
    dates: "2026.06 — now",
    title: "Backend Developer (Golang), Pitron Tech Solutions",
    summary:
      "Backend services across several fintech products — Go, with Spring Boot where it fits, on Kafka and NATS, Twirp RPC, Postgres and MySQL.",
    stack: "Go · Kafka · NATS · Twirp",
  },
  {
    dates: "2025.07 — 2026.06",
    title: "Backend Developer, AddisPay",
    summary:
      "Payment gateway microservices in Go with gRPC, RabbitMQ and Pulsar. Integrated CBE, Awash, Abyssinia, Telebirr, M-Pesa, Kacha and Yaya; built event and school payments on top.",
    stack: "Go · gRPC · Pulsar · PG",
  },
  {
    dates: "2024 — 2025",
    title: "Full-stack Freelancer, Upwork & clients",
    summary: "E-commerce, logistics, bots and editors, built end to end and shipped with Docker.",
    stack: "TS · NestJS · Next.js",
  },
  {
    dates: "2024.05 — 2024.10",
    title: "Frontend Intern, Ewenet Communication",
    summary: "Built Reunite Us, a missing-person platform with roles, moderation, search and filters.",
    stack: "Nuxt · Tailwind",
  },
];

export type Project = {
  title: string;
  context: string;
  blurb: string;
  stack: string;
  href?: string;
};

export const builds: Project[] = [
  {
    title: "BambooSIM",
    context: "Upwork · 24–25",
    href: "https://bamboosim.com/",
    blurb:
      "SIM-card e-commerce: React storefront, NestJS API and a relay for third-party providers, plus serious SEO.",
    stack: "NestJS · Prisma · Postgres · Redis",
  },
  {
    title: "Onboarding Bot",
    context: "Upwork · 24–25",
    blurb:
      "A Discord bot that runs intern onboarding and answers questions from a Notion knowledge base via RAG.",
    stack: "TypeScript · ChromaDB · SQLite · PM2",
  },
  {
    title: "Shipment Tracker",
    context: "Client · 2025",
    blurb: "A logistics system for managing and tracking shipment status end to end for a client's team.",
    stack: "Next.js · NestJS · MongoDB",
  },
  {
    title: "Flow Editor",
    context: "Upwork · 24–25",
    blurb: "A node-based React Flow interface on a Node and Express backend, built for long-term maintenance.",
    stack: "React Flow · Express · Node",
  },
  {
    title: "Reunite Us",
    context: "Ewenet · 2024",
    blurb: "Reporting missing people, with user roles, admin approval of posts, search and filters.",
    stack: "Nuxt · Tailwind · NestJS",
  },
  {
    title: "Lifeline Health",
    context: "Freelance · 2024",
    href: "https://lifelinehealthinitiatives.org",
    blurb: "A fast, responsive site for a medical organization, landed through a word-of-mouth referral.",
    stack: "HTML · CSS · JavaScript",
  },
];

export const sideProjects: Project[] = [
  {
    title: "Ceramics Store",
    context: "Personal · Oct 2024",
    href: "https://ceramics-store.vercel.app",
    blurb: "Inventory system for a ceramics shop, with Recharts for sales and stock insights.",
    stack: "Next.js · Tailwind · Recharts",
  },
  {
    title: "Dot Code",
    context: "Team · Jan 2025",
    href: "https://dot-deploy-front-end1.vercel.app",
    blurb: "A collaborative snippet manager; I built versioning inside the editor.",
    stack: "MongoDB · Express · React · Node",
  },
  {
    title: "Songify",
    context: "Personal · May 2024",
    href: "https://songify-nine.vercel.app",
    blurb: "Song management CRUD app — my first run at containerizing with Docker.",
    stack: "MERN · Docker",
  },
  {
    title: "Liqu",
    context: "Personal · 2025",
    blurb: "A Discord bot that answers questions with RAG on top of the Gemini API.",
    stack: "TypeScript · Gemini",
  },
];

export const about = {
  text: "I work across the whole stack: React, Next.js and Nuxt on the front, Go and Node services behind them. The part I enjoy most is where the backend has to be exactly right — where retries and reconciliation decide whether someone actually gets paid.",
  toolbox: [
    { group: "Languages", items: ["Go", "TypeScript · JavaScript", "Java · Spring Boot"] },
    { group: "Messaging & RPC", items: ["Kafka · NATS", "RabbitMQ · Pulsar", "gRPC · Twirp"] },
    { group: "Data", items: ["PostgreSQL · MySQL", "MongoDB · Redis"] },
    { group: "Web & infra", items: ["Docker", "NestJS · Express", "React · Next.js · Nuxt"] },
  ],
  hobbies: ["Football", "Chess", "Anime", "Movies", "Reading"],
};

export const contact = {
  invite:
    "Building something with payments, queues or a backend that has to hold up? I'd like to hear about it.",
};
