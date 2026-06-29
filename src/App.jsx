import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DisinfectingServices from './pages/DisinfectingServices';
import CommercialServices from './pages/CommercialServices';
import GroundsServices from './pages/GroundsServices';
import About from './pages/About';
import WindowCleaning from './pages/WindowCleaning';
import Contact from './pages/Contact';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/disinfecting" element={<DisinfectingServices />} />
              <Route path="/services/commercial" element={<CommercialServices />} />
              <Route path="/services/grounds" element={<GroundsServices />} />
              <Route path="/services/window-cleaning" element={<WindowCleaning />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
