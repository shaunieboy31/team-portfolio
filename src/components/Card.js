import React from "react";

function Card({ image, title, description, link }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,204,112,0.3)]">
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 opacity-0"></a>
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-5">
        <h3 className="text-[#ffcc70] mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default Card;