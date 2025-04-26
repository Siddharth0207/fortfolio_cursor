"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Education</h1>
        <div className="space-y-8">
          {[
            {
              degree: "Master's in Computer Science",
              school: "University Name",
              period: "2018 - 2020",
              description:
                "Specialized in Machine Learning and Artificial Intelligence. Completed coursework in advanced algorithms, deep learning, and natural language processing.",
            },
            {
              degree: "Bachelor's in Computer Science",
              school: "University Name",
              period: "2014 - 2018",
              description:
                "Focused on software engineering and data structures. Completed projects in machine learning and web development.",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-gray-300 mt-2">{edu.period}</p>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
