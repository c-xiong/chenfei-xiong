import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText, User, BookOpen, Briefcase, Heart, GraduationCap } from 'lucide-react';

const CoolPersonalHomepage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const skills = {
    'Programming Languages': ['Python', 'Java', 'JavaScript', 'C++', 'SQL'],
    'Frameworks': ['React', 'Vue.js', 'Spring Boot', 'Node.js', 'Express.js'],
    'Tools': ['Git', 'Docker', 'npm', 'Figma'],
    'Databases': ['MongoDB', 'Redis', 'PostgreSQL'],
    'Languages': ['English(C1)', 'Chinese(Native)', 'German(Beginner)']
  };

  const categories = ['All', ...Object.keys(skills)];

  const filteredSkills = activeCategory === 'All'
    ? Object.values(skills).flat()
    : skills[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 bg-gray-900 backdrop-filter backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollTo(section)}
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="h-screen flex items-center justify-center">
          <div className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-6xl font-bold mb-4">Chenfei Xiong</h1>
            <p className="text-2xl mb-8">Master's Student | Software Engineer</p>
            <button
              onClick={() => scrollTo('about')}
              className="animate-bounce bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Learn More <ChevronDown className="inline" />
            </button>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  <h3 className="text-2xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a master's student at the University of Zurich with a passion for software engineering. My journey in tech is driven by a curiosity to solve complex problems and create impactful solutions. Beyond coding, I enjoy tinkering with small projects and exploring the outdoors through hiking.
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 mr-2 text-green-400" />
                  <h3 className="text-2xl font-semibold">What I'm Learning</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  My studies focus on advanced programming techniques, data analysis, and both microservices and monolithic architectures. I'm constantly expanding my knowledge to stay at the forefront of technology.
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 mr-2 text-yellow-400" />
                  <h3 className="text-2xl font-semibold">What I'm Seeking</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm actively looking for internship or thesis opportunities to apply my skills in real-world projects. I'm eager to contribute to innovative teams and gain hands-on experience in software development.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 col-span-1 md:col-span-2 lg:col-span-3">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 mr-2 text-purple-400" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300">University of Zurich</h4>
                    <p className="text-gray-300">Master of Arts in Computational Linguistics and Language Technology</p>
                    <p className="text-gray-400">Sep. 2022 – Present</p>
                    <p className="text-gray-400">Zurich, Switzerland</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300">Huazhong University of Science and Technology</h4>
                    <p className="text-gray-300">Bachelor of Engineering in Material Science and Engineering</p>
                    <p className="text-gray-400">Sep. 2018 – June. 2022</p>
                    <p className="text-gray-400">Wuhan, China</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center mb-8 space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full mb-2 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition-colors duration-300`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {filteredSkills.map((skill) => (
                <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors duration-300">
                  <p className="text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Project 1', description: 'A brief description of project 1' },
                { title: 'Project 2', description: 'A brief description of project 2' },
                { title: 'Project 3', description: 'A brief description of project 3' },
              ].map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl mb-8">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/imred42" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/chenfei-xiong-180505242/" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={32} />
              </a>
              <a href="mailto:chenfei.xiong@outlook.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Mail size={32} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <FileText size={32} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoolPersonalHomepage;