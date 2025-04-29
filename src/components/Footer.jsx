import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-10 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="group">
              <span className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-400`}>
                <span className="text-cyan-400">NUFAIL</span>
              </span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-500'} transition-colors duration-300`}
            >
              About
            </a>
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-500'} transition-colors duration-300`}
            >
              Projects
            </a>
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-500'} transition-colors duration-300`}
            >
              Blog
            </a>
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-500'} transition-colors duration-300`}
            >
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} nufail. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;