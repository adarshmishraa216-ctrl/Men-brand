"use client";
import React from "react";
import Image from "next/image";

const IngredientsSection = () => {
  const sectionBgColor = "#FFFFFF"; // White background
  const preservativesText = "Preservatives: Sodium Benzoate I.P., Gel Base";

  return (
    <section
      className="relative w-full overflow-visible flex justify-center py-10"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- DESKTOP VIEW: Side-by-Side (Visible on lg and up) --- */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-12">
          {/* Left Column: Heading, Table, Preservatives */}
          <div className="flex flex-col w-1/2 shrink-0 pt-10">
            {/* Heading Image */}
            <div className="mb-6 w-full flex justify-start">
              <Image
                src="/akriti-ingredient-newhead.svg"
                alt="Aakriti Ingredients Heading"
                width={250}
                height={70}
                className="w-full max-w-[300px] h-auto object-contain transform translate-x-30"
              />
            </div>

            {/* Ingredient Table - FIX: Removed invalid CSS unit classes */}
            <div className="w-full">
              <img
                src="/akriti-ingredient-table2.png"
                alt="Ingredient Table"
                // Assuming the image itself contains the table layout
                className="w-full h-auto max-w-none scale-150 m-12"
              />
            </div>

            {/* Preservatives Note */}
            <p className="w-full text-left text-sm mt-4 text-gray-700">
              {preservativesText}
            </p>
          </div>
          {/* END of Left Column */}

          {/* Right Column: Large Veg Image - FIX: Restored container to w-1/2 and controlled height */}
          <div
            className="relative w-1/2 h-[450px] flex justify-center items-center transform -translate-x-20" // Restored w-1/2 and set reasonable fixed height
          >
            <Image
              src="/akriti-ingredient-veg.png"
              alt="Ayurvedic Raw Materials"
              fill
              // FIX: Changed object-cover back to object-contain to show the whole image
              className="object-contain scale-180 m-7 "
              sizes="(max-width: 1000px) 0, 50vw" // Sizes based on w-1/2 container
            />
          </div>
        </div>

        {/* --- MOBILE VIEW: Stacked and Centered (Hidden on lg and up) --- */}
        <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
          {/* 1. Heading and Veg Image SIDE-BY-SIDE Container (Centered) */}
          <div className="flex w-full justify-center px-4">
            {/* Heading Image (55% Width of the container) */}
            <div className="relative w-[55%] h-auto flex justify-end items-center pr-2">
              <Image
                src="/Aakriti Ingredients.svg"
                alt="Aakriti Ingredients Heading"
                width={250}
                height={70}
                className="object-contain w-full h-auto "
              />
              
              {/* --- ADDED: Pink Underline (Absolute Positioned) --- */}
              {/* This div will hold the actual pink line image */}
              <div 
                className="absolute"
                style={{
                  // Position relative to the *parent* div (the one with w-[55%])
                  bottom: '11px', // Adjust this value to move it up/down
                  left: '10%', // Adjust this value to move it left/right, aiming for under "Ingredients"
                  width: '50%', // Adjust width of the underline itself
                  maxWidth: '120px', // Max width for the underline
                  height: 'auto',
                  transform: 'translateX(20%)', // Fine-tune horizontal position
                  zIndex: 20 // Ensure it's on top
                }}
              >
                {/* Ensure you have an image for *just* the pink line */}
                <img
                  src="/akritoingredient-underline.png" // <--- REPLACE with your pink underline image path
                  alt="Pink Underline"
                  className="w-full h-auto object-contain scale-150 md:scale-250 md:transform md:translate-y-5"
                />
              </div>
              
            </div>

            {/* Veg Image (45% Width of the container) */}
            <div className="relative w-[45%] h-[120px] sm:h-[150px] flex justify-start items-center pl-2">
              <Image
                src="/akriti-ingredient-veg.png"
                alt="Ayurvedic Ingredients"
                fill
                className="object-contain scale-180 rotate-270 transform translate-y-18  md:transform md:translate-y-30"
              />
            </div>
          </div>

          {/* 2. Ingredient Table (Scrollable on mobile) */}
          <div className="w-full overflow-x-auto">
            <div className="flex justify-start">
              <img
                src="/akriti-ingredient-table2.png"
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
