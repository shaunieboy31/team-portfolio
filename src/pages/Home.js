import React from "react";

function Home() {
  return (
    <section id="home" className="relative bg-[#0f0f0f] text-white min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#ffcc70] mb-5">Welcome to Our Portfolio</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We are a team of passionate developers and designers dedicated to creating innovative solutions. Explore our work and learn more about us!
        </p>
        <div className="mt-10">
          <a
            href="#portfolio"
            className="bg-[#ffcc70] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e6b85e] transition"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0f0f0f] opacity-50 pointer-events-none"></div>
    </section>
  );
}

export default Home;