// src/pages/Portfolio.js
import React from "react";
import { Link } from "react-router-dom";

function Portfolio({ profiles }) {
  // Utility to build an ID slug if you ever want to scroll to that person
  const getIdFromName = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id="portfolio" className="flex flex-col items-center mt-16 px-4 md:px-[10%]">
      <h1 className="text-6xl tracking-wider mb-10">PORTFOLIO</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {Object.keys(profiles).map((name, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            {/* Link to /team with swing animation */}
            <Link
              to="/team"
              className="w-40 h-52 border-8 border-[#333] shadow-lg bg-white relative animate-swing origin-top"
            >
              <img
                src={profiles[name].image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </Link>

            <h3 className="mt-3 text-[#ffcc70] font-bold">{name}</h3>
            <p className="text-gray-300">{profiles[name].role.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
