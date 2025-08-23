import PricingPlans from "@/components/PricingPlans";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <img 
              src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png" 
              alt="EFICAZ Logo" 
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/">
              <Button variant="ghost" className="text-sm font-medium">Home</Button>
            </Link>
            {/* <Button variant="ghost" className="text-sm font-medium">Features</Button>
            <Button variant="ghost" className="text-sm font-medium">About</Button>
            <Button variant="default" className="text-sm font-medium">Contact</Button> */}
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
 
        <div className="container">
          <PricingPlans />
        </div>
 
    </div>
  );
};

export default Pricing;