import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";


const partnerLogos = [
  "/partners/partner1.png",
  "/partners/partner2.png",
  "/partners/partner3.png",
  "/partners/partner4.png",
  "/partners/partner5.png",
  "/partners/partner6.png",
  "/partners/partner7.png",
  "/partners/partner8.png",
  "/partners/partner9.png",
  "/partners/partner10.png",
];


const AboutUs: React.FC = () => {
  const [selected, setSelected] = useState<"mission" | "vision" | "values">("mission");

  const content = {
    mission:
      "Our mission is to empower businesses with innovative solutions that drive growth and create impact.",
    vision:
      "Our vision is to be a global leader in providing technology-driven excellence.",
    values:
      "Our values are integrity, innovation, and commitment to delivering the best for our clients.",
  };

  // Animation variants for expanding panels
  const panelVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
    active: {
      scale: 1.05,
      boxShadow: "0 0 15px 3px rgba(16, 185, 129, 0.5)",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavigation />

      {/* Our Story */}
      <section className="container mt-10 mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2013, Eficaz began its journey with humble origins. 
              Throughout the past ten years, the company has played a significant role in assisting 
              over 100 MNCs in India to discover exceptional talent.
            </p>
            <br />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team is composed of seasoned experts, technical recruiters, and individuals who 
              adopt a process-oriented approach to ensure a smooth recruitment process management.
            </p>
            <br />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eficaz seamlessly aligns talent with your organization’s unique needs, ensuring optimal 
              workforce integration. Our clients trust us for concise and effective HR solutions that 
              elevate their team and drive success. Drawing on our extensive experience across diverse 
              industries such as Corporate Banking, Investment Banking, Manufacturing, Telecom, Insurance, 
              and Retail, we ensure that you are fully supported.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-stretch"
        >
          <img
            src="team-photo.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md border border-emerald-200 h-full"
          />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-background to-emerald-50 skew-y-2"></div>

      {/* AshaJobs Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-lime-50 py-20 px-6">
        <motion.div
          className="text-left flex"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">  
          <h2 className="text-3xl font-bold mb-4 text-primary">
            AshaJobs: Our DEI Initiative
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our Flagship Program, AshaJobs represents the empowerment of workforce diversity, focusing 
            to promote inclusive hiring in various industries & aiming to create an environment where 
            equal opportunities are plentiful for Women, Specially-abled people, & LGBTQ+. We take
            great joy in leveraging our expertise to bring unparalleled diversity to the world of 
            employment.
          </p>
          <Link
            to="/diversity"
            className="inline-block px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-transform hover:scale-105 hover:shadow-xl"
          >
            Learn more about AshaJobs →
          </Link>
          </div>
          <div
          className="flex justify-center items-start ml-2"
        >
          <img
            src="ashaimg.webp"
            alt="Our Team"
            className="rounded-2xl shadow-lg object-cover w-auto border border-emerald-200 h-3/4"
          />
        </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-emerald-50 to-white -skew-y-2"></div>

      {/* Mission / Vision / Values */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-50 to-lime-50">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Our Mission, Vision & Values
          </h2>
          <div className="flex flex-col space-y-4 w-full max-w-lg">
            {(["mission", "vision", "values"] as const).map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={panelVariants}
                initial="hidden"
                whileInView="visible"
                animate={selected === item ? "active" : "inactive"}
                viewport={{ once: true }}
                onClick={() => setSelected(item)}
                className={`p-4 rounded-lg cursor-pointer border border-emerald-600 ${
                  selected === item ? "bg-emerald-600 text-white" : "bg-background text-primary"
                }`}
              >
                <h3 className="text-lg font-semibold">{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                {selected === item && (
                  <p className="mt-2 text-sm">{content[item]}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      {/* <div className="w-full h-16 bg-gradient-to-b from-white to-emerald-50 skew-y-2"></div> */}

      {/* <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-lime-50"> */}
        {/* Partners Section */}
              {/* <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-lime-50"
              >
                <div className="container text-center space-y-10">
                  <h2 className="text-3xl font-bold">Our Clients</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                    {partnerLogos.map((logo, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <img
                          src={logo}
                          alt={`Partner ${idx + 1}`}
                          className="h-24 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section> */}

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-emerald-50 to-white -skew-y-2"></div>

      {/* Leadership */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-50 to-lime-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: "Prateek Jadia", role: "Managing Director", img: "leaders/Prateek.jpg" },
              { name: "Neha Jadia", role: "CEO", img: "leaders/neha.jpg" },
              { name: "Pragya Chandak", role: "Client Partner", img: "leaders/rinki.jpg" },
              { name: "Manisha Singh", role: "Sourcing Lead", img: "leaders/manisha.jpg" },
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-36 h-36 rounded-full border-4 border-dashed border-emerald-600 overflow-hidden shadow-md">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{leader.name}</h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;