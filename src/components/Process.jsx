import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Free Assessment',
    description: 'We visit your facility to understand specific needs, traffic patterns, and pain points.'
  },
  {
    number: '2',
    title: 'Custom Proposal',
    description: 'A dedicated maintenance plan tailored to your budget and aesthetic goals.'
  },
  {
    number: '3',
    title: 'We Get To Work',
    description: 'Immediate implementation with a dedicated site supervisor for quality control.'
  }
];

const Process = () => {
  return (
    <section className="bg-surface-light py-20 md:py-32 relative overflow-hidden">
      {/* Background Indicator "03" */}
      <div className="absolute top-1/2 left-10 text-[120px] md:text-[320px] font-heading font-black text-primary/10 leading-none select-none pointer-events-none -translate-y-1/2 opacity-20">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center space-y-6 mb-12 md:mb-20">
          <span className="text-primary font-heading font-black text-sm tracking-[2.4px] uppercase">Our Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 uppercase tracking-[-1.5px] leading-tight">
            Streamlined To Perfection
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-8 group">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-heading font-black text-xl shadow-lg transform transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-slate-800 uppercase">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
