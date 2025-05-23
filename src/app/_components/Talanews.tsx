"use client";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Talanews: React.FC = () => {
  return (
    <section
      className={`py-8 sm:py-12 px-4 sm:px-6 max-w-[96rem] mx-auto bg-black ${josefin.className}`}
    >
      <div className="text-left">
        <h2
          className="text-[40px] sm:text-[70px] font-normal leading-[48px] sm:leading-[30px] tracking-[0%] mb-4"
          style={{ color: "#FFFFFF" }}
        >
          Tala In News
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <img
            src="/Rectangle 53(1).png"
            alt="News Item 1"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-left"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <img
            src="/Rectangle 53(2).png"
            alt="News Item 2"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-left"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <img
            src="/Rectangle 53(3).png"
            alt="News Item 3"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-left"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <img
            src="/Rectangle 53(4).png"
            alt="News Item 4"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-left"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <img
            src="/Rectangle 53(5).png"
            alt="News Item 5"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-left"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <img
            src="/Rectangle 53(6).png"
            alt="News Item 6"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-left"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Talanews;
