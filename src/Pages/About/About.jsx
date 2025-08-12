import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaMapMarkerAlt, FaUser, FaTools, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
    return (
        <section className="bg-base-200 text-base-content py-16 px-2 md:px-4 lg:px-8 max-w-7xl mx-auto" id="about">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://i.ibb.co/Psm3kDfr/Whats-App-Image-2025-06-25-at-2-50-14-PM.jpg"
                        alt="Faysal Ahmed"
                        className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                    />
                </motion.div>

                {/* Main Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
                    <p className="mb-6 text-base leading-relaxed">
                        I’m Faysal Ahmed, a passionate web developer from Bangladesh with a background in Electrical & Electronic Engineering (BSc in EEE). After diving into web technologies, I built dynamic and responsive applications using the MERN stack and Firebase.
                    </p>
                    <ul className="space-y-3 text-base">
                        <li className="flex items-center gap-3"><FaUser className="text-secondary" /> <strong>Name:</strong> Faysal Ahmed</li>
                        <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-secondary" /> <strong>Location:</strong> Bangladesh</li>
                        <li className="flex items-center gap-3"><FaGraduationCap className="text-secondary" /> <strong>Degree:</strong> BSc in EEE</li>
                        <li className="flex items-center gap-3"><FaLaptopCode className="text-secondary" /> <strong>Field:</strong> Web Development (MERN)</li>
                    </ul>
                </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16"
            >
                <h3 className="text-2xl font-semibold mb-4 text-secondary flex items-center gap-2"><FaTools /> Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-medium">
                    {["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "DaisyUI", "Git & GitHub", "REST API"].map((skill, index) => (
                        <div key={index} className="bg-base-100 shadow rounded-xl px-4 py-2 text-center hover:scale-105 transition-transform duration-300 border border-base-300">
                            {skill}
                        </div>
                    ))}

                </div>
                {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 text-center"
                    >
                        <Link to='/skills' className="btn btn-primary px-8 rounded-full mt-4">See More</Link>
                    </motion.div>
            </motion.div>

            {/* Experience or Projects Summary */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-16"
            >
                <h3 className="text-2xl font-semibold mb-4 text-secondary flex items-center gap-2"><FaProjectDiagram /> Highlights</h3>
                <ul className="space-y-3 text-base list-disc pl-5">
                    <li>Built 4+ full-stack projects using React, Node, Express, and MongoDB.</li>
                    <li>Implemented Firebase Auth, protected routes, and dynamic dashboards.</li>
                    <li>Familiar with mobile-first responsive design using Tailwind & DaisyUI.</li>
                    <li>Version-controlled all projects using Git & hosted on GitHub.</li>
                </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 text-center"
            >
                <Link to='/projects' className="btn btn-primary px-8 rounded-full mt-4">See My Projects</Link>
            </motion.div>
        </section>
    );
};

export default About;
