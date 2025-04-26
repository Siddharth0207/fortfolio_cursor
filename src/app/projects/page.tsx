"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-300 mb-4">
                Description of the project and the technologies used. This
                project demonstrates my expertise in machine learning and
                software development.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                  View Project
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  GitHub
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
