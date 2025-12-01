import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/hetiData.jsx';
import { Search, ChevronRight, Clock, GraduationCap, ArrowRight } from 'lucide-react';
import ScrollToTop from '../components/ui/ScrollToTop.jsx';

const CourseList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["All", "Survey", "Design", "Programming", "Vocational"];

  // Filter Logic
  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      <ScrollToTop />
      
      {/* 1. COMPACT HEADER */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black">Course Catalog</h1>
            <p className="text-slate-400 mt-2">ISO 9001-2015 Certified Curriculum</p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by ID or Name..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 2. STICKY SIDEBAR (Categories) */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Categories</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all flex justify-between items-center ${
                      activeCategory === cat 
                        ? 'bg-blue-900 text-white shadow-md' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>

              {/* Quick Stat */}
              <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-lg">
                <p className="text-amber-800 text-xs font-bold uppercase">Total Courses</p>
                <p className="text-3xl font-black text-amber-500">{filteredCourses.length}</p>
              </div>
            </div>
          </div>

          {/* 3. COURSE LIST (Wide Cards) */}
          <div className="lg:w-3/4 space-y-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Left: Icon/Visual */}
                  <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-white shadow-lg ${
                     course.category === 'Survey' ? 'bg-blue-600' :
                     course.category === 'Design' ? 'bg-amber-500' :
                     'bg-slate-800'
                  }`}>
                    {React.cloneElement(course.icon, { size: 32, className: "text-white" })}
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                        {course.id}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase">
                        {course.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {course.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={16} className="text-amber-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap size={16} className="text-blue-600" />
                        <span>{course.qualification}</span>
                      </div>
                    </div>

                    {/* Preview Syllabus */}
                    <div className="text-xs text-slate-500 border-t border-slate-100 pt-3 flex flex-wrap gap-x-4 gap-y-1">
                       {course.syllabus.slice(0, 3).map((item, i) => (
                         <span key={i} className="flex items-center gap-1">
                           <span className="w-1 h-1 bg-slate-400 rounded-full"></span> {item}
                         </span>
                       ))}
                       <span className="text-slate-400 italic">... +{course.syllabus.length - 3} more</span>
                    </div>
                  </div>

                  {/* Right: Action Button */}
                  <div className="w-full md:w-auto flex md:flex-col justify-end">
                    <Link 
                      to={`/courses/${course.id}`} 
                      className="px-6 py-3 bg-slate-50 text-slate-900 font-bold text-sm rounded-lg hover:bg-blue-900 hover:text-white transition-all flex items-center justify-center gap-2 border border-slate-200 group-hover:border-blue-900 min-w-[140px]"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-bold">No courses found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(""); setActiveCategory("All")}}
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;