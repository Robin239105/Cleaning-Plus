import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import StatsBanner from '../components/StatsBanner';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const Home = () => {
  React.useEffect(() => {
    document.title = "Cleaning Plus | #1 Commercial Cleaning & Custodial Services in Houston, TX";
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <StatsBanner />
      <WhyUs />
      <Process />
      <FAQ />
      <CTASection />
    </>
  );
};

export default Home;
