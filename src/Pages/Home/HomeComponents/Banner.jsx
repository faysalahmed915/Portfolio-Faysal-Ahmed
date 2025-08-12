import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebookSquare, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative py-20 px-4 md:px-16 overflow-hidden bg-gradient-to-br from-base-200 to-base-100 text-base-content rounded-2xl" id="home">
      {/* Animated Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 bg-gradient-to-tr from-secondary via-primary to-accent animate-pulse blur-2xl" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Faysal Ahmed</h1>

          <h2 className="text-2xl font-medium mb-4">
            <span className="text-secondary-content">I'm a </span>
            <span className="text-secondary font-bold">
              <Typewriter
                words={["MERN Stack Developer", "React Enthusiast", "Problem Solver"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="mb-6 max-w-xl text-base-content/90 mx-auto lg:mx-0">
            Passionate about building full-stack applications using React, Node.js, Firebase, and MongoDB. I love solving real-world problems with clean and efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            {/* <a
              href="#contact"
              className="btn btn-primary rounded-full px-6 flex items-center gap-2"
            >
              Hire Me <HiArrowNarrowRight className="text-xl" />
            </a> */}
            {/* <Link to='/projects'
              href="#projects"
              className="btn btn-outline btn-primary rounded-full px-6"
            >
              View Projects
            </Link> */}
            <a
              href="https://drive.google.com/uc?export=download&id=16JC6BYqsIvEEIM2V0cxgSW9Ilotv2YJI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary rounded-full px-6"
            >
              <FaDownload className="mr-2" /> Resume
            </a>

            {/* <a
              href="https://github.com/faysalahmed915"
              target="_blank"
              download
              className="btn btn-outline rounded-full px-6 flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a> */}
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 justify-center lg:justify-start text-2xl">
            <a href="https://github.com/faysalahmed915" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/eng-faysal-ahmed/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577846498688" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="hover:text-white" />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://i.ibb.co/HTYhNzkv/Whats-App-I561594561.jpg"
            alt="Faysal Ahmed"
            className="rounded-full shadow-2xl w-72 h-72 object-cover border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
