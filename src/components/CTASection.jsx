import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-background py-16 md:py-32 relative overflow-hidden" id="contact">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-text-primary uppercase tracking-[-1.5px] md:tracking-[-3.2px] leading-tight">
              Ready to Work Together?
            </h2>
            <p className="text-base md:text-[20px] text-text-secondary leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Join 500+ businesses across Houston who trust Cleaning Plus for their facility needs. We’ll show you why we’re the best.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start">
            <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-text-muted text-[11px] md:text-[12px] font-bold uppercase tracking-[1px]">Direct Support</span>
              <span className="text-text-primary text-lg md:text-xl font-heading font-black">832-422-3207</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:w-1/2 relative group w-full">
          {/* Gradient Glow Container */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[48px] blur-lg transition duration-1000 group-hover:duration-200 group-hover:opacity-100 opacity-60"></div>
          
          <div className="relative bg-white rounded-3xl md:rounded-[44px] p-6 md:p-12 border-white/5 shadow-2xl space-y-8 md:space-y-10">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">Free Assessment</h3>
              <p className="text-slate-600 text-xs md:text-sm font-medium">Schedule your on-site walkthrough today.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-black text-slate-900 px-4">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Carter"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 text-slate-900 placeholder:text-slate-400 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-black text-slate-900 px-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@business.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 text-slate-900 placeholder:text-slate-400 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-black text-slate-900 px-4">Service Required</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 text-slate-900 appearance-none cursor-pointer transition-all font-medium"
                  >
                    <option>Commercial Cleaning</option>
                    <option>Facility Disinfecting</option>
                    <option>Grounds Services</option>
                    <option>Window Cleaning</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-2xl font-heading font-black text-lg tracking-tight uppercase transition-all hover:scale-[1.02] active:scale-[0.98] glow-blue-strong">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
