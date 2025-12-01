import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Live Projects", desc: "Don't just learn theory. Execute real-world survey projects on-site." },
    { title: "Modern Equipment", desc: "Training on latest Total Stations, DGPS, and Auto Levels." },
    { title: "Software Mastery", desc: "AutoCAD, LISP Programming, and custom data processing tools." },
    { title: "Job Assistance", desc: "Our network connects you with top infrastructure companies." }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white relative" id="methodology">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-2">
              <CheckCircle2 className="text-amber-400 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;