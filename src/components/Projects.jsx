import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import userManagement from '../assets/usermanegment.png'
import aichat from '../assets/aichat.jpg'
import KickStop from '../assets/kickstop.png'
import todoapp from '../assets/todoapp.png'
import netfliximg from '../assets/netfliximg.png'

const Projects = () => {
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web App', 'Landing Page', 'E-commerce'];
  
  const projects = [
    {
      id: 1,
      title: 'User Management',
      category: 'Web App',
      description: 'This is a user management system that helps easily control and manage users.',
      image: userManagement,
      tags: ['React','Redux', 'TypeScript', 'Firebase'],
      liveLink: '#',
      repoLink: 'https://github.com/nufaill/user-management-react'
    },
    {
      id: 2,
      title: 'KickStop shoe Store',
      category: 'E-commerce',
      description: 'A high-end e-commerce platform for luxury shoes, featuring a seamless Razorpay payment integration and a dynamic user experience.',
      image: KickStop,
      tags: ['ejs', 'Node.js', 'MongoDB'],
      liveLink: 'https://www.figma.com/design/ZoiWOrFninsEMcU8vOayWL/KickStop-(Copy)-(Copy)?node-id=17-3&p=f',
      repoLink: 'https://github.com/nufaill/KickStop'
    },
    {
      id: 3,
      title: 'AI Chatbot',
      category: 'Web App',
      description: ' AI chatbot designed to engage users with intelligent, dynamic conversations, providing real-time assistance and enhancing user experience.',
      image: aichat,
      tags: [],
      liveLink: 'https://turbo-git-main-nufaills-projects.vercel.app/',
      repoLink: 'https://github.com/nufaill/turbo-chatbot'
    },
    {
      id: 4,
      title: 'To-Do App',
      category: 'Web App',
      description: 'A simple yet powerful To-Do app that helps users manage tasks efficiently with features like task creation, editing, and deletion, all designed with a clean and intuitive user interface.',
      image: todoapp,
      tags: ['TypeScript','React'],
      liveLink: 'https://to-do-app-nufaills-projects.vercel.app/',
      repoLink: 'https://github.com/nufaill/todolist-Typescript'
    },
    // {
    //   id: 5,
    //   title: 'NFT Marketplace',
    //   category: 'E-commerce',
    //   description: 'A digital marketplace for NFT artists with auction functionality and wallet integration.',
    //   image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['React', 'Ethers.js', 'ThreeJS'],
    //   liveLink: '#',
    //   repoLink: '#'
    // },
    {
      id: 6,
      title: 'Netflix Static Website',
      category: 'Landing Page',
      description: 'A static replica of the Netflix homepage built with React. The app features a movie carousel, navigation, and responsive layouts, offering a seamless user experience that mirrors Netflix.',
      image: netfliximg,
      tags: ['React'],
      liveLink: 'https://netflix-model-xi.vercel.app/',
      repoLink: 'https://github.com/nufaill/netflix-React'
    }
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-24 ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore my recent projects showcasing my expertise in web development and design.
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                  : `${darkMode ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`group overflow-hidden rounded-xl transition-all duration-500 transform hover:-translate-y-2 ${
                darkMode ? 'bg-slate-700' : 'bg-white'
              } hover:shadow-xl hover:shadow-cyan-500/20`}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        <a 
                          href={project.liveLink} 
                          className="text-white hover:text-cyan-400 transition-colors duration-300"
                          aria-label="View live site"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a 
                          href={project.repoLink} 
                          className="text-white hover:text-cyan-400 transition-colors duration-300"
                          aria-label="View code repository"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode ? 'bg-slate-600 text-cyan-300' : 'bg-gray-100 text-cyan-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h4>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    className="text-sm text-cyan-500 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                  >
                    Live Demo
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a 
                    href={project.repoLink} 
                    className="text-sm text-cyan-500 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                  >
                    Source Code
                    <Github size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;