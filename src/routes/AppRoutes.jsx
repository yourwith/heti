import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import CourseList from '../pages/CourseList.jsx';
import CourseDetail from '../pages/CourseDetail.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Placement from '../pages/Placement.jsx'; // NEW
import Admissions from '../pages/Admissions.jsx'; // NEW

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/admissions" element={<Admissions />} />
    </Routes>
  );
};

export default AppRoutes;