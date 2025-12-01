import React from 'react';
import { Zap, BookOpen, Users, Award } from 'lucide-react';

const HetiAdvantage = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 -right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">The HETI Difference</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Practical Skills Traditional Knowledge</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            "We believe that a student with better application skills is likely to be more successful than a best student with only traditional knowledge."
          </p>
          <p className="text-sm text-amber-500 mt-4 font-bold uppercase">- Board of Directors </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-slate-900" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Speed & Efficiency</h3>
            <p className="text-slate-400 text-sm">
             In today's world, speed coupled with confidence are the parameters by which a professional is judged.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Standards</h3>
            <p className="text-slate-400 text-sm">
              We mould students into complete professionals trained as per industry-warranted standards. 
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
            <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Substantial Edge</h3>
            <p className="text-slate-400 text-sm">
            Our training gives you a substantial edge over others to meet employer expectations immediately.   
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
            <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Future Ready</h3>
            <p className="text-slate-400 text-sm">
              We identify youth talent and convert their strength to build up quality technical professionals. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HetiAdvantage;