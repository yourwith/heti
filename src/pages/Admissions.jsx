import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, UserCheck, CreditCard, GraduationCap, 
  CheckCircle2, Download, PhoneCall, Calendar, AlertCircle 
} from 'lucide-react';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* 1. VIBRANT HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Admissions Open 2025
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Start Your Engineering Journey</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join the ISO 9001-2015 certified institute that prioritizes practical application over traditional theory.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              APPLY NOW
            </Link>
            <button className="px-8 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Download size={18} /> Download Prospectus
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        
        {/* 2. ELIGIBILITY & INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300">
            <Calendar className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Batch Timings</h3>
            <p className="text-slate-600 text-sm">Flexible batches available for both Regular Students and Working Professionals (Weekend Batches).</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300">
            <UserCheck className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Eligibility</h3>
            <p className="text-slate-600 text-sm">Open to Freshers (10th/12th), ITI Surveyors, Diploma Civil, and B.Tech Civil Engineers.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300">
            <AlertCircle className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Documents Needed</h3>
            <p className="text-slate-600 text-sm">Aadhar Card, Last Qualification Marksheet, 2 Passport Photos.</p>
          </div>
        </div>

        {/* 3. ANIMATED PROCESS STEPS */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">Admission Process</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10"></div>

            {[
              { icon: FileText, title: "1. Consultation", desc: "Visit our campus or call us for free career counseling." },
              { icon: UserCheck, title: "2. Form Fill-up", desc: "Fill the application form with your personal details." },
              { icon: CreditCard, title: "3. Enrollment", desc: "Submit documents and pay the admission fees." },
              { icon: GraduationCap, title: "4. Training", desc: "Collect your kit and start your practical training." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-blue-900 hover:text-white transition-colors duration-300">
                <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6 group-hover:bg-amber-500 transition-colors">
                  <step.icon size={32} className="text-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-blue-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. WHY JOIN SECTION */}
        <div className="bg-blue-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Students Choose HETI?</h2>
             <div className="space-y-4">
               {[
                 "ISO 9001-2015 Certified Organisation",
                 "100% Practical Field Training on Site",
                 "Training on Latest Total Station & DGPS",
                 "Placement Assistance for Top Performers",
                 "Certificate Valid for Govt. & Pvt. Jobs"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                   <CheckCircle2 className="text-green-500 shrink-0" />
                   <span className="font-bold text-slate-700">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-amber-400 rounded-2xl transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000" 
               alt="Students" 
               className="relative rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </div>
        </div>

        {/* 5. FINAL CTA */}
        <div className="text-center mt-20">
          <p className="text-slate-500 mb-6 font-medium">Have questions before applying?</p>
          <a href="tel:9123678096" className="inline-flex items-center gap-2 text-2xl font-black text-blue-900 hover:text-amber-500 transition-colors">
            <PhoneCall /> +91 9123678096
          </a>
        </div>

      </div>
    </div>
  );
};

export default Admissions;