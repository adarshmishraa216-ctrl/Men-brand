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
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-12">
          {/* Left Column */}
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

            {/* ✅ Table shifted slightly, preservatives aligned with table left edge */}
            <div className="w-full flex flex-col items-start translate-x-[48px]">
              {/* Ingredient Table */}
              <img
                src="/akriti-ingredient-table2.png"
                alt="Ingredient Table"
                className="w-full h-auto max-w-none scale-150 m-12"
              />

              {/* ✅ Preservatives Note aligned with table's left edge */}
              <p className="text-left text-sm mt-[-10px] text-gray-700 -translate-x-[80px] translate-y-[20px] ">
                {preservativesText}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="relative w-1/2 h-[450px] flex justify-center items-center transform -translate-x-20"
          >
            <Image
              src="/akriti-ingredient-veg.png"
              alt="Ayurvedic Raw Materials"
              fill
              className="object-contain scale-180 m-7"
              sizes="(max-width: 1000px) 0, 50vw"
            />
          </div>
        </div>
        {/* --- END DESKTOP VIEW --- */}

        {/* --- MOBILE VIEW --- */}
        <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
          {/* Heading + Veg Image Side by Side */}
          <div className="flex w-full justify-center px-4">
            {/* Heading Image */}
            <div className="relative w-[55%] h-auto flex justify-end items-center pr-2">
              <Image
                src="/Aakriti Ingredients.svg"
                alt="Aakriti Ingredients Heading"
                width={250}
                height={70}
                className="object-contain w-full h-auto"
              />

              {/* Pink Underline */}
              <div
                className="absolute"
                style={{
                  bottom: "11px",
                  left: "10%",
                  width: "50%",
                  maxWidth: "120px",
                  height: "auto",
                  transform: "translateX(20%)",
                  zIndex: 20,
                }}
              >
                <img
                  src="/akritoingredient-underline.png"
                  alt="Pink Underline"
                  className="w-full h-auto object-contain scale-150 md:scale-250 md:transform md:translate-y-5"
                />
              </div>
            </div>

            {/* Veg Image */}
            <div className="relative w-[45%] h-[120px] sm:h-[150px] flex justify-start items-center pl-2">
              <Image
                src="/akriti-ingredient-veg.png"
                alt="Ayurvedic Ingredients"
                fill
                className="object-contain scale-180 rotate-270 transform translate-y-18 md:transform md:translate-y-30"
              />
            </div>
          </div>

          {/* ✅ Table and Preservatives grouped for perfect mobile alignment */}
          <div className="w-full overflow-x-auto">
            <div className="flex flex-col justify-start items-start px-4">
              <img
                src="/akriti-ingredient-table2.png"
                alt="Ingredient Table"
                className="w-[140%] sm:w-[120%] h-auto max-w-none"
              />

              {/* Preservatives Note - aligned with the table content */}
              <p className="text-left text-sm mt-2 text-gray-700">
                {preservativesText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
