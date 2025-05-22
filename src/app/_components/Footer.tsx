import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white font-josefin" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
      <div className="flex flex-col max-w-[1920px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row p-4 min-h-[300px]">
          {/* Left Section (Small) */}
          <div className="w-full md:w-[15%] bg-[#1a1a1a] flex items-center justify-center"></div>

          {/* Middle Section (Second Column) */}
          <div
            className="bg-[#373737] p-8 flex flex-col items-center w-full md:w-[clamp(100px,30%,400px)] min-h-full"
          >
            <Image
              src="/logo/Group (1).png"
              alt="Company Logo"
              width={40}
              height={40}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-3 text-center">TaLa Prattoy</h2>
            <p className="text-sm mb-3 text-gray-300 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-full flex flex-col items-center flex-grow">
              <h3 className="text-lg font-semibold mb-3">Join Newsletter</h3>
              <div className="relative w-[282px] h-[52px]">
                <input
                  type="email"
                  placeholder="Insert your mail here"
                  className="p-2 pr-14 rounded-lg text-black w-full h-full focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-[#525252] border border-[#525252]"
                  style={{ borderRadius: '8px' }}
                />
                <button
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center justify-center w-[40px] h-[40px]"
                  style={{ borderRadius: '6px' }}
                >
                  <Image
                    src="/Group 18.png"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section (Third Section - Four Columns) */}
          <div className="bg-[#1a1a1a] p-4 w-full md:w-[55%] flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 place-items-center">
              {/* Products */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold mb-2">Products</h4>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Movies</p>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">TV Shows</p>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Videos</p>
              </div>
              {/* Media Group */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold mb-2">Media Group</h4>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Nice Studio</p>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Nice News</p>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Nice TV</p>
              </div>
              {/* Sitemap */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold mb-2">Sitemap</h4>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">About</p>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Careers</p>
                <p className="mb-2 hover:text-gray-300 cursor-pointer text-sm">Press</p>
              </div>
              {/* Contact */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold mb-2">Contact</h4>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/Vector(5).png"
                    alt="Phone"
                    width={16}
                    height={16}
                  />
                  <p className="hover:text-gray-300 cursor-pointer text-sm">+271 386-647-3637</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/Mail.png"
                    alt="Email"
                    width={16}
                    height={16}
                  />
                  <p className="hover:text-gray-300 cursor-pointer text-sm">ourstudio@hello.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/Location .png"
                    alt="Location"
                    width={16}
                    height={16}
                  />
                  <p className="hover:text-gray-300 cursor-pointer text-sm">8819 Ohio St, South Gate, CA 90280</p>
                </div>
              </div>
            </div>
            {/* Copyright Section (Directly Below Third Section Text) */}
            <div className="text-center pt-2">
              <p className="text-xs">
                Copyright © 2024 massArt, Designed & Developed Ethically by Ethical Den
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;