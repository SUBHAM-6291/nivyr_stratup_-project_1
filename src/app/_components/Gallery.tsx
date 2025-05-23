"use client";
import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const imageRows = [
    ['Rectangle 45.png', 'Rectangle 51.png'],
    ['Rectangle 47.png', 'Rectangle 46.png'],
    ['Rectangle 48.png', 'Rectangle 52.png'],
    ['Rectangle 50.png', 'Rectangle 49.png'],
  ];

  return (
    <div className="w-full bg-black px-4 py-8 text-center min-h-screen">
      <h1
        className="text-6xl font-bold mb-4 text-white"
        style={{ fontFamily: 'Josefin Sans, sans-serif' }}
      >
        Gallery
      </h1>
      <p
        className="text-base text-gray-300 mb-8 max-w-2xl mx-auto font-normal"
        style={{ fontFamily: 'Josefin Sans, sans-serif' }}
      >
        Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
      </p>
      <div className="flex flex-col gap-4">
        {imageRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center">
            {row.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className={`flex-1 ${
                 
                  rowIndex % 2 === 0
                    ? imgIndex === 0
                      ? 'max-w-[60%]' 
                      : 'max-w-[40%]' 
                    : imgIndex === 0
                    ? 'max-w-[40%]' 
                    : 'max-w-[60%]' 
                } min-w-[120px] ${
                  rowIndex >= 1
                    ? imgIndex === 0
                      ? 'pr-1'
                      : 'pl-1 border-l-2 border-gray-700'
                    : ''
                }`}
              >
                <div className="relative w-full" style={{ height: '380px' }}>
                  <Image
                    src={`/${image}`}
                    alt={`Gallery image ${image}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover w-full h-full ${
                      rowIndex >= 1 && imgIndex === 1 ? 'shadow-md' : 'shadow-sm'
                    } rounded-lg`}
                    priority={rowIndex === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;