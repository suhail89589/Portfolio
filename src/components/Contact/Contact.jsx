import React from "react";
import { useForm, ValidationError } from "@formspree/react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const iconAnimation = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Contact() {
  const [state, handleSubmit] = useForm("mgvydevd");

  const notify = () => toast.success("✅ Message sent successfully!");

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    if (!state.errors.length && state.succeeded) notify();
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">Get in Touch</h2>

        {!state.succeeded ? (
          <form onSubmit={handleFormSubmit} className="contact-form">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <motion.button
              type="submit"
              disabled={state.submitting}
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        ) : (
          <motion.p
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Thank you! Your message has been sent.
          </motion.p>
        )}

        <div className="social-links">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/suhail89589",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/mohd-suhail-7b5896366/",
              label: "LinkedIn",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:mohdsuhail8958911@gmail.com",
              label: "Email",
            },
          ].map(({ icon, link, label }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={iconAnimation}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.3 }}
              style={{ fontSize: "2.5rem", margin: "0 1rem", color: "#38bdf8" }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Suhail Malik. All rights reserved.
          </p>
          <p>Built with ❤️ using React, Tailwind, and Framer Motion</p>
        </footer>
      </motion.div>
    </section>
  );
}
