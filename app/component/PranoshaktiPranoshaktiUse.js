"use client";
import React from "react";
import Image from "next/image";

const HowToUseSection = () => {
  const sectionBgColor = "#FFFFFF";
  const instructionTextColor = "#2A4E42"; // Used for step title/description
  const listTextColor = "#6B7280";
  const DESKTOP_BG_LAYER_COLOR = "#F0F0F0"; // The requested solid background color

  // Keeping the color definition for the static numbers (red/bold style)
  const NUMBER_COLOR = "#C5151D"; 
  
  const steps = [
    {
      title: "Take 1–2 Capsules",
      description:
        "Consume one to two capsules daily with lukewarm milk or water for better absorption.",
    },
    {
      title: "Maintain Consistency",
      description:
        "For best results, take it regularly at the same time each day — morning and evening.",
    },
    {
      title: "Follow the healthy Routine",
      description:
        "Combine with a balanced diet, good sleep, and regular exercise to maximize stamina and vitality naturally.",
    },
  ];
  const bestResultsList = [
    "Continue using Pranoshakti consistently for at least 3 months to experience long-lasting results.",
    "Store in a cool, dry place.",
    "Avoid direct sunlight.",
  ];

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* ===== Decorative Grey Wave Background (Desktop only) ===== */}
      {/* FIX: Replaced the SVG container with a solid color div. */}
      <div 
        className="hidden lg:block absolute inset-0 z-0"
        style={{ backgroundColor: DESKTOP_BG_LAYER_COLOR }} 
      >
        {/* Empty content, just a solid background layer */}
      </div>

      {/* ===== Desktop Version ===== */}
      <div className="hidden lg:flex w-full flex-row items-start justify-between gap-12 px-8 py-20 max-w-[1400px] mx-auto relative z-10">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-[700px] flex-shrink-0 flex justify-center items-end">
          <Image
            src="/men brand-use-model.png"
            alt="Woman holding product jar"
            fill
            className="object-cover lg:object-contain object-right-bottom transform  scale-130 "
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start p-8 lg:p-16">
          <div className="mb-12">
            <h2
              // Tailwind classes for size and alignment
              className="text-[50px] leading-[28px] text-center"
              style={{
                // CSS styles for font family and weight
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
                // Corresponds to Light font weight
                letterSpacing: "0%",
              }}
            >
              How to use
            </h2>
          </div>

          <div className="flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                
                {/* 🎯 Desktop Static Number (Restored original title styling) */}
                <span
                  className="flex-shrink-0 mt-1 font-medium text-[100px] leading-none tranform -translate-y-4"
                  style={{ color: NUMBER_COLOR }}
                >
                  {index + 1}
                </span>

                <div className="flex flex-col">
                  {/* RESTORED ORIGINAL DESKTOP H3 STYLING */}
                  <h3
                    className="text-lg font-medium"
                    style={{ color: instructionTextColor }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base mt-1"
                    style={{ color: instructionTextColor }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h4
              className="text-base font-light"
              style={{ color: instructionTextColor }}
            >
              For best results:
            </h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {bestResultsList.map((item, index) => (
                <li
                  key={index}
                  className="text-sm"
                  style={{ color: listTextColor }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Mobile Version ===== */}
      <div className="block lg:hidden w-full flex flex-col items-center px-6 py-2 relative z-10">
        <div className="flex flex-col items-center mb-2">
          <h2
            // Tailwind classes for size and alignment
            className="text-[28px] leading-[28px] text-center m-5"
            style={{
              // CSS styles for font family and weight
              fontFamily: "Rubik, sans-serif",
              fontWeight: 300, // Corresponds to Light font weight
              letterSpacing: "0%",
            }}
          >
            How to use
          </h2>
        </div>

        <div
          className="w-full rounded-2xl p-5 shadow-sm flex flex-col"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            {steps.slice(0, 2).map((step, index) => (
              <div key={index} className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  {/* 🎯 Mobile Static Number (Step 1 & 2) */}
                  <span
                    className="flex-shrink-0 font-extrabold text-[45px] leading-none"
                    style={{ color: NUMBER_COLOR }}
                  >
                    {index + 1}
                  </span>
                  {/* RESTORED ORIGINAL MOBILE H3 STYLING */}
                  <h3
                    className="text-[16px]  leading-tight"
                    style={{ color: instructionTextColor }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-[12px] leading-snug"
                  style={{ color: instructionTextColor }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start space-y-2 w-[100%]">
              <div className="flex items-center space-x-2">
                {/* 🎯 Mobile Static Number (Step 3) */}
                <span
                  className="flex-shrink-0 font-extrabold text-[35px] leading-none scale-150"
                  style={{ color: NUMBER_COLOR }}
                >
                  {steps.length} {/* Displaying 3 */}
                </span>
                {/* RESTORED ORIGINAL MOBILE H3 STYLING */}
                <h3
                  className="text-[16px] leading-tight"
                  style={{ color: instructionTextColor }}
                >
                  {steps[2].title}
                </h3>
              </div>
              <p
                className="text-[12px] leading-snug"
                style={{ color: instructionTextColor }}
              >
                {steps[2].description}
              </p>
            </div>

            <div className="relative w-[120px] h-[150px] flex-shrink-0 self-center mb-0  ">
              <Image
                src="/men brand-use-model.png"
                alt="Model"
                fill
                className="object-contain scale-150 scale-x-[-1.5]  transform translate-y-1 md:scale-130 md:transform md:-translate-x-10 "
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-left w-full">
          <h4
            className="text-[12px] font-light  mb-1"
            
          >
            For best results:
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            {bestResultsList.map((item, index) => (
              <li
                key={index}
                className="text-[10px] leading-tight"
                style={{ color: listTextColor }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;