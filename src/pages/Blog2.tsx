// src/pages/GuideToWorkWithDisability.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

export default function Blog2() {
  const tips = [
    {
      title: "House that inside your hiring policy",
      description:
        "Embed Diversity Inclusion in the recruitment policy. It should be an integral part of the organization's mission rather than just a superficial message on walls or newsletters.",
    },
    {
      title: "Scale company policy to be more considerate",
      description:
        "Include events, holidays, and activities that cater to team members from all backgrounds. Offer flexible working hours, open-dialogue meetings, and a welcoming environment for collaboration.",
    },
    {
      title: "Restructure recruitment announcements",
      description:
        "Rework posts, ads, and announcements to increase the diversity of applicants. Stay open to candidates from various demographics, experience levels, and skill sets.",
    },
    {
      title: "Rewards for referrals",
      description:
        "Incentivize employees who refer diverse talent. This leverages the existing network and brings in high-quality candidates while promoting inclusion.",
    },
    {
      title: "Pro-disability inclusion, anti-discrimination",
      description:
        "Train staff to be mindful and inclusive of employees with disabilities. Implement mandatory training to prevent discrimination and sustain PwD talent in the organization.",
    },
    {
      title: "A segment of budget cut out specially for that",
      description:
        "Allocate budget for software, hardware, furniture, signage, and assistive devices. Examples include screen readers, braille keyboards, large monitors, and accessible workstations.",
    },
    {
      title: "Audit for safety and maintenance",
      description:
        "Conduct monthly audits to ensure assistive devices are safe, functional, and actually helpful. Make structural adjustments to workstations to maintain comfort and productivity.",
    },
    {
      title: "Internship programs with broadened reach",
      description:
        "Designate a number of internship seats for candidates with disabilities. Recruit through community groups to ensure a fair and open selection process.",
    },
    {
      title: "Equal pay",
      description:
        "Implement and enforce equal pay policies to encourage diversity, attract great talent, and eliminate pay discrimination.",
    },
  ];

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
          <span className="font-semibold">Tips for Diversity Inclusion</span>
        </div>
      </section>

      {/* Hero + Title Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-2/5">
          <img
            src="/blogs/blog2.jpg"
            alt="Guide to Work with Persons with Disability"
            className="w-full h-auto"
          />
        </div>

        {/* Title & Intro */}
        <div className="md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            9 Tips To Bring Your Diversity Inclusion Operations into Full Swing
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Building a truly inclusive workplace requires proactive policies, awareness,
            and tangible actions. Here are nine strategies to help organizations embed
            diversity and inclusion into their operations effectively.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        <p className="text-gray-700 leading-relaxed text-lg">
          Inclusion starts with embedding diversity into organizational practices and
          creating an environment where employees from all backgrounds can thrive.
        </p>

        <h2 className="text-2xl font-semibold text-green-600">Key Strategies</h2>
        <div className="space-y-8">
          {tips.map((tip, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-xl font-semibold text-green-700">{tip.title}</h3>
              <p className="text-gray-700 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-green-600 mt-12">
          Why Inclusivity Matters
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          An inclusive workplace benefits everyone. Supporting employees with diverse
          backgrounds and abilities fosters collaboration, morale, and overall
          performance. By prioritizing diversity, organizations unlock the full
          potential of their teams.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
