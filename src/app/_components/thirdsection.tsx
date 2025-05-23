"use client";
import React, { useState } from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ThirdSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section
      className={`py-8 sm:py-12 px-4 sm:px-6 max-w-[96rem] mx-auto bg-black ${josefin.className}`}
    >
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
        <div className="w-full md:w-1/2">
          <div className="p-2 sm:p-4 rounded-lg">
            <h2
              className="text-[40px] sm:text-[60px] font-normal leading-[48px] sm:leading-[64px] tracking-[0%] mb-4 text-left"
              style={{ color: "#FFFFFF" }}
            >
              About Tala
            </h2>
            <p
              className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
              style={{ color: "#FFFFFF" }}
            >
              Tala Prattoy upholds the art aspects of Durga Puja. Essence of
              creativity combining the tools and methods of art and art
              installations interpreting the formative stages of the festival.
              Tala Prattoy’s work emphasis has always been on Durga Puja as a
              specific art genre where the public space is being transformed
              into an art venue. We are committed to make that art global.Tala
              Prattoy upholds the art aspects of Durga Puja. Essence of
              creativity combining the tools and methods of art and art
              installations interpreting the formative stages of the festival.
              Tala Prattoy’s work emphasis has always been on Durga Puja as a
              specific art genre where the public space is being transformed
              into an art venue. We are committed to make that art global.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="Rectangle 38.png"
            alt="Section Image 1"
            className="w-full max-w-[852px] h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-50 px-3 sm:px-4 py-1 sm:py-2 rounded-lg"></div>
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <div className="p-2 sm:p-4 rounded-lg"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:w-1/2 relative">
          <img
            src="Rectangle 39.png"
            alt="Section Image 2"
            className="w-full max-w-[852px] h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-50 px-3 sm:px-4 py-1 sm:py-2 rounded-lg"></div>
        </div>
        <div className="w-full sm:w-1/2 relative">
          <img
            src="Rectangle 40.png"
            alt="Section Image 3"
            className="w-full max-w-[852px] h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-50 px-3 sm:px-4 py-1 sm:py-2 rounded-lg"></div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="w-full sm:w-1/2">
            <div className="relative w-full aspect-[840/365]">
              {isVideoPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-3DO3WmoQVM?si=EH7opEC-E-dIKC8G&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                ></iframe>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="Rectangle 41.png"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={handlePlayClick}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition"
                    aria-label="Play video"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="p-2 sm:p-4 rounded-lg h-full flex flex-col justify-center">
              <h3
                className="text-[40px] sm:text-[60px] font-normal leading-[48px] sm:leading-[64px] tracking-[0%] mb-4 text-left"
                style={{ color: "#FFFFFF" }}
              >
                Discover Tala
              </h3>
              <p
                className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
                style={{ color: "#FFFFFF" }}
              >
                Tala Prattoy upholds the art aspects of Durga Puja. Essence of
                creativity combining the tools and methods of art and art
                installations interpreting the formative stages of the festival.
                Tala Prattoy’s work emphasis has always been on Durga Puja as a
                specific art genre where the public space is being transformed
                into an art venue. We are committed to make that art global.Tala
                Prattoy upholds the art aspects of Durga Puja. Essence of
                creativity combining the tools and methods of art and art
                installations interpreting the formative stages of the festival.
                Tala Prattoy’s work emphasis has always been on Durga Puja as a
                specific art genre where the public space is being transformed
                into an art venue. We are committed to make that art global.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <div
          className="max-w-[1200px] mx-auto rounded-lg shadow-md p-4 sm:p-6 bg-[#191919]"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:w-1/2">
              <h1
                className="text-[30px] sm:text-[40px] font-bold leading-[36px] sm:leading-[48px] tracking-[0%] mb-4 text-left"
                style={{ color: "#FFFFFF" }}
              >
                Our Achievements
              </h1>
              <p
                className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
                style={{ color: "#FFFFFF" }}
              >
                Tala Prattoy upholds the art aspects of Durga Puja. Essence of
                creativity combining the tools and methods of art and art
                installations interpreting the formative stages of the festival.
              </p>
            </div>
            <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-row items-center gap-3">
                <span className="text-red-500 text-[40px] font-bold leading-[40px]">
                  500k+
                </span>
                <span className="text-[16px] text-white">Existing Partnerships</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <span className="text-red-500 text-[40px] font-bold leading-[40px]">
                  5m
                </span>
                <span className="text-[16px] text-white">Existing Partnerships</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <span className="text-red-500 text-[40px] font-bold leading-[40px]">
                  100k+
                </span>
                <span className="text-[16px] text-white">Existing Partnerships</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <span className="text-red-500 text-[40px] font-bold leading-[40px]">
                  5m
                </span>
                <span className="text-[16px] text-white">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;