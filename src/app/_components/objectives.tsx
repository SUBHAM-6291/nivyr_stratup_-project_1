"use client";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Objectives: React.FC = () => {
  return (
    <section
      className={`py-8 sm:py-12 px-4 sm:px-6 max-w-[96rem] mx-auto bg-black ${josefin.className}`}
    >
      <div className="text-center">
        <h2
          className="text-[40px] sm:text-[70px] font-normal leading-[48px] sm:leading-[30px] tracking-[0%] mb-4"
          style={{ color: "#FFFFFF" }}
        >
          Objectives & Features
        </h2>
        <span className="text-[14px] sm:text-[16px] max-w-full">
          Learning provides the environment and inspiration to create and exhibit that brings people together to build <br /> connections to community.
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:w-1/2 flex flex-col items-center">
          <img
            src="/Rectangle 41(1).png"
            alt="Durga Puja Art 2024"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Durga Puja Art 2024
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-center"
            style={{ color: "#FFFFFF" }}
          >
            Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist. It thus highlights Kahan – a narration by Susanta Paul, the Artist of high repute
          </p>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-center">
          <img
            src="/Rectangle 41(2).png"
            alt="Watch Art with Artist"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Watch Art with Artist
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-center"
            style={{ color: "#FFFFFF" }}
          >
            2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:w-1/2 flex flex-col items-center">
          <img
            src="/Rectangle 41(3).png"
            alt="Encouraging Craftsmanship"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Encouraging Craftsmanship
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-center"
            style={{ color: "#FFFFFF" }}
          >
            Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
          </p>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-center">
          <img
            src="/Rectangle 41(4).png"
            alt="Promotion of Installation Art"
            className="w-full h-auto aspect-[852/597] object-contain rounded-lg shadow-md"
          />
          <span
            className="text-[20px] sm:text-[18px] font-bold mt-2 text-left w-full"
            style={{ color: "rgba(255, 0, 0, 1)" }}
          >
            Promotion of Installation Art
          </span>
          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-center"
            style={{ color: "#FFFFFF" }}
          >
            Installation Art fosters site-specific works to nurture emerging artists.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 flex justify-center">
        <div className="relative w-full max-w-[800px]">
          <a
            href="https://www.youtube.com/embed/AWKXVD2rshw?si=XaJMVEPVISsg8zs5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Group 1171274829.png"
              alt="Video Thumbnail"
              className="w-full h-auto aspect-[16/9] object-cover rounded-lg shadow-md"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12">
        <h2
          className="text-[70px] font-normal leading-[30px] tracking-[0%] mb-4"
          style={{ color: "#FFFFFF" }}
        >
          Awards
        </h2>
        <p
          className="text-[14px] sm:text-[16px] font-normal leading-[24px] tracking-[0%] mt-4 sm:mt-6 text-center"
          style={{ color: "#FFFFFF" }}
        >
          Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <div className="flex flex-row gap-4 sm:gap-32 justify-center">
          <img
            src="/massart 1.png"
            alt="Mass Art Image 1"
            className="max-w-[50px] sm:max-w-[156px] max-h-[59px] sm:max-h-[184px] w-full h-auto aspect-[156.278/184.693] object-contain rounded-lg shadow-md"
          />
          <img
            src="/massart 1.png"
            alt="Mass Art Image 2"
            className="max-w-[50px] sm:max-w-[156px] max-h-[59px] sm:max-h-[184px] w-full h-auto aspect-[156.278/184.693] object-contain rounded-lg shadow-md"
          />
          <img
            src="/massart 1.png"
            alt="Mass Art Image 3"
            className="max-w-[50px] sm:max-w-[156px] max-h-[59px] sm:max-h-[184px] w-full h-auto aspect-[156.278/184.693] object-contain rounded-lg shadow-md"
          />
          <img
            src="/massart 1.png"
            alt="Mass Art Image 4"
            className="max-w-[50px] sm:max-w-[156px] max-h-[59px] sm:max-h-[184px] w-full h-auto aspect-[156.278/184.693] object-contain rounded-lg shadow-md"
          />
          <img
            src="/massart 1.png"
            alt="Mass Art Image 5"
            className="max-w-[50px] sm:max-w-[156px] max-h-[59px] sm:max-h-[184px] w-full h-auto aspect-[156.278/184.693] object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <div
          className="max-w-[1200px] mx-auto rounded-lg shadow-md p-4 sm:p-6 bg-[#191919]"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:w-1/2 ml-2 sm:ml-6">
              <h1
                className="text-[28px] sm:text-[48px] font-bold leading-[40px] sm:leading-[60px] tracking-[0%] mb-4 max-w-[585px] max-w-full whitespace-nowrap"
                style={{ color: "#FFFFFF", marginLeft: "50px" }}
              >
                Advertise with Us
              </h1>
              <p
                className="text-[16px] sm:text-[18px] font-normal leading-[30px] tracking-[0%]"
                style={{ color: "#FFFFFF" }}
              >
                Join Tala Prattoy to showcase your brand during the vibrant Durga Puja festival. Connect with a diverse audience through our creative art installations and cultural events.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-end">
              <button
                className="w-[178px] h-[55px] rounded-[10px] bg-white text-red-500 text-[16px] font-bold flex items-center justify-center mx-auto sm:ml-auto sm:mr-4 hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;