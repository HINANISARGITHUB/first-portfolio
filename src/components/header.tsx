"use client"; 

import { useState } from "react";
import { navItem } from "@/contant"; //  nav items
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-[70px] sm:h-[85px] bg-slate-800 drop-shadow-[0_1px_5px_rgba(117,195,16,1)] relative z-20">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 max-w-6xl lg:mx-auto xl:px-4">
        {/* Logo Section */}
        <div className="flex gap-1 sm:gap-2 items-center">
          <h1 className="text-[#75C310] font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px]">
            Hina
          </h1>
          <span className="text-[#ffffff] font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px]">
            Nisar.
          </span>
        </div>

        {/* Hamburger Menu (for Mobile screen 640px) */}
        <button
          className="block sm:hidden text-[#75C310] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-[#75C310]"></span>
            <span className="block w-6 h-0.5 bg-[#75C310]"></span>
            <span className="block w-6 h-0.5 bg-[#75C310]"></span>
          </div>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-slate-800 sm:block sm:static sm:w-auto z-30`}
        >
          <ul className="flex flex-col sm:flex-row items-center sm:gap-6 md:gap-8 lg:gap-[60px] xl:gap-[70px] text-[#75C310] text-sm sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] font-medium">
            {navItem.map((item) => (
              <Link href={item.link} key={item.title}>
                <li className="hover:text-white cursor-pointer py-2 sm:py-0">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
