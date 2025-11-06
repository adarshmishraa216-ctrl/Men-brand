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
  const MOBILE_NUMBER_SIZE = 25;  // Default size (e.g., 25x25 pixels) 
  // You can set height separately if needed: const MOBILE_NUMBER_HEIGHT = 35;

  const steps = [
    {
      numberImg: "/akriti-use-1.png",
      title: "Take a Small Amount",
      description:
        "Scoop a small quantity of Aakriti gel on your fingertips. Use enough to cover the target area comfortably.",
    },
    {
      numberImg: "/akriti-use-2.png",
      title: "Apply Gently",
      description:
        "Massage in circular upward motions for 3–5 minutes to ensure even absorption.",
    },
    {
      numberImg: "/akriti-use3.png",
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
            src="/akriti-use-model.png"
            alt="Woman holding product jar"
            fill
            className="object-cover lg:object-contain object-right-bottom transform scale-x-[-1] scale-130 "
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start p-8 lg:p-16">
          <div className="mb-12">
            <img src="akriti-use-newhead.svg" alt="How to use heading" />
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
      <div className="block lg:hidden w-full flex flex-col items-center px-6 py-4 relative z-10">
        <div className="flex flex-col items-center mb-2">
          <img
            src="akriti-use-head.png"
            alt="How to use heading"
            className="w-[220px]"
          />
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
                  className="flex-shrink-0"
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
                src="/akriti-use-model.png"
                alt="Model"
                fill
                className="object-contain scale-140 transform -translate-y-2 md:scale-150 md:transform md:-translate-x-10 "
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