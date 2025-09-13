import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  text-white py-12 bg-[url('/footer2.jpg')] bg-cover bg-center border-t border-black">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:gap-12">
        {/* Logo & Socials */}
        <div className="md:w-1/4 space-y-4">
          <img src="/LogoWhite.png" alt="EFICAZ Logo" className="h-10 w-auto" />
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaWhatsapp /></a>
            <a href="mailto:info@eficaz.biz" className="hover:text-gray-300"><FaEnvelope /></a>
          </div>
          <p className="text-sm">info@eficaz.biz</p>
        </div>

        {/* Registered Office */}
        <div className="md:w-1/4 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg mb-2">Registered Office Address</h3>
          <p className="text-sm leading-relaxed">
            Office no 202, Picasso Kedari icon, Salunkhe Vihar, Pune – 411048
          </p>
        </div>

        {/* Branch Office */}
        <div className="md:w-1/4 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg mb-2">Branch Office Address</h3>
          <p className="text-sm leading-relaxed">
            Shop No. 8, Gokul Darshan Building, Shopping Complex “A” 1st Floor, Tokarkhada, Silvassa - 396230
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/20 pt-6 flex flex-wrap justify-center gap-6 text-sm">
        <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/courses" className="hover:text-gray-300">Learning</Link>
        <Link to="/career" className="hover:text-green-600 transition">Career</Link>
        <Link to="/diversity" className="hover:text-gray-300">Diversity</Link>
        <Link to="/ai-recruiter" className="hover:text-gray-300">AI Recruiter</Link>
        {/* <Link to="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link> */}
      </div>
    </footer>
  );
};

export default Footer;
