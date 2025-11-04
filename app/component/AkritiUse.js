"use client";
import React from "react";
import Image from "next/image";

const HowToUseSection = () => {
  const sectionBgColor = "#FFFFFF";
  const instructionTextColor = "#4B5563";
  const listTextColor = "#6B7280";
  

  // 🌟 NEW CONTROL VARIABLES 🌟
  // Adjust these two variables to change the size of ALL number icons.
  const DESKTOP_NUMBER_SIZE = 40; // Default size (e.g., 40x40 pixels)
  const MOBILE_NUMBER_SIZE = 25; // Default size (e.g., 25x25 pixels)
  // You can set height separately if needed: const MOBILE_NUMBER_HEIGHT = 35;

  const steps = [
    {
      numberImg: "/men brand-use-1.svg",
      title: "Take 1–2 Capsules",
      description:
        "Consume one to two capsules daily with lukewarm milk or water for better absorption.",
    },
    {
      numberImg: "/men brand-use-2.svg",
      title: "Maintain Consistency",
      description:
        "For best results, take it regularly at the same time each day — morning and evening.",
    },
    {
      numberImg: "/men brand-use-3.svg",
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
      <div className="hidden lg:block absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full"
          style={{ fill: "#F6F6F6" }}
        >
          <path d="M0,64L80,85.3C160,107,320,149,480,181.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
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
                fontWeight: 400, // Corresponds to Light font weight
                letterSpacing: "0%",
              }}
            >
              how to use
            </h2>
          </div>

          <div className="flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Desktop Number Image - Uses DESKTOP_NUMBER_SIZE */}
                <Image
                  src={step.numberImg}
                  alt={`Step ${index + 1}`}
                  width={DESKTOP_NUMBER_SIZE}
                  height={DESKTOP_NUMBER_SIZE} // Using same size for height/width
                  className="flex-shrink-0 mt-1"
                />
                <div className="flex flex-col">
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
              className="text-base font-medium"
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
            how to use
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
                  {/* Mobile Number Image (Step 1 & 2) - Uses MOBILE_NUMBER_SIZE */}
                  <Image
                    src={step.numberImg}
                    alt={`Step ${index + 1}`}
                    width={MOBILE_NUMBER_SIZE}
                    height={MOBILE_NUMBER_SIZE}
                    className="flex-shrink-0"
                  />
                  <h3
                    className="text-[13px] font-semibold leading-tight"
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
            <div className="flex flex-col items-start space-y-2 w-[70%]">
              <div className="flex items-center space-x-2">
                {/* Mobile Number Image (Step 3) - Uses MOBILE_NUMBER_SIZE */}
                <Image
                  src={steps[2].numberImg}
                  alt="Step 3"
                  width={MOBILE_NUMBER_SIZE}
                  height={MOBILE_NUMBER_SIZE}
                  className="flex-shrink-0 scale-120"
                />
                <h3
                  className="text-[13px] font-semibold leading-tight"
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

            <div className="relative w-[160px] h-[150px] flex-shrink-0 self-center mb-0  ">
              <Image
                src="/men brand-use-model.png"
                alt="Model"
                fill
                className="object-contain scale-140 scale-x-[-1.5]  transform -translate-y-2 md:scale-130 md:transform md:-translate-x-10 "
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-left w-full">
          <h4
            className="text-sm font-semibold mb-1"
            style={{ color: instructionTextColor }}
          >
            For best results:
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            {bestResultsList.map((item, index) => (
              <li
                key={index}
                className="text-[13px] leading-tight"
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
