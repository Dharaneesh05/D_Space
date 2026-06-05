'use client';
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 z-50 flex items-center justify-center px-10">

      {/* Desktop */}
      <nav className="hidden md:flex navbar-glass items-center gap-0 px-2 py-1.5">
        {NAV_LINKS.map((link) => (
          <Link key={link.title} href={link.link} className="nav-link">
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Mobile */}
      <nav className="flex md:hidden navbar-glass items-center gap-0 px-2 py-1.5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.link}
            className="nav-link text-xs"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};