// src/pages/GuideToWorkWithDisability.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

export default function GuideToWorkWithDisability() {
  const tips = [
    {
      title: "Understand Individual Needs",
      description:
        "Take time to learn about the specific needs and capabilities of employees with disabilities. Ask them directly what accommodations or adjustments they may need to succeed.",
    },
    {
      title: "Accessible Workspace",
      description:
        "Ensure physical and digital workspaces are accessible. This includes ramps, screen readers, adjustable desks, and accessible software tools.",
    },
    {
      title: "Inclusive Communication",
      description:
        "Use clear and inclusive communication methods. Provide alternative formats such as large print, audio, or simplified text if required.",
    },
    {
      title: "Provide Support & Training",
      description:
        "Offer training to managers and colleagues on disability etiquette and inclusion. Encourage mentoring and peer support.",
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
          <span className="font-semibold">Guide to Work with Persons with Disability</span>
        </div>
      </section>

      {/* Hero + Title Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-2/5">
          <img
            src="/blogs/blog1.jpg"
            alt="Guide to Work with Persons with Disability"
            className="w-full h-auto"
          />
        </div>

        {/* Title & Intro */}
        <div className="md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Guide to Working with Persons with Disability
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Creating an inclusive workplace is not just a moral imperative; it enhances
            productivity, morale, and innovation. This guide helps managers and teams
            understand the best practices for integrating employees with disabilities
            into the workplace.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        <p className="text-gray-700 leading-relaxed text-lg">
          Inclusion starts with understanding the unique needs and strengths of each
          individual. From physical accommodations to digital accessibility, creating
          an environment where every employee can thrive is essential for long-term
          success.
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
          Inclusivity benefits everyone. A workplace that supports employees with
          disabilities fosters collaboration, improves team morale, and enhances
          overall performance. By embracing diversity, organizations unlock the
          potential of all team members.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
