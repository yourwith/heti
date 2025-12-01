import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fixed bg-slate-900 ensures it is always dark blue and visible
    <nav className="fixed w-full z-50 bg-slate-900 shadow-xl py-3 border-b border-white/10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-400 text-slate-900 flex items-center justify-center text-sm rounded-sm font-bold">H</div>
          HETI
        </Link>

        {/* Desktop Menu - Updated with Career & Admissions */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-medium text-white/90 hover:text-amber-400 uppercase tracking-wide transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-sm font-medium text-white/90 hover:text-amber-400 uppercase tracking-wide transition-colors">
            Courses
          </Link>
          {/* NEW LINKS */}
          <Link to="/placement" className="text-sm font-medium text-white/90 hover:text-amber-400 uppercase tracking-wide transition-colors">
            Career
          </Link>
          <Link to="/admissions" className="text-sm font-medium text-white/90 hover:text-amber-400 uppercase tracking-wide transition-colors">
            Admissions
          </Link>
          <Link to="/about" className="text-sm font-medium text-white/90 hover:text-amber-400 uppercase tracking-wide transition-colors">
            About
          </Link>
          
          {/* Call to Action Button */}
          <Link to="/contact" className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-5 py-2 font-bold text-sm tracking-wide transition-colors rounded-sm">
            APPLY NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-400 font-medium text-lg border-b border-white/5 pb-2">
            Home
          </Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-400 font-medium text-lg border-b border-white/5 pb-2">
            Courses
          </Link>
          <Link to="/placement" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-400 font-medium text-lg border-b border-white/5 pb-2">
            Career
          </Link>
          <Link to="/admissions" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-400 font-medium text-lg border-b border-white/5 pb-2">
            Admissions
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-400 font-medium text-lg border-b border-white/5 pb-2">
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-amber-400 font-bold text-lg pb-2">
            APPLY NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;