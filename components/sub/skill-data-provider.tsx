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
  color?: string; // rgb glow color
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  color = "168,85,247", // default purple
}: SkillProps) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="relative flex flex-col items-center justify-center overflow-visible"
    >
      {/* Premium Glassmorphism Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          absolute -top-12 z-[100]
          bg-[#18181B]/80 backdrop-blur-md
          border border-[#3F3F46] shadow-xl
          text-[#FAFAFA] text-xs font-semibold
          px-3 py-1.5 rounded-lg
          pointer-events-none
          whitespace-nowrap
        "
      >
        {name}
      </motion.span>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onClick={() => setActive((prev) => !prev)} // mobile tap
        className="cursor-pointer relative z-10 flex items-center justify-center p-2 rounded-xl transition-all duration-300"
        style={{
          filter: active
            ? `drop-shadow(0 0 16px rgba(${color}, 0.5))`
            : "drop-shadow(0 0 0px rgba(0,0,0,0))",
        }}
      >
        <Image
          src={`/skills/${src}`}
          alt={name}
          width={width}
          height={height}
          draggable={false}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
};
