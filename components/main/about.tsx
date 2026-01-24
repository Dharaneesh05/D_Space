"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const codeLines = [
    "const passion = '∞';",
    "function build() {",
    "  return impact;",
    "}",
    "while (alive) {",
    "  code();",
    "}",
  ];

  return (
    <section
      ref={ref}
      className="relative w-full pt-0 pb-2 md:pb-4 overflow-hidden scroll-mt-20"
      id="about-me"
    >

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Top centered heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4"
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Terminal and Text side by side */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side - Code animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
              },
            }}
            className="relative order-2 md:order-1 self-start"
          >
            <div className="relative backdrop-blur-sm bg-transparent border border-[#d0ccdb8b] rounded-lg p-6 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-gray-400 ml-2 font-mono">
                  terminal
                </span>
              </div>

              {/* Code lines */}
              <div className="space-y-2 font-mono text-sm">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.2,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-gray-500 select-none">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{line}</span>
                    {index === codeLines.length - 1 && (
                      <motion.span
                        className="inline-block w-2 h-4 bg-purple-500 ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
              },
            }}
            className="space-y-6 order-1 md:order-2 text-center md:text-left"
          >
            <div className="space-y-4">


              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  },
                }}
                className="text-lg text-gray-300 leading-relaxed md:leading-relaxed text-justify line-height: 1.6–1.7 max-width: 520–560px"
              >
                I am a MERN Stack and AI Developer who enjoys building clean, scalable, and user-focused web applications with an emphasis on thoughtful UI, reliable backend logic, and maintainable code.I'm sharpen my skills through hands-on projects and real-world experimentation, with a growing interest in integrating AI-driven ideas into modern web applications to create practical, high-impact digital experiences.
              </motion.p>
            </div>
            </motion.div>
          </div>
          
          {/* Social glass cards below in a single row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.5 },
              },
            }}
              className="grid grid-cols-3 gap-3 pt-2 w-full max-w-full"
            >
              {[
                {
                  label: "GitHub",
                  sub: "Building and maintaining real-world projects",
                  href: "https://github.com/Dharaneesh05",
                  Icon: RxGithubLogo,
                  stats: "● MERN Stack       ★ 4       ⑂ 9",
                },
                {
                  label: "LinkedIn",
                  sub: "Professional profile and academic background",
                  href: "https://www.linkedin.com/in/dharaneesh-c/",
                  Icon: RxLinkedinLogo,
                  stats: "AI & Data Science     |     Kongu Engineering College",
                },
                {
                  label: "LeetCode",
                  sub: "Data structures and algorithm practice",
                  href: "https://leetcode.com/u/DharaneeshC/",
                  Icon: SiLeetcode,
                  stats: "Solved 300+ problems     |     Active practice",
                },
              ].map(({ label, sub, href, Icon, stats }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="backdrop-blur-md border-white/30 border p-3 md:p-4 rounded-xl sm:rounded-2xl cursor-pointer relative z-0 overflow-hidden h-full w-full min-h-[110px] flex flex-col shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_10px_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-white/60 group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:-z-10 before:translate-x-[-100%] before:skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:transition-none hover:before:translate-x-[100%] hover:before:transition-transform hover:before:duration-[800ms] hover:before:ease-linear">
                    
                    {/* Glossy shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="text-xl md:text-2xl text-white group-hover:text-white transition-colors" />
                          <div className="text-white font-bold text-sm md:text-base">{label}</div>
                        </div>
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      {/* Body */}
                      <div className="text-white/70 text-xs md:text-sm mb-3 flex-grow leading-relaxed">{sub}</div>
                      {/* Footer Stats */}
                      <div className="text-[10px] md:text-xs text-white/70 group-hover:text-white/80 transition-colors border-t border-white/20 pt-2">
                        {stats}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </motion.div>
    </section>
  );
};
