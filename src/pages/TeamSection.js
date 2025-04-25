import React from "react";

function TeamSection({ profiles }) {
  // Check if profiles data is available
  if (!profiles || Object.keys(profiles).length === 0) {
    return <p className="text-white">No team profiles available.</p>;
  }

  return (
    <section id="team" className="py-20 px-[10%] bg-[#0f0f0f]">
      <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(profiles).map(([name, profile], idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden p-5"
          >
            {/* Render the profile image as a circle */}
            <img
              src={profile.image}
              alt={name}
              className="w-32 h-32 object-cover mb-4 rounded-full mx-auto"
            />
            {/* Render the team member's name */}
            <h3 className="text-[#ffcc70] text-xl font-bold mb-2 text-center">{name}</h3>
            {/* Render the role */}
            <p className="text-gray-300 mb-2">
              <strong>Role:</strong> {profile.role.join(", ")}
            </p>
            {/* Render the education */}
            <p className="text-gray-300 mb-2">
              <strong>Education:</strong>
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              {profile.education.map((edu, eduIdx) => (
                <li key={eduIdx}>{edu}</li>
              ))}
            </ul>
            {/* Render the skills */}
            <p className="text-gray-300 mt-2">
              <strong>Skills:</strong>
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              {profile.skills.map((skill, skillIdx) => (
                <li key={skillIdx}>{skill}</li>
              ))}
            </ul>
            {/* Render the resume link if available */}
            {profile.resume ? (
              <a
                href={`${process.env.PUBLIC_URL}${profile.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffcc70] hover:underline mt-3 block"
              >
                View Resume
              </a>
            ) : (
              <p className="text-gray-400 mt-3 italic text-sm">Resume not available</p>
            )}
            {/* Render social media links */}
            <div className="flex gap-4 mt-4">
              {profile.facebook && (
                <a
                  href={profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffcc70] hover:underline"
                >
                  Facebook
                </a>
              )}
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffcc70] hover:underline"
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
