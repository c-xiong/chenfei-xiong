import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  ExternalLink,
  FolderOpen,
  Sun,
  Moon,
  Linkedin,
} from "lucide-react";
import TypingAnimation from "../components/TypingAnimation";
const ProjectCard = ({ title, description, techStack, link, github }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
    <div className="flex items-center mb-5">
      <FolderOpen className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h3>
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-base">
      {description}
    </p>
    <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm">
      <span className="font-medium">Technologies:</span> {techStack}
    </p>
    <div className="flex space-x-6">
      <a
        href={github}
        className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center text-sm group"
      >
        <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        GitHub Repository
      </a>
      {link && (
        <a
          href={link}
          className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center text-sm group"
        >
          <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("darkMode") === "true" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      
      const scrollPosition = offsetPosition - navHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      
      setActiveSection(id);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm h-20 border-b border-gray-100 dark:border-gray-700">
        <nav className="container mx-auto px-8 py-5">
          <div className="flex justify-between items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/80 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <ul className="flex justify-center space-x-12">
              {["home", "projects"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollTo(section)}
                    className={`text-lg font-medium transition-all duration-300 ${
                      activeSection === section
                        ? "text-blue-600 dark:text-blue-400 scale-105"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-105"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="w-[28px]"></div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section
          id="home"
          className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-8"
        >
          <div className="max-w-5xl mx-auto px-6 w-full">
            <div className="flex flex-col items-center mb-16">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8">
                <img
                  src="/images/avar.jpg"
                  alt="Chenfei Xiong"
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover shadow-md border-2 border-gray-100 dark:border-gray-700 rounded-full"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center md:text-left font-serif">
                  <TypingAnimation text="Chenfei Xiong" speed={150} />
                </h1>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-serif text-center max-w-2xl">
                to be a software developer, on my way..
              </p>
            </div>

            <div className="max-w-4xl mx-auto pl-8 md:pl-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                    Education
                  </h3>
                  <ul className="space-y-8">
                    <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-6">
                      <p className="text-xl font-semibold">University of Zurich</p>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        MA in Computational Linguistics and Language Technology
                      </p>
                      <p className="text-sm text-gray-500 mt-1">2022 - Present</p>
                    </li>
                    <li className="border-l-4 border-gray-200 dark:border-gray-700 pl-6">
                      <p className="text-xl font-semibold">
                        Huazhong University of Science and Technology
                      </p>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        BEng in Material Science and Engineering
                      </p>
                      <p className="text-sm text-gray-500 mt-1">2018 - 2022</p>
                    </li>
                  </ul>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                    Contact
                  </h3>
                  <div className="flex justify-center md:justify-start space-x-8">
                    <a
                      href="mailto:chenfei.xiong@outlook.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail size={28} />
                    </a>
                    <a
                      href="https://github.com/c-xiong"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github size={28} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/chenfei-xiong/"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 md:px-6 h-full">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
              Projects
            </h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <ProjectCard
                  title="Hunspell Live - Spell Checking Tool"
                  description="An open-source customized spell-checking tool that enables real-time spell checking using custom Hunspell dictionaries. Built for developers and linguistic researchers."
                  techStack="Python, TypeScript, Django, React, Docker, PostgreSQL, JWT"
                  github="https://github.com/c-xiong/hunspell_live"
                  link="https://hunspell.chenfeixiong.com/"
                />
                <ProjectCard
                  title="Jobify - Job tracking app"
                  description="A comprehensive job application tracking tool built with modern web technologies."
                  techStack="React, NodeJS, ExpressJS, MongoDB, JWT"
                  github="https://github.com/c-xiong/Jobify"
                  link="https://jobify-devf.onrender.com/"
                />
                <ProjectCard
                  title="JoyJoin - Event platform"
                  description="A microservices-based event management platform for organizing and participating in events."
                  techStack="Java, Spring Boot, Vue.js, PostgreSQL, Docker"
                  github="https://github.com/c-xiong/JoyJoin"
                />
                <ProjectCard
                  title="Stratego - Online Game"
                  description="Digital adaptation of the classic board game Stratego with online versus."
                  techStack="Java, Spring Boot, React, WebSocket"
                  github="https://github.com/sopra-fs23-group-22/sopra-fs23-group-22-client"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
