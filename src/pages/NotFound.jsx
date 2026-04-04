import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  React.useEffect(() => {
    document.title = "404 - Page Not Found | Cleaning Plus";
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen flex items-center justify-center pt-20 overflow-hidden relative font-heading">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center flex flex-col items-center">
        {/* Animated Icon */}
        <div className="mb-12 relative animate-bounce-slow">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <svg 
              className="w-16 h-16 md:w-20 md:h-20 text-primary-light" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-50 scale-150 pointer-events-none"></div>
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <span className="text-primary-light font-black text-xl md:text-2xl uppercase tracking-[8px] md:tracking-[12px] opacity-60">Error 404</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-[100px] font-heading font-black text-white leading-none tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          Lost in Space?
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-[#bec7d3] text-lg md:text-xl font-light leading-relaxed mb-12">
          The page you're searching for has either been moved or doesn't exist. Let's get you back to sparkling clean business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-primary hover:bg-secondary text-[#003a5c] font-black px-10 py-5 rounded-full uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-[0px_20px_40px_-10px_rgba(59,130,246,0.3)] group flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <Link 
            to="/services" 
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold px-10 py-5 rounded-full uppercase tracking-widest text-sm border border-white/10 transition-all"
          >
            Browse Services
          </Link>
        </div>

        {/* Need Help? */}
        <div className="mt-20 pt-16 border-t border-white/5 w-full flex flex-col items-center gap-4">
          <span className="text-text-muted text-xs uppercase tracking-[4px] font-bold opacity-40">Require Assistance?</span>
          <a href="tel:832-422-3207" className="text-white hover:text-primary transition-colors font-black text-xl tracking-tight">832-422-3207</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
