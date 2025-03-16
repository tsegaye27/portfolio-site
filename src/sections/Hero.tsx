import Image from "next/image";
import Link from "next/link";
import heroImage from "../assets/images/profile.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-40 lg:py-50 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
      </div>

      <div className="container flex flex-col items-center relative z-10">
        <div className="relative flex flex-col items-center">
          <Image
            src={heroImage}
            className="size-[130px] md:size-[190px] rounded-full border-4 border-transparent bg-gradient-to-r from-emerald-300 via-sky-400 to-emerald-300 bg-clip-border"
            priority
            alt="Tsegaye Talegngeta"
          />

          <div className="flex gap-4 mt-4">
            <Link
              href="https://linkedin.com/in/tsegaye-talegngeta27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl cursor-pointer hover:text-white/80 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/tsegaye27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl cursor-pointer hover:text-white/80 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
          </div>
        </div>

        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg mt-4">
          <div className="bg-green-500 size-2.5 relative rounded-full">
            <div className="bg-green-500 size-2.5 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="font-medium text-sm">Available for new projects</div>
        </div>
        <div className="max-w-lg mx-auto mt-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide">
            Tsegaye Talegngeta
          </h1>
          <span className="block text-2xl md:text-4xl text-white/90 font-sans mt-1">
            Full Stack Developer
          </span>
          <span className="text-white/75 mt-2 block">
            Addis Ababa, Ethiopia
          </span>
          <p className="mt-4 text-white/60">
            I&apos;m 23 years old, I like building fast and efficient web apps.
            I bring designs to life with scalable solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white px-6 h-12 rounded-xl">
            <ArrowDown className="size-4 text-gray-900" />
            <span className="font-semibold text-gray-900">Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
