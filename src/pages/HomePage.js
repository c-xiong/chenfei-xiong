import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  User,
  BookOpen,
  GraduationCap,
  Code,
  Phone,
  FileText,
} from "lucide-react";
import TypingAnimation from "../components/TypingAnimation";

import ProjectsSection from "../components/ProjectsSection";
const CoolPersonalHomepage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "C++", "SQL"],
    Frameworks: ["React", "Vue.js", "Spring Boot", "Express.js", "Django"],
    Tools: ["Git", "Docker"],
    Databases: ["MongoDB", "Redis", "PostgreSQL"],
    Languages: ["English(C1)", "Chinese(Native)", "German(Beginner)"],
  };

  const categories = ["All", ...Object.keys(skills)];

  const filteredSkills =
    activeCategory === "All"
      ? Object.values(skills).flat()
      : skills[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 bg-gray-900 backdrop-filter backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollTo(section)}
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="particles-container">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
          <div
            className={`text-center transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              <TypingAnimation text="Chenfei Xiong" speed={150} />
            </h1>
            <p className="text-2xl mb-8">
              Master's Student | Software Developer
            </p>
            <button
              onClick={() => scrollTo("about")}
              className="animate-bounce bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Learn More <ChevronDown className="inline" />
            </button>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20 px-4"
        >
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-blue-400 shadow-lg">
                  <img
                    src="/images/profile3.JPG"
                    alt="Chenfei Xiong"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Chenfei Xiong</h3>
                  <p className="text-blue-300">
                    Master's Student | Software Developer
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg mb-6">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 mr-2 text-blue-400" />
                    <h3 className="text-2xl font-semibold">Who I Am</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate master's student at the University of Zurich.
                  </p>
                </div>
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 mr-2 text-green-400" />
                    <h3 className="text-2xl font-semibold">
                      What I'm Learning
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                  I'm developing skills in robust software engineering while exploring research areas in machine translation, large language models, and computational neuroscience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 col-span-1 md:col-span-2 lg:col-span-3 mt-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    University of Zurich
                  </h4>
                  <p className="text-gray-300">
                    MA in Computational Linguistics and Language
                    Technology
                  </p>
                  <p className="text-gray-400"> minor in neuroinformatics</p>
                  <p className="text-gray-400">Sep. 2024 – Present</p>
                  <p className="text-gray-400">Zurich, Switzerland</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    Huazhong University of Science and Technology
                  </h4>
                  <p className="text-gray-300">
                    BEng. in Material Science and Engineering
                  </p>
                  <p className="text-gray-400">Sep. 2018 – June. 2022</p>
                  <p className="text-gray-400">Wuhan, China</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    National University of Singapore
                  </h4>
                  <p className="text-gray-300">Summer School</p>
                  <p className="text-gray-400">May. 2021 – Dec. 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 py-20"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Skills
            </h2>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Code className="w-6 h-6 mr-2 text-green-400" />
                <h3 className="text-2xl font-semibold">Technical Expertise</h3>
              </div>
              <div className="flex flex-wrap justify-center mb-8 space-x-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full mb-2 ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    } transition-colors duration-300`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105"
                  >
                    <p className="text-lg">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 py-20"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get in Touch
            </h2>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-2xl font-semibold">Contact Me</h3>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/imred42"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <Github size={32} />
                </a>
                <a
                  href="mailto:chenfei.xiong@outlook.com"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoolPersonalHomepage;