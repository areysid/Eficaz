import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AIRecruiter from "./pages/AIRecruiter";
import Pricing from "./pages/Pricing";
import MainLayout from "./components/MainLayout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* <MainLayout> */}
            <Routes>
              {/* Root shows AI Recruiter */}
              <Route path="/" element={<AIRecruiter />} />

              {/* Pricing page */}
              <Route path="/pricing" element={<Pricing />} />

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
