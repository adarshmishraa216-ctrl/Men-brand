"use client";
import React from "react";
import Image from "next/image";

const AboutAakritiSection = () => {
  const subHeadingColor = "#646464";
  const textColor = "#000000";
  const iconBoxBg = "#FFF2E1"; // Light tan color for the boxes
  const darkGreenIconBg = "#2A4E42";
  const sectionBgColor = "#E3459B"; // Pink color for background sections

  // Data structure for the boxes
  const boxData = [
    { src: "/akriti_tree-3-fill.png", label: "100% Ayurvedic" },
    { src: "/akriti_test-tube-fill.png", label: "Lab Tested" },
    { src: "/akriti-GMP-2page.png", label: "GMP Certified" },
    { src: "/akriti-ISO-page2.png", label: "ISO Approved" },
  ];

  // Component to render a single box - MODIFIED FOR NEW DESIGN (Applies to Mobile)
  const renderTrustBox = (box, widthClass) => (
    <div
      key={box.label}
      // MODIFIED: flex-row, items-center, p-4, removed shadow-sm and h-16
      className={`flex flex-row items-center p-4 rounded-xl ${widthClass}`}
      style={{ backgroundColor: iconBoxBg }}
    >
      <div
        // Container size remains w-10 h-10 (Mobile circle size is maintained)
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3"
        style={{ backgroundColor: darkGreenIconBg }}
      >
        {/* FIX: Increased icon size from 20x20 to 28x28 for mobile view */}
        <Image src={box.src} alt={box.label} width={28} height={28} />
      </div>
      <p
        className="text-sm font-medium text-left" // Ensure text is left-aligned
        style={{ color: textColor }}
      >
        {box.label}
      </p>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-9 px-8 lg:px-16 gap-12">
        {/* Left Section: Image of the girl (Desktop version - NO CHANGE) */}
        <div className="hidden lg:flex shrink-0 relative w-[400px] sm:w-[500px] h-[500px] sm:h-[600px] justify-center items-center order-2 lg:order-1">
          <Image
            src="/rejivika-about-model.png"
            alt="Girl holding rejivika product"
            layout="fill"
            objectFit="contain"
            className="scale-110 transform translate-x-6 -translate-y-2"
          />
        </div>

        {/* Right Section: Text + Boxes + Mobile image */}
        <div className="flex flex-col items-center text-center max-w-2xl order-1 lg:order-2">
          {/* About Aakriti heading */}
          <div className="w-full flex justify-center mb-3">
            <div className="w-full flex justify-center mb-3">
              {/* Wrapper to contain and stack the heading and the underline image */}
              <div className="flex flex-col items-center">
                <h2
                  className="text-center"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 300,
                    fontSize: "36px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#000000",
                  }}
                >
                  About <span style={{ fontWeight: 300 }}>Rejivika</span>
                </h2>

                {/* Underline Image */}
                <Image
                  src="/rejivika-about-underline.svg"
                  alt="Heading underline graphic"
                  width={150}
                  height={10}
                  className="mt-2 scale-130"
                />
              </div>
            </div>
          </div>

          {/* Girl image – visible only on mobile */}
          <div className="flex lg:hidden justify-center mb-5 w-full">
            <div
              // MODIFIED: Added transform and -translate-y-8 (mobile/default)
              className="relative w-[280px] sm:w-[500px] h-[300px] sm:h-[600px] scale-110 transform translate-y-5"
            >
              <Image
                src="/rejivika-about-model.png"
                alt="Girl holding Aakriti product"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Pink text (for Desktop) */}
          <h3
            className="hidden md:block font-meowscript text-4xl mb-5"
            style={{
              color: subHeadingColor,
              fontFamily: "Meow Script, cursive",
              fontWeight: 400,
              fontSize: "40px",
              lineHeight: "100%",
              textAlign: "center",
            }}
          >
            Complete feminine care inside and out,
          </h3>

          {/* Paragraph (for Desktop) */}
          <p
            className="hidden md:block text-base mb-8 leading-relaxed text-center"
            style={{ color: textColor }}
          >
            Rejivika is a thoughtfully crafted Ayurvedic combo of capsules and
            gel designed to restore feminine wellness naturally. The capsules
            help improve inner strength, and hormonal balance, while the gel
            firms and tones tissues externally together promoting comfort,
            confidence, and complete intimate well-being.
          </p>

          {/* Four Boxes - MODIFIED: Custom Mobile Layout */}
          <div className="w-full mb-3 md:mb-1 block lg:hidden ">
            {" "}
            {/* Added px-4 for overall horizontal padding */}
            {/* Box 1 (Full Width) */}
            <div className="mb-4">{renderTrustBox(boxData[0], "w-full")}</div>
            {/* Box 2 (Full Width) */}
            <div className="mb-4">{renderTrustBox(boxData[1], "w-full")}</div>
            {/* Boxes 3 & 4 (Half Width, Side-by-Side) */}
            <div className="flex justify-between gap-4">
              {renderTrustBox(boxData[2], "w-1/2")}
              {renderTrustBox(boxData[3], "w-1/2")}
            </div>
          </div>

          {/* Four Boxes - ORIGINAL DESKTOP GRID */}
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-3 md:mb-8">
            {boxData.map((box, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl "
                style={{ backgroundColor: iconBoxBg }}
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: darkGreenIconBg }}
                >
                  <Image src={box.src} alt={box.label} width={40} height={40} />
                </div>
                <p
                  className="text-sm font-medium text-center"
                  style={{ color: textColor }}
                >
                  {box.label}
                </p>
              </div>
            ))}
          </div>

          {/* Pink text for Mobile */}
          <h3
            className="block md:hidden font-meowscript text-4xl mt-2"
            style={{
              color: "#DF67A3",
              fontFamily: "Meow Script, cursive",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              textAlign: "center",
            }}
          >
            Complete feminine care inside and out,
          </h3>
        </div>
      </div>

      {/* Bottom wave – only visible on desktop */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 w-full h-24"
        style={{
          backgroundColor: sectionBgColor,
          zIndex: 0,
        }}
      >
        {/* Content is empty, resulting in a flat pink bar */}
      </div>
    </section>
  );
};

export default AboutAakritiSection;
