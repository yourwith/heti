import React from 'react';
import { ChevronRight, MapPin, Phone, Mail, Compass } from 'lucide-react';
import { NAV_LINKS } from '../../data/hetiData.jsx';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black text-white mb-6 tracking-tighter">HETI<span className="text-amber-400">.</span></h2>
          <p className="mb-6 max-w-xs">
            An ISO 9001-2015 Organisation. Generating skilled & competent personnel in Survey & Civil Engineering.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer">In</div>
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer">Fb</div>
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer">Yt</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={14} /> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-amber-400 shrink-0 mt-1" size={18} />
              <span>25, Bakultala Lane, Gr. Floor.<br/>(Near Landmark)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-amber-400 shrink-0" size={18} />
              <span>+91 9123678096</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-amber-400 shrink-0" size={18} />
              <span>hiendtechinst@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Compass className="text-amber-400 shrink-0" size={18} />
              <span>hiendtechschool.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 mt-16 pt-8 text-center text-sm">
        © 2025 Hi-End Technical Institute. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;