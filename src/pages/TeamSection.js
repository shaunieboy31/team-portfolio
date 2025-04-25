// src/pages/TeamSection.js
import React from "react";

function TeamSection({ profiles }) {
  if (!profiles || Object.keys(profiles).length === 0) {
    return <p className="text-white text-center py-20">No team profiles available.</p>;
  }

  return (
    <section id="team" className="py-16 px-4 md:px-[10%] bg-[#0f0f0f]">
      <h2 className="text-3xl sm:text-4xl text-[#ffcc70] text-center mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(profiles).map(([name, profile], idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden p-4 sm:p-6 flex flex-col items-center"
          >
            {/* Circular Image */}
            <img
              src={profile.image}
              alt={name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4"
            />

            {/* Name */}
            <h3 className="text-[#ffcc70] text-xl sm:text-2xl font-bold mb-2 text-center">{name}</h3>

            {/* Role */}
            <p className="text-gray-300 mb-4 text-center text-sm sm:text-base">
              <strong>Role:</strong> {profile.role.join(", ")}
            </p>

            {/* Education */}
            <div className="w-full mb-4">
              <h4 className="text-[#ffcc70] font-semibold mb-2 text-sm sm:text-base">Education</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1 text-xs sm:text-sm">
                {profile.education.map((edu, i) => (
                  <li key={i}>{edu}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="w-full mb-4">
              <h4 className="text-[#ffcc70] font-semibold mb-2 text-sm sm:text-base">Skills</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1 text-xs sm:text-sm">
                {profile.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Resume Link */}
            {profile.resume && (
              <div className="w-full mb-4 text-center">
                <a
                  href={`${process.env.PUBLIC_URL}${profile.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffcc70] hover:text-white font-semibold text-sm sm:text-base transition"
                >
                  View Resume
                </a>
              </div>
            )}

            {/* Social Links */}
            <div className="mt-auto flex gap-4">
              {profile.facebook && (
                <a
                  href={profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffcc70] hover:text-white transition text-sm sm:text-base"
                  aria-label={`${name} on Facebook`}
                >
                  Facebook
                </a>
              )}
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffcc70] hover:text-white transition text-sm sm:text-base"
                  aria-label={`${name} on Instagram`}
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
