import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <nav className="navbar-links">
        <Link to="about" smooth={true} duration={500} offset={-80}>
          About Me
        </Link>
        <Link to="skills" smooth={true} duration={600} offset={-80}>
          My Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
