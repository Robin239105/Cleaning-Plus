import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you offer 24/7 commercial cleaning?',
    answer: 'Yes, we provide round-the-clock custodial services tailored to your facility operations, including night shifts and weekend deep cleans.'
  },
  {
    question: 'How do you ensure security in our offices?',
    answer: 'All staff undergo rigorous background checks, are required to wear uniforms and ID badges, and follow strict key/access protocols.'
  },
  {
    question: 'What cleaning supplies do you use?',
    answer: 'We use premium, medical-grade disinfectants and EPA-approved green products to ensure a safe, high-end finish for every surface.'
  },
  {
    question: 'Can we bundle grounds services and cleaning?',
    answer: 'Absolutely. We specialize in comprehensive facility management packages that combine janitorial services with grounds care for a unified solution.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-background py-32 relative overflow-hidden">
      {/* Background Indicator "04" */}
      <div className="absolute top-1/2 left-10 text-[320px] font-heading font-black text-white/[0.03] leading-none select-none pointer-events-none -translate-y-1/2 opacity-20">
        04
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-text-primary uppercase tracking-[-1.5px] leading-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === index ? 'glow-blue border-primary/30' : 'border-white/5'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-heading font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-surface-card flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-primary/20 text-primary' : 'text-text-secondary group-hover:bg-white/10'}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-8 pb-8 text-text-secondary leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
