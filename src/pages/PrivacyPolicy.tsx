// src/pages/PrivacyPolicy.jsx
import React from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800">
            {/* Navbar */}
            <MainNavigation />

            {/* Breadcrumb Section */}
            <section className="bg-gray-50 py-4 px-6 text-sm md:text-base pt-20">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-600">
                    <Link to="/" className="text-green-600 font-medium hover:underline">
                        Home
                    </Link>
                    <span>{">"}</span>
                    <span className="font-semibold">Privacy Policy</span>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto py-16 px-6 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                    Privacy Policy
                </h1>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">1. Introduction</h2>
                        <p>
                            EFICAZ CONSULTANTS PVT LTD (“Company”, “we”, “us”, or “our”) is committed to protecting the privacy and security of your personal information.
                            This Privacy Policy governs our collection, use, and disclosure of your personal information when you visit our website, www.eficaz.biz,
                            or when you engage with our HR & Recruitment services, purchase online courses, or participate in webinars related to HR.
                            By accessing or using our website or services, you consent to the terms of this Privacy Policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">2. Information We Collect</h2>
                        <p>We may collect personal information when you visit our website, register for an account, purchase services or courses, or participate in webinars. This includes:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Contact information (name, email, phone number)</li>
                            <li>Professional information (job title, company name)</li>
                            <li>Payment information (credit card details)</li>
                            <li>Information provided in communications (inquiries, feedback)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">3. Use of Information</h2>
                        <p>We may use the personal information we collect for:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Providing and improving our services, courses, and webinars</li>
                            <li>Communicating about your account, purchases, or inquiries</li>
                            <li>Marketing and promotional purposes</li>
                            <li>Analyzing trends and user behavior to enhance experience</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">4. Sharing of Information</h2>
                        <p>We may share your information:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>With service providers for website operation, payment processing, or service delivery</li>
                            <li>With affiliated companies or partners for marketing or promotions</li>
                            <li>In response to legal requests or required by law</li>
                            <li>In connection with mergers, acquisitions, or asset sales</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">5. Data Security</h2>
                        <p>
                            We take reasonable measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            However, no method of transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">6. Data Retention</h2>
                        <p>
                            We retain your personal information as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer period is required by law.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">7. Your Rights</h2>
                        <p>
                            You may have rights to access, update, or delete your information. To exercise any rights, please contact us using the information below.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">8. Children’s Privacy</h2>
                        <p>
                            Our website and services are not directed to individuals under 18. We do not knowingly collect information from children.
                            If you believe your child has provided information, please contact us and we will remove it.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">9. Changes to Privacy Policy</h2>
                        <p>
                            We may modify this Privacy Policy at any time. Changes will be posted on our website, and continued use after changes constitutes acceptance.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">10. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:info@eficaz.biz" className="text-green-700 underline">info@eficaz.biz</a> or <a href="mailto:info@ashsjobs.com" className="text-green-700 underline">info@ashsjobs.com</a>.
                            By using our website or services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
