import React from "react";
import teamLogo from "../assets/img/logo.jpg"; // Import the team logo

function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 px-[10%] bg-[#0f0f0f] text-center">
      <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        
        {/* Left Column: Projects */}
        <div className="space-y-8 md:col-span-2">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,204,112,0.3)] p-3"
            >
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 opacity-0"
                ></a>
              )}
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[#ffcc70] text-xl mb-2">{proj.title}</h3>

                {/* Project Logo and Description */}
                <div className="flex items-center mb-3">
                  <img src={teamLogo} alt="Team Logo" className="w-8 h-8 mr-3" />
                  <p className="text-xs text-gray-300">{proj.desc}</p>
                </div>

                {/* Display languages if available */}
                {proj.languages && (
                  <ul className="text-xs text-gray-400 mt-2">
                    {proj.languages.map((lang, i) => (
                      <li key={i}>• {lang}</li>
                    ))}
                  </ul>
                )}

                {/* Detailed Information Section */}
                <div className="mt-4">
                  {proj.details && (
                    <div>
                      <h4 className="text-sm text-[#ffcc70] mb-2">Project Details</h4>
                      <p className="text-xs text-gray-300">{proj.details}</p>
                    </div>
                  )}
                  {proj.team && (
                    <div className="mt-3">
                      <h4 className="text-sm text-[#ffcc70] mb-2">Team Members</h4>
                      <ul className="text-xs text-gray-300">
                        {proj.team.map((member, i) => (
                          <li key={i}>• {member}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {proj.video && (
                <div className="mt-3">
                  <iframe
                    src={proj.video}
                    width="100%"
                    height="150"
                    allow="autoplay"
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              )}

              {/* Inserted View Project link button */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffcc70] hover:underline mt-3 block text-center text-xs"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Short Introduction */}
        <div className="md:col-span-1 bg-[#1a1a1a] border border-[#333] rounded-lg p-5 text-sm text-gray-300">
          <h3 className="text-xl text-[#ffcc70] mb-4">Previous Works</h3>
          <p className="mb-4">
            We at ConVINCE have worked on a variety of projects ranging from POS systems for restaurants to web apps for home-based printing. Our team focuses on creating solutions that deliver great user experiences and are built with modern technologies like HTML, JavaScript, PHP, and CSS. We are committed to continuous growth and providing quality results.
          </p>
          <p>
            Our portfolio showcases just a few of our most recent works, and there’s much more to come! Stay tuned as we expand and innovate.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;