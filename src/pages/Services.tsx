import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  BarChart,
  Users,
  BookOpen,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const Services = () => {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Parallax Background Shapes
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Back to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter animation for RPO experience
  useEffect(() => {
    if (hasRun) return;
    setHasRun(true);
    let start = 0;
    const end = 10;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  }, [hasRun]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" id="top">
      {/* Parallax Background Shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-40 -right-40 w-[30rem] h-[30rem] bg-green-300/20 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      {/* Top Banner */}
      <div className="top-0 left-0 w-full bg-green-100/10 py-2 z-40 mt-16">
        <div className="container text-center">
          <span className="font-medium text-green-600">
            Our Services
          </span>{" "}
          – Powered by EFICAZ
        </div>
      </div>

      {/* Shared Navigation */}
      <MainNavigation />

      {/* Section Navigation Links */}
      <div className="container py-6 flex justify-center gap-4 sm:gap-6 text-base sm:text-lg text-muted-foreground flex-wrap">
        {[
          { name: "RPO & Projects", id: "rpo" },
          { name: "DEI", id: "dei" },
          { name: "HR Analytics", id: "analytics" },
          { name: "Talent Mapping", id: "talent" },
          { name: "Learning & Development", id: "learning" },
        ].map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="px-5 py-3 rounded-full bg-white/70 border border-green-100 shadow-sm hover:bg-green-600 hover:text-white hover:shadow-lg transition-all font-semibold"
          >
            {section.name}
          </a>
        ))}
      </div>



      {/* RPO & Projects Section */}
      <section id="rpo" className="py-20 sm:py-32 bg-green-50 relative z-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Zap className="mr-1 h-3 w-3" /> Recruitment Excellence
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
              RPO & Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored recruitment solutions to deliver top talent efficiently.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-between relative overflow-hidden border border-green-100/20 shadow-lg backdrop-blur-md bg-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="flex-1 flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-lg bg-green-100/20 flex items-center justify-center mb-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </motion.div>
                <CardTitle>Our Process</CardTitle>
                <CardDescription className="mt-2">
                  <ul className="space-y-2 text-left">
                    {[
                      "Hiring Intake: Direct collaboration with hiring managers",
                      "Talent Mapping: Active and passive sourcing methods",
                      "Pre-Screening: Two-level candidate quality checks",
                      "Interview Coordination: Seamless scheduling",
                      "Offer Negotiation: Cost-effective talent acquisition",
                      "Successful Joining: Post-offer support and onboarding",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full flex flex-col justify-between relative overflow-hidden border border-green-100/20 shadow-lg backdrop-blur-md bg-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="flex-1 flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-lg bg-green-100/20 flex items-center justify-center mb-4"
                >
                  <BarChart className="h-6 w-6 text-green-600" />
                </motion.div>
                <CardTitle>Expertise</CardTitle>
                <CardDescription className="mt-2 text-left">
                  We follow a customizable recruitment process tailored absolutely as per your need. 
                  It starts with a discovery workshop where we learn about your current processes 
                  followed by the Implementation phase where the best RPO practises are put to effect 
                  to achieve desired KRA’s, KPI’s & TATs.
                  <br></br>
                  Over <span className="text-2xl font-bold"> {count}+ </span> RPOs successfully managed. Trained on ATS like Taleo, Workday, iCIMS, Darwinbox, Successfactors, and Zwayam.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-green-50 to-muted/50 -skew-y-2"></div>

      {/* DEI Section */}
      <section id="dei" className="py-20 sm:py-32 bg-muted/50 relative z-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Users className="mr-1 h-3 w-3" /> AshaJobs
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
              Diversity, Equality, Inclusion
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empowering diverse workforces through inclusive hiring.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users className="h-6 w-6 text-green-600" />,
                title: "Diversity",
                desc: "Fostering empathy, understanding, and mutual respect.",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                title: "Equality",
                desc: "Equal opportunities for all, regardless of background.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-green-600" />,
                title: "Inclusion",
                desc: "Creating welcoming, supportive environments for everyone.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col justify-between relative overflow-hidden border border-green-100/20 shadow-lg backdrop-blur-md bg-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader className="flex-1 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-12 h-12 rounded-lg bg-green-100/20 flex items-center justify-center mb-4"
                    >
                      {f.icon}
                    </motion.div>
                    <CardTitle>{f.title}</CardTitle>
                    <CardDescription className="mt-2">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-muted/50 to-green-50 -skew-y-2"></div>

      {/* HR Analytics & Dashboards Section */}
      {/* <section id="analytics" className="py-20 sm:py-32 bg-green-50 relative z-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <BarChart className="mr-1 h-3 w-3" /> Data-Driven Insights
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
              HR Analytics & Dashboards
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real-time analytics with PowerBI, Tableau, and Google Data Studio.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 flex flex-col md:flex-row justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              {
                src: "/dashboards/1.png",
                alt: "PowerBI Dashboard",
                label: "PowerBI",
              },
              {
                src: "/dashboards/2.png",
                alt: "Tableau Dashboard",
                label: "Tableau",
              },
              {
                src: "/dashboards/3.png",
                alt: "Google Data Studio Dashboard",
                label: "Google Data Studio",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 128, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg border border-green-200"
                  loading="lazy"
                />
                <div className="mt-2 flex items-center gap-2">
                  <BarChart className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <section
  id="analytics"
  className="py-20 sm:py-32 bg-green-50 relative z-10"
>
  <div className="container">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <Badge variant="secondary" className="mb-4">
        <BarChart className="mr-1 h-3 w-3" /> Data-Driven Insights
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
        HR Analytics & Dashboards
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Real-time analytics with PowerBI, Tableau, and Google Data Studio.
      </p>
    </div>

    {/* Dashboards */}
    <motion.div
      className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {[
        {
          src: "/dashboards/1.png",
          alt: "PowerBI Dashboard",
          label: "PowerBI",
        },
        {
          src: "/dashboards/2.png",
          alt: "Tableau Dashboard",
          label: "Tableau",
        },
        {
          src: "/dashboards/3.png",
          alt: "Google Data Studio Dashboard",
          label: "Google Data Studio",
        },
      ].map((item, i) => (
        <motion.figure
          key={i}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-full group rounded-xl border border-green-200 overflow-hidden shadow-md hover:shadow-lg hover:shadow-green-200 transition-shadow"
        >
          {/* Dashboard Image */}
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-28 md:h-64 object-cover"
          />

          {/* Caption */}
          <figcaption className="mt-3 flex items-center gap-2 pb-4">
            <BarChart className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground group-hover:text-green-700 transition-colors">
              {item.label}
            </span>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  </div>
</section>


      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-green-50 to-muted/50 -skew-y-2"></div>

      {/* Talent Mapping Section */}
      {/* <section id="talent" className="py-20 sm:py-32 bg-muted/50 relative z-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Users className="mr-1 h-3 w-3" /> Strategic Talent Sourcing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
              Talent Mapping
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Identify and attract top talent with precision.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 max-w-4xl flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/talent.jpg"
              alt="Talent Mapping Visualization"
              className="w-full max-w-md h-auto rounded-lg border border-green-200"
              loading="lazy"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 128, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">Talent Insights</span>
              </div>
              <p className="text-muted-foreground">
                Comprehensive reports on candidate details, locations, costs, and social profiles.
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section
  id="talent"
  className="py-20 sm:py-32 bg-muted/50 relative z-10"
>
  <div className="container">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center mb-16">
      <Badge variant="secondary" className="mb-4">
        <Users className="mr-1 h-3 w-3" /> Strategic Talent Sourcing
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
        Talent Mapping
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Identify and attract top talent with precision.
      </p>
    </div>

    {/* Content */}
    <motion.div
      className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Left: Image */}
      <motion.img
        src="/talent1.jpg"
        alt="Talent Mapping Visualization"
        className="w-full rounded-2xl border border-green-200 shadow-md h-96"
        loading="lazy"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 15px 25px rgba(0, 128, 0, 0.25)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Right: Text */}
      <div className="bg-white/70 rounded-2xl shadow-sm border border-green-100 p-8 md:p-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-base font-medium text-green-700">
            Talent Insights
          </span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Comprehensive reports on{" "}
          <span className="font-semibold text-green-700">candidate details</span>,{" "}
          <span className="font-semibold text-green-700">locations</span>,{" "}
          <span className="font-semibold text-green-700">costs</span>, and{" "}
          <span className="font-semibold text-green-700">social profiles</span>. 
          Empower your HR strategy with real-time, actionable intelligence.
        </p>

        {/* CTA Box */}
        <motion.a
          href="/ai-recruiter"
          whileHover={{ scale: 1.05, backgroundColor: "rgb(22 163 74)" }} // green-600
          transition={{ duration: 0.3 }}
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-green-700 text-white font-medium shadow-md hover:shadow-lg transition-colors"
        >
          Visit our AI Recruiter →
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>


      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-muted/50 to-green-50 -skew-y-2"></div>

      {/* Learning & Development Section */}
      {/* <section id="learning" className="py-20 sm:py-32 bg-green-50 relative z-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="mr-1 h-3 w-3" /> Empowering Growth
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
              Learning & Development
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Training in Excel, analytics, and DEI for individuals and organizations.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 flex flex-col md:flex-row justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              {
                src: "/excel-training.png",
                alt: "Microsoft Excel Training",
                label: "Excel Training",
                link: "https://support.microsoft.com/en-us/excel",
              },
              {
                src: "/data-analytics.png",
                alt: "Data Analytics Tools Training",
                label: "Data Analytics",
                link: "https://powerbi.microsoft.com/en-us/learning/",
              },
              {
                src: "/dei-training.png",
                alt: "DEI Sensitization Training",
                label: "DEI Training",
                link: "https://www.shrm.org/topics-tools/topics/diversity-equity-inclusion",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 128, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg border border-green-200"
                    loading="lazy"
                  />
                </a>
                <div className="mt-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      <section
  id="learning"
  className="py-20 sm:py-32 bg-green-50 relative z-10"
>
  <div className="container">
    <div className="mx-auto max-w-2xl text-center mb-12">
      <Badge variant="secondary" className="mb-4">
        <BookOpen className="mr-1 h-3 w-3" /> Empowering Growth
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-700">
        Learning & Development
      </h2>
      {/* <p className="mt-4 text-lg text-muted-foreground">
        Training in Excel, analytics, and DEI for individuals and organizations.
      </p> */}
    </div>

    <motion.div
      className="flex w-full h-[400px] md:h-[400px] overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {[
        {
          src: "/LD/prog.jpg",
          alt: "Microsoft Excel Training",
          label: "Online Programs",
          link: "https://support.microsoft.com/en-us/excel",
        },
        {
          src: "/LD/web.jpg",
          alt: "Data Analytics Tools Training",
          label: "Webinars",
          link: "https://powerbi.microsoft.com/en-us/learning/",
        },
        {
          src: "/LD/learn.png",
          alt: "DEI Sensitization Training",
          label: "Learning",
          link: "https://www.shrm.org/topics-tools/topics/diversity-equity-inclusion",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="relative flex-1 group cursor-pointer"
          whileHover={{ flex: 2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background image */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
              loading="lazy"
            />
          </a>

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="bg-green-800 bg-opacity-70 text-white p-4 rounded-lg text-center">
              <BookOpen className="mx-auto mb-2 h-6 w-6" />
              <h3 className="text-lg font-semibold">{item.label}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* CTA Section */}
      {/* <motion.section
        className="py-20 sm:py-32 bg-green-600 text-white relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Elevate Your Workforce?</h2>
          <p className="mt-4 text-lg opacity-90">
            Discover how EFICAZ can transform your hiring and training processes.
          </p>
          <div className="mt-8">
            <Link to="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 transition-transform hover:scale-110 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section> */}

      {/* Back to Top Button */}
                {/* <motion.a
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  <ArrowUp className="h-6 w-6" />
</motion.a> */}




      {/* Footer */}
      {/* <footer className="border-t py-12 relative z-10">
        <div className="container text-center space-y-4">
          <img
            src="/Logo.png"
            alt="EFICAZ Logo"
            className="h-8 w-auto mx-auto"
          />
          <p className="text-sm text-muted-foreground">
            © 2025 EFICAZ. Transforming recruitment and development with AI-powered solutions.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/pricing" className="hover:text-green-600 transition">
              Pricing
            </Link>
            <a
              href="mailto:contact@eficaz.ai"
              className="hover:text-green-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Services;