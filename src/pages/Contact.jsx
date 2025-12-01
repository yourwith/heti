import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/hetiData.jsx';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Mobile Validation: Allow only numbers and max 10 digits
    if (name === 'mobile') {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-black">Contact HETI</h1>
          <p className="mt-4 text-slate-400">Get in touch for admissions and course details</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="bg-blue-900 text-white p-12 md:w-2/5">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wide">Address</h3>
                  <p className="text-blue-100">{COMPANY_INFO.address}</p> {/* [cite: 6] */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-amber-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wide">Phone</h3>
                  <p className="text-blue-100">{COMPANY_INFO.mobile}</p> {/* [cite: 6] */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-amber-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wide">Email</h3>
                  <p className="text-blue-100">{COMPANY_INFO.email}</p> {/* [cite: 7] */}
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 w-full h-48 bg-slate-800 rounded-lg overflow-hidden">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.697491768461!2d88.363892!3d22.577285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02765377555555%3A0x1!2sKolkata!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen="" 
                 loading="lazy"
                 title="HETI Location"
               ></iframe>
            </div>
          </div>
          
          {/* Netlify Form */}
          <div className="p-12 md:w-3/5">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h2>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="John Doe" 
                  className="w-full p-3 border border-slate-300 rounded focus:border-amber-400 focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full p-3 border border-slate-300 rounded focus:border-amber-400 focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    required
                    maxLength={10}
                    placeholder="9123456780" 
                    className="w-full p-3 border border-slate-300 rounded focus:border-amber-400 focus:outline-none transition-colors"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-slate-400 mt-1">10 digits only</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  name="message" 
                  required
                  rows="4" 
                  placeholder="I am interested in the Total Station course..." 
                  className="w-full p-3 border border-slate-300 rounded focus:border-amber-400 focus:outline-none transition-colors"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white py-4 font-bold rounded hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;