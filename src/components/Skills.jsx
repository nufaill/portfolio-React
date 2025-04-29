import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { darkMode } = useTheme();

  const skills = {
    frontend: [
      'React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'SASS', 'HTML', 'CSS', 'Bootstrap 5', 'Figma'
    ],
    backend: [
      'Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT', 'Razorpay'
    ],
    devops: [
      'AWS', 'Firebase', 'Git', 'GitHub', 'Vercel', 'Netlify'
    ],
    programmingLanguages: [
      'C++', 'C', 'JavaScript', 'TypeScript'
    ],
    tools: [
      'Postman', 'Chrome DevTools', 'VS Code'
    ],
    softSkills: [
      'Team Collaboration', 'digital design', 'Problem Solving', 'Communication', 'Time Management'
    ]
  };

  const renderSkills = (title, items) => (
    <div className="mb-10">
      <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 transform hover:scale-105
              ${darkMode
                ? 'bg-transparent text-white border-slate-600 hover:text-cyan-400 hover:border-cyan-400'
                : 'bg-transparent text-gray-800 border-gray-400 hover:text-cyan-500 hover:border-cyan-500'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className={`py-32 px-4 md:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <div className="h-1 w-28 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            A deep look into my technical toolkit and areas of expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            {renderSkills('Frontend', skills.frontend)}
            {renderSkills('Backend', skills.backend)}
            {renderSkills('DevOps / Cloud', skills.devops)}
            {renderSkills('Programming Languages', skills.programmingLanguages)}
            {renderSkills('Tools & Platforms', skills.tools)}
          </div>

          <div>
            {renderSkills('Soft Skills', skills.softSkills)}

            <div className={`mt-12 p-6 rounded-2xl shadow-md border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'}`}>
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Development Philosophy
              </h3>
              <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {[
                  "Clean, maintainable code using best practices",
                  "Responsive UI for all devices",
                  "Performance-first mindset",
                  "Accessibility & inclusivity by design"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-cyan-500 text-xl">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
