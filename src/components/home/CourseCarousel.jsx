import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { COURSES } from '../../data/hetiData.jsx';
import { Link } from 'react-router-dom';

const CourseCarousel = () => {
  // We'll show the first 6 courses in the carousel
  const FEATURED_COURSES = COURSES.slice(0, 6);
  
  // High-quality images for these 6 courses
  const CAROUSEL_IMAGES = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070", // Total Station
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031", // Live Project
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070", // Road Design
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070", // DGPS
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070", // Building
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070"  // Ship
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % FEATURED_COURSES.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + FEATURED_COURSES.length) % FEATURED_COURSES.length);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="courses" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Industry Ready</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Popular Curriculum</h2>
            <div className="w-24 h-1 bg-amber-500 mt-4 rounded-full"></div>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0">
            <button onClick={prevSlide} className="p-3 bg-white border border-slate-200 hover:bg-blue-900 hover:text-white transition-all shadow-sm rounded-full">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 bg-white border border-slate-200 hover:bg-blue-900 hover:text-white transition-all shadow-sm rounded-full">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* The Sliding Cards */}
        <div className="relative h-[550px] md:h-[450px]">
          {FEATURED_COURSES.map((course, index) => {
            // Animation Logic
            let position = 'opacity-0 translate-x-full z-0 scale-90';
            if (index === activeIndex) position = 'opacity-100 translate-x-0 z-20 scale-100 shadow-2xl';
            else if (index === (activeIndex + 1) % FEATURED_COURSES.length) position = 'opacity-40 translate-x-[10%] z-10 scale-95';
            else if (index === (activeIndex - 1 + FEATURED_COURSES.length) % FEATURED_COURSES.length) position = 'opacity-0 -translate-x-full z-0 scale-90';

            return (
              <div 
                key={course.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${position}`}
              >
                <div className="h-full bg-white flex flex-col md:flex-row shadow-xl overflow-hidden rounded-2xl border border-slate-100 group">
                  
                  {/* Image Side (Left) */}
                  <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img 
                      src={CAROUSEL_IMAGES[index]} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-all"></div>
                    <div className="absolute top-6 left-6 bg-amber-400 text-blue-900 font-bold px-3 py-1 text-sm shadow-md rounded">
                      {course.id}
                    </div>
                  </div>

                  {/* Content Side (Right) */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                    {/* Decorative Number */}
                    <div className="absolute top-4 right-6 text-8xl font-black text-slate-100 -z-10 select-none">
                      0{index + 1}
                    </div>

                    <div className="mb-4 p-3 bg-slate-50 inline-block rounded-lg text-amber-500">
                      {course.icon}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{course.title}</h3>
                    <p className="text-amber-500 font-bold text-sm mb-4 uppercase tracking-wider">
                      {course.duration} • {course.category}
                    </p>
                    
                    {/* Display first 2-3 syllabus items as a preview */}
                    <ul className="text-slate-500 mb-8 space-y-2 text-sm">
                      {course.syllabus.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-amber-400 mt-1">▪</span> {item}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={`/courses/${course.id}`}
                      className="self-start px-8 py-3 bg-slate-900 text-white font-bold hover:bg-amber-500 hover:text-slate-900 transition-all uppercase text-sm tracking-widest rounded flex items-center gap-2"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link below Carousel */}
        <div className="text-center mt-12">
          <Link to="/courses" className="inline-block text-slate-400 hover:text-slate-900 font-bold tracking-widest text-sm transition-colors border-b-2 border-transparent hover:border-slate-900 pb-1">
            VIEW ALL 30+ COURSES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;