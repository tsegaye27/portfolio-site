import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card";

const professionalExperience = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
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
          {professionalExperience.map((experience, index) => (
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
                    <span>{experience.company}</span>
                    <span>&bull;</span>
                    <span>{experience.year}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {experience.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {experience.results.map((result, index) => (
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
                      href={experience.link}
                      target="_blank"
                      rel="noreferrer"
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
                    src={experience.image}
                    alt={experience.title}
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
