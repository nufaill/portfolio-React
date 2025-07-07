"use client"
import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Server,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Shield,
  Users,
  MessageCircle,
  Clock,
  Target,
  Lightbulb,
  Heart,
  Cpu,
  Monitor,
  Wrench,
  BookOpen,
  Award,
  TrendingUp,
  Rocket,
  Star,
} from "lucide-react"

const Skills = () => {
  const { darkMode } = useTheme()
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 })

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "React", icon: <Code2 className="w-4 h-4" /> },
        { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "TailwindCSS", icon: <Palette className="w-4 h-4" /> },
        { name: "SASS/SCSS", icon: <Palette className="w-4 h-4" /> },
        { name: "HTML5", icon: <Globe className="w-4 h-4" /> },
        { name: "CSS3", icon: <Palette className="w-4 h-4" /> },
        { name: "Bootstrap", icon: <Layers className="w-4 h-4" /> },
        { name: "Figma", icon: <Palette className="w-4 h-4" /> },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Server className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "JWT", icon: <Shield className="w-4 h-4" /> },
        { name: "Razorpay", icon: <Zap className="w-4 h-4" /> },
        { name: "REST APIs", icon: <Globe className="w-4 h-4" /> },
        { name: "GraphQL", icon: <Globe className="w-4 h-4" /> },
      ],
    },
    devops: {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
        { name: "Firebase", icon: <Cloud className="w-4 h-4" /> },
        { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
        { name: "GitHub", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Vercel", icon: <Rocket className="w-4 h-4" /> },
        { name: "Netlify", icon: <Globe className="w-4 h-4" /> },
        { name: "CI/CD", icon: <Zap className="w-4 h-4" /> },
      ],
    },
    languages: {
      title: "Programming Languages",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "C++", icon: <Cpu className="w-4 h-4" /> },
        { name: "C", icon: <Cpu className="w-4 h-4" /> },
        { name: "Java", icon: <Code2 className="w-4 h-4" /> },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "VS Code", icon: <Code2 className="w-4 h-4" /> },
        { name: "Postman", icon: <Globe className="w-4 h-4" /> },
        { name: "Chrome DevTools", icon: <Wrench className="w-4 h-4" /> },
        { name: "Webpack", icon: <Layers className="w-4 h-4" /> },
        { name: "Vite", icon: <Zap className="w-4 h-4" /> },
        { name: "ESLint", icon: <Shield className="w-4 h-4" /> },
        { name: "Prettier", icon: <Star className="w-4 h-4" /> },
        { name: "Notion", icon: <BookOpen className="w-4 h-4" /> },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Leadership", icon: <Users className="w-4 h-4" /> },
        { name: "Communication", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> },
        { name: "Time Management", icon: <Clock className="w-4 h-4" /> },
        { name: "Project Management", icon: <Target className="w-4 h-4" /> },
        { name: "Mentoring", icon: <Heart className="w-4 h-4" /> },
        { name: "Agile/Scrum", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "Digital Design", icon: <Palette className="w-4 h-4" /> },
      ],
    },
  }

  const handleMouseEnter = (e, skillName) => {
    if (window.innerWidth >= 1024) {
      // Only on laptop/desktop
      const rect = e.target.getBoundingClientRect()
      setTooltip({
        show: true,
        text: skillName,
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      })
    }
  }

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: "", x: 0, y: 0 })
  }

  const renderSkillCategory = (categoryKey, category) => (
    <div
      key={categoryKey}
      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
        ${
          darkMode
            ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/30"
            : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/50 hover:border-cyan-400/30 shadow-lg"
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <div className="relative flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl transition-colors duration-300
          ${
            darkMode
              ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:from-cyan-400/30 group-hover:to-blue-400/30"
              : "bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 group-hover:from-cyan-200 group-hover:to-blue-200"
          }`}
        >
          {category.icon}
        </div>
        <h3
          className={`text-xl font-bold transition-colors duration-300
          ${darkMode ? "text-white group-hover:text-cyan-300" : "text-gray-900 group-hover:text-cyan-600"}
        `}
        >
          {category.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
        {category.skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, skill.name)}
            onMouseLeave={handleMouseLeave}
            className={`group/skill flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer
              ${
                darkMode
                  ? "bg-slate-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-300 border border-slate-600/30 hover:border-cyan-400/50"
                  : "bg-gray-100/80 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 border border-gray-200/50 hover:border-cyan-300/50"
              }`}
          >
            <span
              className={`transition-colors duration-300 group-hover/skill:scale-110
              ${darkMode ? "text-cyan-400" : "text-cyan-500"}
            `}
            >
              {skill.icon}
            </span>
            <span className="truncate">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section
      id="skills"
      className={`relative py-32 px-4 md:px-8 transition-colors duration-300 overflow-hidden
        ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className={`p-3 rounded-2xl
              ${
                darkMode
                  ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                  : "bg-gradient-to-br from-cyan-100 to-blue-100"
              }`}
            >
              <Award className={`w-8 h-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
            </div>
            <h2
              className={`text-5xl md:text-6xl font-extrabold
              ${darkMode ? "text-white" : "text-gray-900"}
            `}
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Skills
              </span>
            </h2>
          </div>

          <div className="flex justify-center mb-6">
            <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
          </div>

          <p
            className={`max-w-3xl mx-auto text-xl leading-relaxed
            ${darkMode ? "text-gray-300" : "text-gray-600"}
          `}
          >
            A comprehensive overview of my technical expertise and professional capabilities across
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}
              full-stack development
            </span>
            ,
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {" "}
              cloud technologies
            </span>
            , and
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              {" "}
              modern frameworks
            </span>
            .
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillsData).map(([key, category]) => renderSkillCategory(key, category))}
        </div>

        {/* Philosophy Section */}
        <div
          className={`relative overflow-hidden rounded-3xl p-10 transition-all duration-500
          ${
            darkMode
              ? "bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50"
              : "bg-gradient-to-br from-white to-gray-50/90 border border-gray-200/50 shadow-xl"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full" />
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`p-4 rounded-2xl
                ${
                  darkMode
                    ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                    : "bg-gradient-to-br from-cyan-100 to-purple-100"
                }`}
              >
                <Lightbulb className={`w-8 h-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
              </div>
              <h3
                className={`text-3xl font-bold
                ${darkMode ? "text-white" : "text-gray-900"}
              `}
              >
                Development Philosophy
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code2 className="w-5 h-5" />,
                  title: "Clean Architecture",
                  description:
                    "Writing maintainable, scalable code following industry best practices and design patterns",
                },
                {
                  icon: <Smartphone className="w-5 h-5" />,
                  title: "Mobile-First Design",
                  description: "Creating responsive, accessible interfaces that work seamlessly across all devices",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "Performance Optimization",
                  description:
                    "Building lightning-fast applications with optimal loading times and smooth interactions",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "User-Centric Approach",
                  description:
                    "Prioritizing user experience and accessibility in every design and development decision",
                },
              ].map((principle, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]
                  ${darkMode ? "bg-slate-700/30 hover:bg-slate-700/50" : "bg-gray-100/50 hover:bg-gray-100/80"}`}
                >
                  <div
                    className={`flex-shrink-0 p-2 rounded-lg
                    ${
                      darkMode
                        ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400"
                        : "bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600"
                    }`}
                  >
                    {principle.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2
                      ${darkMode ? "text-white" : "text-gray-900"}
                    `}
                    >
                      {principle.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed
                      ${darkMode ? "text-gray-300" : "text-gray-600"}
                    `}
                    >
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Tooltip Modal */}
      {tooltip.show && (
        <div
          className="fixed z-50 pointer-events-none transition-opacity duration-200"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: "translateX(-50%) translateY(-100%)",
          }}
        >
          <div
            className={`px-3 py-2 rounded-lg text-sm font-medium shadow-lg border backdrop-blur-sm
              ${
                darkMode
                  ? "bg-slate-800/95 text-white border-slate-600/50"
                  : "bg-white/95 text-gray-900 border-gray-200/50"
              }`}
          >
            {tooltip.text}
            {/* Arrow */}
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent
                ${darkMode ? "border-t-slate-800/95" : "border-t-white/95"}
              `}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills
