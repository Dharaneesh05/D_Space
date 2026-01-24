"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { HiExternalLink } from "react-icons/hi";

type OrbitalProjectCardProps = {
  project: {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tech: readonly string[];
    demo: string;
    github: string;
  };
  position: {
    x: number;
    z: number;
    scale: number;
    opacity: number;
    rotateY: number;
  };
  isFocused: boolean;
  onClick: () => void;
};

export const OrbitalProjectCard = ({
  project,
  position,
  isFocused,
  onClick,
}: OrbitalProjectCardProps) => {
  return (
    <motion.div
      animate={{
        x: isFocused ? 0 : position.x,
        y: isFocused ? 0 : 0,
        scale: isFocused ? 1 : position.scale,
        opacity: 1,
        rotateY: isFocused ? 0 : position.rotateY,
        zIndex: isFocused ? 60 : Math.floor(position.scale * 10),
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 25,
        mass: 0.7,
      }}
      className={`${isFocused ? "fixed inset-0 flex items-center justify-center z-50" : "absolute"} cursor-pointer`}
      style={{
        transformStyle: isFocused ? "flat" : "preserve-3d",
      }}
      onClick={onClick}
      whileHover={!isFocused ? { scale: position.scale * 1.05, y: -3 } : {}}
    >
      <motion.div
        animate={{
          width: isFocused ? "500px" : "260px",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
        className="relative overflow-hidden rounded-xl shadow-2xl"
        style={{
          background: isFocused
            ? "linear-gradient(180deg, #0f1224 0%, #151933 100%)"
            : "#1a1f3a",
          border: isFocused ? "2px solid #2d3548" : "1px solid #2d3548",
          boxShadow: isFocused
            ? "0 20px 60px rgba(0, 0, 0, 0.9), 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 8px 30px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* Project Image - Fixed height, no animation */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Project Details - Only shown when focused */}
        {isFocused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="p-6 space-y-3"
            style={{ background: "#0f1224" }}
          >
            {/* Project Title */}
            <h2 className="text-xl font-bold text-white">
              {project.title}
            </h2>

            {/* Project Description - SHORT version only */}
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#1a1f3a] text-gray-300 border border-[#2d3548]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-100 text-black text-sm font-semibold rounded-lg transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <HiExternalLink className="text-base" />
                Live Demo
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1f3a] hover:bg-[#222838] text-white text-sm font-semibold rounded-lg border border-[#2d3548] transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <RxGithubLogo className="text-base" />
                GitHub
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
