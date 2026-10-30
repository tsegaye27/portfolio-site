export type Msg = { from: "me" | "bot"; text: string };

export const MAX_LEN = 500;

export const greeting: Msg = {
  from: "bot",
  text: "Hi, I'm Chatty. Ask me anything about Tsegaye's work: what he builds, his stack, payment integrations, or how to hire him.",
};

export const chips = [
  "What do you build?",
  "Payment integrations?",
  "Tech stack",
  "Are you available?",
  "Pricing",
  "How do I reach you?",
];

// Scripted answers for when the model is unreachable, so the chat never dead-ends.
const rules: [RegExp, string][] = [
  [/\b(price|cost|rate|budget|charge|quote|how much)/, "Pricing depends on the scope. Send a short brief to ttalegn29@gmail.com with what you need and your timeline, and Tsegaye will reply with an estimate."],
  [/\b(avail|hire|freelance|free time|open to|start|take on)/, "Tsegaye works full-time at Pitron Tech Solutions and takes on selected freelance projects. The fastest way to check fit is an email to ttalegn29@gmail.com."],
  [/\b(pay|telebirr|bank|gateway|m-?pesa|wallet|cbe|awash|kacha|yaya|fintech)/, "Yes, payments are his specialty. At AddisPay he integrated a payment gateway with CBE, Awash, Abyssinia, Telebirr, M-Pesa, Kacha and Yaya, and built event and school payment products on top."],
  [/\b(service|offer|what (can|do) you|build for|help with|website|web app|app for)/, "He builds full-stack web apps (React, Next.js or Nuxt on the front, NestJS or Node behind), Go backend services and APIs, and payment integrations for Ethiopian banks and wallets."],
  [/stack|tech|language|framework|golang|\bgo\b|react|next|node|database/, "Go, TypeScript and JavaScript, plus Java with Spring Boot. Kafka, NATS, RabbitMQ and Pulsar for messaging; gRPC and Twirp for RPC; PostgreSQL, MySQL, MongoDB and Redis for data; React, Next.js, Nuxt and NestJS on the web; Docker everywhere."],
  [/\b(contact|email|reach|telegram|call|phone|talk|message)/, "Email ttalegn29@gmail.com, or message him on Telegram at @tsegayetalegn. LinkedIn and GitHub are linked at the top of the page."],
  [/\b(project|portfolio|example|built|past work|sample)/, "Highlights: BambooSIM (SIM-card e-commerce with NestJS, Prisma and Postgres), a RAG-powered Discord onboarding bot, a shipment tracking system, and a React Flow editor. Open the Projects tab to see them all."],
  [/\b(experience|job|company|pitron|addispay|years|background|work at)/, "He's a backend developer (Golang) at Pitron Tech Solutions since June 2026. Before that he was a backend developer at AddisPay, freelanced full-stack on Upwork, and interned as a frontend developer at Ewenet."],
  [/\b(where|location|based|remote|timezone|time zone)/, "He's based in Addis Ababa, Ethiopia (GMT+3) and works with remote clients."],
  [/\b(cv|resume|résumé)/, "You can download his CV with the button next to his name at the top of the page."],
  [/^(hi|hello|hey|selam|good (morning|afternoon|evening))/, "Hello! What would you like to know: services, tech stack, payments experience, or availability?"],
  [/\bthank/, "You're welcome! If you have a project in mind, ttalegn29@gmail.com is the best next step."],
];

export function reply(q: string) {
  const t = q.toLowerCase();
  const hit = rules.find(([re]) => re.test(t));
  return hit ? hit[1] : "I'm not sure about that one. Email Tsegaye at ttalegn29@gmail.com and he'll answer directly.";
}

// Split markdown into retrieval chunks: one per "## " section, long sections cut
// on paragraph breaks. Each chunk keeps its doc and section title for context.
export function chunk(doc: string, md: string, max = 1200): string[] {
  const out: string[] = [];
  for (const section of md.split(/\n(?=## )/)) {
    const title = section.match(/^#+ (.*)/)?.[1] ?? "";
    let cur = "";
    for (const para of section.split(/\n{2,}/)) {
      if (cur && cur.length + para.length > max) {
        out.push(cur);
        cur = `[${doc} · ${title}] (cont.)\n`;
      }
      cur += (cur ? "\n\n" : `[${doc}]\n`) + para;
    }
    if (cur.trim()) out.push(cur);
  }
  return out;
}

export function topK(query: number[], vecs: number[][], k: number) {
  const dot = (a: number[], b: number[]) => a.reduce((s, x, i) => s + x * b[i], 0);
  const qn = Math.sqrt(dot(query, query));
  return vecs
    .map((v, i) => ({ i, score: dot(query, v) / (qn * Math.sqrt(dot(v, v)) || 1) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.i);
}
