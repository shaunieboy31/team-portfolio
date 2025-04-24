import React from "react";

function TeamSection({ profiles }) {
  if (!profiles || Object.keys(profiles).length === 0) {
    return <p className="text-white">No team profiles available.</p>;
  }

  const getIdFromName = (name) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      {Object.keys(profiles).map((name, i) => (
  <section key={i} id={getIdFromName(name)} className={`py-24 px-5 min-h-screen text-center ${i % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#111]'}`}>
    <h2 className="text-3xl text-[#ffcc70] mb-5">{name}</h2>
    <div className="relative inline-block">
      <div className="w-36 h-36 rounded-lg shadow-lg bg-white relative">
        <img src={profiles[name].image} alt={name} className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className="mt-10">
      <h2 className="text-2xl text-[#ffcc70] mb-3">Role</h2>
      <ul className="text-white list-disc list-inside">
        {profiles[name].role.map((role, r) => <li key={r}>{role}</li>)}
      </ul>
      <h2 className="text-2xl text-[#ffcc70] mt-10 mb-3">Education</h2>
      <ul className="text-white list-disc list-inside">
        {profiles[name].education.map((edu, j) => <li key={j}>{edu}</li>)}
      </ul>
      <h2 className="text-2xl text-[#ffcc70] mt-10 mb-3">Technical Skills</h2>
      <ul className="text-white list-disc list-inside">
        {profiles[name].skills.map((skill, k) => <li key={k}>{skill}</li>)}
      </ul>
      {profiles[name].resume && (
        <div className="mt-5">
          <a href={profiles[name].resume} target="_blank" rel="noopener noreferrer" className="text-[#ffcc70] font-bold hover:underline">
            📄 View Resume
          </a>
        </div>
      )}
    </div>
  </section>
))}
    </>
  );
}

export default TeamSection;