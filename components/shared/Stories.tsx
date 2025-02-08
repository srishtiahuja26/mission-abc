"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const stories = [
  {
    id: 1,
    image: "/person1.png", 
  },
  {
    id: 2,
    image: "/person2.png",
  },
  {
    id: 3,
    image: "/person5.png",
  },
  {
    id: 4,
    image: "/person4.png",
  },
  {
    id: 5,
    image: "/person3.png",
  }
];

const Stories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        return newPosition >= stories.length ? 0 : newPosition;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1440px] h-[832px] mx-auto mt-[5136px]">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(20, 21, 19, 0.7) 0%, rgba(20, 21, 19, 0.7) 100%)',
          backgroundColor: 'rgb(20, 21, 19)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-20">
      <h2 
          className="text-[64px] text-center mb-4"
          style={{
            fontFamily: 'Qanelas Soft',
            fontWeight: 600,
            lineHeight: '70.4px',
            letterSpacing: '-1px',
            background: 'linear-gradient(97.33deg, #FFFFFF 3.33%, #989898 96.01%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Sharing our stories
        </h2>
        <p 
          className="text-[32px] text-center mb-16"
          style={{
            fontFamily: 'Qanelas Soft',
            fontWeight: 400,
            lineHeight: '38.08px',
            letterSpacing: '-0.02em',
            color: 'rgba(242, 242, 242, 1)'
          }}
        >
          A wall of our success stories
        </p>

        {/* Horizontal Auto-scrolling Carousel */}
        <div className="relative w-full max-w-[1440px] overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${scrollPosition * (100 / stories.length)}%)`
            }}
          >
            {/* Duplicate the array for infinite scroll effect */}
            {[...stories, ...stories].map((story, index) => (
              <div
                key={`${story.id}-${index}`}
                className="relative flex-shrink-0"
                style={{
                  width: 'calc(100% / 5)', // Show 5 items at once (3 full + 2 partial)
                }}
              >
                <div className="px-2">
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={story.image}
                      alt={`Success story ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1440px) 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-30" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for cut-off effect */}
          <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-[rgb(20,21,19)] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[rgb(20,21,19)] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Stories;