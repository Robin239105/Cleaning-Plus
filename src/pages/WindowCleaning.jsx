import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/figma/8ae0c154d013379c51dd41a5526f7a67cd3ee8cd.png';
import reflectionImg from '../assets/figma/70d9d6305a956aa808fe9c7499ff1976c4e345e4.png';

const WindowCleaning = () => {
  React.useEffect(() => {
    document.title = "Commercial Window Cleaning | High-Rise & Storefront Houston | Cleaning Plus";
  }, []);

  const cards = [
    {
      id: 1,
      title: "Crystal-Clear Results",
      text: "Our advanced filtration systems and deionized water ensure a residue-free finish every time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Tailored to Your Property",
      text: "From storefronts to skyscrapers, we customize our approach based on your building's unique architecture.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Detail-Focused Team",
      text: "We don't just clean glass; we wipe sills, clear tracks, and remove cobwebs for a total refresh.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "A Better Business Appearance",
      text: "First impressions are everything. Enhance your curb appeal and let the light in for a better workspace.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-background min-h-screen text-text-primary pt-24 font-heading overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Cleaning Team" className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left">
          <div className="space-y-6 md:space-y-10 max-w-2xl mx-auto md:mx-0">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary uppercase text-[10px] md:text-xs font-black tracking-[2px] md:tracking-widest animate-fade-in">
              Clear Results
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.1] md:leading-none tracking-tighter uppercase">
              Professional <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Window Cleaning</span> <br className="hidden md:block" />
              Services
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-text-secondary font-light leading-relaxed">
              Streak-free, spotless results for commercial buildings of every size — inside and out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5 pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-[#003a5c] px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 glow-blue-strong">
                  Schedule Inspection
                </button>
              </Link>
              <button 
                onClick={() => document.getElementById('methods').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border border-white/10 hover:border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:bg-white/5"
              >
                Our Methods
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="methods" className="py-32 relative">
        {/* Watermark */}
        <div className="absolute top-40 right-0 text-[20vw] font-heading font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter -rotate-12 translate-x-1/4">
          Services
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
              {cards.map((card, idx) => (
                <div key={idx} className={`glass p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-white/5 space-y-4 md:space-y-6 hover:bg-surface-card/60 transition-all group ${idx % 2 === 1 ? 'md:mt-8' : ''}`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-surface-card flex items-center justify-center text-primary border border-white/5 group-hover:scale-110 transition-transform shadow-xl">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-black text-white uppercase tracking-tight leading-tight">{card.title}</h3>
                  <p className="text-xs md:text-sm text-text-secondary font-medium leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            {/* Description Text */}
            <div className="space-y-8 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text-primary uppercase tracking-tighter leading-tight md:leading-none">
                  See the Difference <br className="hidden md:block" />
                  <span className="text-primary">Clearly</span>
                </h2>
              </div>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-xl text-text-secondary font-light leading-relaxed">
                  A building's windows are the eyes to its professional soul. Built-up grime, water spots, and pollutants don't just block the view; they degrade the integrity of your glass over time.
                </p>
                <p className="text-base md:text-xl text-text-secondary font-light leading-relaxed">
                  At Cleaning Plus, we treat commercial window cleaning as a precision science. Using eco-friendly solutions and specialized high-reach equipment, we guarantee a streak-free shine that lasts longer than traditional methods.
                </p>
              </div>
              <div className="relative rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border border-white/5 aspect-video max-w-lg mx-auto lg:mx-0">
                <img src={reflectionImg} alt="Window Reflection" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center space-y-8 md:space-y-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-text-primary uppercase tracking-tighter leading-tight md:leading-none">
            Ready for <br className="md:hidden" />Spotless Windows?
          </h2>
          <p className="text-lg md:text-2xl text-text-secondary font-light max-w-2xl mx-auto">
            Join hundreds of local businesses who trust Cleaning Plus for a crystal-clear professional image.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-4">
            <Link to="/contact" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-primary text-[#003a5c] font-heading font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-2xl glow-blue">
                Get a Free Quote
              </button>
            </Link>
            <div className="flex items-center gap-4 text-white font-heading font-black text-lg md:text-xl uppercase tracking-widest">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.4-3.6-8-8-8v2c3.3 0 6 2.7 6 6zm-4 0h2c0-2.2-1.8-4-4-4v2c1.1 0 2 .9 2 2z"/>
              </svg>
              <a href="tel:832-422-3207" className="hover:text-primary transition-colors">832-422-3207</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowCleaning;
