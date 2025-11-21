import React, { useCallback } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Skills.css";

import jsLogo from "../../assets/javascript.png";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/node.png";
import mongoLogo from "../../assets/mongodb.png";
import expressLogo from "../../assets/express.png";
import tailwindLogo from "../../assets/tailwind.png";
import pythonLogo from "../../assets/python.png";
import githubLogo from "../../assets/github.png";

const skills = [
  { name: "JavaScript", icon: jsLogo, level: 90 },
  { name: "React", icon: reactLogo, level: 85 },
  { name: "Node.js", icon: nodeLogo, level: 80 },
  { name: "MongoDB", icon: mongoLogo, level: 75 },
  { name: "Express", icon: expressLogo, level: 70 },
  { name: "Tailwind", icon: tailwindLogo, level: 80 },
  { name: "Python", icon: pythonLogo, level: 85 },
  { name: "GitHub", icon: githubLogo, level: 90 },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Skills() {
  return (
    <section className="skills-section  py-24 px-4" id="skills">
      <Particles
        id="tsparticles"
        init={useCallback(async (engine) => {
          await loadFull(engine);
        }, [])}
        options={{
          fullScreen: false,
          background: { color: "#0f172a" },
          particles: {
            color: { value: "#38bdf8" },
            links: {
              enable: true,
              color: "#38bdf8",
              distance: 120,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 0.6 },
            size: { value: 2 },
            number: { value: 50 },
          },
        }}
        className="particles"
      />

      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, i) => (
          <motion.div key={i} variants={item}>
            <Tilt
              className="tilt-card"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={800}
              scale={1.05}
              gyroscope={true}
            >
              <div className="skill-card-glass" title={`Experience: ${skill.level}%`}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
