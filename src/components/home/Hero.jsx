import React, { useState, useRef } from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex items-center bg-slate-900 text-white cursor-crosshair"
      id="home"
    >
      {/* Layer 1: The Blueprint World (Base) */}
      <div className="absolute inset-0 bg-slate-900 z-10 flex flex-col justify-center items-center">
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
        <div className="text-center px-4">
          <h1 className="text-[12vw] font-black tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            PRECISION
          </h1>
        </div>
      </div>

      {/* Layer 2: The Real World (Revealed) */}
      <div 
        className="absolute inset-0 z-20 bg-cover bg-center flex flex-col justify-center items-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop")',
          clipPath: `circle(25% at ${mousePos.x}% ${mousePos.y}%)`,
          transition: 'clip-path 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        <div className="text-center px-4 relative z-30">
          <h1 className="text-[12vw] font-black tracking-tighter text-white drop-shadow-2xl">
            PRECISION
          </h1>
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center px-6 md:px-20 pointer-events-none">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-blue-900 font-bold text-xs tracking-widest uppercase">
            <Award size={14} /> ISO 9001-2015 Certified
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Hi-End Technical Institute<br/>
            <span className="text-amber-400">Constructing Careers.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl border-l-4 border-amber-400 pl-6">
            Bridging the gap between academic theory and industry reality. Join the leaders in Survey & Civil Engineering training.
          </p>

          <div className="pt-8 pointer-events-auto flex flex-wrap gap-4">
            <Link to="/courses" className="px-8 py-4 bg-white text-slate-900 font-bold hover:bg-amber-400 transition-colors duration-300 flex items-center gap-2">
              EXPLORE COURSES <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              ADMISSION 2025
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;