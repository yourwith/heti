import React from 'react';
import { Briefcase, TrendingUp, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Placement = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Future Scope</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2">Career Prospects</h1>
          <p className="max-w-2xl mx-auto mt-4 text-blue-100">
            Civil Engineering and Surveying are some of the broadest fields of engineering, applied in all construction-related projects. [cite: 33]
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose This Career?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Building2 className="text-amber-500" /></div>
                <div>
                  <h3 className="font-bold text-lg">Industry Demand</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The planning and design of various Civil Engineering projects such as highways, bridges, tunnels, dams, and railways rely on surveying measurements in the basic stage. [cite: 27]
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Globe className="text-amber-500" /></div>
                <div>
                  <h3 className="font-bold text-lg">Opportunities Everywhere</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In survey engineering, employment opportunities are available locally, state-wide, and nation-wide. [cite: 34]
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><TrendingUp className="text-amber-500" /></div>
                <div>
                  <h3 className="font-bold text-lg">Role of Design Engineer</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Design Engineers perform an important role in planning and design before the construction of roads, bridges, and high-rise buildings. [cite: 31]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900 transform translate-x-4 translate-y-4 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
              alt="Civil Engineer at work" 
              className="relative rounded-xl shadow-lg z-10 w-full"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-slate-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10">
            <Briefcase className="w-12 h-12 mx-auto text-amber-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
            <p className="mb-8 text-slate-300 max-w-xl mx-auto">
              HETI introduces survey courses according to current market requirements so that a student can walk ahead as an eligible employee. [cite: 39]
            </p>
            <Link to="/courses" className="inline-block bg-amber-400 text-slate-900 px-8 py-3 font-bold rounded hover:bg-white transition-colors">
              VIEW OUR COURSES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;