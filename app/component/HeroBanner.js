"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const bgImageSrc = "/akriti-bgtop.jpg";
  const containerBgColor = "#F3F3F3";
  const primaryButtonBg = "#007850";
  const primaryButtonBorder = primaryButtonBg; 
  const buttonRadius = "49px";

  return (
    <section
      style={{ backgroundColor: containerBgColor }}
      className="relative w-full flex justify-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImageSrc})`,
          opacity: 0.82,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />

      {/* Decorative Leaves (Left side) - Hidden on mobile (via hidden md:block) */}
      <div className="hidden md:block">
        <Image
          src="/akriti-leaf.png"
          alt="Decorative Left Leaf"
          width={500}
          height={500}
          className="absolute opacity-70 z-5"
          style={{ left: "-150px", top: "px", filter: "blur(3px)" }}
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10 w-full max-w-[1440px] 
          flex flex-row items-start md:items-center justify-between 
          px-4 sm:px-2 md:px-[120px] 
          py-2 sm:py-2 md:py-6 
        "
      >
        
        <div
          className="flex flex-col justify-center text-left z-20 w-1/2 pr-4 py-5 space-y-0 md:space-y-2"
          style={{ maxWidth: "600px" }}
        >
          {/* Top small text - MODIFIED: Reduced font size on mobile */}
          <p
            className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 md:mb-1 whitespace-nowrap  text-ellipsis"
            style={{ maxWidth: "100%" }}
          >
            Powered by Ayurveda for Modern Men
          </p>

          {/* 1. Main Heading: A Modern Woman's Ayurveda Ritual */}
          <h2
            className="font-normal mb-2 md:mb-1 text-[20px] lg:text-[40px] md:text-4xl"
            style={{
              color: "#000000",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Energy • Stamina • Confidence
          </h2>

          {/* 2. Sub-Heading: The Natural Way */}
          <h3
            className="mb-4 md:mb-[14px] text-[24px] lg:text-[48px] md:text-5xl"
            style={{
              color: "#C5151D",
              fontFamily: "Limelight, cursive",
              fontWeight: 400,
              lineHeight: "100%",
              fontStyle: "normal",
              letterSpacing: "0%",
            }}
          >
            Naturally
          </h3>

          {/* Buttons - ADDED LEARN MORE BUTTON, adjusted container space */}
          <div className="flex justify-start items-center space-x-2">
            {/* Primary Button (Visible on all screens) - FIXED for mobile spacing */}
            <Link
              href="/buy-aakriti"
              style={{
                backgroundColor: primaryButtonBg,
                borderRadius: buttonRadius,
              }}
              className="
        text-white 
        text-[20px] sm:text-base md:text-base font-medium /* Decreased text size to 'text-sm' on smallest screens */
        lg:py-[20px] md:py-2 sm:py-[20px] px-[20px] 
        shadow-md hover:opacity-90 transition duration-200
        whitespace-nowrap 
      "
            >
              Buy Akriti Now
            </Link>

            {/* Secondary Button (Desktop Only: hidden lg:block) */}
            <Link
              href="/learn-more"
              style={{
                borderRadius: buttonRadius,
                borderColor: primaryButtonBorder,
                color: primaryButtonBg, // Text color is green
              }}
              className="
      hidden lg:block // Hidden on mobile/md, visible on lg
      bg-transparent 
      text-base font-medium py-[20px] px-[26px] 
      border-2 shadow-md hover:bg-gray-50 transition duration-200
    "
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* --- NEW RIGHT SECTION (Models and Background Leaf) --- */}
        <div
          // MODIFIED: Increased mobile height from h-[200px] to h-[300px]
          // MODIFIED: Adjusted mobile transform (-translate-y-8) to -translate-y-4 for better vertical positioning.
          className="relative w-1/2 flex justify-center items-center h-[200px] lg:h-[345px] transform -translate-y-4 lg:translate-y-0"
        >
          {/* Background Leaf Image (behind models) - HIDDEN ON MOBILE */}
          <Image
            src="/men brand-leaf2.png" // Path to your background leaf image
            alt="Decorative Background Leaf"
            width={700}
            height={700}
            className="absolute opacity-80 z-0 object-contain hidden lg:block md:block md:tranform md:translate-x-4 md:-translate-y-40 transform -translate-x-10 -translate-y-50 lg:translate-x-0 lg:-translate-y-50"
            style={{
              top: "50%",
              left: "50%",
              filter: "blur(3px)",
              width: "120%",
              height: "120%",
            }}
          />

          {/* First Model Image (Left) */}
          <Image
            src="/men brand-herobanner-model2.png" // Path to your first model image
            alt="Male Model 1"
            width={300}
            height={400}
            priority
            // MODIFIED: Increased scale for mobile (default, not lg:). Adjusted translate.
            className="absolute z-10 object-contain scale-230 transform -translate-y-10 -translate-x-4 lg:scale-150 lg:-translate-y-10 lg:translate-x-18"
            style={{
              left: "10%", // Adjust position
              bottom: "0%", // Adjust position
              width: "45%", // Increased width for mobile
              height: "auto",
              transform: "translateX(0%)",
            }}
          />

          {/* Second Model Image (Right) */}
          <Image
            src="/men brand-herobanner-model1.png" // Path to your second model image
            alt="Male Model 2"
            width={300}
            height={400}
            priority
            // MODIFIED: Increased scale for mobile (default, not lg:). Adjusted translate.
            className="absolute z-10 object-contain scale-240 transform -translate-y-11 translate-x-2 lg:scale-150 lg:-translate-y-10 lg:translate-x-10"
            style={{
              right: "10%", // Adjust position
              bottom: "0%", // Adjust position
              width: "45%", // Increased width for mobile
              height: "auto",
            }}
          />
        </div>
        {/* --- END NEW RIGHT SECTION --- */}
      </div>
    </section>
  );
};

export default HeroBanner;
