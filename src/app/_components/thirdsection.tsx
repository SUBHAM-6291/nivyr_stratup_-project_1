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
              className="text-[18px] font-normal leading-[30px] tracking-[0%] mb-4"
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
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:w-1/2">
          <div className="relative w-full max-w-[560px] h-auto aspect-[560/315]">
            {isVideoPlaying ? (
              <iframe
                width="560"
                height="315"
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
          <div className="p-2 sm:p-4 rounded-lg">
            <h3
              className="text-[18px] font-normal leading-[30px] tracking-[0%] mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Festival Video Highlights
            </h3>
            <p
              className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
              style={{ color: "#FFFFFF" }}
            >
              Tala Prattoy upholds the art aspects of Durga Puja. Essence of
              creativity combining the tools and methods of art and art
              installations interpreting the formative stages of the festival.
              This video captures the vibrant essence of our celebrations,
              showcasing the artistic installations and cultural significance
              of Durga Puja. We are committed to transforming public spaces
              into art venues, making this unique art form accessible globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;