import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

function TeamSection({ profiles }) {
  const [dragging, setDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  if (!profiles || Object.keys(profiles).length === 0) {
    return <p className="text-white">No team profiles available.</p>;
  }

  const handleMouseDown = (e, index) => {
    setDragging(true);
    setDraggedItem(index);
    setOffset({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!dragging || draggedItem === null) return;

    const deltaX = e.clientX - offset.x;
    const deltaY = e.clientY - offset.y;

    const updatedProfiles = [...Object.entries(profiles)];
    const profile = updatedProfiles[draggedItem][1];

    if (!profile.position) profile.position = { x: 0, y: 0 };

    profile.position.x += deltaX;
    profile.position.y += deltaY;

    profiles[updatedProfiles[draggedItem][0]] = profile;

    setOffset({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setDragging(false);
    setDraggedItem(null);
  };

  return (
    <section
      id="team"
      className="py-20 px-[10%] bg-[#0f0f0f] relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Meet the Team</h2>

      <div className="flex justify-center items-center relative">
        {/* Logo linking to Contact */}
        <Link to="/contact" className="absolute z-10">
          <img
            src={logo}
            alt="Team Logo"
            id="logo"
            className="w-48 h-48 object-cover rounded-full cursor-pointer transition-all duration-300 hover:opacity-80"
          />
        </Link>

        <div className="relative w-[700px] h-[700px]">
          {Object.entries(profiles).map(([name, profile], idx) => {
            if (!profile.position) profile.position = { x: 0, y: 0 };

            const angle = (360 / Object.entries(profiles).length) * idx;
            const transform = `rotate(${angle}deg) translateX(300px) rotate(-${angle}deg)`;

            return (
              <div
                key={idx}
                className="absolute cursor-pointer"
                style={{
                  transform: transform,
                  left: `${profile.position.x}px`,
                  top: `${profile.position.y}px`,
                }}
                onMouseDown={(e) => handleMouseDown(e, idx)}
              >
                <div
                  className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden p-5 text-center"
                  style={{ width: "400px", height: "500px" }}
                >
                  {/* ✅ Only image is clickable to resume */}
                  {profile.resume ? (
                    <a
                      href={`${process.env.PUBLIC_URL}${profile.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={profile.image}
                        alt={name}
                        className="w-36 h-36 object-cover mb-4 rounded-full mx-auto hover:opacity-80 transition"
                      />
                    </a>
                  ) : (
                    <img
                      src={profile.image}
                      alt={name}
                      className="w-36 h-36 object-cover mb-4 rounded-full mx-auto"
                    />
                  )}

                  <h3 className="text-[#ffcc70] text-xl font-bold mb-2">{name}</h3>
                  <p className="text-gray-300 mb-2">
                    <strong>Role:</strong> {profile.role.join(", ")}
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Education:</strong>
                  </p>
                  <ul className="text-gray-300 list-disc list-inside">
                    {profile.education.map((edu, i) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                  <p className="text-gray-300 mt-2">
                    <strong>Skills:</strong>
                  </p>
                  <ul className="text-gray-300 list-disc list-inside">
                    {profile.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                  {/* Social Links */}
                  <div className="flex gap-4 mt-4 justify-center">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
