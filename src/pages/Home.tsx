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
import { Users, TrendingUp, BookOpen, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import WebinarTimeline from "@/components/Calender";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
      if (progress < 1) requestAnimationFrame(step);
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
  const webinarRef = useRef<HTMLDivElement | null>(null);

  const corporationsCount = useCountUp(100, 2000, startCount);
  const yearsCount = useCountUp(12, 2000, startCount);

  // scroll to webinar section
  const scrollToWebinar = () => {
    webinarRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  // partners autoplay
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

      {/* 🔸 Flash Banner */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 px-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-lg mt-16"
      >
        <p className="text-sm md:text-base font-medium">
          📢 <span className="font-semibold">Upcoming Webinars:</span> <br></br> HR Dashboards using Power BI on{" "}
          <span className="underline">1st November</span> in both English & Hindi!
          <br></br> HR Dashboards using Looker Studio on{" "}
          <span className="underline">2nd November</span> in both English & Hindi!
        </p>
        <Button
          variant="secondary"
          onClick={scrollToWebinar}
          className="bg-white text-indigo-700 font-semibold hover:bg-gray-200 transition"
        >
          Learn More
        </Button>
      </motion.div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative pt-10 pb-20 bg-gradient-to-r from-primary/5 to-accent/5"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Since 2013
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight block text-accent">
                EFICAZ
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eficaz established in 2013, began its journey with humble
                origins. In the past 12 years, the company has played a
                significant role in assisting over 100 multinational
                corporations in India to discover exceptional talent.
              </p>
              <p className="text-muted-foreground">
                We collaborate with clients to design streamlined organizational structures and pinpoint key roles.
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg mx-4">
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
      <section className="relative w-full h-[14vh] sm:h-[50vh] overflow-hidden bg-black flex items-center">
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
                className="w-full h-full object-contain sm:object-cover"
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

      {/* Webinar Section */}
      <motion.section
        ref={webinarRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Making Your Learning More Enjoyable
            </h2>
            <p className="text-muted-foreground">
              Join our upcoming webinar to learn about the latest trends in recruitment and talent acquisition.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Did you know?</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>75% of recruiters rely on digital webinars for industry insights.</li>
                <li>
                  Interactive webinars boost engagement by 50% compared to pre-recorded videos.
                </li>
              </ul>
            </div>

            {/* 👇 CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://learning.eficazindia.com/services/dxjq"
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  Reserve Your Seat</a>
              </Button>
               <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/918767311948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <WebinarTimeline />
          </div>

        </div>
      </motion.section>



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

      <Footer />
    </div>
  );
};

export default Home;
