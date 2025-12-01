import React from 'react';
import { COMPANY_INFO } from '../../data/hetiData.jsx';
import { CheckCircle2 } from 'lucide-react';

const ProspectSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content from Page 4 [cite: 26-39] */}
          <div className="lg:w-3/5">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Future Scope</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-8">{COMPANY_INFO.prospectTitle}</h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
              {COMPANY_INFO.prospectContent.map((paragraph, index) => (
                <p key={index} className="border-l-4 border-slate-100 pl-4 hover:border-amber-400 transition-colors">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Objectives from Page 3 [cite: 20-23] */}
            <div className="mt-12 bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Objectives</h3>
              <ul className="space-y-4">
                {COMPANY_INFO.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={18} />
                    <span className="text-slate-700 text-sm font-medium">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-2/5 relative">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" 
                  alt="Surveying Field Work" 
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="font-bold text-2xl">Civil Engineering & Surveying</p>
                  <p className="text-amber-300 mt-2">The broadest fields of engineering applied in all construction-related projects.</p>
                </div>
              </div>

              {/* Stat Card */}
              <div className="bg-amber-400 p-6 rounded-xl shadow-lg -mt-6 ml-6 relative z-10 w-4/5 text-slate-900">
                <p className="font-bold text-lg mb-2">Employment Opportunities</p>
                <p className="text-sm">Available Locally, State-wide, and Nation-wide.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProspectSection;