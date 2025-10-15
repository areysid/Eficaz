// src/pages/GuideToDiversityRecruitment.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

export default function Blog3() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <MainNavigation />

      {/* Breadcrumb Section */}
      <section className="bg-gray-50 py-4 px-6 text-sm md:text-base pt-20">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-600">
          <Link to="/diversity" className="text-green-600 font-medium hover:underline">
            Diversity
          </Link>
          <span>{">"}</span>
          <span className="font-semibold">Diversity in Recruitment in India</span>
        </div>
      </section>

      {/* Hero + Title Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-2/5">
          <img
            src="/blogs/blog3.jpg"
            alt="Diversity in Recruitment in India"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Title & Intro */}
        <div className="md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Diversity in Recruitment in India
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Diversity in recruitment has become a pivotal focus for organizations across India. 
            Embracing employees from various backgrounds not only fulfills a moral imperative 
            but also strengthens organizational innovation, employee satisfaction, and long-term growth.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          In India, diversity in recruitment encompasses hiring individuals from various backgrounds, including gender, ethnicity, age, sexual orientation, and abilities. The country’s rich cultural tapestry makes embracing diversity not just a moral imperative but a strategic necessity.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Recent trends indicate a marked increase in diversity hiring practices across India. For instance, a 26% annual growth in diversity hiring has been recorded, particularly among multinational companies. A 2024 report by the Economic Diplomacy Division of India states that India has witnessed a 33% surge in diversity hiring due to the critical role played by D&I policies. Industries such as BFSI, IT-Software & Services, Healthcare, Internet/E-commerce, and Education are at the forefront of diversity hiring. Metropolitan areas like Bengaluru, Delhi-NCR, and Mumbai have emerged as key hubs, actively focusing on creating job opportunities for women, persons with disabilities, and the LGBTQIA+ community.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-8">Why Diversity Matters</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          One primary reason diversity is important lies in its capacity to enhance innovation and creativity. A diverse workforce brings together varied perspectives and experiences, fostering an environment ripe for creative solutions. Research indicates that companies with gender-diverse teams are 25% more likely to achieve above-average profitability compared to less diverse counterparts. Leveraging gender and other diverse viewpoints allows organizations to address complex challenges through innovative approaches.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Moreover, diversity contributes significantly to employee satisfaction and retention. An inclusive workplace culture where employees feel valued and respected enhances job satisfaction and reduces turnover rates. Employees prefer working at organizations that prioritize diversity and inclusion, which in turn strengthens the employer brand and attracts top talent.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Embracing diversity in recruitment is not merely a trend but a strategic advantage for Indian organizations aiming for long-term success. By fostering an inclusive work environment that values diverse perspectives, businesses can enhance innovation, improve employee satisfaction, attract top talent, and better serve their customers. Prioritizing diversity will be essential in shaping a resilient and competitive workforce capable of navigating future challenges.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
