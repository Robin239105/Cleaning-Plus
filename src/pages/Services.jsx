import React from 'react';
import { Link } from 'react-router-dom';
import commercialImg from '../assets/figma/2820c55403d900bda5ed11043fb62f17805fb066.png';
import disinfectingImg from '../assets/figma/05a476c51fee141d7f4c5624dfb859284d7a86a3.png';
import groundsImg from '../assets/figma/588d746fce8bd7e1029633b713f8a5fd9556605f.png';
import windowImg from '../assets/figma/8ae0c154d013379c51dd41a5526f7a67cd3ee8cd.png';
import heroBg from '../assets/figma/9a255404ef04e849d4448eb0d34a37389e185b77.png';

const Services = () => {
    React.useEffect(() => {
        document.title = "Our Services | Professional Commercial Cleaning in Houston | Cleaning Plus";
    }, []);

    const serviceList = [
        {
            title: "Commercial Services",
            description: "Complete janitorial, porter, and parking lot maintenance solutions for Houston's premier commercial facilities.",
            image: commercialImg,
            link: "/services/commercial",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Disinfecting Services",
            description: "Hospital-grade sanitization and electrostatic fogging to protect your employees and maintain a sterile environment.",
            image: disinfectingImg,
            link: "/services/disinfecting",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Window Cleaning",
            description: "Expert window washing for low and high-rise commercial buildings, providing crystal-clear results every time.",
            image: windowImg,
            link: "/services/window-cleaning",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Grounds Services",
            description: "Comprehensive exterior management, pruning, and seasonal programs to ensure your property's first impression is flawless.",
            image: groundsImg,
            link: "/services/grounds",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-background min-h-screen text-text-primary font-heading">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroBg} alt="Services Overview" className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity" />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full mt-12 md:mt-24">
                    <div className="max-w-3xl space-y-4 md:space-y-6">
                        <span className="text-secondary font-heading font-black tracking-[2px] md:tracking-[3px] uppercase text-xs md:text-sm block text-center md:text-left">Our Expertise</span>
                        <h1 className="text-4xl md:text-6xl lg:text-9xl font-heading font-black leading-[1.1] md:leading-none tracking-tighter uppercase text-center md:text-left">
                            Premium<br />
                            <span className="text-gradient">Custodial</span><br />
                            Solutions
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-medium leading-relaxed max-w-xl mx-auto md:mx-0 text-center md:text-left">
                            From the boardroom to the curb, we deliver the highest standard of facility care in Houston.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-32 px-8 relative overflow-hidden bg-surface-card/10">
                {/* Decorative Background Text */}
                <div className="absolute top-40 right-[-10%] text-[20vw] font-heading font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
                   Expertise
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {serviceList.map((service, idx) => (
                            <Link key={idx} to={service.link} className="group relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-square sm:aspect-[4/3] flex flex-col justify-end p-8 md:p-10 lg:p-14 transition-all hover:scale-[1.02] duration-500 shadow-2xl bg-[#0a0f1e] border border-white/5">
                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:from-background/95 group-hover:via-background/80 transition-all duration-500"></div>
                                
                                <div className="relative z-10 space-y-4 md:space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-primary/20 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-2xl">
                                        {service.icon}
                                    </div>
                                    <div className="space-y-2 md:space-y-4">
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none group-hover:text-secondary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-text-secondary text-base lg:text-xl font-medium leading-relaxed group-hover:text-white transition-colors max-w-md">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="pt-2 md:pt-4 group-hover:translate-x-2 transition-transform duration-500">
                                        <div className="flex items-center gap-4 text-white font-heading font-black text-xs md:text-sm uppercase tracking-widest">
                                            Explore Service 
                                            <span className="hidden sm:block w-16 h-px bg-primary group-hover:w-24 transition-all duration-500"></span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 px-6 md:px-8">
                <div className="max-w-7xl mx-auto rounded-[40px] md:rounded-[64px] overflow-hidden relative shadow-3xl bg-background border border-white/5">
                    <div className="absolute inset-0 z-0">
                       <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    </div>
                    
                    <div className="relative z-10 p-10 md:p-16 lg:p-24 text-center flex flex-col items-center space-y-8 md:space-y-10">
                        <h2 className="text-3xl md:text-5xl lg:text-8xl font-heading font-black text-slate-900 uppercase tracking-tighter leading-[1.1] md:leading-none max-w-5xl">
                            Ready for a Workspace That Reflects Your Excellence?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-800 font-bold max-w-2xl leading-relaxed">
                            Join the ranks of Houston's top-tier facilities. Get a customized custodial strategy built for scale, safety, and superior impressions.
                        </p>
                        <Link to="/contact">
                            <button className="bg-white text-primary px-10 md:px-16 py-4 md:py-6 rounded-full font-heading font-black text-lg md:text-xl uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-2xl">
                                Request a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
