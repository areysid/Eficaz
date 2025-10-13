import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, ChevronLeft, ChevronRight, Video } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "./ui/badge";

const webinars = [
  {
    title: "HRA Webinar (Power BI) - Batch 1",
    date: "2025-10-25",
    description:
      "Learn how Power BI enhances recruitment analytics and visualization to make informed hiring decisions.",
  },
  {
    title: "HRA Webinar (Power BI) - Batch 2",
    date: "2025-11-01",
    description:
      "Learn how Power BI enhances recruitment analytics and visualization to make informed hiring decisions.",
  },
  {
    title: "HRA Webinar (Looker)",
    date: "2025-11-02",
    description:
      "Discover how Looker can help recruiters streamline data exploration and reporting for better talent acquisition.",
  },
];

const WebinarTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 } // adjust how much must be visible before triggering
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isInView) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % webinars.length);
      }, 7000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? webinars.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % webinars.length);
  };

  const webinar = webinars[currentIndex];

  return (
    <section id="webinars" ref={sectionRef} className="py-8 relative">
      <div className="container">
        <div className="max-w-2xl text-center">
          <Badge variant="secondary">
            <Video className="mr-1 h-4 w-4" /> Upcoming Webinars
          </Badge>
        </div>

        <motion.div
          className="mx-auto mt-4 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border border-green-100/20 shadow-lg backdrop-blur-md bg-white/60 p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
            <CardHeader className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 rounded-lg bg-green-100/20 flex items-center justify-center mb-4"
              >
                <CalendarIcon className="h-6 w-6 text-accent" />
              </motion.div>

              <CardTitle className="text-2xl text-accent font-bold">
                {webinar.title}
              </CardTitle>

              <CardDescription className="mt-2 text-green-800">
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(webinar.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                {webinar.description}
              </CardDescription>

              <div className="flex justify-between items-center pt-5 w-full px-8">
                <button
                  onClick={handlePrev}
                  className="p-2 text-green-700 hover:bg-green-100 rounded-full transition"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 text-green-700 hover:bg-green-100 rounded-full transition"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WebinarTimeline;
