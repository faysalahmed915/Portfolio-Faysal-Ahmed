import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

const highlights = [
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: "Frontend Development",
    desc: "Crafting responsive and interactive user interfaces with React.js and Tailwind CSS.",
  },
  {
    icon: <FaServer className="text-4xl text-accent" />,
    title: "Backend Development",
    desc: "Building robust REST APIs using Node.js, Express.js, and MongoDB.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-secondary" />,
    title: "Responsive Design",
    desc: "Ensuring cross-device compatibility with mobile-first design principles.",
  },
];

const HomeHighlights = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-16 px-4 md:px-8 bg-base-200 text-base-content rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What I Do
        </motion.h2>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="bg-base-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base-content/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
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

export default HomeHighlights;
