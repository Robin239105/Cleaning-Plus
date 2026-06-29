import React from 'react';

const TermsConditions = () => {
    React.useEffect(() => {
        document.title = "Terms & Conditions | Cleaning Plus | Reliable Houston Cleaning";
    }, []);

    return (
        <div className="bg-background min-h-screen text-text-primary pt-24 pb-16 md:pt-32 md:pb-20 font-heading">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-12 uppercase tracking-tighter text-center md:text-left">
                    Terms & <span className="text-gradient">Conditions</span>
                </h1>
                
                <div className="space-y-12 text-lg text-text-secondary leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the services provided by Cleaning Plus, you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, you are prohibited from using our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Services</h2>
                        <p>
                            Cleaning Plus provides commercial custodial, disinfecting, grounds, and window cleaning services. The specific scope of work for any given project will be outlined in a separate service agreement or quote.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. User Obligations</h2>
                        <p>
                            Users agree to provide accurate information when requesting a quote or contacting us. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, and images, is the property of Cleaning Plus and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Limitation of Liability</h2>
                        <p>
                            Cleaning Plus shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Our total liability for any claim arising out of our services shall not exceed the amount paid for those services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">6. Governing Law</h2>
                        <p>
                            These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal action related to these terms shall be brought in the courts located in Houston, Texas.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-white/5">
                        <p className="text-sm font-light italic">Last Updated: April 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
