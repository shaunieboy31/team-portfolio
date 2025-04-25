import React from "react";
import logoimg from "../assets/img/logo.jpg";

function Home() {
  return (
    <section
      className="bg-[#0f0f0f] text-white min-h-screen flex flex-col justify-center items-center px-4"
    >
      {/* Bigger logo, auto-centered */}
      <img
        src={logoimg}
        alt="Logo"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full mb-8"
      />

      {/* Even larger heading, centered */}
      <h1 className="text-7xl md:text-8xl font-bold text-[#ffcc70] text-center">
        Welcome to Our Portfolio
      </h1>
    </section>
  );
}

export default Home;
