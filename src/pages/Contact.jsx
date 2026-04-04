import React, { useState } from 'react';
import houstonMap from '../assets/figma/1ea9d3a70f2b8e36309dc30cc2eb1c5beb6efb5e.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Commercial Office Cleaning',
    message: '',
    website: '' // Honeypot field
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  React.useEffect(() => {
    document.title = "Contact Us | Get a Free Quote for Cleaning Services in Houston | Cleaning Plus";
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.website) {
      console.warn("Spam detected");
      return;
    }

    if (!validateForm()) return;

    setStatus('loading');

    // MOCK SUBMISSION - Prepared for Resend integration later
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Commercial Office Cleaning',
        message: '',
        website: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-background min-h-screen text-text-primary pt-24 font-heading overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[614px] flex items-center overflow-hidden pt-32 pb-40" style={{ background: 'linear-gradient(154.37deg, #090e1c 0%, #003a5c 50%, #090e1c 100%)' }}>
        {/* Background Glow */}
        <div className="absolute top-[-400px] right-[-266px] w-full h-full bg-[#95ccff] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full animate-fade-in group">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            {/* GET IN TOUCH Badge */}
            <div className="bg-[#95ccff]/10 border border-[#95ccff]/20 px-[14px] md:px-[17px] py-[4px] md:py-[5px] rounded-full transition-all duration-500 hover:bg-[#95ccff]/20">
              <span className="text-[#95ccff] text-[10px] md:text-[12px] font-bold tracking-[2px] md:tracking-[2.4px] uppercase">
                Get In Touch
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[48px] md:text-[96px] font-heading font-black leading-[1.1] md:leading-[0.9] tracking-[-2px] md:tracking-[-4.8px] text-white drop-shadow-[0px_0px_20px_rgba(0,168,255,0.4)]">
              Let's Work <br />
              Together
            </h1>

            {/* Subheading */}
            <p className="max-w-[672px] pt-2 text-[#bec7d3] text-[18px] md:text-[24px] font-light leading-relaxed">
              Schedule your free facility assessment — no obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 relative z-20 -mt-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-4">
              <h2 className="text-[36px] font-heading font-black text-white uppercase tracking-[-0.9px] leading-[40px]">
                Reach Out Directly
              </h2>
              <p className="text-[18px] text-[#bec7d3] leading-[29.25px]">
                Our team is standing by to help you design a customized custodial plan that fits your facility's unique operational needs.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Call Card */}
              <div className="bg-[#1a1f2f] border border-[#3e4852]/10 p-[25px] rounded-[48px] flex items-center gap-6 group transition-all duration-300 hover:bg-[#25293a]">
                <div className="w-[56px] h-[56px] rounded-full bg-[#25293a] flex items-center justify-center text-[#95ccff] group-hover:scale-110 transition-transform">
                  <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-[#95ccff] text-[12px] font-bold uppercase tracking-[1.2px] mb-1">Call Us</div>
                  <div className="text-[20px] font-black text-white tracking-[-0.5px]">832-422-3207</div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#1a1f2f] border border-[#3e4852]/10 p-[25px] rounded-[48px] flex items-center gap-6 group transition-all duration-300 hover:bg-[#25293a]">
                <div className="w-[56px] h-[56px] rounded-full bg-[#25293a] flex items-center justify-center text-[#95ccff] group-hover:scale-110 transition-transform">
                  <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-[#95ccff] text-[12px] font-bold uppercase tracking-[1.2px] mb-1">Email Support</div>
                  <div className="text-[20px] font-black text-white tracking-[-0.5px]">1@cleaningpcc.com</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#3e4852]/10 flex flex-col gap-6">
              <div className="text-[#bec7d3] text-[12px] font-black uppercase tracking-[2.4px]">Connect on Social</div>
              <div className="flex gap-[16px]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-[48px] h-[48px] rounded-full bg-[#25293a] flex items-center justify-center text-[#bec7d3] hover:text-[#95ccff] transition-all cursor-pointer">
                    <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                      {i === 1 ? (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      ) : i === 2 ? (
                        <path d="M12.315 2c2.43 0 2.784.012 3.855.06 1.07.049 1.815.27 2.45.517.656.255 1.21.597 1.764 1.151.554.554.896 1.108 1.151 1.764.247.635.468 1.38.517 2.45.048 1.07.06 1.425.06 3.855s-.012 2.784-.06 3.855c-.049 1.07-.27 1.815-.517 2.45a4.887 4.887 0 01-1.151 1.764c-.554.554-1.108.896-1.764 1.151-.635.247-1.38.468-2.45.517-1.07.048-1.425.06-3.855.06s-2.784-.012-3.855-.06c-1.07-.049-1.815-.27-2.45-.517a4.887 4.887 0 01-1.764-1.151 4.887 4.887 0 01-1.151-1.764c-.247-.635-.468-1.38-.517-2.45-.048-1.07-.06-1.425-.06-3.855s.012-2.784.06-3.855c.049-1.07.27-1.815.517-2.45.255-.656.597-1.21 1.151-1.764.554-.554 1.108-.896 1.764-1.151.635-.247 1.38-.468 2.45-.517 1.07-.048 1.425-.06 3.855-.06zm-1.1 12.485c2.035 0 3.689-1.654 3.689-3.69 0-2.035-1.654-3.688-3.69-3.688-2.035 0-3.69 1.653-3.69 3.688 0 2.036 1.655 3.69 3.69 3.69zm5.272-7.873a1.04 1.04 0 100-2.08 1.04 1.04 0 000 2.08z" />
                      ) : (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#090e1c] px-6 py-12 md:px-[49px] md:pt-[49px] md:pb-[65px] rounded-[32px] md:rounded-[48px] border border-[#3e4852]/10 shadow-[0px_40px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden min-h-[600px] flex flex-col justify-center">
              {/* Corner Glow */}
              <div className="absolute -top-16 -right-16 size-[128px] bg-[#95ccff]/5 blur-[20px] rounded-full"></div>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center animate-fade-in relative z-10">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Request Received!</h3>
                  <p className="text-[#bec7d3] text-lg mb-8 leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will review your information and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-primary-light font-bold uppercase tracking-[2px] text-xs hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                    {/* Honeypot field - hidden from users */}
                    <div className="hidden" aria-hidden="true">
                      <input 
                        type="text" 
                        name="website" 
                        tabIndex="-1" 
                        autoComplete="off" 
                        value={formData.website} 
                        onChange={handleChange} 
                      />
                    </div>

                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label className="text-[#bec7d3] text-[12px] font-bold uppercase tracking-[0.6px] mb-2 pl-1">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className={`bg-transparent border-b-2 ${errors.fullName ? 'border-red-500/50' : 'border-[#3e4852]'} py-4 px-3 text-white placeholder:text-[#88929d]/50 focus:border-[#00a8ff] outline-none transition-all`} 
                      />
                      {errors.fullName && <span className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.fullName}</span>}
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[#bec7d3] text-[12px] font-bold uppercase tracking-[0.6px] mb-2 pl-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com" 
                        className={`bg-transparent border-b-2 ${errors.email ? 'border-red-500/50' : 'border-[#3e4852]'} py-4 px-3 text-white placeholder:text-[#88929d]/50 focus:border-[#00a8ff] outline-none transition-all`} 
                      />
                      {errors.email && <span className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-[#bec7d3] text-[12px] font-bold uppercase tracking-[0.6px] mb-2 pl-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(832) 000-0000" 
                        className={`bg-transparent border-b-2 ${errors.phone ? 'border-red-500/50' : 'border-[#3e4852]'} py-4 px-3 text-white placeholder:text-[#88929d]/50 focus:border-[#00a8ff] outline-none transition-all`} 
                      />
                      {errors.phone && <span className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.phone}</span>}
                    </div>

                    {/* Service Interest */}
                    <div className="flex flex-col">
                      <label className="text-[#bec7d3] text-[12px] font-bold uppercase tracking-[0.6px] mb-2 pl-1">Service Interested In</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-[#3e4852] py-4 px-3 text-white focus:border-[#00a8ff] outline-none appearance-none cursor-pointer"
                        >
                          <option className="bg-[#090e1c]">Commercial Office Cleaning</option>
                          <option className="bg-[#090e1c]">Disinfecting Services</option>
                          <option className="bg-[#090e1c]">Landscaping & Grounds</option>
                          <option className="bg-[#090e1c]">Window Cleaning</option>
                        </select>
                        <svg className="w-5 h-5 absolute right-3 bottom-5 text-white/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2 flex flex-col">
                      <label className="text-[#bec7d3] text-[12px] font-bold uppercase tracking-[0.6px] mb-2 pl-1">Additional Information</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your facility size or specific needs..." 
                        rows="3" 
                        className="bg-transparent border-b-2 border-[#3e4852] py-4 px-3 text-white placeholder:text-[#88929d]/50 focus:border-[#00a8ff] outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-12">
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full bg-[#00a8ff] py-5 rounded-full text-[#003a5c] text-[16px] font-black uppercase tracking-[1.6px] shadow-[0px_20px_25px_-5px_rgba(0,194,255,0.1),0px_8px_10px_-6px_rgba(0,168,255,0.1)] transition-all flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-[#003a5c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Send My Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Houston Map Section */}
      <section className="py-48 relative bg-[#161b2b] overflow-hidden flex flex-col items-center justify-center min-h-[1100px]">
        {/* Background HOUSTON Watermark - Responsive size */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <span className="text-[80px] md:text-[200px] lg:text-[320px] font-heading font-black text-white/[0.05] uppercase tracking-tighter leading-none select-none pointer-events-none">
            HOUSTON
          </span>
        </div>

        {/* Background Skyline Image - High coverage coverage */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end">
          <div className="h-[600px] w-full relative">
            <img 
              src={houstonMap} 
              alt="Houston Skyline" 
              className="w-full h-full object-cover object-top opacity-40 mix-blend-screen" 
              style={{ maskImage: 'linear-gradient(to top, black 70%, transparent 100%)' }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-8 relative z-20 text-center flex flex-col items-center">
          {/* Pin Icon */}
          <div className="w-20 h-20 rounded-full bg-[#95ccff]/10 border border-[#95ccff]/20 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(0,194,255,0.1)] backdrop-blur-sm">
            <svg className="w-8 h-8 text-[#95ccff]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          <div className="space-y-6 mb-16">
            <h2 className="text-[48px] font-heading font-black text-white uppercase tracking-[-2.4px] leading-none">
              Based in Houston, TX
            </h2>
            <p className="text-[20px] text-[#95ccff] font-bold uppercase tracking-[0.2em]">
              Serving the Greater Houston Area
            </p>
          </div>

          {/* Service Area Tags - Exact Figma Layout */}
          <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Midtown", "The Woodlands", "Sugar Land", "Katy", "Pearland"].map((area, idx) => (
                <div key={idx} className="backdrop-blur-[4px] bg-[#0e1322]/50 border border-[#3e4852]/30 px-10 py-3 rounded-full text-[#bec7d3] text-[14px] font-bold uppercase tracking-[1.4px]">
                  {area}
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Cypress", "Humble"].map((area, idx) => (
                <div key={idx} className="backdrop-blur-[4px] bg-[#0e1322]/50 border border-[#3e4852]/30 px-10 py-3 rounded-full text-[#bec7d3] text-[14px] font-bold uppercase tracking-[1.4px]">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
