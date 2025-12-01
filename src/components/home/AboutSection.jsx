import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const AboutSection = () => (
  <section id="about" className="py-24 bg-white relative">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <SectionTitle title="The HETI Vision" subtitle="About Us" />
          <p className="text-lg text-slate-600 leading-relaxed">
            The overall ambition of HETI is to find the talent of youth and convert their strength to build up quality technical professionals.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We realize that in today's world, speed and efficiency coupled with confidence are the parameters by which a real professional is judged.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-4 border-amber-400 pl-4">
              <h4 className="font-bold text-2xl text-slate-900">500+</h4>
              <p className="text-sm text-slate-500">Graduates Placed</p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4">
              <h4 className="font-bold text-2xl text-slate-900">30+</h4>
              <p className="text-sm text-slate-500">Corporate Partners</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-amber-400 rounded-lg transform rotate-3 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop" 
            alt="Students surveying" 
            className="w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;