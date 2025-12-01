import React from 'react';

const SectionTitle = ({ title, subtitle, dark = false }) => (
  <div className="mb-12">
    <span className={`uppercase tracking-[0.2em] text-sm font-bold ${dark ? 'text-amber-400' : 'text-blue-900'}`}>
      {subtitle}
    </span>
    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    <div className={`h-1 w-24 mt-4 ${dark ? 'bg-amber-400' : 'bg-blue-900'}`}></div>
  </div>
);

export default SectionTitle;