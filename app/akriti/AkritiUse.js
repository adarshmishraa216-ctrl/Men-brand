"use client";
import React from "react";
import Image from "next/image";

const HowToUseSection = () => {
  const sectionBgColor = "#FFFFFF";
  const instructionTextColor = "#4B5563";
  const listTextColor = "#6B7280";

  const steps = [
    {
      id: 1,
      color: "#DF67A3",
      title: "Take a Small Amount",
      description:
        "Scoop a small quantity of Aakriti gel on your fingertips. Use enough to cover the target area comfortably.",
    },
    {
      id: 2,
      color: "#DF67A3",
      title: "Apply Gently",
      description:
        "Massage in circular upward motions for 3–5 minutes to ensure even absorption.",
    },
    {
      id: 3,
      color: "#DF67A3",
      title: "Let It Absorb",
      description:
        "Allow the gel to fully absorb into the skin. Use twice daily morning and night for best results.",
    },
  ];

  const bestResultsList = [
    "Apply after a shower on clean, dry skin.",
    "Avoid during pregnancy or breastfeeding.",
    "Store in a cool, dry place, away from direct sunlight.",
  ];

  return (
    <section
      className="relative  overflow-hidden flex flex-col items-center py-10 lg:mb-17"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* ===== Decorative Grey Background (Desktop only) ===== */}
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
      <div className="hidden lg:flex w-full flex-row items-start justify-between gap-12 px-8 py-10 max-w-[1400px] mx-auto relative z-10">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-auto flex-shrink-0 flex justify-center items-end">
          <Image
            src="/akriti-use-model.png"
            alt="Woman holding product jar"
            width={600} 
            height={700} 
            className="object-contain transform scale-150 -scale-x-100 translate-y-20"

            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start p-8 lg:p-16">
          {/* Heading with Wave Underline */}
          <div className="mb-19">
            <img
              src="/Howtouse-head-new.svg"
              alt="How to Use underline"
              width="190"
              height="57"
              className="object-contain scale-140"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col space-y-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start space-x-6">
                <span
                  className="text-6xl font-bold leading-none scale-y-125"
                  style={{ color: step.color }}
                >
                  {step.id}
                </span>
                <div className="flex flex-col">
                  <h3
                    className="text-lg font-semibold"
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

          {/* For Best Results */}
          <div className="mt-12">
            <h4 className="text-base font-medium text-gray-800 mb-2">
              For best results:
            </h4>
            <ul className="list-disc ml-6 space-y-1">
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
      <div className="block lg:hidden w-full flex flex-col items-center px-6 py-0 relative z-10">
        <div className="flex flex-col items-center mb-4">
        <img
              src="/Howtouse-head-new.svg"
              alt="How to Use underline"
              width="160"
              height="57"
              className="object-contain scale-140"
            />
        </div>

        {/* Mobile Background Box */}
        <div
          className="w-full rounded-2xl p-5 shadow-sm flex flex-col"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          {/* Steps 1 & 2 in Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {steps.slice(0, 2).map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-start space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <span
                    className="text-3xl font-bold leading-none scale-y-150"
                    style={{ color: step.color }}
                  >
                    {step.id}
                  </span>
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

          {/* Step 3 with Model Image */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start space-y-2 w-[70%]">
              <div className="flex items-center space-x-2">
                <span
                  className="text-3xl font-bold leading-none scale-y-150"
                  style={{ color: steps[2].color }}
                >
                  {steps[2].id}
                </span>
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

            {/* Model Image (restored from previous version) */}
            <div className="relative w-[160px] h-[150px] flex-shrink-0 self-center mb-0">
              <Image
                src="/akriti-use-model.png"
                alt="Model"
                fill
                className="object-contain scale-140 transform -translate-y-2 md:scale-150 md:transform md:-translate-x-10"
              />
            </div>
          </div>
        </div>

        {/* For Best Results (Mobile) */}
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
