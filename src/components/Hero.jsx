import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useTheme } from '../context/ThemeContext'; 

const Hero = () => {
  const { darkMode } = useTheme(); 
  const profileRef = useRef(null);

  useEffect(() => {
    const profileContainer = profileRef.current;
    if (!profileContainer) return;

    const createNeonElements = () => {
      const existingNeons = profileContainer.querySelectorAll(".neon-element, .light-flare");
      existingNeons.forEach((el) => el.remove());

      for (let i = 0; i < 1; i++) {
        const neonElement = document.createElement("div");
        neonElement.className = `neon-element neon-${i}`;
        profileContainer.appendChild(neonElement);
      }

      for (let i = 0; i < 4; i++) {
        const flare = document.createElement("div");
        flare.className = `light-flare flare-${i}`;
        profileContainer.appendChild(flare);
      }
    };

    createNeonElements();

    return () => {
      const existingNeons = profileContainer.querySelectorAll(".neon-element, .light-flare");
      existingNeons.forEach((el) => el.remove());
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 lg:px-12">
      <div className={`absolute inset-0 ${darkMode ? "bg-slate-900/90" : "bg-white/90"}`} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo Section */}
          <div className="lg:order-2 lg:w-1/2 flex justify-center order-1 w-full md:w-2/3 mx-auto mb-12 lg:mb-0 mt-16 lg:mt-0 sm:mt-24 sm:mb-20">
            <div
              ref={profileRef}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg"
              style={{
                boxShadow: darkMode
                  ? "0 0 25px rgba(14, 165, 233, 0.3), 0 0 10px rgba(14, 165, 233, 0.2)"
                  : "0 0 25px rgba(14, 165, 233, 0.2), 0 0 10px rgba(14, 165, 233, 0.1)",
              }}
            >
              <img
                src="/img.png"
                alt="NUFAIL"
                className="w-full h-full object-cover object-center z-10 relative"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:order-1 lg:w-1/2 order-2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className={`text-lg font-semibold ${darkMode ? "text-cyan-300" : "text-cyan-600"}`}>
                Welcome to my portfolio!
              </p>
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
  Hi, I'm{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text">
    NUFAIL
  </span>
  <br />
  <span className="block mt-2">MERN Stack Developer</span>
</h1>

            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto lg:mx-0" />

            <h2 className={`text-xl md:text-2xl font-light max-w-2xl mx-auto lg:mx-0 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              I create <span className="font-bold text-cyan-400">beautiful digital experiences</span> that live at the
              intersection of code and design.
            </h2>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
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
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <a
          href="#about"
          className={`flex flex-col items-center transition-colors duration-300 ${
            darkMode ? "text-gray-400 hover:text-cyan-300" : "text-gray-600 hover:text-cyan-500"
          }`}
        >
          <span className="mb-2 text-sm font-semibold">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={28} />
        </a>
      </div>

      <style jsx>{`
        .neon-element {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .neon-0 {
          inset: -5px;
          border: 1px solid rgba(14, 165, 233, 0.3);
          animation: rotate 20s linear infinite, pulse 3s ease-in-out infinite;
        }
        .light-flare {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgba(14, 165, 233, 0.6);
          filter: blur(8px);
          pointer-events: none;
        }
        .flare-0 { top: 20%; left: -5px; animation: flare 3s ease-in-out infinite; }
        .flare-1 { top: 70%; right: -5px; animation: flare 4s ease-in-out infinite; }
        .flare-2 { bottom: 20%; left: 10%; animation: flare 5s ease-in-out infinite; }
        .flare-3 { bottom: 70%; right: 10%; animation: flare 6s ease-in-out infinite; }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
        }
        @keyframes flare {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
