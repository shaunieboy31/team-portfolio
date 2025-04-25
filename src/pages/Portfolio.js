import React from "react";

function Portfolio({ profiles }) {
  const getIdFromName = (name) => name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div id="portfolio" className="flex flex-col items-center mt-16">
      <h1 className="text-6xl tracking-wider mb-10">PORTFOLIO</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {Object.keys(profiles).map((name, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <a
              href={`#${getIdFromName(name)}`}
              className="w-40 h-52 border-8 border-[#333] shadow-lg bg-white relative animate-swing origin-top"
            >
              <img
                src={profiles[name].image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </a>
            <h3 className="mt-3 text-[#ffcc70] font-bold">{name}</h3>
            <p className="text-gray-300">{profiles[name].role.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;