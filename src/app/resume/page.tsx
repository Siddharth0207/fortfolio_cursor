"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Resume</h1>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
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
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "NLP",
              "Computer Vision",
              "Deep Learning",
              "AWS",
              "Docker",
              "Git",
              "SQL",
              "Data Analysis",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-700 rounded-full text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: "Master's in Computer Science",
                school: "University Name",
                period: "2018 - 2020",
                description:
                  "Specialized in Machine Learning and Artificial Intelligence",
              },
              {
                degree: "Bachelor's in Computer Science",
                school: "University Name",
                period: "2014 - 2018",
                description:
                  "Focused on software engineering and data structures",
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
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <div className="space-y-4">
            {[
              {
                name: "AWS Certified Machine Learning",
                issuer: "Amazon Web Services",
                year: "2021",
              },
              {
                name: "TensorFlow Developer Certificate",
                issuer: "Google",
                year: "2020",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-gray-300 mt-2">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
