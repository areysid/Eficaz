// src/pages/TermsAndConditions.jsx
import React from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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
                    <span className="font-semibold">Terms & Conditions</span>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto py-16 px-6 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                    Terms & Conditions
                </h1>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">1. Introduction</h2>
                        <p>
                            Welcome to the website of EFICAZ CONSULTANTS PVT LTD (“Company”, “we”, “us”, or “our”).
                            These Terms and Conditions (“Terms”) govern your use of our website, including all content, functionality, and services offered on or through www.eficaz.biz (the “Website”).
                            By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">2. Services</h2>
                        <p>
                            EFICAZ CONSULTANTS PVT LTD offers HR and recruitment services to corporate clients and businesses.
                            These services include but are not limited to talent acquisition, staffing, training, and consultancy.
                            By engaging with our services, you agree to abide by the terms and conditions outlined herein.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">3. User Accounts</h2>
                        <p>
                            In order to access certain features of the Website or engage with our services, you may be required to create an account.
                            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                            You agree to notify us immediately of any unauthorized use of your account.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">4. Intellectual Property</h2>
                        <p>
                            The Website and its original content, features, and functionality are owned by EFICAZ CONSULTANTS PVT LTD and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">5. Privacy</h2>
                        <p>
                            Your use of the Website is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                            Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">6. Limitation of Liability</h2>
                        <p>
                            In no event shall EFICAZ CONSULTANTS PVT LTD, nor its directors, employees, partners, agents, suppliers, or affiliates,
                            be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Website; (ii) any conduct or content of any third party on the Website; (iii) any content obtained from the Website; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">7. Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">8. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                            If a revision is material, we will try to provide at least 30 days’ notice prior to any new terms taking effect.
                            What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-green-600 mb-2">9. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at <a href="mailto:info@eficaz.biz" className="text-green-700 underline">info@eficaz.biz</a> or <a href="mailto:info@ashsjobs.com" className="text-green-700 underline">info@ashsjobs.com</a>.
                        </p>
                        <p>By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
