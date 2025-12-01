import React from 'react';
import { CheckCircle2, Monitor, Map, Users } from 'lucide-react';

const Methodology = () => {
  const methods = [
    {
      icon: <Map className="w-10 h-10 text-white" />,
      title: "Live Project Execution",
      desc: "We don't just teach theory. Students execute real-world road and building projects on-site.",
      color: "bg-amber-500"
    },
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      title: "Software Integration",
      desc: "Mastering AutoCAD, LISP, and Data Processing software is mandatory for every student.",
      color: "bg-blue-600"
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-white" />,
      title: "Modern Equipment",
      desc: "Hands-on training with Total Stations, DGPS, and Auto Levels from day one.",
      color: "bg-emerald-500"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Industry Ready",
      desc: "Our syllabus is designed by professionals to make you employable immediately.",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">How We Train</span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">The HETI Methodology</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className={`${item.color} p-6 flex justify-center items-center group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;