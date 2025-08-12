import React from "react";
import { motion } from "framer-motion";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with MERN Stack Development",
    date: "2025-05-10",
    excerpt:
      "A beginner’s guide to building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    url: "https://yourblog.com/getting-started-with-mern-stack",
  },
  {
    id: 2,
    title: "Building Responsive UI with Tailwind CSS",
    date: "2025-05-22",
    excerpt:
      "Learn how to quickly create beautiful and responsive user interfaces with Tailwind CSS utility classes.",
    url: "https://yourblog.com/building-responsive-ui-with-tailwind-css",
  },
  {
    id: 3,
    title: "Managing State in React with Redux",
    date: "2025-06-01",
    excerpt:
      "An introduction to using Redux for predictable state management in React applications.",
    url: "https://yourblog.com/managing-state-in-react-with-redux",
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js and Express",
    date: "2025-06-10",
    excerpt:
      "Step-by-step guide to creating RESTful APIs using Express.js framework on Node.js backend.",
    url: "https://yourblog.com/building-rest-apis-with-node-express",
  },
  {
    id: 5,
    title: "Deploying Your MERN App Using Firebase Hosting",
    date: "2025-06-15",
    excerpt:
      "How to deploy and host your MERN stack application quickly with Firebase Hosting and its powerful features.",
    url: "https://yourblog.com/deploying-mern-app-with-firebase",
  },
  {
    id: 6,
    title: "Effective Debugging Techniques in JavaScript",
    date: "2025-06-22",
    excerpt:
      "Tips and tools for finding and fixing bugs efficiently in JavaScript codebases.",
    url: "https://yourblog.com/effective-debugging-techniques-in-javascript",
  },
  {
    id: 7,
    title: "Responsive Web Design Principles with HTML5 & CSS3",
    date: "2025-06-28",
    excerpt:
      "Key concepts and best practices for making websites work beautifully on all devices.",
    url: "https://yourblog.com/responsive-web-design-html-css",
  },
  {
    id: 8,
    title: "Version Control Best Practices Using Git & GitHub",
    date: "2025-07-05",
    excerpt:
      "Master the fundamentals of Git workflows and GitHub collaboration to manage your projects smoothly.",
    url: "https://yourblog.com/version-control-best-practices-git-github",
  },
  {
    id: 9,
    title: "Building Scalable REST APIs: Best Practices",
    date: "2025-07-12",
    excerpt:
      "Learn architectural and design strategies to create scalable and maintainable REST APIs.",
    url: "https://yourblog.com/scalable-rest-api-best-practices",
  },
  {
    id: 10,
    title: "UI/UX Design Tips for Developers",
    date: "2025-07-20",
    excerpt:
      "Enhance your web projects with practical UI/UX design principles tailored for developers.",
    url: "https://yourblog.com/ui-ux-design-tips-for-developers",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

const Blogs = () => {
  return (
    <section className="px-2 md:px-4 lg:px-8 max-w-7xl mx-auto py-12 bg-base-200" id="blogs">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Latest Blogs
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map(({ id, title, date, excerpt, url }, i) => (
          <motion.article
            key={id}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h3 className="text-xl font-semibold mb-2 text-base-content">{title}</h3>
            <time className="text-sm text-amber-600 block mb-4">
              📅 {new Date(date).toLocaleDateString()}
            </time>
            <p className="mb-4 text-base-content/80">{excerpt}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Read More →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
