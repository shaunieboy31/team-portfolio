import React from "react";
import Home from "./pages/Home"; // Updated path for Home.js
import Contact from "./pages/Contact"; // Updated path for Contact.js
import TeamSection from "./pages/TeamSection"; // Updated path for TeamSection.js
import Footer from "./components/Footer"; // Path remains the same

function App() {
  const profiles = {
    "Shaun Russelle Obsenares": {
      image: "/img/shaun russelle obsenares.jpg",
      role: ["Full Stack Developer"],
      education: [
        "Imus Pilot Elementary School (2010 - 2016)",
        "Bacoor National High School (2016 - 2020)",
        "Victorious Christian Montessori College Inc. (2020 - 2022)",
        "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
      ],
      skills: ["Photoshop", "Java", "Php", "Github"],
      resume: "/resume/shaun.pdf",
    },
    "Kate Justine Pades": {
      image: "/img/kate justine pades.jpg",
      role: ["Designer"],
      education: [
        "Bukandala Elementary School (2010 - 2016)",
        "Imus National High School (2016 - 2020)",
        "University of Perpetual Help - Molino Campus (2020 - 2022)",
        "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
      ],
      skills: ["Canva", "CSS", "HTML"],
      resume: "/resume/pades.pdf",
    },
    "Cristel Nicole Vergara": {
      image: "/img/cristel nicole vergara.jpg",
      role: ["Frontend Developer"],
      education: [
        "Divine Jesus Learning Center Inc. (2010 - 2016)",
        "Divine Jesus Learning Center Inc. (2016 - 2020)",
        "Emilio Aguinaldo College - Cavite Campus (2020 - 2022)",
        "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
      ],
      skills: ["Canva", "CSS", "HTML", "Tailwind CSS"],
      resume: "/resume/cristel.pdf",
    },
    "Cherly Vic Bakilid": {
      image: "/img/cherly vic bakilid.jpg",
      role: ["QA Tester"],
      education: [
        "New Clarin Elementary School (2010 - 2016)",
        "New Clarin National High School (2016 - 2020)",
        "Global System Institute of Technology (2020 - 2022)",
        "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
      ],
      skills: ["Document"],
      resume: "/resume/che.pdf",
    },
    "Jhon Mark Morales": {
      image: "/img/jhon mark morales.jpg",
      role: ["QA Tester"],
      education: [
        "Salawag Elementary School (2007 - 2013)",
        "Paliparan National High School (2013 - 2017)",
        "University of Perpetual Help - Molino Campus (2017 - 2019)",
        "BS in Information Technology - Cavite State University- Imus Campus (2019 - Present)",
      ],
      skills: ["Document"],
      resume: "/resume/jm.pdf",
    },
  };

  const projects = [
    {
      title: "UYY BINALOT",
      desc: "A POS system designed for restaurants...",
      img: "/img/binalot.png",
      link: "/projects/Binalots/Binalots/home.html",
    },
    {
      title: "KJE PRINTING",
      desc: "A web app for home-based printing...",
      img: "/img/kje.jpg",
      link: "/projects/kje/admin/index.php",
    },
    {
      title: "Mobile App",
      desc: "A mobile app using React Native and Expo.",
      img: "/img/project3.jpg",
      link: "#",
    },
  ];

  const getIdFromName = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full py-5 text-center sticky top-0 bg-[#0f0f0f] z-50">
        <ul className="flex justify-center gap-10 list-none m-0 p-0">
          <li>
            <a href="#portfolio" className="text-white hover:text-gray-400 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#team" className="text-white hover:text-gray-400 transition">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <Home />

      {/* Portfolio Section */}
      <div id="portfolio" className="flex flex-col items-center mt-16">
        <h1 className="text-6xl tracking-wider mb-10">PORTFOLIO</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {Object.keys(profiles).map((name, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <a href={`#${getIdFromName(name)}`} className="w-40 h-52 border-8 border-[#333] shadow-lg bg-white relative animate-swing origin-top">
                <img src={profiles[name].image} alt={name} className="w-full h-full object-cover" />
              </a>
              <h3 className="mt-3 text-[#ffcc70] font-bold">{name}</h3>
              <p className="text-gray-300">{profiles[name].role.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
<section id="about" className="relative py-20 px-[10%] bg-[#0f0f0f] flex flex-col md:flex-row items-center">
  <img
    src="/img/logo.jpg"
    alt="Logo"
    className="absolute left-10 top-1/2 transform -translate-y-1/2 w-80 h-80 object-contain z-10"
  />
  <div className="ml-[25%] text-center md:text-left">
    <h2 className="text-4xl text-[#ffcc70] mb-5">About Us</h2>
    <p className="text-gray-300 mb-10">
      ConVINCE is a team of creative students who love building cool and useful digital stuff. We work together, learn together, and grow together—turning ideas into real projects that showcase our skills and passion for tech.
    </p>

    {/* Mission Statement */}
    <h3 className="text-3xl text-[#ffcc70] mb-3">Our Mission</h3>
    <p className="text-gray-300 mb-10">
      ConVINCE brings together passionate and visionary individuals dedicated to crafting innovative digital solutions. Through collaboration, creativity, and a commitment to excellence, the team showcases its skills, embraces continuous growth, and makes a meaningful impact in the world of technology.
    </p>

    {/* Vision Statement */}
    <h3 className="text-3xl text-[#ffcc70] mb-3">Our Vision</h3>
    <p className="text-gray-300 mb-10">
      To inspire innovation through collaboration, empowering visionary thinkers to shape the future with cutting-edge ideas, technology, and excellence.
    </p>

    {/* Expertise */}
    <h3 className="text-3xl text-[#ffcc70] mb-3">Our Expertise</h3>
    <p className="text-gray-300 mb-10">
      At ConVINCE, we bring a wide range of technical expertise to the table. Our team is proficient in full-stack web development, mobile app creation, database management, and system design. We focus on building user-centered digital solutions that balance functionality with an engaging user experience.
    </p>

    {/* Focus Areas */}
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

      {/* Project Section */}
      <section id="projects" className="py-20 px-[10%] bg-[#0f0f0f]">
        <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,204,112,0.3)]"
            >
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

      {/* Team Section */}
<section id="team" className="py-20 px-[10%] bg-[#0f0f0f]">
  <h2 className="text-4xl text-[#ffcc70] text-center mb-10">Meet the Team</h2>

  {/* Team Background */}
  <div className="text-center mb-10">
    <h3 className="text-3xl text-[#ffcc70] mb-3">Our Background</h3>
    <p className="text-gray-300">
      ConVINCE is a group of passionate individuals with diverse skills in design, development, and quality assurance. 
      We came together to create innovative solutions that solve real-world problems and showcase our creativity.
    </p>
  </div>

  {/* Team Purpose */}
  <div className="text-center mb-10">
    <h3 className="text-3xl text-[#ffcc70] mb-3">Our Purpose</h3>
    <p className="text-gray-300">
      Our purpose is to collaborate, learn, and grow as a team while delivering high-quality projects that make a difference. 
      We aim to inspire others through our work and demonstrate the power of teamwork and innovation.
    </p>
  </div>

  {/* Team Profiles */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {Object.entries(profiles).map(([name, profile], idx) => (
      <div key={idx} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden p-5">
        <img src={profile.image} alt={name} className="w-full h-44 object-cover mb-4" />
        <h3 className="text-[#ffcc70] text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-2"><strong>Role:</strong> {profile.role.join(", ")}</p>
        <p className="text-gray-300 mb-2"><strong>Education:</strong></p>
        <ul className="text-gray-300 list-disc list-inside">
          {profile.education.map((edu, eduIdx) => (
            <li key={eduIdx}>{edu}</li>
          ))}
        </ul>
        <p className="text-gray-300 mt-2"><strong>Skills:</strong></p>
        <ul className="text-gray-300 list-disc list-inside">
          {profile.skills.map((skill, skillIdx) => (
            <li key={skillIdx}>{skill}</li>
          ))}
        </ul>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-[#ffcc70] hover:underline mt-3 block">
          View Resume
        </a>
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;