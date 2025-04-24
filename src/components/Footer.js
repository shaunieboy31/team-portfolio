import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-center py-5 text-gray-400">
      <p className="text-sm">
        © {new Date().getFullYear()} Your Portfolio. All rights reserved.
      </p>
      <p className="text-sm">
        Built with <span className="text-[#ffcc70]">React</span> and <span className="text-[#ffcc70]">Tailwind CSS</span>.
      </p>
    </footer>
  );
}

export default Footer;