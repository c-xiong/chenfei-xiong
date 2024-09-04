import React from 'react';
import { FolderOpen, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, link, github }) => (
  <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <FolderOpen className="w-6 h-6 mr-2 text-yellow-400" />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-blue-300 mb-4">Tech Stack: {techStack}</p>
    <div className="flex space-x-4">
      <a href={github} className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
        <Github className="w-5 h-5 mr-1" />
        GitHub
      </a>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ProjectCard
          title="JoyJoin"
          description="JoyJoin is a comprehensive event management application we developed to streamline the process of organizing and participating in various events. This project showcases my ability to create full-stack applications with a focus on user experience and scalable architecture."
          techStack="Java, Spring Boot, Vue.js, PostgreSQL, AWS S3, Docker"
          github="https://github.com/imred42/JoyJoin"
        />
        <ProjectCard
          title="Online Game - Stratego"
          description="This project brings the classic board game Stratego to the digital world, allowing strategy enthusiasts worldwide to enjoy the game online. It features user registration, real-time gameplay, and player statistics tracking. The game emphasizes careful planning, deduction, and bluffing as players attempt to outmaneuver their opponents."
          techStack="Java, Spring Boot, ReactJS, JUnit, WebSocket, Google Cloud Platform, Figma"
          github="https://github.com/sopra-fs23-group-22/sopra-fs23-group-22-client"
        />
      </div>
    </div>
  </section>
);

export default ProjectsSection;