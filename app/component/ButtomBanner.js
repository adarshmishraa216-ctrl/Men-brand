"use client";
import React from "react";
import NextImage from "next/image";

const HeroBanner = () => {
  const bgImageSrc = "/men brand-buttom-newimg.png";
  const buttonColor = "#007850";
  const topHeadingFont = "'Limelight', sans-serif";

  return (
    <section
      className={`relative w-[90vw] mx-auto my-6  overflow-hidden rounded-2xl flex justify-center items-center
      h-[180px] sm:h-[300px] md:h-[360px] lg:h-[300px] xl:h-[280px]`}
    >
      {/* Background Image */}
      <NextImage
        src={bgImageSrc}
        alt="Aakriti Banner Background"
        fill
        className=" object-cover object-[20%_70%] lg:scale-x-[-1]"
        sizes="50vw"
        priority
      />

      {/* Overlay - FIX: Changed to a vertical linear gradient (top to bottom) */}
      <div 
        className="absolute inset-0"
        style={{
          // Linear gradient from top (dark) to bottom (transparent)
          // Starts dark (80% opacity) at the top, fades to semi-transparent (10%) by 70% down, and is transparent at the bottom.
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)'
        }}
      ></div>

      {/* Text Content */}
      <div  className="absolute inset-0 max-w-[1200px] mx-auto flex items-center py-5 px-6 sm:px-10">
        <div 
          className="flex flex-col items-center sm:items-start text-center sm:text-left text-white w-full"
        >
          {/* Main Heading */}
          <h1
            className="text-center sm:text-left text-xl sm:text-2xl lg:text-[36px] font-bold tracking-wide mb-2 pt-5 leading-tight"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Nature’s Secret for Lasting <br className="sm:hidden" />
            Vitality.
          </h1>

          {/* Sub Heading with Limelight font */}
          <p
            style={{
              fontFamily: "'Limelight', cursive",
              color: "#C5151D",
              lineHeight: "100%",
            }}
            className="font-light mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center sm:text-left"
          >
            Rebuilds you for life.
          </p>

          {/* Button */}
          <button
            className="text-white mb-9 font-medium shadow-lg transition-transform duration-200 hover:scale-[1.03] w-full sm:w-auto text-base sm:text-lg mx-auto sm:mx-0"
            style={{
              backgroundColor: buttonColor,
              padding: "12px 20px",
              borderRadius: "50px",
            }}
          >
            Buy Pranoshakti Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;