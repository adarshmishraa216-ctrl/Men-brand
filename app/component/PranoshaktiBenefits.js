"use client";
import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const benefitBoxBg = "#FEFEF0";
  const benefitIconBg = "#2A4E42";
  const benefitTextColor = "#000000";
  const bgImageSrc = "/men brand-benefit-bg.png";
  const mobileCardBgColor = "#2A4E42";

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
      label: "Improves blood flow and overall body endurance.",
      src: "/men brand-benfit-3.svg",
      align: "left",
    },
    {
      label: "Reduces stress and helps to fights daily fatigue.",
      src: "/men brand-benefit-4.svg",
      align: "right",
    },
  ];

  const renderAbsoluteBoxes = (
    leftOffsetClass,
    rightOffsetClass,
    paddingClass
  ) => (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center">
        {/* Top Left */}
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
              className="scale-130"
            />
          </div>
          <p className="text-base" style={{ color: benefitTextColor }}>
            {benefits[0].label}
          </p>
        </div>

        {/* Bottom Left */}
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
              className="scale-130"
            />
          </div>
          <p className="text-base" style={{ color: benefitTextColor }}>
            {benefits[2].label}
          </p>
        </div>

        {/* Top Right */}
        <div
          className={`absolute flex items-center ${paddingClass} rounded-xl shadow-md w-full max-w-[450px] ${rightOffsetClass}`}
          style={{ backgroundColor: benefitBoxBg, top: "25%" }}
        >
          <p
            className="text-base text-right flex-grow mr-4"
            style={{ color: benefitTextColor }}
          >
            {benefits[1].label}
          </p>
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: benefitIconBg }}
          >
            <Image
              src={benefits[1].src}
              alt="Benefit Icon 3"
              width={24}
              height={24}
              className="scale-130"
            />
          </div>
        </div>

        {/* Bottom Right */}
        <div
          className={`absolute flex items-center ${paddingClass} rounded-xl shadow-md w-full max-w-[450px] ${rightOffsetClass}`}
          style={{ backgroundColor: benefitBoxBg, bottom: "25%" }}
        >
          <p
            className="text-base text-right flex-grow mr-4"
            style={{ color: benefitTextColor }}
          >
            {benefits[3].label}
          </p>
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: benefitIconBg }}
          >
            <Image
              src={benefits[3].src}
              alt="Benefit Icon 4"
              width={30}
              height={24}
              className="scale-130"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStackedBoxes = (
    maxWidthClass = "max-w-md",
    textSize = "text-base"
  ) => (
    <div className={`flex flex-col gap-4 w-full ${maxWidthClass}`}>
      {benefits.map((benefit, index) => {
        const isRightAligned = benefit.align === "right";
        return (
          <div
            key={index}
            className={`flex items-center p-4 rounded-xl shadow-md w-full ${
              isRightAligned ? "justify-between" : ""
            }`}
            style={{ backgroundColor: "#FFF2E1" }}
          >
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
                  className="scale-130"
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
                  className="scale-130"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[500px] flex items-center justify-center py-1 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden max-w-[1500px] mx-auto">
        <Image
          src={bgImageSrc}
          alt="Background"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="z-0"
        />
        <div className="absolute inset-0 z-10
    bg-white lg:bg-black
    lg:opacity-30"></div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto hidden lg:flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 py-8 transform translate-x-5">
          <h2
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "36px",
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            Benefits of{" "}
            <span style={{ fontWeight: 500, color: "#C5151D" }}>
              Pranoshakti
            </span>
          </h2>
        </div>

        <div className="relative z-10 w-[2000px] h-[750px] mb-5 flex justify-center items-center mt-[-250px] transform translate-y-1 -translate-x-3 scale-70 rotate-1">
          <Image
            src="/men brand-benefits-main.png"
            alt="Pranoshakti Product"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {renderAbsoluteBoxes("left-[-7%]", "right-[-8%]", "p-4")}
      </div>

      {/* ================= TABLET VIEW ================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto hidden md:flex lg:hidden flex-col items-center p-8">
        <div className="flex flex-col items-center mb-8 py-1">
          <h2
            className="mb-6"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "35px",
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            Benefits of{" "}
            <span style={{ fontWeight: 700, color: "#C5151D" }}>
              Pranoshakti
            </span>
          </h2>
        </div>

        {renderStackedBoxes("max-w-2xl", "text-base")}
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="w-full flex justify-center py-0 relative z-10 block md:hidden">
        {/* Mobile Card with translucent white background */}
        <div
          className="relative w-full mx-2 max-w-[380px] h-auto p-4 rounded-2xl overflow-hidden flex flex-col  items-center backdrop-blur-sm"
          style={{
            
            border: "#FFFFFF",
          }}
        >
          {/* Background Image stays behind */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImageSrc}
              alt="Mobile Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 w-full my-3 flex flex-col items-center">
            <h2
              className="mb-6"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "26px",
                color: "#FFFFFF",
                textAlign: "center",
                fontWeight: 300,
              }}
            >
              Benefits of{" "}
              <span style={{ fontWeight: 700, color: "#C5151D" }}>
                Pranoshakti
              </span>
            </h2>

            {renderStackedBoxes("max-w-full", "text-sm")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
