import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/hetiData.jsx';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';

// Images for the Top Carousel (5-6 images as requested)
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070", // Road Work
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031", // Architect
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070", // Survey
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070", // Hard hat
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997"  // Students
];

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter Logic
  const filtered = COURSES.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-16"> {/* Adjusted PT */}
      
      {/* --- TOP CAROUSEL SECTION --- */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-slate-900">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt="HETI Course" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
          </div>
        ))}
        
        {/* Carousel Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500 text-white text-xs font-bold tracking-widest uppercase mb-4 animate-bounce">
            ISO 9001-2015 Certified
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">CURRICULUM</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl">
            Browse our complete list of 30+ specialized courses in Surveying, Civil Design, and Programming.
          </p>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* --- SEARCH & LIST SECTION --- */}
      <div className="container mx-auto px-6 py-16 -mt-20 relative z-20">
        
        {/* Search Bar Card */}
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-3xl mx-auto mb-16 flex items-center gap-4">
          <Search className="text-amber-500" size={24} />
          <input 
            type="text" 
            placeholder="Find your course (e.g., Road Design, HT001)..." 
            className="w-full text-lg outline-none text-slate-700 placeholder-slate-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories Label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-grow bg-slate-200 rounded"></div>
          <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">All {filtered.length} Courses</span>
          <div className="h-1 flex-grow bg-slate-200 rounded"></div>
        </div>

        {/* --- COLORFUL COURSE GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100"
            >
              {/* Colorful Header */}
              <div className={`h-2 w-full ${
                course.category === 'Survey' ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                course.category === 'Design' ? 'bg-gradient-to-r from-amber-500 to-orange-400' :
                'bg-gradient-to-r from-purple-500 to-pink-400'
              }`}></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold tracking-widest">
                    {course.id}
                  </span>
                  <div className={`p-2 rounded-lg ${
                    course.category === 'Survey' ? 'bg-blue-50 text-blue-600' :
                    course.category === 'Design' ? 'bg-amber-50 text-amber-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {course.icon}
                  </div>
                </div>
               
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Duration</span>
                    <span className="font-bold text-slate-700">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Category</span>
                    <span className={`font-bold ${
                       course.category === 'Survey' ? 'text-blue-500' :
                       course.category === 'Design' ? 'text-amber-500' : 'text-purple-500'
                    }`}>{course.category}</span>
                  </div>
                </div>

                <Link 
                  to={`/courses/${course.id}`} 
                  className="block w-full py-3 text-center rounded-lg bg-slate-50 text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;