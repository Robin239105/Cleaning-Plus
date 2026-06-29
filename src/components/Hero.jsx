import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/figma/9a255404ef04e849d4448eb0d34a37389e185b77.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Saturation & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Modern Houston Office" 
          className="absolute h-full w-full object-cover opacity-60 mix-blend-saturation grayscale"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full mt-12">
        <div className="max-w-4xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-[rgba(0,168,255,0.2)] border border-[rgba(149,204,255,0.3)] px-4 md:px-5 py-2 rounded-full transform transition-all hover:scale-105 cursor-default">
            <span className="text-white text-[10px] md:text-[12px] font-bold tracking-[2px] md:tracking-[2.4px] uppercase whitespace-nowrap">
              Houston's #1 Custodial Contractor
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-[92px] font-black text-white leading-[1.1] lg:leading-[1.1] tracking-[-2px] lg:tracking-[-4px] font-heading">
            We Keep Houston's <br className="hidden md:block" />
            Businesses <br />
            <span className="text-gradient">Spotless.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-xl lg:text-[24px] text-white font-medium leading-[1.5] md:leading-[1.4] max-w-2xl bg-background/20 backdrop-blur-sm rounded-lg p-1 md:p-0">
            Commercial cleaning, disinfecting, grounds & facility services — all under one trusted, family-owned team.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-extrabold text-base md:text-[18px] uppercase tracking-[-0.45px] transition-all hover:scale-105 active:scale-95 glow-blue-strong">
                Request a Free Quote
              </button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto backdrop-blur-[2px] border border-[rgba(255,255,255,0.2)] hover:border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-extrabold text-base md:text-[18px] uppercase tracking-[-0.45px] transition-all hover:bg-white/10">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-text-primary text-[10px] font-bold tracking-[1px] uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8L10 13L15 8" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
