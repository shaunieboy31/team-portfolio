import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TeamSection from "./pages/TeamSection";
import Contact from "./pages/Contact";

// Assets
import shaunImg   from "./assets/img/shaun_russelle_obsenares.jpg";
import kateImg    from "./assets/img/kate_justine_pades.jpg";
import cristelImg from "./assets/img/cristel_nicole_vergara.jpg";
import cherlyImg  from "./assets/img/cherly_vic_bakilid.jpg";
import jhonImg    from "./assets/img/jhon_mark_morales.jpg";
import binalotImg from "./assets/img/binalot.png";
import kjeImg     from "./assets/img/kje.jpg";

// Team Member Profiles
const profiles = {
  "Shaun Russelle Obsenares": {
    image: shaunImg,
    role: ["Project Manager"],
    education: [
      "Imus Pilot Elementary School (2010 - 2016)",
      "Bacoor National High School (2016 - 2020)",
      "Victorious Christian Montessori College Inc. (2020 - 2022)",
      "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
    ],
    skills: ["Photoshop", "Java", "Php", "Github"],
    resume: "/resume/shaun.pdf",
    facebook: "https://www.facebook.com/people/Shaun-Russelle-Obse%C3%B1ares/pfbid06KJfbJKLCiXXYSjPpHyxEFyNC1QCo3pZ61JfXhMro38xGfrr63YAoQ1AgXoNC3dnl/",
    instagram: "https://www.instagram.com/sishaunlangto/",
  },
  "Kate Justine Pades": {
    image: kateImg,
    role: ["Designer"],
    education: [
      "Bukandala Elementary School (2010 - 2016)",
      "Imus National High School (2016 - 2020)",
      "University of Perpetual Help - Molino Campus (2020 - 2022)",
      "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
    ],
    skills: ["Canva", "CSS", "HTML"],
    resume: "/resume/pades.pdf",
    facebook: "https://www.facebook.com/katejustine.padesu",
    instagram: "https://www.instagram.com/_kjpds/",
  },
  "Cristel Nicole Vergara": {
    image: cristelImg,
    role: ["Frontend Developer"],
    education: [
      "Divine Jesus Learning Center Inc. (2010 - 2016)",
      "Divine Jesus Learning Center Inc. (2016 - 2020)",
      "Emilio Aguinaldo College - Cavite Campus (2020 - 2022)",
      "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
    ],
    skills: ["Canva", "CSS", "HTML", "Tailwind CSS"],
    resume: "/resume/cristel.pdf",
    facebook: "https://www.facebook.com/cristelnicole.vergara",
    instagram: "https://instagram.com/cristel",
  },
  "Cherly Vic Bakilid": {
    image: cherlyImg,
    role: ["QA Tester"],
    education: [
      "New Clarin Elementary School (2010 - 2016)",
      "New Clarin National High School (2016 - 2020)",
      "Global System Institute of Technology (2020 - 2022)",
      "BS in Information Technology - Cavite State University- Imus Campus (2022 - Present)",
    ],
    skills: ["Document"],
    resume: "/resume/che.pdf",
    facebook: "https://www.facebook.com/cherly.vic.9?mibextid=wwXIfr&rdid=hgKzO3CbbmwAYjHJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15iaf1aSwG%2F%3Fmibextid%3DwwXIfr#",
    instagram: "https://www.instagram.com/jussstmeeyy?igsh=cDJxOTFtZTU5OWk%3D",
  },
  "Jhon Mark Morales": {
    image: jhonImg,
    role: ["QA Tester"],
    education: [
      "Salawag Elementary School (2007 - 2013)",
      "Paliparan National High School (2013 - 2017)",
      "University of Perpetual Help - Molino Campus (2017 - 2019)",
      "BS in Information Technology - Cavite State University- Imus Campus (2019 - Present)",
    ],
    skills: ["Document"],
    resume: "/resume/jm.pdf",
    facebook: "https://facebook.com/jhon",
    instagram: "https://www.instagram.com/heyy.lusii/",
  },
};

// Projects Data
const projects = [
  {
    title: "UYY BINALOT",
    desc: "A POS system designed for restaurants...",
    img: binalotImg,
    link: `${process.env.PUBLIC_URL}/projects/Binalots/Binalots/home.html`,
    languages: ["HTML", "JavaScript", "PHP", "CSS"],
    details: "A comprehensive point of sale system for managing customer orders, inventory, and payments in restaurants. Built with a focus on ease of use and efficiency.",
    team: ["Shaun Russelle Obsenares", "Cherly Vic Bakilid", "Cristel Nicole Vergara"]
  },
  {
    title: "KJE PRINTING",
    desc: "A web app for home-based printing...",
    img: kjeImg,
    video: "https://drive.google.com/file/d/1lTUCwATkYgAIsLMAYJa-KPfhI92x5znz/preview",
    languages: ["HTML", "JavaScript", "PHP", "CSS"],
    details: "A web application designed to streamline the printing process for home-based printing businesses, with features like order tracking and payment processing.",
    team: ["Cristel Nicole Vergara", "Kate Justine Pades", "jhon Mark Morales"]
  }
];



// Layout component (common structure for the app)
function Layout() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// App component with routing and layout
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in Layout */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio profiles={profiles} />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route path="team" element={<TeamSection profiles={profiles} />} />
          <Route path="contact" element={<Contact />} />
          {/* Any unknown hash-route will navigate back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}