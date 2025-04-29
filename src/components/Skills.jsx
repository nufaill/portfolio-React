import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { darkMode } = useTheme();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js';
    script.onload = () => {
      console.log('Spline viewer script loaded');
      setIsScriptLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const technologies = [
    'React', 'JavaScript', 'TypeScript','DSA',
    'Node.js', 'Express', 'MongoDB', 'MySQL',
    'TailwindCSS', 'SASS', 'Figma', 'Git', 'JWT','Razorpay', 'AWS','firebase', 'C++', 'C', 'HTML','bootstrap 5', 'CSS'
  ];

  return (
    <section id="skills" className={`py-24 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            My technical skills and areas of expertise in web development and design.
          </p>
        </div>

        {/* Robot + Skills Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Robot */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Creative Robot
            </h3>
            <div className="h-[400px] w-full">
              {isScriptLoaded && (
                <spline-viewer
                  url="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
          </div>

          {/* Right Side - Technical Skills */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technical Skills & Technologies I Work With
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full ${
                    darkMode
                      ? 'bg-slate-800 text-white border border-slate-700 hover:border-cyan-400'
                      : 'bg-gray-100 text-gray-800 border border-gray-200 hover:border-cyan-400'
                  } transition-all duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Philosophy Section */}
            <div className={`mt-12 p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Development Philosophy
              </h3>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Clean, maintainable code that follows best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Responsive design that works seamlessly on all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Performance optimization for fast loading and smooth user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Accessibility-first approach to ensure inclusive web experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
