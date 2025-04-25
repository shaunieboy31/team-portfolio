import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full py-5 text-center sticky top-0 bg-[#0f0f0f] z-50">
      <ul className="flex justify-center gap-10 list-none m-0 p-0">
        <li>
          <Link to="/" className="text-white hover:text-gray-400 transition">
            Home
          </Link>
        </li>
        <li>

          <Link to="/portfolio" className="text-white hover:text-gray-400 transition">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:text-gray-400 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/team" className="text-white hover:text-gray-400 transition">
            Team
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-400 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
