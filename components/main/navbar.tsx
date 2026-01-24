'use client';
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mousex = useMotionValue(Infinity);

  return (
    <div className="w-full h-[65px] fixed top-0 bg-transparent z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-center m-auto px-[10px]">
        {/* Web Navbar */}
        <div className="hidden md:flex h-full flex-row items-center justify-center">
          <div 
            className="flex items-center gap-5 px-6 py-2 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[rgba(112,66,248,0.2)]"
            onMouseMove={(e: React.MouseEvent) => mousex.set(e.pageX)}
            onMouseLeave={() => mousex.set(Infinity)}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.title}
                link={link}
                mousex={mousex}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden h-full flex-row items-center justify-center">
          <div 
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[rgba(112,66,248,0.2)]"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer px-2 py-1 text-xs sm:text-sm text-gray-200 font-semibold hover:text-white transition-colors duration-300 ease-in-out whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// NavLink Component with Magnification Effect
const NavLink = ({ link, mousex }: { link: { title: string; link: string }, mousex: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = 150;
  const magnification = 120;

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [80, magnification, 80]
  );

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div 
      ref={ref} 
      style={{ width }} 
      className="flex items-center justify-center"
    >
      <Link
        href={link.link}
        className="cursor-pointer px-3 py-2 text-gray-200 font-semibold hover:text-white transition-colors duration-300 ease-in-out whitespace-nowrap"
      >
        {link.title}
      </Link>
    </motion.div>
  );
};