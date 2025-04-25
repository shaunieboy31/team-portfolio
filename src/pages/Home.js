import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

function Home() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6 sm:px-12 md:px-[10%] text-center">
      {/* Clickable circular logo */}
      <div className="flex justify-center">
        <Link to="/about">
          <img
            id="logo"
            src={logo}
            alt="ConVINCE Logo"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full mx-auto mt-8 mb-8 object-cover hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#ffcc70] mb-8">
        Welcome to ConVINCE Portfolio
      </h2>

      {/* Intro */}
      <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
        ConVINCE is a team of creative students who love building cool and useful digital stuff.
        We work together, learn together, and grow together—turning ideas into real projects
        that showcase our skills and passion for tech.
      </p>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        {/* Mission */}
        <div>
          <h3 className="text-2xl sm:text-3xl text-[#ffcc70] mb-3">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            ConVINCE brings together passionate and visionary individuals dedicated to crafting
            innovative digital solutions. Through collaboration, creativity, and a commitment to
            excellence, the team showcases its skills, embraces continuous growth, and makes a
            meaningful impact in the world of technology.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h3 className="text-2xl sm:text-3xl text-[#ffcc70] mb-3">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To inspire innovation through collaboration, empowering visionary thinkers to shape
            the future with cutting-edge ideas, technology, and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
