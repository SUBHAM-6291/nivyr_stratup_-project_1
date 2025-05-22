"use client";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ThirdSection: React.FC = () => {
  return (
    <section
      className={`py-8 sm:py-12 px-4 sm:px-6 max-w-[96rem] mx-auto bg-black ${josefin.className}`}
    >
      {/* Top Row: Text and Image */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
        {/* Left Side: Text ("About Tala") */}
        <div className="w-full md:w-1/2">
          <div className="p-2 sm:p-4 rounded-lg">
            <h2
              className="text-[18px] font-normal leading-[30px] tracking-[0%] mb-4"
              style={{ color: "#FFFFFF" }}
            >
              About Tala
            </h2>
            <p
              className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
              style={{ color: "#FFFFFF" }}
            >
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
            </p>
          </div>
        </div>
        {/* Right Side: 1st Image with "Durga Puja" Text */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="Rectangle 38.png"
            alt="Section Image 1"
            className="w-full max-w-[852px] h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-50 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
            <span className="text-base sm:text-xl font-bold">Durga Puja</span>
          </div>
        </div>
      </div>
      {/* Bottom: Video and Text */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        {/* Left Side: YouTube Video */}
        <div className="w-full sm:w-1/2">
          <div className="relative w-full max-w-[560px] h-auto aspect-[560/315]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-3DO3WmoQVM?si=EH7opEC-E-dIKC8G"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
        {/* Right Side: Text with Small Heading */}
        <div className="w-full sm:w-1/2">
          <div className="p-2 sm:p-4 rounded-lg">
            <h3
              className="text-[18px] font-normal leading-[30px] tracking-[0%] mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Our Festival Highlights
            </h3>
            <p
              className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
              style={{ color: "#FFFFFF" }}
            >
             Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;