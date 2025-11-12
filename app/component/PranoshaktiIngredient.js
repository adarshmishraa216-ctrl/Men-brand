"use client";
import React from "react";
import Image from "next/image";

const IngredientsSection = () => {
  const sectionBgColor = "#FFFFFF"; // White background
  const preservativesText = "Safe Ayurvedic Proprietary Medicine";
  const darkGrayColor = "#666666"; // A common dark gray, used for "Ingredients"
  const redColor = "#C5151D"; // The red you've used before, used for "Pranoshakti"

  // Define font properties (adjust size and weight as needed)
  const headingFontFamily = "Rubik, sans-serif";
  const headingFontWeight = 500; // Semi-bold/Bold for impact
  const headingFontSizeMobile = "3xl"; // Example mobile size (24px)
  const headingFontSizeDesktop = "5xl"; // Example desktop size (36px)

  // 🌟 NEW CONTROL VARIABLES FOR HEADING POSITION 🌟
  // Adjust these values to move the desktop heading
  const DESKTOP_HEADING_TRANSLATE_X = "translate-x-15"; // e.g., "-translate-x-10" for left, "translate-x-5" for right
  const DESKTOP_HEADING_TRANSLATE_Y = "-translate-y-3";  // e.g., "-translate-y-5" for up, "translate-y-5" for down

  return (
    <section
      className="relative w-full overflow-visible flex justify-center py-13"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-6 lg:px-0">
        {/* --- DESKTOP VIEW: Side-by-Side (Visible on lg and up) --- */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-5">
          {/* Left Column: Heading, Table, Preservatives */}
          <div className="flex flex-col w-2/3 shrink-0 pt-2">
            
            {/* Heading Container with Position Controls */}
            <div 
              // Applied the new translation controls here
              className={`mb-7 w-full flex justify-start transform ${DESKTOP_HEADING_TRANSLATE_X} ${DESKTOP_HEADING_TRANSLATE_Y}`}
            >
              <h2
                // Using responsive classes for size and ensuring text stays on one line (lg:whitespace-nowrap)
                className={`text-${headingFontSizeMobile} lg:text-${headingFontSizeDesktop} font-medium lg:whitespace-nowrap`}
                style={{
                  fontFamily: headingFontFamily,
                  fontWeight: headingFontWeight, 
                  lineHeight: "120%",
                }}
              >
                {/* Red Part: Pranoshakti */}
                <span style={{ color: redColor }}>Pranoshakti</span>{" "}
                {/* Gray Part: Ingredients */}
                <span style={{ color: darkGrayColor }}>Ingredients</span>
              </h2>
            </div>

            {/* Ingredient Table - FIXED DESKTOP LAYOUT */}
            <div
              // FIX 1: Set fixed height h-[248px] and enabled vertical scroll (overflow-y-scroll)
              // FIX 2: Added overflow-x-hidden to explicitly prevent horizontal scroll
              className="w-full h-[248px] overflow-y-scroll overflow-x-hidden tranform -translate-x-12" 
            >
              <img
                src="/men brand-ingredient-newtable.svg"
                alt="Ingredient Table"
                // FIX 3: Ensure the image takes full width (w-full) and height is auto (to scroll vertically)
                className="w-full h-auto object-contain "
              />
            </div>

            {/* Preservatives Note */}
            <p className="text-left text-sm mt-[-10px] text-gray-700 -translate-x-[45px] translate-y-[20px] ">
                {preservativesText}
              </p>
          </div>
          {/* END of Left Column */}

          {/* Right Column: Large Veg Image */}
          <div className="relative w-1/2 h-[450px] flex justify-center items-center transform -translate-y-5 translate-x-2">
            <Image
              src="/men brand-ingredient-veg.png"
              alt="Ayurvedic Raw Materials"
              fill
              className="object-contain scale-170 m-7 "
              sizes="(max-width: 1000px) 0, 50vw"
            />
          </div>
        </div>

        {/* --- MOBILE VIEW: Stacked and Centered (Hidden on lg and up) --- */}
        <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
          {/* 1. Heading and Veg Image SIDE-BY-SIDE Container (Centered) */}
          <div className="flex w-full justify-center px-4 items-center ">
            {/* Heading Image (55% Width of the container) */}
            <div className="relative w-[55%] h-auto flex justify-end items-center pr-2 ">
              <h2
                // Using responsive classes for size and ensuring text stays on one line (lg:whitespace-nowrap)
                className= {`text-3xl lg:text-5xl font-medium lg:whitespace-nowrap`} // Using direct size classes for safety
                style={{
                  fontFamily: headingFontFamily,
                  fontWeight: headingFontWeight, // Applied to both parts
                  lineHeight: "120%",
                }}
              >
                {/* Red Part: Pranoshakti */}
                <span className="font-rubik-custom" style={{ color: redColor }}>
                  Pranoshakti
                </span>{" "}
                {/* Gray Part: Ingredients */}
                <span style={{ color: darkGrayColor }}>Ingredients</span>
              </h2>
            </div>

            {/* Veg Image (45% Width of the container) */}
            <div className="relative w-[45%] h-[120px] sm:h-[150px] flex justify-start items-center pl-2">
              <Image
                src="/men brand-ingredient-veg.png"
                alt="Ayurvedic Ingredients"
                fill
                className="object-contain scale-150 md:scale-110 transform translate-y-1  md:transform md:translate-y"
              />
            </div>
          </div>

          {/* 2. Ingredient Table (Scrollable on mobile) */}
          <div
            // Mobile table remains scrollable (max-h-[150px] and overflow-y-scroll)
            className="w-full max-h-[150px] overflow-x-auto overflow-y-scroll"
          >
            <div className="flex justify-start">
              <img
                src="/men brand-ingredient-newtable.svg"
                alt="Ingredient Table"
                className="w-[140%] sm:w-[120%] h-auto max-w-none"
              />
            </div>
          </div>

          {/* 3. Preservatives Note (Left aligned under the scrollable content) */}
          <p className="w-full text-left text-sm mt-0 text-gray-700 transform -translate-y-3">
            {preservativesText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;