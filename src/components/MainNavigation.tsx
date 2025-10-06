"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Logo.png";

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white/30 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Eficaz Logo" className="w-auto h-10" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-green-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-600 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-green-600 transition">
              Learning
            </Link>
          </li>
          <li>
            <Link to="/career" className="hover:text-green-600 transition">
              Career
            </Link>
          </li>
          <li>
            <Link to="/diversity" className="hover:text-green-600 transition">
              Diversity
            </Link>
          </li>
          <li>
            <Link to="/ai-recruiter" className="hover:text-green-600 transition">
              AI Recruiter
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md bg-green-600 text-white focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-start gap-4 px-6 py-4 font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Learning
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/diversity"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Diversity
              </Link>
            </li>
            <li>
              <Link
                to="/ai-recruiter"
                className="hover:text-green-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                AI Recruiter
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavigation;
