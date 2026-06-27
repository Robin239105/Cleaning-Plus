import React from 'react';

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '10+', label: 'Years in Business' },
  { value: '6', label: 'Service Types' },
  { value: 'HOU', label: 'Houston and surrounding areas' }
];

const StatsBanner = () => {
  return (
    <section className="bg-background relative py-20 overflow-hidden border-b border-white/5">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 group transition-transform hover:scale-105">
              <div className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-primary-light uppercase tracking-tight group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-[9px] md:text-[10px] lg:text-xs font-heading font-bold text-text-muted uppercase tracking-[1px] md:tracking-[2px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
