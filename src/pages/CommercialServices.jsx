import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/figma/2820c55403d900bda5ed11043fb62f17805fb066.png';
import officeImg from '../assets/figma/33849987f102e7e56174aea1ed2fef9f3b4c1dc4.png';
import porterImg from '../assets/figma/016d6739863f19e58b81db644a8c57c9f28490be.png';
import parkingImg from '../assets/figma/803648cf39aeace23cfb4efc78113ac1fe7c561b.png';
import pressureImg from '../assets/figma/3bf001607982e97e78be904739c9397fd99f9c14.png';
import ctaImg from '../assets/figma/62f30ce463173ea701042aba6b23df2d1b9881f7.png';

const CommercialServices = () => {
  React.useEffect(() => {
    document.title = "Commercial Cleaning | Expert Facility Maintenance Houston | Cleaning Plus";
  }, []);

  return (
    <div className="bg-background min-h-screen text-text-primary pt-24 font-heading">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Commercial Building" className="w-full h-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <span className="text-secondary font-heading font-black tracking-[2px] md:tracking-[3px] uppercase text-xs md:text-sm block">What We Offer</span>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-heading font-black leading-[1.1] md:leading-none tracking-tighter uppercase">
              Commercial<br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              Reliable cleaning and facility services — keeping your business sharp inside and out.
            </p>
            <div className="pt-6 md:pt-8 flex justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-primary hover:bg-secondary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 glow-blue-strong">
                  Schedule Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-32 relative bg-surface-card/20">
        {/* Background Text Decoration */}
        <div className="absolute top-20 right-0 text-[18vw] font-heading font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
          Service
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text-primary uppercase tracking-tighter mb-4">
              What's Included
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-secondary rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Office Cleaning - Full Width */}
            <div className="lg:col-span-3 glass rounded-[48px] overflow-hidden group hover:bg-surface-card/40 transition-all duration-500 hover:border-primary/20">
              <div className="grid lg:grid-cols-2">
                <div className="h-[400px] lg:h-full overflow-hidden">
                  <img src={officeImg} alt="Office Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8">
                  <div className="w-16 h-1 bg-primary/30 hidden md:block"></div>
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-text-primary uppercase tracking-tight text-center md:text-left">Office Cleaning</h3>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light md:font-medium text-center md:text-left">
                    Comprehensive janitorial solutions tailored for corporate headquarters, small businesses, and co-working spaces. We focus on touchpoints, high-traffic areas, and executive suites.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-text-primary font-bold uppercase text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Daily & Nightly Sanitization
                    </li>
                    <li className="flex items-center gap-3 text-text-primary font-bold uppercase text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Specialized Floor Care
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button className="text-secondary font-heading font-black text-sm uppercase tracking-widest flex items-center gap-2 group/btn">
                      Learn More
                      <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Porter */}
            <div className="glass rounded-[48px] p-10 flex flex-col space-y-6 hover:bg-surface-card/40 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-black text-text-primary uppercase leading-tight">Maintenance Porter Services</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Steady, reliable daytime presence to maintain lobby appearance, restock restrooms, and respond to immediate facility needs.
              </p>
              <div className="mt-auto pt-6 h-48 rounded-3xl overflow-hidden">
                <img src={porterImg} alt="Porter" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>

            {/* Parking Lot Sweeping */}
            <div className="glass rounded-[48px] p-10 flex flex-col space-y-6 hover:bg-surface-card/40 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-black text-text-primary uppercase leading-tight">Parking Lot Sweeping</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Maintain curb appeal from the moment clients arrive. Our industrial sweeping keeps your exterior pristine and debris-free.
              </p>
              <div className="mt-auto pt-6 h-48 rounded-3xl overflow-hidden">
                <img src={parkingImg} alt="Parking Lot" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>

            {/* Pressure Washing */}
            <div className="glass rounded-[48px] p-10 flex flex-col space-y-6 hover:bg-surface-card/40 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-black text-text-primary uppercase leading-tight">Pressure Washing</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                High-power cleaning for sidewalks, building facades, and entryways. Remove years of grime and restore your building's shine.
              </p>
              <div className="mt-auto pt-6 h-48 rounded-3xl overflow-hidden">
                <img src={pressureImg} alt="Pressure Washing" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl md:rounded-[64px] overflow-hidden relative min-h-[400px] md:min-h-[500px] flex items-center shadow-3xl">
          <div className="absolute inset-0 z-0 bg-surface-card block md:grid md:grid-cols-2">
            <div className="h-full bg-surface-card"></div>
            <div className="h-full bg-gradient-to-br from-primary to-[#41eec2] hidden md:block"></div>
          </div>
          
          <div className="relative z-10 w-full p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="max-w-2xl space-y-6 md:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight uppercase tracking-tighter">
                Let's Build Your<br className="hidden md:block" /> Cleaning Plan
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                Every facility is unique. Get a complimentary professional assessment and a custom custodial strategy designed for your specific business needs.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <Link to="/contact">
                  <button className="bg-white text-primary font-heading font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-2xl">
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-white/20 blur-[50px] rounded-full"></div>
              <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-[48px] overflow-hidden shadow-2xl rotate-3">
                <img src={ctaImg} alt="Cleaning Assessment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white mix-blend-saturation pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialServices;
