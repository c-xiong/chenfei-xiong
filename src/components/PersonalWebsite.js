import React, { useState } from 'react';
import { Camera, Code, Briefcase, Mail } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p>Hello! I'm a passionate software engineer with expertise in React, Node.js, and cloud technologies.</p>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <ul className="list-disc list-inside">
              <li>Project 1: Description of your amazing project</li>
              <li>Project 2: Another cool thing you built</li>
            </ul>
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer at TechCorp</h3>
              <p>2020 - Present</p>
              <p>Led development of scalable microservices architecture...</p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-6">
          <h1 className="text-4xl font-bold">Your Name</h1>
          <p className="text-xl">Software Engineer | React Enthusiast | Problem Solver</p>
        </header>
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4 justify-center">
            {['about', 'projects', 'experience', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded ${
                    activeSection === section ? 'bg-blue-700' : 'hover:bg-blue-600'
                  } text-white transition`}
                >
                  {section === 'about' && <Camera size={18} />}
                  {section === 'projects' && <Code size={18} />}
                  {section === 'experience' && <Briefcase size={18} />}
                  {section === 'contact' && <Mail size={18} />}
                  <span className="capitalize">{section}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="p-6">
          {renderContent()}
        </main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PersonalWebsite;