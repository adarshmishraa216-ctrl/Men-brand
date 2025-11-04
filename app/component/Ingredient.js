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
  const headingFontSizeMobile = "4xl"; // Example mobile size (24px)
  const headingFontSizeDesktop = "6xl"; // Example desktop size (36px)

  return (
    <section
      className="relative w-full overflow-visible flex justify-center py-10"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-6 lg:px-8">
        {/* --- DESKTOP VIEW: Side-by-Side (Visible on lg and up) --- */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-12">
          {/* Left Column: Heading, Table, Preservatives */}
          <div className="flex flex-col w-2/3 shrink-0 pt-8">
            {/* Heading Image */}
            <div className="mb-6 w-full flex justify-start">
              <h2
                // Using responsive classes for size and ensuring text stays on one line (lg:whitespace-nowrap)
                className={`text-${headingFontSizeMobile} lg:text-${headingFontSizeDesktop} ${headingFontWeight} lg:whitespace-nowrap`}
                style={{
                  fontFamily: headingFontFamily,
                  fontWeight: headingFontWeight, // Applied to both parts
                  lineHeight: "120%",
                }}
              >
                {/* Red Part: Pranoshakti */}
                <span style={{ color: redColor }}>Pranoshakti</span>{" "}
                {/* Gray Part: Ingredients */}
                <span style={{ color: darkGrayColor }}>Ingredients</span>
              </h2>
            </div>

            {/* Ingredient Table - Scrollable Container (Desktop) */}
            <div className="w-full max-h-[300px] overflow-y-scroll">
              <img
                src="/men brand-ingredient-newtable.svg"
                alt="Ingredient Table"
                // FIX: Added w-full to make it fit the container width (2/3)
                // Removed max-w-none and invalid w-770px class.
                className="w-full h-auto scale-105 m-5"
              />
            </div>

            {/* Preservatives Note */}
            <p className="w-full text-left text-sm mt-4 text-gray-700">
              {preservativesText}
            </p>
          </div>
          {/* END of Left Column */}

          {/* Right Column: Large Veg Image */}
          <div className="relative w-1/2 h-[450px] flex justify-center items-center transform translate-x-20">
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
          <div className="flex w-full justify-center px-4">
            {/* Heading Image (55% Width of the container) */}
            <div className="relative w-[55%] h-auto flex justify-end items-center pr-2">
              <h2
                // Using responsive classes for size and ensuring text stays on one line (lg:whitespace-nowrap)
                className={`text-${headingFontSizeMobile} lg:text-${headingFontSizeDesktop} ${headingFontWeight} lg:whitespace-nowrap`}
                style={{
                  fontFamily: headingFontFamily,
                  fontWeight: headingFontWeight, // Applied to both parts
                  lineHeight: "120%",
                }}
              >
                {/* Red Part: Pranoshakti */}
                <span style={{ color: redColor }}>Pranoshakti</span>{" "}
                {/* Gray Part: Ingredients */}
                <span style={{ color: darkGrayColor }}>Ingredients</span>
              </h2>

              {/* --- ADDED: Pink Underline (Absolute Positioned) --- */}
              {/* This div will hold the actual pink line image */}
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
            // MODIFIED: Added max-h-[150px] and overflow-y-scroll
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
          <p className="w-full text-left text-sm mt-0 text-gray-700">
            {preservativesText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;