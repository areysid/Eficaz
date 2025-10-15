import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AIRecruiter from "./pages/AIRecruiter";
import Pricing from "./pages/Pricing";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./components/scrolltotop";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutus";
import Services from "./pages/Services";
import CoursesPage from "./pages/courses";
import Diversity from "./pages/Diversity";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import JobList from "@/components/joblist";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          {/* <MainLayout> */}
            <Routes>
              {/* Root shows AI Recruiter */}
              <Route path="/" element={<Home />} />

              {/* Pricing page */}
              <Route path="/ai-recruiter/pricing" element={<Pricing />} />
              <Route path="/ai-recruiter" element={<AIRecruiter />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/diversity" element={<Diversity />} />
              <Route path="/diversity/blog1" element={<Blog1 />} />
              <Route path="/diversity/blog2" element={<Blog2 />} />
              <Route path="/diversity/blog3" element={<Blog3 />} />
              <Route path="/career" element={<JobList />} />

              {/* Fallback: redirect unknown routes to root */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          {/* </MainLayout> */}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
