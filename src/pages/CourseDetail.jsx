import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data/hetiData';
import { Check, ChevronLeft } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = COURSES.find(c => c.id === courseId);

  if (!course) return <div className="p-20 text-center">Course not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/courses" className="inline-flex items-center text-slate-400 hover:text-white mb-6">
            <ChevronLeft size={16} /> Back to Courses
          </Link>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-amber-400 font-bold">{course.duration} | {course.qualification}</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Syllabus</h2>
        <ul className="space-y-3">
          {course.syllabus.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <Check className="text-green-500 shrink-0" size={20} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetail;