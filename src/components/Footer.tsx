import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 relative z-10">
      <div className="container text-center space-y-4">
        <img
          src="/Logo.png"
          alt="EFICAZ Logo"
          className="h-8 w-auto mx-auto"
        />
        <p className="text-sm text-muted-foreground">
          © 2025 EFICAZ. Transforming recruitment and development with AI-powered solutions.
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/about-us" className="hover:text-green-600 transition">
            About Us
          </Link>
          <a
            href="mailto:contact@eficaz.ai"
            className="hover:text-green-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
