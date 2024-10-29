"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ImageChange: React.FC = () => {
  const text: string[] = [
    'Save hundreds of hours on research',
    'Be the first to find top talent & founders',
    'Track your portfolio in one place',
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number[]>([0, 0, 0]);

  const images: string[] = [
    'https://www.aviato.co/screenshot-1.png',
    'https://www.aviato.co/screenshot-2.png',
    'https://www.aviato.co/screenshot-3.png',
  ];

  useEffect(() => {
    const duration = 5000;
    const increment = 100 / (duration / 100);

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress: number[] = [...prev];
        newProgress[currentIndex] = Math.min(newProgress[currentIndex] + increment, 100);
        return newProgress;
      });
    }, 100);

    const imageInterval = setInterval(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      setProgress(prev => {
        const newProgress: number[] = [...prev];
        newProgress[currentIndex] = 0;
        return newProgress;
      });
    }, duration);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="flex justify-between mb-16">
      <div className="flex flex-col w-[500px]">
        {images.map((_, index) => (
          <div key={index} className="rounded-md overflow-hidden mb-2">
            <div
              className={`h-1 transition-width duration-500 ease-in-out ${currentIndex === index ? 'bg-teal-500' : 'bg-blue-200'}`}
              style={{ width: `${progress[index] || 0}%` }}
            />
            <div className="m-4 text-black tracking-[-0.04em] text-2xl transition-opacity duration-300 opacity-100">
              {text[index]}
            </div>
          </div>
        ))}
        <div className="mt-10 space-y-4 max-w-72">
          <p className="text-lg tracking-[-0.015em] leading-6 text-black">
            Get exclusive data on any private company you can imagine
          </p>
          <button className="px-4 py-2.5 rounded-md font-medium leading-none bg-black text-white hover:bg-white hover:text-black transition-colors duration-300">
            Try it
          </button>
        </div>
      </div>
      <div className="w-[700px] h-[350px] ml-4 rounded-2xl rounded-b-3xl mr-8 overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={700}
          height={350} // Adjust height for better aspect ratio
          className="ml-4 rounded mr-8"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}

export default ImageChange;
