import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    vantaEffectRef.current = CLOUDS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      backgroundColor: 0x020617,    // almost black blue
      skyColor: 0x0f172a,           // slate-900

      cloudColor: 0x0f172b,        
      cloudShadowColor: 0x0f172b,   

      sunColor: 0x2563eb,          
      sunGlareColor: 0x1d4ed8,     
      sunlightColor: 0x3b82f6,     

      speed: 0.4,
    });
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [darkMode]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden"
    >
      {/* Overlay for text readability */}
      <div
        className={`absolute inset-0 z-0 ${darkMode ? "bg-slate-900/60" : "bg-white/45"
          }`}
      />

      {/* Content Section */}
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              Hello, my name&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text">
                NUFAIL
              </span>
            </h1>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />

          <h2
            className={`text-xl md:text-2xl font-light max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-700"
              }`}
          >
            I create{" "}
            <span className="font-bold text-cyan-400">
              beautiful digital experiences
            </span>{" "}
            that live at the intersection of code and design.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a
              href="/NUFAIL.TB_Resume.pdf"
              download
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-white font-bold tracking-wide">
                Download CV
              </span>
            </a>

            <a href="#projects">
              <button className="group relative px-8 py-3 border-2 border-cyan-400 rounded-full overflow-hidden hover:bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300">
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span
                  className={`relative font-bold tracking-wide group-hover:text-white ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
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
          className={`flex flex-col items-center transition-colors duration-300 ${darkMode
            ? "text-gray-400 hover:text-cyan-300"
            : "text-gray-600 hover:text-cyan-500"
            }`}
        >
          <span className="mb-2 text-sm font-semibold">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;