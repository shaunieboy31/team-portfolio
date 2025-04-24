import React from "react";

function Navbar() {
  return (
    <nav className="w-full py-5 text-center sticky top-0 bg-[#0f0f0f] z-50">
  <ul className="flex justify-center gap-10 list-none m-0 p-0">
    <li><a href="#about" className="text-white hover:text-gray-400 transition">About</a></li>
    <li><a href="#projects" className="text-white hover:text-gray-400 transition">Projects</a></li>
    <li><a href="#contact" className="text-white hover:text-gray-400 transition">Contact</a></li>
  </ul>
</nav>
  );
}

export default Navbar;