import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AIRecruiter from "./pages/AIRecruiter";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder components for other pages
const Services = () => <div className="container py-20"><h1 className="text-3xl font-bold">Services - Coming Soon</h1></div>;
const Courses = () => <div className="container py-20"><h1 className="text-3xl font-bold">Courses - Coming Soon</h1></div>;
const Diversity = () => <div className="container py-20"><h1 className="text-3xl font-bold">Diversity - Coming Soon</h1></div>;
const Career = () => <div className="container py-20"><h1 className="text-3xl font-bold">Career - Coming Soon</h1></div>;
const CandidateRegistration = () => <div className="container py-20"><h1 className="text-3xl font-bold">Candidate Registration - Coming Soon</h1></div>;
const Login = () => <div className="container py-20"><h1 className="text-3xl font-bold">Login - Coming Soon</h1></div>;
const Register = () => <div className="container py-20"><h1 className="text-3xl font-bold">Register - Coming Soon</h1></div>;
const Webinars = () => <div className="container py-20"><h1 className="text-3xl font-bold">Webinars - Coming Soon</h1></div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/diversity" element={<Diversity />} />
            <Route path="/career" element={<Career />} />
            <Route path="/ai-recruiter" element={<AIRecruiter />} />
            <Route path="/ai-recruiter/pricing" element={<Pricing />} />
            <Route path="/candidate-registration" element={<CandidateRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/webinars" element={<Webinars />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
