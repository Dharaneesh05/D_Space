"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/constants";
import { HiOutlineDocumentText } from "react-icons/hi2";

export const Experience = () => {
  const handleViewCertificate = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-5 overflow-hidden"
    >
      {/* Section Heading */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16 z-10"
      >
        Experience & Achievements
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 z-10">
        {/* Certifications Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex"
        >
          {/* Container with border and rounded corners */}
          <div className="border-l-4 border-purple-500 bg-white/5 rounded-2xl p-8 w-full h-full">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-8">
              Certifications
            </h3>

            {/* Certifications List */}
            <div className="flex flex-col gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white flex-1">
                        {cert.title}
                      </h4>
                      <button
                        onClick={() => handleViewCertificate(cert.certificateUrl)}
                        className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer flex-shrink-0 mt-1"
                        title="View Certificate"
                      >
                        <HiOutlineDocumentText className="text-xl" />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-sm text-white bg-black px-5 py-2 rounded-full whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex"
        >
          {/* Container with border and rounded corners */}
          <div className="border-l-4 border-cyan-500 bg-white/5 rounded-2xl p-8 w-full h-full">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-8">
              Achievements
            </h3>

            {/* Achievements List */}
            <div className="flex flex-col gap-6">
              {ACHIEVEMENTS.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white flex-1">
                        {achievement.title}
                      </h4>
                      {achievement.certificateUrl && (
                        <button
                          onClick={() => handleViewCertificate(achievement.certificateUrl)}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex-shrink-0 mt-1"
                          title="View Certificate"
                        >
                          <HiOutlineDocumentText className="text-xl" />
                        </button>
                      )}
                    </div>
                    {achievement.category && (
                      <p className="text-gray-400 text-sm mb-2">
                        {achievement.category}
                      </p>
                    )}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                  <span className="text-sm text-white bg-black px-5 py-2 rounded-full whitespace-nowrap">
                    {achievement.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
