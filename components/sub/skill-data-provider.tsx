"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type SkillProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
  color?: string; // glow color
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  color = "168,85,247", // default purple glow
}: SkillProps) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative flex flex-col items-center overflow-visible"
    >
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="
          absolute -top-10 z-50
          bg-black/70 backdrop-blur-md
          text-white text-xs font-medium
          px-2 py-1 rounded-md
          pointer-events-none
          whitespace-nowrap
        "
      >
        {name}
      </motion.span>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onClick={() => setActive((prev) => !prev)} // mobile tap
        className="cursor-pointer"
        style={{
          filter: active
            ? `drop-shadow(0 0 14px rgba(${color},0.7))`
            : "none",
        }}
      >
        <Image
          src={`/skills/${src}`}
          alt={name}
          width={width}
          height={height}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};
