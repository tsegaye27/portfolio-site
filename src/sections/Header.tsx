"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScrollEvent = () => {
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;

        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-gray-800/90">
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className={`nav-item ${
            activeSection === "home"
              ? "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-800"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("experience");
          }}
          className={`nav-item ${
            activeSection === "experience"
              ? "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-800"
              : ""
          }`}
        >
          Experience
        </Link>
        <Link
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("projects");
          }}
          className={`nav-item ${
            activeSection === "projects"
              ? "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-800"
              : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("about");
          }}
          className={`nav-item ${
            activeSection === "about"
              ? "bg-white text-gray-900 hover:bg-white/90 hover:text-gray-800"
              : ""
          }`}
        >
          About
        </Link>
      </nav>
    </div>
  );
};
