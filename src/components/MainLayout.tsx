import { ReactNode } from "react";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png" 
                alt="EFICAZ Logo" 
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-primary-foreground/80">
                AI-powered recruitment platform transforming the way companies hire talent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
                <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">Services</Link></li>
                <li><Link to="/career" className="text-primary-foreground/80 hover:text-primary-foreground">Careers</Link></li>
                <li><Link to="/diversity" className="text-primary-foreground/80 hover:text-primary-foreground">Diversity</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground">Courses</Link></li>
                <li><Link to="/webinars" className="text-primary-foreground/80 hover:text-primary-foreground">Webinars</Link></li>
                <li><Link to="/ai-recruiter" className="text-primary-foreground/80 hover:text-primary-foreground">AI Recruiter</Link></li>
                <li><Link to="/candidate-registration" className="text-primary-foreground/80 hover:text-primary-foreground">Register</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>info@eficaz.biz</li>
                <li>Follow us on social media</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 EFICAZ Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;