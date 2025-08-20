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
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EFICAZ
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/">
              <Button variant="ghost" className="text-sm font-medium">Home</Button>
            </Link>
            <Button variant="ghost" className="text-sm font-medium">Features</Button>
            <Button variant="ghost" className="text-sm font-medium">About</Button>
            <Button variant="default" className="text-sm font-medium">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose Your Plan
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Select the perfect plan for your recruitment needs
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>
    </div>
  );
};

export default Pricing;