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
            className="text-xs sm:text-sm md:text-base text-gray-700 lg:mb-4 mb-3 md:mb-1 whitespace-nowrap  text-ellipsis"
            style={{ maxWidth: "100%" }}
          >
            Powered by Ayurveda for Modern Men
          </p>

          {/* 1. Main Heading: Energy • Stamina • Confidence */}
          <h2
            // FIX: Added whitespace-nowrap to prevent wrapping on mobile
            className="font-normal mb-2 md:mb-1 text-[20px] lg:text-[40px] md:text-4xl whitespace-nowrap"
            style={{
              color: "#000000",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Energy • Stamina • <br className="sm:hidden" />Confidence
          </h2>
          {/* Note on FIX: I used <br className="sm:hidden" /> to only apply the break 
             on mobile, but since you have whitespace-nowrap, the text may still 
             look odd on desktop. If it looks bad on desktop, remove the 
             whitespace-nowrap class for screens larger than mobile (e.g., md:whitespace-normal). 
             For now, I'm assuming you want the break specifically for mobile. */}

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
          <div className="flex justify-start items-center space-x-2 transform -translate-y-4 flex-wrap">
            {/* Primary Button (Visible on all screens) - TRANSFORM FIXED */}
            <Link
              href="/buy-aakriti"
              style={{
                backgroundColor: primaryButtonBg,
                borderRadius: buttonRadius,
              }}
              className="
                text-white 
                text-[18px] sm:text-base md:text-base 
               font-medium 
                lg:py-[10px] md:py-2 sm:py-[15px] px-[20px] mt-6 
                shadow-md hover:opacity-90 transition duration-200
                whitespace-nowrap 
              "
            >
              Buy Pranoshakti Now
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
                text-base font-medium py-[10px] px-[26px] mt-6 
                border-2 shadow-md hover:bg-gray-50 transition duration-200
              "
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* --- NEW RIGHT SECTION (Models and Background Leaf) --- */}
        <div
          // MODIFIED: Adjusted mobile height and translate values for better vertical positioning.
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
            className="absolute z-10 object-contain scale-250 transform scale-y-270 -translate-y-15 translate-x-5 lg:scale-150 lg:-translate-y-10 lg:translate-x-18"
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
            className="absolute z-10 object-contain scale-240 scale-y-270 transform -translate-y-15 translate-x-5 lg:scale-150 lg:-translate-y-8 lg:translate-x-10"
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