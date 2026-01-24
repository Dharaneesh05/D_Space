"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between px-5 md:px-20 mt-16 md:mt-20 w-full z-[20] gap-6 md:gap-8"
      >
        <div className="h-full w-full md:w-auto flex flex-col gap-3 md:gap-4 justify-center text-start">
          <motion.div
            variants={slideInFromLeft(0.3)}
            className="text-2xl md:text-3xl text-white font-semibold"
          >
          Hi, I'm
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-3xl md:text-7xl font-extrabold max-w-[900px] w-auto h-auto leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
              Dharaneesh C
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-2 md:py-3 px-4 md:px-5 border-2 border-[#7042f88b] opacity-[0.9] inline-block rounded-lg backdrop-blur-sm w-fit"
          >
            <span className="Welcome-text text-xs md:text-xl font-bold text-white text-center">
              <div className="md:hidden">
                <div>MERN Developer</div>
                <div>AI Enthusiast</div>
              </div>
              <div className="hidden md:block">
                MERN Stack Developer | AI Enthusiast
              </div>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.7)}
            className="text-base md:text-lg text-gray-300 max-w-[600px] font-medium leading-relaxed"
          >
           Building modern web experiences with purpose and precision.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(0.9)}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2"
          >
            <button
              onClick={() => setShowPDF(true)}
              className="py-3 md:py-3 px-8 md:px-8 button-primary text-center text-white cursor-pointer rounded-lg bg-[#5b21b6] hover:bg-[#6d28d9] transition-all font-semibold shadow-lg hover:shadow-purple-500/50 text-base md:text-base"
            >
              View Resume
            </button>
            <a
              href="/resume.pdf"
              download="Dharaneesh_C_Resume.pdf"
              className="py-3 md:py-3 px-8 md:px-8 button-primary text-center text-white cursor-pointer rounded-lg bg-[#5b21b6] hover:bg-[#6d28d9] transition-all font-semibold shadow-lg hover:shadow-purple-500/50 text-base md:text-base"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="hidden md:flex justify-center items-center"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={500}
            width={450}
            draggable={false}
            className="select-none"
          />
        </motion.div>
      </motion.div>

      {/* PDF Modal Popup */}
      {showPDF && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowPDF(false)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all font-bold text-xl"
              title="Close"
            >
              ✕
            </button>
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Resume - Dharaneesh C"
            />
          </div>
        </div>
      )}
    </>
  );
};
