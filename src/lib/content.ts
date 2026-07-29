import type { StaticImageData } from "next/image";

import addispay from "@/assets/images/addispay.png";
import afalagi from "@/assets/images/Afalagi.png";
import bamboosim from "@/assets/images/bamboosim.png";
import ceramics from "@/assets/images/dashboard.png";
import discordBot from "@/assets/images/discord-bot.png";
import dotCode from "@/assets/images/Dot-Code.png";
import lifeline from "@/assets/images/Lifeline-Health-Initiative.png";
import logistics from "@/assets/images/logistics-system.png";
import reactFlow from "@/assets/images/react-flow.jpg";
import songify from "@/assets/images/Songify.png";

import CssIcon from "@/assets/icons/css3.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import GoIcon from "@/assets/icons/golang.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import NestIcon from "@/assets/icons/nestjs.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import NuxtIcon from "@/assets/icons/nuxt.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";

export const profile = {
  name: "Tsegaye Talegngeta",
  role: "Backend Developer",
  secondaryRole: "Full-Stack Developer",
  location: "Addis Ababa, Ethiopia",
  timezone: "Africa/Addis_Ababa",
  available: true,
  email: "ttalegn29@gmail.com",
  cv: "/Tsegaye_Talegngeta_CV.pdf",
  siteUrl: "https://tsegaye-talegngeta.vercel.app",
  company: "Pitron Tech Solutions",
  intro:
    "Backend developer at Pitron Tech Solutions. Before that I built payment infrastructure in Go — gateways moving real money between banks and wallets — and I still ship the full-stack products that sit on top of systems like it.",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/tsegaye27", handle: "tsegaye27" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tsegaye-talegngeta27",
    handle: "tsegaye-talegngeta27",
  },
  { label: "Telegram", href: "https://t.me/tsegayetalegn", handle: "tsegayetalegn" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
] as const;

export type WorkKind = "work" | "lab";

export type WorkEntry = {
  id: string;
  index: string;
  title: string;
  org: string;
  period: string;
  kind: WorkKind;
  summary: string;
  detail: string[];
  stack: string[];
  href?: string;
  image?: StaticImageData;
};

/** Newest first — the order the index list reads top to bottom. */
export const work: WorkEntry[] = [
  {
    id: "pitrontech",
    index: "01",
    title: "Backend Developer",
    org: "Pitron Tech Solutions",
    // TODO(tsegaye): confirm the start month.
    period: "2026 — Present",
    kind: "work",
    summary:
      "Backend development across the company's project portfolio.",
    detail: [
      "Build and maintain backend services across a range of client and internal projects.",
    ],
    stack: ["Go", "TypeScript", "PostgreSQL"],
  },
  {
    id: "addispay",
    index: "02",
    title: "Payment Gateway Services",
    org: "AddisPay",
    period: "Jul 2025 — 2026",
    kind: "work",
    summary:
      "Go microservices moving money between Ethiopian banks and mobile wallets.",
    detail: [
      "Build scalable backend services in Golang across a microservices architecture.",
      "gRPC between services, async messaging over RabbitMQ and Apache Pulsar.",
      "Integrate the gateway with banks — CBE, Awash, Abyssinia — and wallets: Telebirr, M-Pesa, Kacha, Yaya, Coop Bank / Cybersource.",
      "Ship products on top of the gateway: event payments and school payment solutions.",
      "Run PostgreSQL, MySQL and MongoDB in production.",
    ],
    stack: ["Go", "gRPC", "RabbitMQ", "Pulsar", "PostgreSQL", "MongoDB"],
    href: "https://addispay.et/",
    image: addispay,
  },
  {
    id: "bamboosim",
    index: "03",
    title: "BambooSIM",
    org: "Upwork · e‑commerce",
    period: "2024 — 2025",
    kind: "work",
    summary: "Full-stack storefront selling eSIMs, tuned hard for search.",
    detail: [
      "React frontend on a NestJS backend, split into multiple Docker services.",
      "Relay service brokering all third-party carrier communication.",
      "Redis, Prisma, PostgreSQL and Adminer behind the scenes.",
      "Sustained SEO work to lift discoverability and search performance.",
    ],
    stack: ["React", "NestJS", "Prisma", "PostgreSQL", "Redis", "Docker"],
    href: "https://bamboosim.com/",
    image: bamboosim,
  },
  {
    id: "discord-bot",
    index: "04",
    title: "Discord Onboarding Bot",
    org: "Upwork · internal tooling",
    period: "2024 — 2025",
    kind: "work",
    summary:
      "Runs intern onboarding end to end, answering from a RAG knowledge base.",
    detail: [
      "Handles intros, daily tasks, submission tracking and feedback loops.",
      "RAG knowledge base built from Notion — text embeddings stored in ChromaDB.",
      "SQLite for bot state; PM2 supervising multiple instances.",
      "TypeScript throughout, deployed on DigitalOcean.",
    ],
    stack: ["TypeScript", "ChromaDB", "SQLite", "PM2", "DigitalOcean"],
    image: discordBot,
  },
  {
    id: "logistics",
    index: "05",
    title: "Logistics & Shipment Tracking",
    org: "Client project",
    period: "2025",
    kind: "work",
    summary: "Shipment status tracking for an operations team.",
    detail: [
      "System to manage and track shipment status across its lifecycle.",
      "Next.js frontend, NestJS backend, MongoDB store.",
    ],
    stack: ["Next.js", "NestJS", "MongoDB"],
    image: logistics,
  },
  {
    id: "react-flow",
    index: "06",
    title: "React Flow Application",
    org: "Upwork",
    period: "2024 — 2025",
    kind: "work",
    summary: "Node-graph editing UI over a Node.js service layer.",
    detail: [
      "React Flow–based canvas with a Node.js / Express backend.",
      "Built around clean architecture and long-term maintainability.",
    ],
    stack: ["React Flow", "Node.js", "Express"],
    image: reactFlow,
  },
  {
    id: "afalagi",
    index: "07",
    title: "Reunite Us",
    org: "Ewenet Communication PLC · internship",
    period: "May — Oct 2024",
    kind: "work",
    summary: "A missing-person platform with moderated, role-gated posting.",
    detail: [
      "Built the platform frontend in Nuxt.js and Tailwind.",
      "User roles, post creation, and an admin approval queue.",
      "Search, filters and user interactions against a NestJS backend.",
    ],
    stack: ["Nuxt.js", "Tailwind", "NestJS"],
    href: "https://github.com/tsegaye27/Afalagi.git",
    image: afalagi,
  },
  {
    id: "lifeline",
    index: "08",
    title: "Lifeline Health Initiatives",
    org: "Freelance",
    period: "2024",
    kind: "work",
    summary: "Static site for a medical organisation, won by referral.",
    detail: [
      "Responsive static site in plain HTML, CSS and JavaScript.",
      "Secured through word-of-mouth referral.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://lifelinehealthinitiatives.org",
    image: lifeline,
  },
  {
    id: "dot-code",
    index: "09",
    title: "Dot Code",
    org: "Team project",
    period: "Jan 2025",
    kind: "lab",
    summary: "Code snippet manager with in-editor versioning.",
    detail: [
      "Snippet manager built on the MERN stack.",
      "Contributed versioning of code inside the editor.",
      "Group collaboration on shared snippets.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    href: "https://dot-deploy-front-end1.vercel.app",
    image: dotCode,
  },
  {
    id: "ceramics",
    index: "10",
    title: "Ceramics Store",
    org: "Personal",
    period: "Oct 2024",
    kind: "lab",
    summary: "Inventory system with sales analytics for a ceramics shop.",
    detail: [
      "Inventory management built with Next.js and Tailwind.",
      "Recharts dashboards for sales and stock insight.",
    ],
    stack: ["Next.js", "Tailwind", "Recharts"],
    href: "https://ceramics-store.vercel.app",
    image: ceramics,
  },
  {
    id: "songify",
    index: "11",
    title: "Songify",
    org: "Personal",
    period: "May 2024",
    kind: "lab",
    summary: "MERN CRUD app — the one where Docker finally clicked.",
    detail: [
      "CRUD song management on the MERN stack.",
      "Containerised with Docker as a practice run.",
      "Card-based UI designed for fast scanning.",
    ],
    stack: ["MongoDB", "Express", "React", "Docker"],
    href: "https://songify-nine.vercel.app",
    image: songify,
  },
];

export const stack = [
  { title: "Go", icon: GoIcon, group: "Backend" },
  { title: "TypeScript", icon: TypeScriptIcon, group: "Language" },
  { title: "NestJS", icon: NestIcon, group: "Backend" },
  { title: "Express", icon: ExpressIcon, group: "Backend" },
  { title: "React", icon: ReactIcon, group: "Frontend" },
  { title: "Next.js", icon: NextIcon, group: "Frontend" },
  { title: "Nuxt.js", icon: NuxtIcon, group: "Frontend" },
  { title: "Tailwind", icon: TailwindIcon, group: "Frontend" },
  { title: "JavaScript", icon: JavaScriptIcon, group: "Language" },
  { title: "HTML", icon: HtmlIcon, group: "Frontend" },
  { title: "CSS", icon: CssIcon, group: "Frontend" },
];

export const facts = [
  { label: "Based in", value: "Addis Ababa" },
  { label: "Currently", value: "Pitron Tech" },
  { label: "Writing", value: "Go · TypeScript" },
  { label: "Open to", value: "Backend roles" },
];

export const hobbies = [
  { title: "Football", emoji: "⚽" },
  { title: "Movies", emoji: "🎬" },
  { title: "Anime", emoji: "🌀" },
  { title: "Chess", emoji: "♟️" },
  { title: "Reading", emoji: "📚" },
];

export const marqueeWords = [
  "Payments",
  "Microservices",
  "gRPC",
  "Event-driven",
  "Observable",
  "Idempotent",
  "Scalable",
  "Type-safe",
  "Documented",
  "Shipped",
];

export const sections = [
  { id: "top", label: "Index" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;
