import React from 'react';

const PrivacyPolicy = () => {
    React.useEffect(() => {
        document.title = "Privacy Policy | Cleaning Plus | Houston Custodial Services";
    }, []);

    return (
        <div className="bg-background min-h-screen text-text-primary pt-24 pb-16 md:pt-32 md:pb-20 font-heading">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-12 uppercase tracking-tighter text-center md:text-left">
                    Privacy <span className="text-gradient">Policy</span>
                </h1>
                
                <div className="space-y-12 text-lg text-text-secondary leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Introduction</h2>
                        <p>
                            At Cleaning Plus, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our custodial services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Information Collection</h2>
                        <p>
                            We collect information that you provide directly to us, such as when you request a quote, contact us for support, or sign up for our newsletter. This may include your name, email address, phone number, and building address.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Use of Information</h2>
                        <p>
                            We use the information we collect to provide and improve our services, communicate with you about your account or our services, and send you marketing materials if you have opted in to receive them.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Third-Party Services</h2>
                        <p>
                            We may share your information with third-party service providers who assist us in operating our business and providing services to you. These third parties are required to protect your data and only use it for the purposes we specify.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">6. Changes to this Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Modified" date. We encourage you to review this policy periodically.
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

export default PrivacyPolicy;
