import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, Users, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png" 
              alt="EFICAZ Logo" 
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-sm font-medium">Features</Button>
            <Link to="/pricing">
              <Button variant="ghost" className="text-sm font-medium">Pricing</Button>
            </Link>
            <Button variant="ghost" className="text-sm font-medium">About</Button>
            <Link to="/pricing">
              <Button variant="default" className="text-sm font-medium">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="mr-1 h-3 w-3" />
              AI-Powered Recruitment
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Transform Your
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Hiring Process</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              EFICAZ revolutionizes recruitment with AI-powered screening and intelligent candidate matching. 
              Find the perfect talent faster than ever before.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link to="/pricing">
                <Button size="lg" className="h-12 px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose EFICAZ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI-powered platform streamlines every aspect of recruitment
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="relative overflow-hidden border-0 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Screening</CardTitle>
                <CardDescription>
                  Intelligent algorithms analyze resumes and match candidates based on skills, experience, and cultural fit.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Data Security</CardTitle>
                <CardDescription>
                  Enterprise-grade security ensures your candidate data and company information remain protected.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Seamless collaboration tools for hiring teams to review, discuss, and make decisions together.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Reduce Hiring Time by 75%
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI algorithms pre-screen candidates, identify top matches, and provide detailed insights 
                to help you make faster, more informed hiring decisions.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated resume screening and ranking",
                  "Intelligent candidate matching algorithms",
                  "Real-time collaboration and feedback",
                  "Comprehensive analytics and reporting"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">75%</div>
                  <div className="text-xl text-muted-foreground">Faster Hiring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Hiring?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Join thousands of companies already using EFICAZ to find top talent faster.
            </p>
            <div className="mt-8">
              <Link to="/pricing">
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png" 
                alt="EFICAZ Logo" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">
                AI-powered recruitment platform transforming the way companies hire talent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 EFICAZ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;