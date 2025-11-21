import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
  {
    title: "QuizPrepX - Mock Test Platform",
    description:
      "A complete MERN-based mock test platform with authentication, CSV/JSON quiz upload, user dashboard, and admin panel.",
    github: "https://github.com/suhail89589/QuizPrepX2",
  },
  {
    title: "Portfolio Website",
    description:
      "An animated portfolio built using React, Tailwind CSS, Framer Motion & Parallax Tilt for smooth UI interactions.",
    github: "https://github.com/your-github-portfolio",
    
  },
  {
    title: "P2P File Transfer System",
    description:
      "A peer-to-peer file transfer web app built using WebRTC, Socket.io, Node.js, and React — no central server required.",
    github: "https://github.com/suhail89589/P2P-File-Transfer",
     live: "https://p2p-file-transfer-1-0djl.onrender.com"
  },
  {
    title: "User Management System",
    description:
      "A secure MERN-based user management system with JWT authentication, role-based access control, and profile handling.",
    github: "https://github.com/suhail89589/User-Management-System-Basic2", 
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub Repo →
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
