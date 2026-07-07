import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/figma/33633acf47ad9d5d72c4f4d025445522f95c846a.png';
import storyImg from '../assets/figma/13ae8b2a16d13be15432614a8fdc417f8cc9426b.png';

const About = () => {
  React.useEffect(() => {
    document.title = "About Us | Houston's Trusted Custodial Contractor | Cleaning Plus";
  }, []);

  const strengths = [
    { 
      id: "01", 
      title: "10 Years of Excellence", 
      text: "A decade of serving Houston's high-rises, medical facilities, and industrial hubs with consistent quality."
    },
    { 
      id: "02", 
      title: "Tailored Solutions", 
      text: "We don't do cookie-cutter. Every cleaning plan is engineered specifically for your facility's unique footprint."
    },
    { 
      id: "03", 
      title: "Continuous Improvement", 
      text: "Adopting the latest in antimicrobial coatings and HEPA filtration to keep your workspace truly safe."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-text-primary pt-24 font-heading overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Houston Skyline" className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center space-y-6 md:space-y-8">
          <span className="text-secondary font-heading font-black tracking-[2px] md:tracking-[3px] uppercase text-xs md:text-sm">Our Story</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black leading-[1.1] md:leading-none tracking-tighter uppercase">
            About Us
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-text-secondary font-medium leading-relaxed max-w-3xl mx-auto">
            A Houston family business built on trust, hard work, and a genuine commitment to clean.
          </p>
        </div>
      </section>

      {/* Who We Are - Story Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 blur-[80px] -z-10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 blur-[60px] -z-10 rounded-full"></div>
              
              <div className="relative rounded-[48px] overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]">
                <img src={storyImg} alt="Our Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-5xl lg:text-7xl font-heading font-black text-text-primary uppercase tracking-tighter leading-none">
                Who We Are
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-text-secondary font-medium leading-relaxed italic">
                  Cleaning Plus was founded on the belief that commercial spaces deserve more than just a surface sweep. We treat every facility as if it were our own family office.
                </p>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-lg text-text-secondary font-light leading-relaxed">
                  Based in the heart of Houston, our legacy is built on the sweat and dedication of a team that understands the local business environment. We aren't just a contractor; we are your neighbors in professional excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-surface/30 relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="glass p-12 lg:p-16 rounded-[48px] border-white/5 space-y-8 hover:bg-surface-card/60 transition-all group shadow-3xl">
              <div className="w-16 h-16 rounded-3xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tight">Our Mission</h3>
              <p className="text-lg text-text-secondary font-medium leading-relaxed">
                To provide Houston's enterprises with unparalleled custodial precision through innovative cleaning technologies and a culture of radical accountability.
              </p>
            </div>

            {/* Vision */}
            <div className="glass p-12 lg:p-16 rounded-[48px] border-white/5 space-y-8 hover:bg-surface-card/60 transition-all group shadow-3xl">
              <div className="w-16 h-16 rounded-3xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tight">Our Vision</h3>
              <p className="text-lg text-text-secondary font-medium leading-relaxed">
                To redefine the standard of commercial cleanliness, becoming the most trusted custodial partner in Texas by prioritizing employee well-being and environmental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths / Values Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Text Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-heading font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
          Values
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {strengths.map((str, idx) => (
              <div key={idx} className="bg-surface-card p-12 rounded-[48px] border-t-4 border-primary space-y-8 hover:-translate-y-2 transition-all duration-500 shadow-2xl group">
                <span className="text-5xl font-heading font-black text-primary/20 block group-hover:text-primary/40 transition-colors">{str.id}</span>
                <h4 className="text-2xl font-heading font-black text-white uppercase tracking-tight leading-tight">{str.title}</h4>
                <p className="text-text-secondary font-medium leading-relaxed">{str.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 border-l-[8px] md:border-l-[12px] border-primary bg-surface/10 ml-4 md:ml-8 lg:ml-24">
        <div className="max-w-4xl px-6 md:px-16 space-y-8 md:space-y-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-text-primary uppercase tracking-tighter leading-[1.1] md:leading-[0.9]">
            Our Commitment to <br />
            Houston Businesses
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl">
            We view our relationship with clients as a long-term partnership. Our commitment goes beyond the contract; it’s about providing a foundation of hygiene that allows your business to thrive, your employees to feel safe, and your brand to shine.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-4 text-primary-light font-heading font-black text-lg md:text-xl uppercase tracking-widest group transition-all">
              <span className="group-hover:mr-4 transition-all duration-300">Partner with us</span>
              <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
