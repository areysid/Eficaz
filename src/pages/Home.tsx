"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  TrendingUp,
  BookOpen,
  Calendar,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";

import Calendar1 from "@/components/Calender";


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WebinarTimeline from "@/components/Calender";


const carouselImages = [
  "/Banner/Banner1.jpg",
  "/Banner/Banner2.jpeg",
  "/Banner/Banner3.jpeg",
  "/Banner/Banner4.jpeg",
];

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
  "/partners/partner11.png",
  "/partners/partner12.png",
  "/partners/partner13.png",
  "/partners/partner14.png",
  "/partners/partner15.png",
  "/partners/partner16.png",
  "/partners/partner17.png",
  "/partners/partner18.png",
  "/partners/partner19.png",
];

const useCountUp = (target: number, duration = 2000, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
};

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  const corporationsCount = useCountUp(100, 2000, startCount);
  const yearsCount = useCountUp(12, 2000, startCount);

  // carousel autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // trigger counters
  useEffect(() => {
    if (!counterRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  // partrners autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === partnerLogos.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? partnerLogos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === partnerLogos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MainNavigation />


      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-r from-primary/5 to-accent/5"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Since 2013
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight block text-accent">
                EFICAZ
                {/* <span className="block text-accent">Consultants</span> */}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eficaz established in 2013, began its journey with humble
                origins. In the past 12 years, the company has played a
                significant role in assisting over 100 multinational
                corporations in India to discover exceptional talent.
              </p>
              <p className="text-muted-foreground">
                We collaborate with clients to design streamlined
                organizational structures and pinpoint key roles. Our expertise
                lies in identifying and onboarding the right talent, while
                providing valuable insights on the Talent Market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/about-us">Read More</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ai-recruiter">Try AI Recruiter</Link>
                </Button>
              </div>
            </div>

            {/* Counter Box */}
            <div className="relative" ref={counterRef}>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        {corporationsCount}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Multinational Corporations
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">
                        {yearsCount}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-primary mb-2">
                      Diversity & Inclusion
                    </div>
                    <div className="text-sm text-muted-foreground">
                      stands for creating opportunities for everyone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Counter */}
          </div>
        </div>
      </motion.section>

      {/* Hero Carousel */}
      <section className="relative w-full h-[50vh] overflow-hidden bg-black flex items-center">
        <div
          className="flex transition-transform duration-1000 h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${carouselImages.length * 100}%`,
          }}
        >
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 w-3 rounded-full ${currentSlide === idx ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive recruitment and consulting services to
              help organizations find the right talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Talent Acquisition</CardTitle>
                <CardDescription>
                  Finding the right talent for your organization's needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-lg">Market Insights</CardTitle>
                <CardDescription>
                  Valuable insights on talent market trends and dynamics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Training & Development</CardTitle>
                <CardDescription>
                  Professional courses and skill development programs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-lg">Webinars</CardTitle>
                <CardDescription>
                  Regular webinars on recruitment and HR best practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Webinar Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            <h2 className="text-3xl font-bold">
              Making Your Learning More Enjoyable
            </h2>

            <p className="text-muted-foreground">
              Join our upcoming webinar to learn about the latest trends in recruitment and talent acquisition.
            </p>

            {/* Informative Infographic */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Did you know?</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>75% of recruiters rely on digital webinars for industry insights.</li>
                <li>Interactive webinars boost engagement by 50% compared to pre-recorded videos.</li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
          <WebinarTimeline />
          </div>
          
        </div>
      </motion.section>



      {/* Featured Course Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Course</h2>
            <p className="text-muted-foreground">
              Master recruitment analytics with our comprehensive courses
            </p>
          </div>
          {/* <div className="flex">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">
                    Recruitment Dashboards using Looker Studio
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Welcome to our comprehensive course on mastering
                    recruitment dashboards using Looker Studio! In this course,
                    we'll take you on a journey to become a proficient recruiter
                    armed with the power of data visualization.
                  </CardDescription>
                </div>
                <Badge variant="secondary">Featured</Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    4.8 (220 learners)
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Designed for recruiters, by recruiters: Our course is
                  tailored to meet the specific needs and challenges faced by
                  recruitment professionals.
                </p>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <Link to="/courses">Buy Now</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/courses">View All Courses</Link>
                  </Button>
                </div>
              </div>
              
            </CardContent>
            <div>
                <img
                  src="course.png"
                  alt="Course Thumbnail"
                  className="rounded-lg w-full object-cover max-h-60"
                />
              </div>
            
          </Card>
          </div> */}
          <div className="flex">
            <Card className="max-w-5xl mx-auto flex flex-row">
              {/* Left Content */}
              <div className="flex-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">
                        Recruitment Dashboards using Looker Studio
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Welcome to our comprehensive course on mastering recruitment
                        dashboards using Looker Studio! In this course, we'll take you
                        on a journey to become a proficient recruiter armed with the
                        power of data visualization.
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-muted-foreground">
                        4.8 (220 learners)
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Designed for recruiters, by recruiters: Our course is tailored to
                      meet the specific needs and challenges faced by recruitment
                      professionals.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button asChild>
                        <Link to="/courses">Buy Now</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/courses">View All Courses</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>

              {/* Right Image */}
              <div className="w-1/3 flex items-center">
                <img
                  src="courses/RecruitmentDashboardsusingLookerStudio(GoogleDataStudio).png"
                  alt="Course Thumbnail"
                  className="rounded-r-lg object-cover h-full w-full"
                />
              </div>
            </Card>
          </div>

        </div>
      </motion.section>

      {/* Testimonials Section */}

      <ReviewsSection />

      {/* Partners Section */}
         <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="container text-center space-y-10">
        <h2 className="text-3xl font-bold">Our Clients</h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-8 items-center justify-center">
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

        {/* Mobile Custom Carousel */}
        <div className="md:hidden relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 text-2xl text-green-600"
          >
            <FaChevronLeft />
          </button>

          <img
            src={partnerLogos[currentIndex]}
            alt={`Partner ${currentIndex + 1}`}
            className="h-24 w-auto object-contain mx-auto"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 z-10 text-2xl text-green-600"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </motion.section>


      {/* Footer */}
      {/* <footer className="border-t py-12 relative z-10">
        <div className="container text-center space-y-4">
          <img src="/Logo.png" alt="EFICAZ Logo" className="h-8 w-auto mx-auto" />
          <p className="text-sm text-muted-foreground">
            © 2024 EFICAZ. AI-powered recruitment platform transforming the way companies hire talent.           </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/pricing" className="hover:text-primary transition">
              Pricing
            </Link>
            <a href="mailto:contact@eficaz.ai" className="hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Home;
