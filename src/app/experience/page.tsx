"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Experience</h1>
        <div className="space-y-8">
          {[
            {
              title: "Senior ML Engineer",
              company: "Tech Company",
              period: "2020 - Present",
              description: [
                "Led a team of ML engineers in developing and deploying production models",
                "Implemented NLP solutions for text classification and sentiment analysis",
                "Optimized model performance and reduced inference time by 40%",
                "Collaborated with cross-functional teams to integrate ML solutions",
              ],
            },
            {
              title: "ML Engineer",
              company: "AI Startup",
              period: "2018 - 2020",
              description: [
                "Developed computer vision models for object detection",
                "Built and deployed ML pipelines for real-time predictions",
                "Created data preprocessing pipelines for model training",
                "Implemented A/B testing for model performance evaluation",
              ],
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-300 mt-2">{exp.period}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
