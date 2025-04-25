import React from "react";
import logoimg from "../assets/img/logo.jpg";

function About() {
  return (
    <section id="about" className="relative py-20 px-[10%] bg-[#0f0f0f] flex flex-col md:flex-row items-center">
      <img
        src={logoimg}
        alt="Logo"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full mb-8"
      />
      <div className="ml-[25%] text-center md:text-left">
        <h2 className="text-4xl text-[#ffcc70] mb-5">About Us</h2>
        <p className="text-gray-300 mb-10">
          ConVINCE is a team of creative students who love building cool and useful digital stuff. We work together, learn together, and grow together—turning ideas into real projects that showcase our skills and passion for tech.
        </p>
        <h3 className="text-3xl text-[#ffcc70] mb-3">Our Mission</h3>
        <p className="text-gray-300 mb-10">
          ConVINCE brings together passionate and visionary individuals dedicated to crafting innovative digital solutions. Through collaboration, creativity, and a commitment to excellence, the team showcases its skills, embraces continuous growth, and makes a meaningful impact in the world of technology.
        </p>
        <h3 className="text-3xl text-[#ffcc70] mb-3">Our Vision</h3>
        <p className="text-gray-300 mb-10">
          To inspire innovation through collaboration, empowering visionary thinkers to shape the future with cutting-edge ideas, technology, and excellence.
        </p>
        <h3 className="text-3xl text-[#ffcc70] mb-3">Our Expertise</h3>
        <p className="text-gray-300 mb-10">
          At ConVINCE, we bring a wide range of technical expertise to the table. Our team is proficient in full-stack web development, mobile app creation, database management, and system design. We focus on building user-centered digital solutions that balance functionality with an engaging user experience.
        </p>
        <h3 className="text-3xl text-[#ffcc70] mb-3">Focus Areas</h3>
        <ul className="text-gray-300 list-disc list-inside mb-10">
          <li><strong>Web Development:</strong> Building responsive, user-friendly websites and web applications that deliver seamless experiences on all devices.</li>
          <li><strong>Mobile App Development:</strong> Creating intuitive mobile applications for both Android and iOS, focusing on usability and performance.</li>
          <li><strong>System Design & Architecture:</strong> Crafting robust back-end systems and databases that ensure scalability, security, and reliability.</li>
          <li><strong>UI/UX Design:</strong> Designing clean and visually appealing interfaces that provide a smooth user experience, emphasizing accessibility and ease of navigation.</li>
          <li><strong>Project Collaboration & Agile Development:</strong> Using agile methodologies and collaborative tools to work efficiently as a team and deliver quality results on time.</li>
        </ul>
      </div>
    </section>
  );
}

export default About;