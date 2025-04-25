import { Link } from "react-router-dom";
import logoimg from "../assets/img/logo.jpg";

function Navbar() {
  return (
    <nav className="bg-[#111] p-4">
      <div className="container mx-auto flex justify-between items-center">
      
      <Link to="/home"> 
        <img
          id="logo-nav" 
          src={logoimg}
          alt="Logo"
          className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full mb-8 md:mb-0"
        />
      </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/portfolio" className="text-white">Portfolio</Link>
          <Link to="/projects" className="text-white">Projects</Link>
          <Link to="/team" className="text-white">Team</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
