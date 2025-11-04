"use client";
import React from "react";
import NextImage from "next/image";

const HeroBanner = () => {
  const bgImageSrc = "/men brand-buttom-banner.png";
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
        className="object-cover"
        sizes="50vw"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto flex items-center py-5 px-6 sm:px-10">
        <div className="flex flex-col items-start text-white w-full sm:w-auto">
          {/* Main Heading - FIX APPLIED HERE */}
          <h1
            // MODIFIED: Restored standard responsive classes for mobile sizing (text-xl to md:text-3xl)
            // Scoped the fixed 36px size to the lg breakpoint using arbitrary values: lg:text-[36px]
            className="text-xl sm:text-2xl lg:text-[36px] font-bold tracking-wide mb-2 pt-5 leading-tight"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400, // Regular weight as per Figma (400)
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Nature’s Secret for Lasting Vitality.
          </h1>

          {/* Sub Heading with Meow Script font */}
          <p
            style={{
              fontFamily: "'Limelight', cursive",
              color: "#C5151D",
              lineHeight: "100%",
            }}
            className="font-light mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-6xl"
          >
            Rebuilds you for life.
          </p>

          {/* Button */}
          <button
            className="text-white mb-9 font-medium shadow-lg transition-transform duration-200 hover:scale-[1.03] w-full sm:w-auto text-base sm:text-lg"
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
