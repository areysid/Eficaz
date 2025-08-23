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
          <MainLayout>
            <Routes>
              {/* Redirect root to AI Recruiter */}
              <Route path="/" element={<Navigate to="/ai-recruiter" />} />

              {/* AI Recruiter pages */}
              <Route path="/ai-recruiter" element={<AIRecruiter />} />
              <Route path="/ai-recruiter/pricing" element={<Pricing />} />

              {/* Fallback for unknown routes */}
              <Route path="*" element={<Navigate to="/ai-recruiter" />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
