import React from 'react';
import { COMPANY_INFO } from '../data/hetiData.jsx';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Since 2015</span>
          <h1 className="text-5xl font-black mt-2">About HETI</h1>
          <p className="max-w-2xl mx-auto mt-4 text-slate-400">
            {COMPANY_INFO.tagline}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Mission / Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 border-t-4 border-amber-400 shadow-sm">
            <Target className="w-10 h-10 text-slate-900 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{COMPANY_INFO.mission}</p>
          </div>
          <div className="bg-slate-50 p-8 border-t-4 border-blue-900 shadow-sm">
            <Lightbulb className="w-10 h-10 text-amber-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{COMPANY_INFO.vision}</p>
          </div>
        </div>

        {/* Board Message [cite: 42-47] */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
           <div className="md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80" 
               alt="Construction site" 
               className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
             />
           </div>
           <div className="md:w-1/2 space-y-6">
             <h2 className="text-3xl font-bold text-slate-900">Board Member Message</h2>
             <blockquote className="border-l-4 border-amber-400 pl-6 italic text-slate-600">
               "{COMPANY_INFO.boardMessage}"
             </blockquote>
             <p className="text-slate-600 leading-relaxed">
               HETI announces with pride the launching of a futuristic Training Program in the field of Survey, design, drawings and programming targeted to build technical professionals. We aim to mould the professional in the making into a complete professional trained as per industry-warranted standards.
             </p>
           </div>
        </div>
        
        {/* Objectives [cite: 20-23] */}
        <div className="bg-blue-900 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <p>To develop quality professionals who are committed to excellence in their professional endeavors.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <p>To improve industry practices through practical and theoretical classes.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <p>To serve as a quality employee to their employer in every aspect.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;