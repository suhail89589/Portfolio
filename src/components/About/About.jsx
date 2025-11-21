import React, { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

const aboutContent = [
  {
    id: "about",
    title: "About Me",
    content: (
      <>
        <p>
          I'm a passionate full stack developer currently pursuing the BS Degree
          in Programming and Data Science from <span className="highlight">IIT Madras</span>. I enjoy building
          modern web applications, learning advanced technologies, and creating
          things that have real-world impact.
        </p>
        <p>
          My journey blends creativity with curiosity — and I'm always excited
          to level up my skills in web, AI, and Tech.
        </p>
        <motion.a
          href="/resume.pdf"
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        
        </motion.a>
      </>
    ),
  },
  {
    id: "fields",
    title: "Fields I'm Into",
    content: (
      <ul className="about-fields">
        <li><span>✅</span> MERN Stack Development</li>
        <li><span>🎓</span> <strong>Data Science @ <span className="highlight">IIT Madras</span></strong></li>
        <li><span>🤖</span> Artificial Intelligence & Machine Learning</li>
        <li><span>✨</span> AI Generalist</li>
        <li><span>🧠</span> Generative AI </li>
      </ul>
    ),
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-rotating-section full-height animated-bg" id="about">
      <AnimatePresence mode="wait">
        <motion.div
          key={aboutContent[current].id}
          className="about-card expanded"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">{aboutContent[current].title}</h2>
          <div className="about-content">{aboutContent[current].content}</div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
