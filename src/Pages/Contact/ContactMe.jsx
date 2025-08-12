import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-base-content">
      <div className="grid md:grid-cols-2 gap-10 items-start bg-base-200 p-8 rounded-2xl shadow-lg">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
          <p className="mb-6 text-base leading-relaxed">
            Interested in working together or have a question? Feel free to send me a message or reach out directly.
          </p>

          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-secondary" />
              <a href="mailto:your@email.com" className="hover:underline">
                faysalahmed915@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-secondary" />
              <span>+880 1799 827567</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-secondary" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                https://github.com/faysalahmed915
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-secondary" />
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-100 p-6 rounded-2xl shadow-lg space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (functionality not connected)");
          }}
        >
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full min-h-[120px]"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
