import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/figma/b2f05b045e237c174fdee80465080f124bd094ec.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'unset';
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isMenuOpen ? 'h-screen bg-[#020617]' : isScrolled ? 'backdrop-blur-[20px] bg-[#020617]/90 border-b border-white/10 shadow-2xl' : 'bg-transparent py-2 md:py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer transition-transform hover:scale-105 active:scale-95 z-[1001]">
          <img src={logoImg} alt="Cleaning Plus Logo" className="h-10 md:h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-white font-heading font-black text-lg md:text-xl leading-none uppercase tracking-tight">Cleaning Plus</span>
            <span className="text-primary-light font-heading text-[8px] md:text-[10px] tracking-[2px] uppercase">Custodial Contractor</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className={`${isActive('/') ? 'text-white' : 'text-text-secondary'} hover:text-white transition-all uppercase text-xs tracking-[1.5px] font-heading font-bold relative group`}>
            Home
            <div className={`absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
          </Link>
          
          <div className="relative group/dropdown">
            <Link 
              to="/services"
              className={`${location.pathname.startsWith('/services') ? 'text-white' : 'text-text-secondary'} flex items-center gap-2 hover:text-white transition-all uppercase text-xs tracking-[1.5px] font-heading font-bold cursor-pointer group`}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="group-hover/dropdown:rotate-180 transition-transform duration-300">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform group-hover/dropdown:translate-y-0 translate-y-2">
              <div className="bg-[#0f172a]/95 border border-white/10 rounded-3xl p-4 w-[320px] shadow-2xl backdrop-blur-2xl flex flex-col gap-1 overflow-hidden">
                {[
                  { title: 'Disinfecting', desc: 'Medical-grade sanitization', path: '/services/disinfecting', color: 'primary', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
                  { title: 'Commercial', desc: 'Facility maintenance', path: '/services/commercial', color: 'secondary', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
                  { title: 'Window Cleaning', desc: 'Clear commercial results', path: '/services/window-cleaning', color: 'secondary', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                  { title: 'Landscaping', desc: 'Full property maintenance', path: '/services/landscaping', color: 'primary', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /> }
                ].map((item) => (
                  <Link key={item.path} to={item.path} className="group/item flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left">
                    <div className={`w-12 h-12 rounded-2xl bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover/item:scale-110 group-hover/item:bg-${item.color}/20 transition-all shadow-inner`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <div>
                      <div className="text-white font-heading font-black text-sm uppercase tracking-wide">{item.title}</div>
                      <div className="text-text-secondary text-[11px] font-medium leading-tight opacity-70">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
 
          <Link to="/about" className={`${isActive('/about') ? 'text-white' : 'text-text-secondary'} hover:text-white transition-all uppercase text-xs tracking-[1.5px] font-heading font-bold relative group`}>
            About
            <div className={`absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
          </Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'text-white' : 'text-text-secondary'} hover:text-white transition-all uppercase text-xs tracking-[1.5px] font-heading font-bold relative group`}>
            Contact
            <div className={`absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
          </Link>
        </div>
 
        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-8 z-[1001]">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-text-muted text-[10px] uppercase tracking-[1px] font-heading font-bold opacity-60">Call Houston HQ</span>
            <a href="tel:832-422-3207" className="text-white font-heading font-black hover:text-primary transition-colors text-sm">832-422-3207</a>
          </div>
          
          <Link to="/contact" className="hidden sm:block">
            <button className="bg-primary hover:bg-secondary text-background px-5 md:px-7 py-2.5 rounded-full font-heading font-black uppercase text-[11px] md:text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Get a Free Quote
            </button>
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 lg:hidden bg-[#020617] transition-all duration-500 flex flex-col px-8 py-24 z-[1000] overflow-y-auto ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
          <div className="w-full max-w-sm mx-auto space-y-12">
            {/* Core Links */}
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-4xl font-heading font-black text-white uppercase tracking-tighter hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="text-4xl font-heading font-black text-white uppercase tracking-tighter hover:text-primary transition-colors" onClick={toggleMenu}>Services</Link>
              <Link to="/about" className="text-4xl font-heading font-black text-white uppercase tracking-tighter hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-4xl font-heading font-black text-white uppercase tracking-tighter hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
            </div>

            {/* Service Sub-links */}
            <div className="pt-8 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[4px] text-primary font-heading font-black mb-6 opacity-60">Specific Solutions</div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'Disinfecting Services', path: '/services/disinfecting' },
                  { label: 'Commercial Cleaning', path: '/services/commercial' },
                  { label: 'Window Cleaning', path: '/services/window-cleaning' },
                  { label: 'Landscaping & Grounds', path: '/services/landscaping' }
                ].map((s) => (
                  <Link 
                    key={s.label} 
                    to={s.path} 
                    className="text-white/70 hover:text-primary font-heading text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-3 group"
                    onClick={toggleMenu}
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 w-full">
              <Link 
                to="/contact" 
                className="block w-full bg-primary hover:bg-primary-dark text-white font-heading font-black py-5 rounded-2xl transition-all text-center tracking-widest uppercase text-sm border-b-4 border-primary-dark active:border-b-0 active:translate-y-1"
                onClick={toggleMenu}
              >
                Get a Free Quote
              </Link>
              
              <div className="mt-8 group">
                <div className="text-[10px] uppercase tracking-[3px] text-text-muted mb-2 font-bold opacity-50">Call Houston HQ</div>
                <a href="tel:832-422-3207" className="text-2xl font-heading font-black text-white hover:text-primary-light transition-colors tracking-tight">
                  832-422-3207
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
