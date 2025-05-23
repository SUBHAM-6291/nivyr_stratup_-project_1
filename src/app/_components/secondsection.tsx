"use client";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SecondSection: React.FC = () => {
  return (
    <section
      className={`py-12 sm:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto bg-black ${josefin.className}`}
      style={{ minHeight: "800px" }}
    >
      <div className="relative text-center mt-4 sm:mt-6">
        <h1 className="text-[60px] sm:text-[100px] font-bold leading-[72px] sm:leading-[120px] text-white">
          Tala Prattoy
        </h1>
        <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <button
            className="w-[217px] h-[55px] rounded-[10px] bg-white text-red-500 text-[16px] font-bold flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            Art Walkthrough
          </button>
          <button
            className="w-[217px] h-[55px] rounded-[10px] bg-transparent text-red-500 text-[16px] font-bold flex items-center justify-center border-[2px] border-red-500 hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            Privileged Entry
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mt-12">
        <img
          src="/Rectangle 11(1).png"
          alt="Centered Image"
          className="max-w-[500px] w-full h-auto object-contain rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default SecondSection;