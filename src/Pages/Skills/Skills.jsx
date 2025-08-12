import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from 'react-icons/si';

const skills = [
  {
    name: 'React',
    icon: <FaReact className="text-sky-400 text-5xl" />,
    description:
      'Modern JavaScript library for building responsive and scalable user interfaces using component-based architecture.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    description:
      'Core programming language of the web, enabling dynamic functionality, logic, and interactivity in web apps.',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    description:
      'Markup language for structuring content on the web, essential for page layouts and SEO.',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    description:
      'Style sheet language used for designing beautiful, responsive, and animated websites.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
    description:
      'Utility-first CSS framework for rapidly building custom designs directly in your HTML/JSX.',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
    description:
      'Server-side runtime environment for building scalable backend services using JavaScript.',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-gray-400 text-5xl" />,
    description:
      'Minimal and flexible Node.js web framework used for building RESTful APIs and web applications.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-600 text-5xl" />,
    description:
      'NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-orange-400 text-5xl" />,
    description:
      "Google's platform for building web and mobile apps, offering authentication, real-time databases, hosting, and cloud functions.",
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-white text-5xl" />,
    description:
      'Version control platform for managing code, collaborating with others, and deploying projects.',
  },
];

const Skills = () => {
  return (
    <section className="text-base-content py-16 px-2 md:px-4 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-base-200 p-8 rounded-2xl shadow-lg">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-base-100 p-6 rounded-2xl hover:bg-base-200 transition-all shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 80,
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h2 className="text-2xl font-semibold text-primary">
                {skill.name}
              </h2>
            </div>
            <p className="text-sm text-base-content/80">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
