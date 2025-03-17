import ceramicStore from "@/assets/images/dashboard.png";
import dotCode from "@/assets/images/Dot-Code.png";
import Songify from "@/assets/images/Songify.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card";

const projects = [
  {
    company: "Personal",
    year: "Jan, 2025",
    title: "Dot Code",
    results: [
      { title: "Built code snippet tool with MERN stack" },
      { title: "Developed VSCode extension for snippet sharing" },
      { title: "Enabled group collaboration on code snippets" },
    ],
    link: "https://dot-deploy-front-end1.vercel.app",
    image: dotCode,
  },
  {
    company: "Personal",
    year: "Oct, 2024",
    title: "Ceramics Store",
    results: [
      { title: "Developed inventory system with Next.js & Tailwind" },
      { title: "Integrated Recharts for sales and inventory insights" },
      { title: "Created for managing ceramics store inventory" },
    ],
    link: "https://ceramics-store.vercel.app",
    image: ceramicStore,
  },
  {
    company: "Personal",
    year: "May, 2024",
    title: "Songify",
    results: [
      { title: "Built CRUD app for song management with MERN stack" },
      { title: "Practiced Docker for containerization" },
      { title: "Designed intuitive UI for song cards" },
    ],
    link: "https://songiffy.netlify.app",
    image: Songify,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="pb-12 lg:py-20">
      <div className="container">
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Personal Projects
        </h2>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 md:pt-12 md:px-10 pb-0 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex gap-2 md:text-base text-sm text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full px-6 md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4 " />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:mt-0"
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    priority={index === 0}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
