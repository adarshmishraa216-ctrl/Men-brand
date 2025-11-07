"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const bgImageSrc = "/akriti-bgtop.jpg";
  const containerBgColor = "#F3F3F3";
  const primaryButtonBg = "#007850";
  const primaryButtonBorder = primaryButtonBg; // Border color for Learn More
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

      {/* Decorative Leaves (hidden on mobile) */}
      <div className="hidden md:block">
        <Image
          src="/akriti-leaf.png"
          alt="Decorative Left Leaf"
          width={500}
          height={500}
          className="absolute opacity-70 z-5"
          style={{ left: "-150px", top: "0px", filter: "blur(2px)" }}
        />
        <Image
          src="/akriti-leaf2.png"
          alt="Decorative Right Leaf"
          width={400}
          height={280}
          className="absolute opacity-70 z-5"
          style={{ right: "-50px", top: "20px", filter: "blur(2px)" }}
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10 w-full max-w-[1440px] 
          h-[217px] lg:h-[355px] 
          flex flex-col md:flex-row items-start md:items-center justify-between 
          px-4 sm:px-2 md:px-[120px] 
          py-2 md:py-6 
        "
      >
        {/* Left Section (Heading and Text) */}
        <div
          className="flex flex-col justify-center text-left z-20 w-full md:w-1/2 pr-0 md:pr-4 space-y-0 md:space-y-2 h-full"
          style={{ maxWidth: "600px" }}
        >
          {/* Top small text */}
          <p
            className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 md:mb-1 whitespace-nowrap text-ellipsis"
            style={{ maxWidth: "100%" }}
          >
            Ayurvedic Yoni Sutra
          </p>

          {/* 1. Main Heading: Rebalance. Rejuvenate. Rediscover */}
          <h2
            className="font-normal mb-2 md:mb-1 text-[20px] lg:text-[36px] md:text-2xl"
            style={{
              color: "#000000",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            {/* FIXED: Added a <br> tag that is hidden on medium (md) and larger screens, 
               forcing the break only on mobile/small screens. */}
            Rebalance. Rejuvenate. <br className="md:hidden" /> Rediscover
          </h2>

          {/* 2. Sub-Heading: Revive Naturally */}
          <h3
            className="mb-4 md:mb-[14px] text-[24px] lg:text-[48px] md:text-5xl"
            style={{
              color: "#DF67A3",
              fontFamily: "Meow Script, cursive",
              fontWeight: 400,
              lineHeight: "100%",
              fontStyle: "normal",
            }}
          >
            Revive Naturally
          </h3>

          {/* Buttons */}
          <div className="flex justify-start items-center space-x-4 mb-8 md:mb-0">
            {/* Primary Button */}
            <Link
              href="/buy-aakriti"
              style={{
                backgroundColor: primaryButtonBg,
                borderRadius: buttonRadius,
              }}
              className="text-white text-base font-medium py-3 px-6 shadow-md hover:opacity-90 transition duration-200"
            >
              Buy Rejivika Now
            </Link>
            
            {/* Secondary Button (Desktop Only) */}
            <Link
              href="/learn-more"
              style={{
                borderRadius: buttonRadius,
                borderColor: primaryButtonBorder,
                color: primaryButtonBg,
              }}
              className="
                hidden lg:block
                bg-transparent 
                text-base font-medium py-[10px] px-[26px] 
                border-2 shadow-md hover:bg-gray-50 transition duration-200
              "
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section (Model Images) */}
        <div 
          className="relative w-full md:w-1/2 flex justify-center items-end h-full lg:h-[400px] xl:h-[450px]"
        >
          {/* Pink Glow Effect */}
          <div
            className="absolute hidden md:block"
            style={{
              bottom: "10%",
              left: "5%",
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(255,105,180,0.9) 0%, rgba(255,105,180,0) 60%)",
              filter: "blur(60px)",
              borderRadius: "50%",
              zIndex: 0, 
              transform: "translate(70%, -20%)",
            }}
          ></div>

          {/* First Model Image (Left) */}
          <Image
            src="/rejivika-herobanner-model1.png"
            alt="Woman with Aakriti product"
            width={300}
            height={400}
            priority
            className="
              relative z-10 object-contain 
              w-[160px] h-[180px] sm:w-[200px] sm:h-[220px] md:w-[220px] md:h-[250px] lg:w-[260px] lg:h-[300px] xl:w-[400px] xl:h-[350px]
              
              transform scale-[1.3] translate-x-30 -translate-y-45
              md:translate-x-20 md:translate-y-8 md:scale-110 
              lg:transform lg:translate-x-12 lg:-translate-y-8 lg:scale-[1.2]
            "
          />

          {/* Second Model Image (Right) */}
          <Image
            src="/rejivika-herobanner-model2.png"
            alt="Second Woman with Aakriti product"
            width={300}
            height={400}
            priority
            className="
              relative z-10 object-contain 
              w-[160px] h-[180px] sm:w-[200px] sm:h-[220px] md:w-[220px] md:h-[250px] lg:w-[260px] lg:h-[300px] xl:w-[400px] xl:h-[350px]
              
              transform scale-[1.3] translate-x-15 -translate-y-45
              md:translate-x-0 md:translate-y-8 md:scale-110
              lg:transform lg:-translate-x-28 lg:-translate-y-6 lg:scale-[1.2]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;