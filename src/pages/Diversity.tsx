import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Briefcase, Lightbulb, Globe } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const Diversity = () => {
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);

  const myths = [
    {
      myth: "Hiring DEI talent lowers workplace performance.",
      fact: "Research shows diverse teams are more innovative and perform better.",
    },
    {
      myth: "DEI candidates lack the required skills.",
      fact: "DEI candidates are equally qualified and bring unique perspectives.",
    },
    {
      myth: "Inclusion efforts are just tokenism.",
      fact: "Inclusive hiring builds sustainable, high-performing teams.",
    },
  ];

  const blogs = [
    {
      title: "How Diversity Drives Innovation",
      desc: "Exploring how diverse teams bring fresh ideas and perspectives to organizations.",
      img: "/blogs/blog1.jpg",
      link: "https://medium.com/",
    },
    {
      title: "Breaking Myths About Inclusive Hiring",
      desc: "Challenging common misconceptions around DEI in the workplace.",
      img: "/blogs/blog2.png",
      link: "https://medium.com/",
    },
    {
      title: "Building Sustainable DEI Strategies",
      desc: "A roadmap to long-term and impactful diversity initiatives.",
      img: "/blogs/blog3.jpg",
      link: "https://medium.com/",
    },
  ];

  // Parallax only for Fact vs Fiction
  const { scrollY } = useScroll();
  const yFact = useTransform(scrollY, [0, 500], [0, -50]);

  // Fade-in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const advantages = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Creativity",
      text: "Diverse perspectives fuel fresh ideas and innovation.",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Engagement",
      text: "Boosts team morale and collaboration.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Performance",
      text: "Leads to better decisions and stronger results.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Adaptability",
      text: "Teams respond faster to change and challenges.",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Reach",
      text: "Reflects customers and markets worldwide.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <MainNavigation />

      {/* Section 1: About AshaJobs */}
      <motion.section
        className="py-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-8 text-green-700">About AshaJobs</h2>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <img
            src="/ashajobs.png"
            alt="Asha Jobs"
            className="w-full lg:w-1/2 max-h-96 object-contain"
          />
          <div className="lg:w-1/2 space-y-6 text-left">
            <h2 className="text-3xl font-bold text-green-700">Empowering Through Asha Jobs</h2>
            <p className="text-gray-700">
              “AshaJobs” is an EFICAZ initiative that represents the empowerment of workforce diversity. 
              Through this initiative, our primary focus is to educate and encourage Diversity & Inclusion 
              (D&I) hiring across various industries, aiming to create an environment where equal 
              opportunities are plentiful for people in all kinds of Diversity groups like Specially abled, 
              Women workforce and LGBTQ+. We take immense pride in driving our experience to introduce our 
              society with unprecedented diversity in employment for our partners.
            </p>
            <div className="flex gap-6">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="flex items-center gap-2">
                <Target className="text-green-600" />
                <span className="text-gray-800">Focused Talent</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} className="flex items-center gap-2">
                <Users className="text-green-600" />
                <span className="text-gray-800">Inclusive Teams</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 3 }} className="flex items-center gap-2">
                <Briefcase className="text-green-600" />
                <span className="text-gray-800">Career Growth</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Advantages of DEI Talent */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 text-green-700">Advantages of Hiring DEI Talent</h2>
          <div className="relative flex justify-between items-start max-w-5xl mx-auto">
            <div className="absolute top-7 left-0 right-0 h-1 bg-green-200"></div>

            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative w-40 flex flex-col items-center"
              >
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-md mb-4">
                  {adv.icon}
                </div>
                <h3 className="text-green-700 font-semibold">{adv.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3: Fact vs Fiction */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div style={{ y: yFact }}>
          <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Fact vs Fiction</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {myths.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-2xl shadow cursor-pointer transition text-center"
                onClick={() =>
                  setRevealedIndex(revealedIndex === index ? null : index)
                }
              >
                {revealedIndex === index ? (
                  <p className="text-green-700 font-medium">{item.fact}</p>
                ) : (
                  <>
                    <p className="text-red-600 font-medium mb-2">{item.myth}</p>
                    <span className="text-sm text-gray-500 italic">
                      (Reveal to bust the myth 👀)
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Section 4: Milestones */}
      <motion.section
        className="bg-gray-50 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-8 text-green-700">Our Milestones</h2>
        <img src="/milestones.png" alt="Milestones" className="w-full object-cover" />
      </motion.section>

      {/* Section 5: Blogs & News */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Blogs & News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col"
            >
              <img src={blog.img} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 flex-grow">{blog.desc}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-green-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Diversity;
