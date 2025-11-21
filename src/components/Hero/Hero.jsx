import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-container"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        textAlign: "center",
      }}
    >
     
      <div className="overlay"></div>

      
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <span className="highlight">Suhail </span>Malik
        </motion.h1>

       <motion.p
  className="hero-subtitle"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  I create stellar web experiences with modern technologies. <br />
  Specializing in front-end development, <br />
  I build interfaces that are both beautiful and functional.
</motion.p>


        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.button>
      </motion.div>
    </section>
  );
}