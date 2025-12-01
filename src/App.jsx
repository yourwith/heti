// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx'; // Ensure .jsx extension
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx'; // Import it

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Place it here */}
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}