"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import GoIcon from "@/assets/icons/golang.svg";
import NestIcon from "@/assets/icons/nestjs.svg";
import NuxtIcon from "@/assets/icons/nuxt.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const toolboxItems = [
    { title: "HTML", iconType: HtmlIcon },
    { title: "CSS", iconType: CssIcon },
    { title: "JavaScript", iconType: JavaScriptIcon },
    { title: "TypeScript", iconType: TypeScriptIcon },
    { title: "Go", iconType: GoIcon },
    { title: "Nest", iconType: NestIcon },
    { title: "React.js", iconType: ReactIcon },
    { title: "Next.js", iconType: NextIcon },
    { title: "Nuxt.js", iconType: NuxtIcon },
    { title: "Express.js", iconType: ExpressIcon },
    { title: "Tailwind CSS", iconType: TailwindIcon },
  ];

  const hobbies = [
    { title: "Football", emoji: "⚽", top: "45%", left: "5%" },
    { title: "Movies", emoji: "🎬", top: "40%", left: "50%" },
    { title: "Anime", emoji: "🌀", top: "35%", left: "10%" },
    { title: "Chess", emoji: "♟️", top: "35%", left: "40%" },
    { title: "Reading", emoji: "📚", top: "45%", left: "70%" },
  ];

  return (
    <div className="py-16 px-4 md:px-10 lg:px-14">
      <SectionHeader
        eyebrow="About Me"
        title="Glimpse into my world"
        description="I'm a full-stack developer who enjoys building clean, scalable applications and exploring new technologies."
      />

      <div className="mt-12 flex flex-col lg:flex-row lg:justify-center items-center gap-4">
        <Card className="h-80 p-0 w-full md:w-150 lg:w-200">
          <CardHeader
            title="My Toolbox"
            description="Technologies I use to build scalable applications."
            className="px-6 pt-6"
          />
          <ToolboxItems
            items={toolboxItems}
            className=""
            itemsWrapperClassName="animate-move-left"
          />
          <ToolboxItems
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="animate-move-right"
          />
        </Card>
        <Card className="h-80 p-0 flex flex-col w-full md:w-100 lg:w-125">
          <CardHeader
            title="While I'm not coding"
            description="Things I enjoy outside coding."
            className="px-6 py-6"
          />
          <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.title}
                className="inline-flex items-center gap-2 px-6 bg-linear-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
