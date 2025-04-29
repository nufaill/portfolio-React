import React from 'react';
import { Code, Palette, Link, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  const services = [
    {
      icon: <Code className="w-10 h-10 mb-4 text-cyan-400" />,
      title: 'Web Development',
      description: 'Building fast, responsive, and user-friendly websites using the latest web technologies.'
    },
    {
      icon: <Palette className="w-10 h-10 mb-4 text-cyan-400" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with a focus on aesthetics and usability.'
    },
    {
      icon: <Link className="w-10 h-10 mb-4 text-cyan-400" />,
      title: 'API Integration',
      description: 'Connecting third-party services and APIs to enhance your website’s features and functionality.'
    },    
    {
      icon: <Award className="w-10 h-10 mb-4 text-cyan-400" />,
      title: 'Performance Tuning',
      description: 'Optimizing websites for speed and efficiency to provide the best user experience.'
    }
  ];

  return (
    <section id="about" className={`py-24 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-8 lg:px-16">
        {/* About Me Heading */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        {/* About Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - About Description */}
          <div className="flex flex-col justify-center">
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Full Stack Developer
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate full stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
              I bring strong skills in building responsive websites and dynamic web applications from the ground up.
            </p>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey into web development started with a curiosity about how websites and apps work, which led me
              to dive deep into HTML, CSS, and JavaScript. Over time, I expanded my expertise to modern technologies
              like React, Node.js, Express, MongoDB, and TailwindCSS. I'm driven by a passion for clean code,
              smooth user experiences, and continuous learning. I'm excited to collaborate, grow, and build impactful digital solutions.
            </p>
          </div>

          {/* Right Side - Experience and Education */}
          <div className="flex flex-col space-y-6">
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Experience & Education
            </h3>

            {/* Experience Card */}
            <div className={`group p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400`}>
              <div className="flex items-center space-x-4">
                <Code className="w-12 h-12 text-cyan-400" />
                <div>
                  <h4 className={`text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-cyan-400 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Experience
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    MERN Stack Developer at Brototype
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className={`group p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400`}>
              <div className="flex items-center space-x-4">
                <Award className="w-12 h-12 text-cyan-400" />
                <div>
                  <h4 className={`text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-cyan-400 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Education
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Higher Secondary (June 2022 - March 2024)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400`}
              >
                <div className="text-center">
                  {service.icon}
                  <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-400 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
