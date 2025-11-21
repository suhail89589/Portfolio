import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
           <About/>
           <Skills/>
           <Project/>
           <Contact/>


      <div style={{ paddingTop: "80px", textAlign: "center", color: "#333" }}>
        <h1></h1>
      </div>
    </>
  );
}
