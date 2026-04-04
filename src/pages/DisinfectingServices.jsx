import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/figma/05a476c51fee141d7f4c5624dfb859284d7a86a3.png';
import featuredImg from '../assets/figma/1ff7dc8adc42126338beae3e3a95fda184a852f6.png';

const DisinfectingServices = () => {
  React.useEffect(() => {
    document.title = "Disinfecting Services | Medical-Grade Sanitization in Houston | Cleaning Plus";
  }, []);

  const faqs = [
    {
      question: "What locations do you serve?",
      answer: "We provide comprehensive disinfecting services to corporate offices, healthcare facilities, retail centers, and industrial warehouses across the greater metropolitan area. Contact us for specific regional coverage."
    },
    {
      question: "How do you create a custom disinfection plan?",
      answer: "Our specialists conduct a thorough facility walkthrough to identify high-touch zones, high-traffic areas, and specific risk factors. We then tailor a schedule and application method (foggings, electrostatic, or manual) that fits your operations."
    },
    {
      question: "What types of disinfectants are used?",
      answer: "We use only EPA List N disinfectants, proven effective against SARS-CoV-2 and other emerging viral pathogens. These solutions are non-corrosive and safe for electronics and textile surfaces when applied by our specialists."
    },
    {
      question: "How is the pricing determined?",
      answer: "Pricing is based on facility square footage, frequency of service, and the specific decontamination methods required. We provide transparent, no-obligation quotes after an initial assessment."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-text-primary font-heading">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Disinfecting Services" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 pt-20 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0 space-y-6 md:space-y-8">
            <div className="inline-flex items-center bg-primary/20 border border-primary/30 px-5 py-2 rounded-full">
              <span className="text-primary-light text-[10px] md:text-[12px] font-bold tracking-[2px] md:tracking-[2.8px] uppercase">
                Health & Safety
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-[1.1] md:leading-[1] tracking-[-1.5px] md:tracking-[-2.4px] uppercase">
              Professional<br />
              <span className="text-gradient">Disinfecting Services</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-medium leading-[1.6] max-w-2xl mx-auto md:mx-0">
              Hospital-grade protection for commercial spaces — keeping your people safe and your property compliant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5 pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 glow-blue-strong">
                  Schedule Sanitization
                </button>
              </Link>
              <button 
                onClick={() => document.getElementById('protocols').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border border-border-hover/30 hover:border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:bg-white/5"
              >
                Explore Safety Protocols
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Us */}
      <section id="protocols" className="py-32 relative bg-surface-card/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-10 relative text-center lg:text-left">
             {/* Decorative Text */}
            <div className="absolute -top-12 md:-top-20 -left-4 md:-left-10 text-[100px] md:text-[160px] font-heading font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
              Safety
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-text-primary uppercase tracking-[-1.5px] leading-tight">
                Why Businesses Trust Our<br className="hidden md:block" /> Disinfecting Services
              </h2>
              <div className="space-y-6 text-base md:text-lg text-text-secondary leading-relaxed font-light md:font-medium max-w-xl mx-auto lg:mx-0">
                <p>
                  In a world where health standards have been fundamentally redefined, Cleaning Plus provides the scientific rigor required to maintain a truly safe workspace. We don't just clean for appearance; we decontaminate for absolute safety.
                </p>
                <p>
                  Our protocols are built on CDC guidelines and utilize EPA-registered broad-spectrum disinfectants that neutralize 99.9% of pathogens on contact, ensuring your staff and clients breathe easier every day.
                </p>
              </div>
            </div>

            <div className="rounded-3xl md:rounded-[44px] overflow-hidden shadow-2xl border border-white/5 relative group max-w-lg mx-auto lg:mx-0">
              <img src={featuredImg} alt="Sterile cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: 'shield', title: 'Effective Protection', text: 'EPA-registered disinfectants that eliminate 99.9% of viral and bacterial contaminants.' },
              { icon: 'target', title: 'Tailored Service Plans', text: 'Custom schedules and focused zones based on your facility\'s foot traffic and risk levels.' },
              { icon: 'sparkle', title: 'Professional-Grade Results', text: 'Utilizing electrostatic sprayers and fogging technology for 360-degree surface coverage.' },
              { icon: 'check', title: 'Detail-Focused Care', text: 'OSHA-certified technicians trained in high-stakes environment decontamination.' }
            ].map((item, index) => (
              <div key={index} className="glass p-10 rounded-[44px] border-white/5 hover:bg-surface-card/40 transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-primary text-2xl font-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-heading font-black text-text-primary uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-text-secondary font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-text-primary uppercase tracking-[-1.5px] leading-tight">
              Service Insights & FAQs
            </h2>
            <p className="text-text-secondary text-lg font-medium">
              Everything you need to know about our custodial safety standards.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface-card/40 rounded-[32px] p-8 border border-white/5 hover:border-primary/20 transition-all">
                <h4 className="text-lg font-heading font-black text-text-primary uppercase mb-4">{faq.question}</h4>
                <p className="text-text-secondary font-medium leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto rounded-3xl md:rounded-[64px] overflow-hidden bg-gradient-to-r from-primary to-accent p-8 md:p-16 lg:p-20 relative">
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-slate-900 tracking-[-1.5px] md:tracking-[-2px] uppercase leading-tight">
              Protect Your<br className="md:hidden" /> Facility Today
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-800 font-bold max-w-3xl leading-relaxed">
              Join the hundreds of businesses that trust Cleaning Plus to maintain a safe, sterile, and professional environment for their employees.
            </p>
            <Link to="/contact">
              <button className="bg-background text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-heading font-black text-base md:text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-2xl text-center">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisinfectingServices;
