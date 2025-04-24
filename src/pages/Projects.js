import React from "react";

function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 px-[10%] bg-[#0f0f0f]">
  <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {projects.map((proj, i) => (
      <div key={i} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,204,112,0.3)]">
        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 opacity-0"></a>
        <img src={proj.img} alt={proj.title} className="w-full h-44 object-cover" />
        <div className="p-5">
          <h3 className="text-[#ffcc70] mb-2">{proj.title}</h3>
          <p className="text-sm text-gray-300">{proj.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}

export default Projects;