"use client";
import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const benefitBoxBg = "#FEFEF0"; // The light color of the inner boxes
  const benefitIconBg = "#2A4E42"; // Dark green icon background
  const benefitTextColor = "#000000";
  const bgImageSrc = "/men brand-benefit-bg.png";
  const mobileCardBgColor = "#2A4E42";

  // Data structure for the benefit content
  const benefits = [
    {
      label: "Boosts stamina and energy for peak performance.",
      src: "/men brand -benefit-1.svg",
      align: "left",
    },
    {
      label: "Supports male vitality and natural strength.",
      src: "/men brand-benefit2.svg",
      align: "right",
    },
    {
      label: "Improves blood flow and overall  body endurance.",
      src: "/men brand-benfit-3.svg",
      align: "left",
    },
    {
      label: "Reduces stress and helps to fights daily fatigue.",
      src: "/men brand-benefit-4.svg",
      align: "right",
    },
  ];

  // Component to render the Benefit Boxes (Absolute Positioning - USED FOR DESKTOP)
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
          {/* FIX: Removed .replace() to use the original string without <br /> */}
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
          {/* FIX: Removed .replace() to use the original string without <br /> */}
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
          {/* FIX: Removed .replace() to use the original string without <br /> */}
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
          {/* FIX: Removed .replace() and the unnecessary 'text-3xl' class */}
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
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={bgImageSrc}
          alt="Forest background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* ================= 1. DESKTOP VIEW (LG only) ================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto hidden lg:flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 py-8 transform translate-x-5">
          <h2
            style={{
              // Shared Styles: Rubik, 36px size, 100% line height, center alignment
              fontFamily: "Rubik, sans-serif",
              fontSize: "36px",
              color: "#FFFFFF",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",

              // Style for "Benefits of" (Light weight)
              fontWeight: 300,
            }}
          >
            Benefits of{"  "}
            <span
              style={{
                // Style for "Pranoshakti" (Medium weight)
                fontWeight: 500,
                color: "#C5151D",
                fontFamily: "Rubik, sans-serif", // Redundant, but ensures consistency
              }}
            >
              Pranoshakti
            </span>
          </h2>
        </div>

        {/* Product Image - Only visible on LG (Desktop) */}
        <div className="relative z-10 w-[2000px] h-[750px] mb-5 lg:mb-0 justify-center items-center mt-[-250px] transform  -translate-y-1 flex scale-70 rotate-1">
          <Image
            src="/men brand-benefits-main.png"
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
        {/* Added p-8 padding to this container for better tablet centering */}

        <div className="flex flex-col items-center mb-8 py-1">
          <h2
            className="mb-6"
            style={{
              // Shared Styles: Rubik, 36px size, 100% line height, center alignment
              fontFamily: "Rubik, sans-serif",
              fontSize: "35px",
              color: "#FFFFFF",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",

              // Style for "Benefits of" (Light weight)
              fontWeight: 300,
            }}
          >
            Benefits of{"  "}
            <span
              style={{
                // Style for "Pranoshakti" (Medium weight)
                fontWeight: 700,
                color: "#C5151D",
                fontFamily: "Rubik, sans-serif", // Redundant, but ensures consistency
              }}
            >
              Pranoshakti
            </span>
          </h2>
        </div>

        {/* Product Image Displayed in Tablet View (If desired - currently excluded) */}
        {/* You could add the image here if needed, but for the list layout, 
           it's often placed above or below the list. */}

        {/* Benefit Boxes - Tablet Stacked Layout */}
        {renderStackedBoxes("max-w-2xl", "text-base")}
      </div>

      {/* ================= 3. MOBILE VIEW (Default/SM only) ================= */}
      <div className="w-full flex justify-center py-0 relative z-10 block md:hidden">
        {/* Mobile Card Container: SOLID Dark Green Background, Rounded Corners */}
        <div
          className="relative w-full mx-2 max-w-[380px] h-auto p-4 rounded-2xl overflow-hidden flex flex-col items-center"
          style={{
      backgroundColor: mobileCardBgColor, // Keep the solid background color as a base/fallback
    }}
        >
          <div className="absolute inset-0 z-0">
      <Image
        src={bgImageSrc} // Use the image source from your constants
        alt="Mobile Benefit Background"
        layout="fill"
        objectFit="cover"
        priority // Optional, if you want it to load quickly
      />
      {/* Optional: Add a subtle overlay if needed, similar to the main section */}
      {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
    </div>
          {/* Content (Relative Z-Index ensures content is on top of the solid background) */}
          <div className="relative z-10 w-full my-5 flex flex-col items-center ">
            {/* 1. Mobile Heading */}
            <h2
              className="mb-6"
              style={{
                // Shared Styles: Rubik, 36px size, 100% line height, center alignment
                fontFamily: "Rubik, sans-serif",
                fontSize: "26px",
                color: "#FFFFFF",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",

                // Style for "Benefits of" (Light weight)
                fontWeight: 300,
              }}
            >
              Benefits of{"  "}
              <span
                style={{
                  // Style for "Pranoshakti" (Medium weight)
                  fontWeight: 700,
                  color: "#C5151D",
                  fontFamily: "Rubik, sans-serif", // Redundant, but ensures consistency
                }}
              >
                Pranoshakti
              </span>
            </h2>

            {/* 2. Benefits List */}
            {renderStackedBoxes("max-w-full", "text-sm")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
