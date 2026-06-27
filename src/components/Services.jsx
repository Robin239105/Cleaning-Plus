import React from 'react';

const services = [
  {
    icon: (
      <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2V26M19 2V26M4 14H19M4 7H19M4 21H19" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Commercial Cleaning',
    description: 'Janitorial solutions tailored to your business schedule, from daily maintenance to specialized deep cleans.'
  },
  {
    icon: (
      <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 2V23M5 5L18 5M8 10L15 10M11.5 15V20" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Disinfecting',
    description: 'Medical-grade sanitization using EPA-approved products to keep your employees and clients safe.'
  },
  {
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="17" height="17" rx="2" stroke="#dee1f7" strokeWidth="2"/>
        <path d="M3 10H20M10 3V20" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Window Cleaning',
    description: 'Streak-free clarity for high-rise and commercial storefronts using advanced purification systems.'
  },
  {
    icon: (
      <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 17.5L20.5 17.5M4.5 14L18.5 14M6.5 10.5L16.5 10.5M8.5 7L14.5 7M10.5 3.5L12.5 3.5" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Parking Lot Sweeping',
    description: 'Detailed debris removal and maintenance for industrial parks, retail centers, and office garages.'
  },
  {
    icon: (
      <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 19L25 19M5 14L22 14M8 9L19 9M11 4L16 4M13.5 1.5C14.5 1.5 15.5 2.5 15.5 3.5" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Pressure Washing',
    description: 'High-pressure restoration for sidewalks, brickwork, and facades to remove years of Houston grime.'
  },
  {
    icon: (
      <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 2C15 2 18 5 18 8.5C18 12 11.5 23 11.5 23C11.5 23 5 12 5 8.5C5 5 8 2 11.5 2Z" stroke="#dee1f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11.5" cy="8.5" r="2.5" fill="#dee1f7"/>
      </svg>
    ),
    title: 'Landscaping',
    description: 'Exterior maintenance that preserves curb appeal and ensures a professional first impression year-round.'
  }
];

const Services = () => {
  return (
    <section className="bg-background py-20 md:py-32 relative overflow-hidden" id="services">
      {/* Background Section Indicator "01" */}
      <div className="absolute top-0 left-10 text-[120px] md:text-[320px] font-heading font-black text-white/[0.03] leading-none select-none pointer-events-none -translate-y-[20%]">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="space-y-4 mb-12 md:mb-20 text-center md:text-left">
          <div className="bg-primary-light h-1.5 w-20 rounded-full mb-6 mx-auto md:mx-0"></div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-text-primary uppercase tracking-[-1.5px] md:tracking-[-2.4px] leading-tight">
            Everything Your<br />Facility Needs
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group glass border-white/[0.05] p-8 md:p-10 rounded-3xl md:rounded-[48px] hover:bg-surface-card/60 transition-all duration-700 hover:-translate-y-4 hover:glow-blue hover:border-border-hover/30 delay-[${index * 100}ms]`}
            >
              <div className="w-[64px] h-[64px] rounded-full bg-[#25293a] flex items-center justify-center mb-10 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-6 group-hover:text-primary transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-[1.65] font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
