import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/figma/588d746fce8bd7e1029633b713f8a5fd9556605f.png';
import ctaBg from '../assets/figma/711b6f20016877111ddf298f3431b05b47e1bd9c.png';

const GroundsServices = () => {
  React.useEffect(() => {
    document.title = "Grounds Services & Maintenance | Commercial Properties Houston | Cleaning Plus";
  }, []);

  const approachCards = [
    { title: "Proven Expertise", text: "Industry-leading horticultural specialists at your service.", icon: "Expertise" },
    { title: "Tailored Plans", text: "Customized schedules that align with your site requirements.", icon: "Plans" },
    { title: "Dependable Service", text: "Reliable execution with zero disruption to your daily operations.", icon: "Service" },
    { title: "Safety & Sustainability", text: "Eco-friendly practices that protect your people and the planet.", icon: "Safety" }
  ];

  const serviceCards = [
    { 
      title: "Grounds Maintenance", 
      text: "Systematic mowing, edging, pruning, and fertilization to keep your green spaces vibrant and uniform.",
      icon: "Mowing"
    },
    { 
      title: "Landscape Enhancements", 
      text: "Strategic planting, hardscaping refreshes, and floral displays designed to modernize your property's aesthetic.",
      icon: "Enhancement"
    },
    { 
      title: "Irrigation", 
      text: "Precision water management and system audits to maximize plant health while minimizing water waste.",
      icon: "Water"
    },
    { 
      title: "Seasonal Cleanup", 
      text: "Full-service debris removal, leaf collection, and winter preparation to ensure property safety year-round.",
      icon: "Cleanup"
    }
  ];

  return (
    <div className="bg-background min-h-screen text-text-primary pt-24 font-heading overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Grounds Services" className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0 space-y-6 md:space-y-8">
            <span className="text-primary-light font-heading font-black tracking-[2px] md:tracking-[3px] uppercase text-xs md:text-sm flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-px bg-primary-light hidden md:block"></span>
              Grounds & Exterior
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter uppercase text-primary text-glow-blue">
              Grounds Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
              Comprehensive grounds maintenance that elevates curb appeal, safety, and your property's lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5 pt-6 md:pt-8">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-[#003a5c] px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 glow-blue-strong">
                  View Maintenance Plans
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-32 relative bg-surface-card/20 overflow-hidden">
        {/* Background Text Decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-[15vw] font-heading font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase rotate-90">
          Approach
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
              {approachCards.map((card, idx) => (
                <div key={idx} className={`glass p-10 rounded-[48px] border-white/5 space-y-6 hover:bg-surface-card/60 transition-all duration-500 hover:-translate-y-2 group ${idx % 2 !== 0 ? 'mt-8' : ''}`}>
                  <div className="w-14 h-14 rounded-full bg-surface-card/80 border border-white/5 flex items-center justify-center text-primary text-xl font-black group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-heading font-black text-text-primary uppercase leading-tight">{card.title}</h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            {/* Approach Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <span className="text-primary-light font-heading font-bold tracking-[2px] uppercase text-xs">The Cleaning Plus Method</span>
              <h2 className="text-5xl lg:text-6xl font-heading font-black text-text-primary uppercase tracking-tighter leading-tight">
                Our Approach
              </h2>
              <p className="text-text-secondary text-lg lg:text-xl font-medium leading-relaxed">
                We don't believe in one-size-fits-all solutions. Our approach starts with a comprehensive audit of your exterior spaces, soil health, and local ecosystem. By developing tailored plans, we ensure your property doesn't just look clean—it thrives sustainably through every season.
              </p>
              <div className="flex items-center gap-4 py-4">
                <div className="w-12 h-0.5 bg-primary-light"></div>
                <span className="text-white font-heading font-black text-xl italic tracking-tight">Precision in every blade.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8 mb-24">
            <h2 className="text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none">
              Comprehensive Grounds & <br />
              <span className="text-primary">Exterior Services</span>
            </h2>
            <p className="text-text-secondary text-lg font-medium leading-relaxed">
              Professional management of every external touchpoint, ensuring a pristine first impression from the curb to the entrance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="glass p-8 md:p-10 rounded-3xl md:rounded-[48px] border-white/5 min-h-[350px] md:h-[400px] flex flex-col justify-between hover:bg-surface-card/40 transition-all duration-500 hover:border-primary/20 group">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-heading font-black text-text-primary uppercase leading-tight tracking-tight">{card.title}</h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl md:rounded-[64px] relative overflow-hidden min-h-[350px] md:h-[400px] flex items-center justify-center shadow-3xl">
          <img src={ctaBg} alt="Lush landscape" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 text-center space-y-8 md:space-y-10 px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-slate-900 uppercase tracking-tighter leading-tight md:leading-none">
              Keep Your Grounds Professional <br className="hidden md:block" />Year-Round
            </h2>
            <Link to="/contact">
              <button className="bg-white text-[#003a5c] font-heading font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroundsServices;
