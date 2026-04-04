import React from 'react';
import whyUsImg from '../assets/figma/da992e1448a642f78a2c5706b6cdf91d609cdc31.png';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00a8ff" fillOpacity="0.2" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Expertise',
    description: 'Decades of combined experience in facility management.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11V15.5M12 7V8.5M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Trusted & Bonded',
    description: 'Full liability insurance and rigorous background checks for all staff.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'All-In-One',
    description: 'Eliminate vendor fatigue with our comprehensive service suite.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Eco-Friendly',
    description: 'Green-certified products that protect your space and the environment.'
  }
];

const WhyUs = () => {
  return (
    <section className="bg-background py-20 md:py-32 relative overflow-hidden">
      {/* Background Indicator "02" */}
      <div className="absolute bottom-0 right-10 text-[120px] md:text-[320px] font-heading font-black text-white/[0.03] leading-none select-none pointer-events-none translate-y-[20%]">
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text-primary uppercase tracking-[-1.5px] md:tracking-[-2.4px] leading-tight text-center lg:text-left">
              Built Different.<br />Built for Your Business.
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light text-center lg:text-left">
              As a Houston family-owned team, we don't just hire a building; we add your legacy. We’ve spent over a decade perfecting the art of commercial maintenance, combining industrial-grade technology with personal care that massive corporate giants can't match.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#1e293b] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-text-primary font-heading font-bold">{feature.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image with Decorative Elements */}
        <div className="lg:w-1/2 relative group w-full max-w-2xl mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative rounded-3xl md:rounded-[48px] overflow-hidden border border-white/10 shadow-2xl md:skew-x-[-2deg] transition-transform group-hover:skew-x-0 duration-700">
            <img 
              src={whyUsImg} 
              alt="Cleaning Team" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
