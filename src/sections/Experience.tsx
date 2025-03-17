import ReuniteUs from "@/assets/images/Afalagi.png";
import LifelineHealthInitiative from "@/assets/images/Lifeline-Health-Initiative.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card";

const professionalExperience = [
  {
    company: "Ewenet Communication PLC",
    year: "May, 2024",
    title: "Reunite Us",
    results: [
      { title: "Built missing person platform with Nuxt.js & Tailwind" },
      { title: "Added user roles, post creation, and admin approval" },
      { title: "Enabled search, filters, and user interactions" },
    ],
    link: "https://github.com/tsegaye27/Afalagi.git",
    image: ReuniteUs,
  },
  {
    company: "Freelance",
    year: "2024",
    title: "Lifeline Health Initiatives",
    results: [
      { title: "Created static site for medical organization" },
      { title: "Used HTML, CSS, JS for responsive design" },
      { title: "Secured project through word-of-mouth referral" },
    ],
    link: "https://lifelinehealthinitiatives.org",
    image: LifelineHealthInitiative,
  },
];

export const ExperienceSection = () => {
  return (
    <div className="pb-12 lg:py-24">
      <div className="container">
        <section id="experience">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
              Real-world Results
            </p>
          </div>
          <h1 className="font-serif text-3xl text-center mt-6 md:text-5xl">
            Professional Experience
          </h1>
          <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
            I have worked on internship based roles and freelance projects,
            contributing to real-world applications
          </p>
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
                      className="mt-8 -mb-4 lg:absolute lg:h-full lg:object-contain lg:w-auto lg:max-w-none lg:mt-0"
                      src={experience.image}
                      alt={`Screenshot of ${experience.title} project`}
                      width={800}
                      height={450}
                      priority={index === 0}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
