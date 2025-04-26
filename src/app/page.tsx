"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-4">
              I am a passionate Machine Learning Engineer with expertise in
              developing and deploying ML models. My focus is on creating
              innovative solutions that solve real-world problems.
            </p>
            <p className="text-gray-300">
              With a strong foundation in mathematics and programming, I
              specialize in deep learning, natural language processing, and
              computer vision applications.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "NLP",
                  "Computer Vision",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
