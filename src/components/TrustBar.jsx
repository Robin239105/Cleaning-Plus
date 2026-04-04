import React from 'react';

const TrustBar = () => {
  const items = [
    {
      icon: (
        <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0L0 5V12C0 18.55 4.27 24.59 10 26.5C15.73 24.59 20 18.55 20 12V5L10 0Z" fill="#00a8ff" fillOpacity="0.2"/>
          <path d="M10 5.5V20.5" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Licensed & Insured'
    },
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="10" stroke="#00a8ff" strokeWidth="2" fill="#00a8ff" fillOpacity="0.1"/>
          <path d="M8 12.5L11 15.5L17 9.5" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Family-Owned'
    },
    {
      icon: (
        <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2C5.58 2 2 5.58 2 10C2 17.5 10 23 10 23C10 23 18 17.5 18 10C18 5.58 14.42 2 10 2Z" fill="#00a8ff" fillOpacity="0.1" stroke="#00a8ff" strokeWidth="2"/>
          <circle cx="10" cy="10" r="3" fill="#00a8ff"/>
        </svg>
      ),
      label: 'Serving Houston'
    },
    {
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="17" height="17" rx="4" stroke="#00a8ff" strokeWidth="2" fill="#00a8ff" fillOpacity="0.1"/>
          <path d="M6 10.5L9 13.5L15 7.5" stroke="#00a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'EPA-Approved'
    }
  ];

  return (
    <section className="bg-surface-card border-y border-border-subtle py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x border-border-subtle/20">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-4 px-4">
              <div className="shrink-0">{item.icon}</div>
              <span className="font-heading font-bold text-sm tracking-tight text-text-primary uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
