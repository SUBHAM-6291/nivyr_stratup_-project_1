"use client";
import React, { useState } from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Service", "Album", "Stories", "Blog"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 bg-black px-4 sm:px-6 py-4 text-white shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center max-w-[96rem] mx-auto">
        <Logo />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:justify-center md:flex-1 md:gap-4 lg:gap-6 xl:gap-8">
          <ul className="flex gap-4 sm:gap-6 lg:gap-8 list-none font-josefin">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm sm:text-base font-normal hover:text-[#DC2626] transition-colors"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#contact"
          className="hidden md:flex items-center justify-center bg-[#EFEFEF] text-[#DC2626] w-[170px] h-[55px] rounded-[30px] font-bold text-[20px] leading-[100%] tracking-[0%] hover:bg-[#DC2626] hover:text-white transition-colors 2xl:ml-[682px] px-5"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          Contact Us
        </a>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 list-none mt-4 font-josefin">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-base font-normal hover:text-[#DC2626] transition-colors"
                style={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="flex items-center justify-center bg-[#EFEFEF] text-[#DC2626] w-[170px] h-[55px] rounded-[30px] font-bold text-[20px] leading-[100%] tracking-[0%] hover:bg-[#DC2626] hover:text-white transition-colors px-5"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;