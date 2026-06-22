import { ArrowDown } from "lucide-react";
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden">
      {/* Background Layer */}
      <div className={`absolute inset-0 ${darkMode ? "bg-slate-900/90" : "bg-white/90"} z-0`} />
      
      {/* Spline 3D Robot Viewer */}
      <div className="absolute inset-0 z-10 opacity-50">
        <div className="robot w-full h-full">
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"></script>
          <spline-viewer
            url="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode"
            className="w-full h-full block"
          ></spline-viewer>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <p className={`text-lg font-semibold ${darkMode ? "text-cyan-300" : "text-cyan-600"}`}>
              Welcome to my portfolio!
            </p>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
              Hello, my name's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text">
                NUFAIL
              </span>.
            </h1>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />

          <h2 className={`text-xl md:text-2xl font-light max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            I create <span className="font-bold text-cyan-400">beautiful digital experiences</span> that live at the
            intersection of code and design.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a
              href="/NUFAIL.TB_Resume.pdf"
              download
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-white font-bold tracking-wide">Download CV</span>
            </a>

            <a href="#projects">
              <button className="group relative px-8 py-3 border-2 border-cyan-400 rounded-full overflow-hidden hover:bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300">
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className={`relative font-bold tracking-wide group-hover:text-white ${darkMode ? "text-white" : "text-gray-900"}`}>
                  See my work
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <a
          href="#about"
          className={`flex flex-col items-center transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-cyan-300" : "text-gray-600 hover:text-cyan-500"}`}
        >
          <span className="mb-2 text-sm font-semibold">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;