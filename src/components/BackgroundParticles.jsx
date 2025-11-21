// src/components/BackgroundParticles.jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

export default function BackgroundParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#000000",
        },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
        },
      }}
    />
  );
}
