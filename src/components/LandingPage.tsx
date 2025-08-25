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
  Shield,
  Users,
  ArrowRight,
  Star,
  Menu,
  Wallet,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AIRecruiter = () => {
  // Animated counter for benefits section
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  // useEffect(() => {
  //   let start = 0;
  //   const end = 75;
  //   const duration = 1500;
  //   const stepTime = Math.abs(Math.floor(duration / end));
  //   const timer = setInterval(() => {
  //     start += 1;
  //     setCount(start);
  //     if (start === end) clearInterval(timer);
  //   }, stepTime);
  //   return () => clearInterval(timer);
  // }, []);

  // Track scroll for translucent header effect
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax effect for background
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Parallax Background Shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-40 -right-40 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      {/* Top Banner */}
      <div className=" top-0 left-0 w-full bg-accent/10 py-2 z-50">
        <div className="container text-center">
          {/* <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground"
          > */}
            <span className="font-medium text-accent">AI Recruiter</span> – Powered by EFICAZ
          {/* </motion.p> */}
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed left-0 w-full z-40 border-b transition-all duration-300 ${
          scrolled
            ? "top-0 bg-background/70 backdrop-blur-md shadow-sm h-14"
            : "top-8 bg-background/90 h-16"
        }`}
      >
        <div className="container flex h-full items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png"
              alt="EFICAZ Logo"
              className="h-8 w-auto"
            />
            <span className="text-sm font-medium text-muted-foreground">
              | AI Recruiter
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="transition hover:scale-105"
            >
              <Link to="/pricing">Pricing</Link>
            </Button>
          </nav>
          <Sheet >
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                <Button asChild variant="outline" className="justify-start">
                  <Link to="/pricing">Pricing</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-36 pt-40">
        <div className="container relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-4">
              <Star className="mr-1 h-3 w-3" /> AI-Powered Recruitment
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hiring Process
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              EFICAZ revolutionizes recruitment with AI-powered screening and intelligent candidate
              matching. Find the perfect talent faster than ever before.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/pricing">
                <Button
                  size="lg"
                  className="h-12 px-8 transition-transform hover:scale-110 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-background to-green-50 skew-y-2 -mt-10"></div>

      {/* Features */}
      <section className="py-20 sm:py-32 bg-green-50 relative z-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose EFICAZ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI-powered platform streamlines every aspect of recruitment
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Zap className="h-6 w-6 text-accent" />,
                title: "AI-Powered Screening",
                desc: "Voice AI leads candidate conversations while smart screening ensures the perfect fit.",
              },
              {
                icon: <Wallet className="h-6 w-6 text-accent" />,
                title: "Cost Saving",
                desc: "Reduce hiring costs by up to 80% with AI-powered automation.",

              },
              {
                icon: <BarChart className="h-6 w-6 text-accent" />,
                title: "Advanced Analytics",
                desc: "Gain deep insights into candidates and market trends with AI-driven analytics.",

              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col justify-between relative overflow-hidden border border-white/20 shadow-lg backdrop-blur-md bg-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader className="flex-1 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
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
      <div className="w-full h-16 bg-gradient-to-b from-green-50 to-muted/50 -skew-y-2"></div>

      {/* Benefits */}
      <section className="py-20 sm:py-32 bg-muted/50 relative z-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Reduce Hiring Time by 75%</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI pre-screens candidates, identifies top matches, and provides insights to help
              you make faster, more informed hiring decisions.
            </p>
            <ul className="space-y-4">
              {[
                "Automated resume screening",
                "Intelligent candidate matching",
                "Real-time collaboration",
                "Analytics and reporting",
                "Efficient tapping of join-ready talent",
              ].map((b, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
            onViewportEnter={() => {
              if (hasRun) return; // ✅ Prevent rerun
              setHasRun(true);

              let start = 0;
              const end = 75;
              const duration = 1500;
              const stepTime = Math.abs(Math.floor(duration / end));
              const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
              }, stepTime);
            }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{count}%</div>
                <div className="text-xl text-muted-foreground">Faster Hiring</div>
              </div>
            </div>
          </motion.div>

     
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 sm:py-32 bg-primary text-primary-foreground relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your Hiring?</h2>
          <p className="mt-4 text-lg opacity-90">
            Join companies already using EFICAZ to find top talent faster.
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
      </motion.section>

      {/* Footer */}
      <footer className="border-t py-12 relative z-10">
        <div className="container text-center space-y-4">
          <img
            src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png"
            alt="EFICAZ Logo"
            className="h-8 w-auto mx-auto"
          />
          <p className="text-sm text-muted-foreground">
            © 2024 EFICAZ. AI-powered recruitment platform transforming the way companies hire talent.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/pricing" className="hover:text-primary transition">
              Pricing
            </Link>
            <a
              href="mailto:contact@eficaz.ai"
              className="hover:text-primary transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIRecruiter;
