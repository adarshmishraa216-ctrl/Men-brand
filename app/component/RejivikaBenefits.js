"use client";
import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const benefitBoxBg = "#FEFEF0"; // The light color of the inner boxes
  const benefitIconBg = "#2A4E42"; // Dark green icon background
  const benefitTextColor = "#000000";
  const bgImageSrc = "/rejivika-benfit-bgimage.png";
  const mobileCardBgColor = "#2A4E42";
  const headingColor = "#FFFFFF"; // Using the section color for heading emphasis

  // Data structure for the benefit content
  const benefits = [
    {
      label: "Restores natural moisture and intimate comfort.",
      src: "/rejivika-benfit-icon1.svg",
      align: "left",
    },
    {
      label: "Enhances sensitivity and the natural harmony.",
      src: "/rejivika-benfit-icon3.svg",
      align: "right",
    },
    {
      label: "Firms and tones for the improved confidence.",
      src: "/rejivika-benfit-icon2.svg",
      align: "left",
    },
    {
      label: "Supports overall feminine health and balance.",
      src: "/rejivika-benfit-icon4.svg",
      align: "right",
    },
  ];

  // Component to render the Benefit Boxes (Absolute Positioning - USED FOR DESKTOP)
  const renderAbsoluteBoxes = (
    leftOffsetClass,
    rightOffsetClass,
    paddingClass
  ) => (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center">
        {/* Box 1 (Top Left) */}
        <div
          className={`absolute flex items-center ${paddingClass} rounded-xl shadow-md w-full max-w-[450px] ${leftOffsetClass}`}
          style={{ backgroundColor: benefitBoxBg, top: "25%" }}
        >
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
            style={{ backgroundColor: benefitIconBg }}
          >
            <Image
              src={benefits[0].src}
              alt="Benefit Icon 1"
              width={24}
              height={24}
            />
          </div>
          <p
            className="text-base"
            style={{ color: benefitTextColor }}
            dangerouslySetInnerHTML={{ __html: benefits[0].label }}
          />
        </div>

        {/* Box 2 (Bottom Left) */}
        <div
          className={`absolute flex items-center ${paddingClass} rounded-xl shadow-md w-full max-w-[450px] ${leftOffsetClass}`}
          style={{ backgroundColor: benefitBoxBg, bottom: "25%" }}
        >
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
            style={{ backgroundColor: benefitIconBg }}
          >
            <Image
              src={benefits[2].src}
              alt="Benefit Icon 2"
              width={24}
              height={24}
            />
          </div>
          <p
            className="text-base"
            style={{ color: benefitTextColor }}
            dangerouslySetInnerHTML={{ __html: benefits[2].label }}
          />
        </div>

        {/* Box 3 (Top Right) */}
        <div
          className={`absolute flex items-center ${paddingClass} rounded-xl shadow-md w-full max-w-[450px] ${rightOffsetClass}`}
          style={{ backgroundColor: benefitBoxBg, top: "25%" }}
        >
          <p
            className="text-base text-right flex-grow mr-4"
            style={{ color: benefitTextColor }}
            dangerouslySetInnerHTML={{ __html: benefits[1].label }}
          />
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: benefitIconBg }}
          >
            <Image
              src={benefits[1].src}
              alt="Benefit Icon 3"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Box 4 (Bottom Right) */}
        <div
          className={`absolute flex items-center ${paddingClass} rounded-xl shadow-md w-full max-w-[450px] ${rightOffsetClass}`}
          style={{ backgroundColor: benefitBoxBg, bottom: "25%" }}
        >
          <p
            className="text-base text-right flex-grow mr-4"
            style={{ color: benefitTextColor }}
            dangerouslySetInnerHTML={{ __html: benefits[3].label }}
          />
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: benefitIconBg }}
          >
            <Image
              src={benefits[3].src}
              alt="Benefit Icon 4"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
  
  // Component to render the Stacked List Boxes (USED FOR TABLET AND MOBILE)
  const renderStackedBoxes = (
    maxWidthClass = "max-w-md",
    textSize = "text-base"
  ) => (
    <div className={`flex flex-col gap-4 w-full ${maxWidthClass}`}>
      {benefits.map((benefit, index) => {
        const isRightAligned = benefit.align === "right";
        const content = (
          <>
            {!isRightAligned && (
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: benefitIconBg }}
              >
                <Image
                  src={benefit.src}
                  alt={`Icon ${index + 1}`}
                  width={20}
                  height={20}
                />
              </div>
            )}
            <p
              className={`${textSize} ${
                isRightAligned ? "text-right mr-4 flex-grow" : ""
              }`}
              style={{ color: benefitTextColor }}
            >
              {benefit.label}
            </p>
            {isRightAligned && (
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: benefitIconBg }}
              >
                <Image
                  src={benefit.src}
                  alt={`Icon ${index + 1}`}
                  width={20}
                  height={20}
                />
              </div>
            )}
          </>
        );

        return (
          <div
            key={index}
            className={`flex items-center p-4 rounded-xl shadow-md w-full ${
              isRightAligned ? "justify-between" : ""
            }`}
            style={{ backgroundColor: "#FFF2E1" }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[500px] flex items-center justify-center py-1 px-4">
      {/* Background Image (Visible on MD and LG) */}
      <div className="absolute inset-0 z-0 hidden md:block transform scale-100">
        <Image
          src={bgImageSrc}
          alt="Forest background"
          layout="fill"
          objectFit="fill"
          quality={80}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* ================= 1. DESKTOP VIEW (LG only) ================= */}
      <div className="relative z-10 w-full max-w-[1200px]  mx-auto hidden lg:flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 py-8">
          {/* Wrapper to stack the heading and the underline image */}
          <div className="flex flex-col items-center">
            <h2
              className="text-center"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400, // Regular weight
                fontSize: "36px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: headingColor, // Use a contrasting color for desktop text
              }}
            >
              Benefits of <span style={{ fontWeight: 500 }}>Rejivika</span>
            </h2>

            {/* Underline Image */}
            <Image
              src="/rejivika-about-underline.svg"
              alt="Heading underline graphic"
              width={180}
              height={10}
              className="mt-2 scale-170" 
            />
          </div>
        </div>

        {/* Product Image - Only visible on LG (Desktop) */}
        <div className="relative z-0 w-[2000px] h-[750px] mb-5 lg:mb-0 justify-center items-center mt-[-250px] transform translate-x-1 -translate-y-34 flex lg:scale-150 lg:scale-x-220">
          <Image
            src="/rejivika-benfit-product.png"
            alt="Aakriti Product Stacked"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Benefit Boxes - Desktop Positioning. Using p-4 padding. */}
        {renderAbsoluteBoxes("left-[-7%]", "right-[-8%]", "p-4")}
      </div>

      {/* ================= 2. TABLET VIEW (MD only) - NOW STACKED ================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto hidden md:flex lg:hidden flex-col items-center p-8">
        <div className="flex flex-col items-center mb-8 py-1">
          <Image
            src="/akriti-benefit-newhead.svg"
            alt="Benefits of Aakriti Heading Graphic"
            width={400}
            height={50}
            className="mb-2 transform translate-x-1"
          />
        </div>
        {/* Benefit Boxes - Tablet Stacked Layout */}
        {renderStackedBoxes("max-w-2xl", "text-base")}
      </div>

      {/* ================= 3. MOBILE VIEW (Default/SM only) ================= */}
      <div className="w-full flex justify-center py-0 relative z-10 block md:hidden">
        {/* Mobile Card Container: SOLID Dark Green Background, Rounded Corners */}
        <div
          className="relative w-full mx-2 max-w-[380px] h-auto p-4 rounded-2xl overflow-hidden flex flex-col items-center"
          style={{
            backgroundImage: `url(${bgImageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: mobileCardBgColor,
          }}
        >
          {/* FIX: Content Wrapper for Heading and List */}
          <div className="flex flex-col items-center pt-2 pb-4"> 
            {/* Mobile Heading Structure */}
            <div className="flex flex-col items-center mb-4">
              <h2
                className="text-center text-[26px]" // Increased size for mobile visibility
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF", // White color for contrast
                }}
              >
                Benefits of <span style={{ fontWeight: 500 }}>Rejivika</span>
              </h2>

              {/* Underline Image - Adjust size and scale for mobile */}
              <Image
                src="/rejivika-about-underline.svg"
                alt="Heading underline graphic"
                width={150} // Use a smaller size
                height={10}
                className="mt-2 scale-100" 
              />
            </div>
            
            {/* 2. Benefits List */}
            {renderStackedBoxes("max-w-full", "text-sm")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;