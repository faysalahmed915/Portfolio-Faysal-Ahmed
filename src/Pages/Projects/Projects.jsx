import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to fetch project data:", err));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        type: 'spring',
        stiffness: 80,
      },
    }),
  };

  return (
    <div className="bg-base-200 max-w-7xl mx-auto px-4 md:px-8 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h1>

      <div className="space-y-14">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex flex-col-reverse lg:flex-row-reverse bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={index}
          >
            {/* Info Section */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm mb-4 text-primary">{project.description}</p>

                <ul className="list-disc list-inside text-sm mb-4 space-y-1">
                  {project.features?.slice(0, 5).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-content text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm text-white"
                >
                  Live
                </a>
                <a
                  href={project.githubC}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm text-white"
                >
                  Client Code
                </a>
                <a
                  href={project.githubS}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm text-white"
                >
                  Server Code
                </a>
                <Link
                  to={`/projectDetails/${project.id}`}
                  className="bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content px-4 py-2 rounded text-sm"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 p-6">
              <a href={project.live} target="_blank" rel="noreferrer">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 lg:h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
