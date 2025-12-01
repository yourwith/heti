import React from 'react';
import Hero from '../components/home/Hero.jsx';
import Methodology from '../components/home/Methodology.jsx';
import CourseCarousel from '../components/home/CourseCarousel.jsx';
import ProspectSection from '../components/home/ProspectSection.jsx'; // NEW IMPORT
import HetiAdvantage from '../components/home/HetiAdvantage.jsx';
import AboutSection from '../components/home/AboutSection.jsx';

const Home = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. PROSPECT OF TRAINING (Page 4 Content) - Placed high for information value */}
      <ProspectSection />

      <HetiAdvantage />

      {/* 3. METHODOLOGY SECTION */}
      <Methodology />

      {/* 4. CAROUSEL SECTION */}
      <CourseCarousel />

      {/* 5. ABOUT SECTION (Vision/Mission) */}
      <AboutSection />
      
      {/* 6. MARQUEE GALLERY */}
      <section className="py-6 bg-slate-900 border-t border-slate-800">
         <div className="container mx-auto px-6 mb-4">
           <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center">Trusted Industry Standards</p>
         </div>
         <div className="flex overflow-hidden opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {[1,2,3,4,5,6,1,2,3,4,5,6].map((i, index) => (
             <img 
               key={index} 
               src={`https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=300&auto=format&fit=crop&random=${i}`} 
               alt="Gallery" 
               className="h-24 w-40 object-cover mx-2 rounded-md opacity-70 hover:opacity-100 transition-opacity"
            />
           ))}
         </div>
      </section>
    </div>
  );
};

export default Home;