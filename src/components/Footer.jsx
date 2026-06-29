import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/figma/b2f05b045e237c174fdee80465080f124bd094ec.png';

const Footer = () => {
  return (
    <footer className="bg-background pt-20 md:pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8 md:space-y-10 group flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
              <img src={logoImg} alt="Cleaning Plus Logo" className="h-10 md:h-12 w-auto object-contain" />
              <div className="flex flex-col text-left">
                <span className="text-white font-heading font-black text-lg md:text-xl leading-none uppercase tracking-tight">Cleaning Plus</span>
                <span className="text-primary-light font-heading text-[9px] md:text-[10px] tracking-[2px] uppercase">Custodial Contractor</span>
              </div>
            </Link>
            <p className="text-text-secondary leading-relaxed font-light max-w-sm">
              Houston's premier commercial custodial contractor delivering impeccable and personal cleaning solutions.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.362a4.2 4.2 0 110-8.399 4.2 4.2 0 010 8.399zM18.406 4.455a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
              </button>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-8 md:space-y-10 group flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: 'Services', path: '/services' },
                { label: 'About us', path: '/about' },
                { label: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-text-secondary hover:text-primary transition-colors text-sm font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 transition-transform group-hover:scale-150"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-8 md:space-y-10 group flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-4">
              {[
                { label: 'Disinfecting Services', path: '/services/disinfecting' },
                { label: 'Commercial Services', path: '/services/commercial' },
                { label: 'Window Cleaning', path: '/services/window-cleaning' },
                { label: 'Grounds Services', path: '/services/grounds' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-text-secondary hover:text-primary transition-colors text-sm font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 transition-transform group-hover:scale-150"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8 md:space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase">Houston HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-primary mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  27708 State Highway 249 # 75,<br />Tomball, Texas 77375
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <a href="tel:832-422-3207" className="text-text-secondary hover:text-white transition-colors text-sm font-light">832-422-3207</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-xs tracking-wider">
            © 2026 Cleaning Plus Custodial Contractor. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-text-muted hover:text-white transition-colors text-xs tracking-wider uppercase">Privacy</Link>
            <Link to="/terms" className="text-text-muted hover:text-white transition-colors text-xs tracking-wider uppercase">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
