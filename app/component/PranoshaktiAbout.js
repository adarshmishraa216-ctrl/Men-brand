"use client";
import React from "react";
import Image from "next/image";

const AboutAakritiSection = () => {
  const subHeadingColor = "#646464";
  const textColor = "#000000";
  const iconBoxBg = "#FFF2E1"; // Light tan color for the boxes
  const darkGreenIconBg = "#2A4E42";
  const sectionBgColor = "#2A4E42"; // Dark green for background sections

  // Data structure for the boxes
  // FIX: Added <br /> to force two lines for symmetrical wrapping
  const boxData = [
    { src: "/akriti_tree-3-fill.png", label: "100%<br />Ayurvedic" },
    { src: "/akriti_test-tube-fill.png", label: "Lab<br />Tested" },
    { src: "/akriti-GMP-2page.png", label: "GMP<br />Certified" },
    { src: "/akriti-ISO-page2.png", label: "ISO<br />Approved" },
  ];

  // Component to render a single box (Used for Mobile)
  const renderTrustBox = (box, widthClass) => {
    // Control variable for image scale (1.0 = no scaling). Adjust this to fine-tune the icon size.
    const IMAGE_SCALE_FACTOR = 1.1; 

    return (
      <div
        key={box.label}
        // FIX 1: Reduced padding to p-2 (from p-4 in previous code)
        className={`flex flex-row items-center p-2 rounded-xl ${widthClass}`}
        style={{ backgroundColor: iconBoxBg }}
      >
        <div
          // FIX 2: Increased size to w-14 h-14 (Larger icon area)
          // FIX 3: Reduced margin to mr-2 
          className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center mr-2" 
          style={{ backgroundColor: darkGreenIconBg }}
        >
          <Image
            src={box.src}
            alt={box.label}
            // FIX 4: Increased internal image size to 28x28
            width={28} 
            height={28}
            // FIX 5: Apply scaling option
            style={{ transform: `scale(${IMAGE_SCALE_FACTOR})` }}
          />
        </div>
        <p
          className="text-sm font-medium text-left" 
          style={{ color: textColor }}
          // Use dangerouslySetInnerHTML to render the <br /> tag
          dangerouslySetInnerHTML={{ __html: box.label }}
        />
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-9 px-8 lg:px-16 gap-12">
        {/* Left Section: Image of the girl (Desktop version - NO CHANGE) */}
        <div 
          // FIX: Added lg:transform lg:translate-y-10 to move the image container down on desktop
          className="hidden lg:flex shrink-0 relative w-[400px] sm:w-[500px] h-[500px] sm:h-[550px] justify-center items-center order-2 lg:order-1 lg:transform lg:translate-y-15"
        >
          <Image
            src="/men brand-about-model.png"
            alt="Girl holding Aakriti product"
            layout="fill"
            objectFit="contain"
            className="scale-140"
          />
        </div>

        {/* Right Section: Text + Boxes + Mobile image */}
        <div className="flex flex-col items-center text-center max-w-2xl order-1 lg:order-2">
          {/* About Aakriti heading */}
          <div className="w-full flex justify-center mb-6 ">
            <Image
              src="/men brand-About Pranoshakti.svg"
              alt="About Aakriti Heading Graphic"
              width={350}
              height={40}
            />
          </div>

          <div className="flex lg:hidden justify-center mb-5 w-full">
            <div
              // FIX: Changed '-translate-y-1' to 'translate-y-3' to move the image downwards on mobile
              className="relative w-[280px] sm:w-[500px] h-[300px] sm:h-[600px] transform -translate-y-1 scale-125"
            >
              <Image
                src="/men brand-about-model.png"
                alt="Girl holding Aakriti product"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Pink text (for Desktop) */}
          <h3
            className="hidden md:block text-4xl mb-5" 
            style={{
              fontFamily: "Limelight",
              color: subHeadingColor,
              fontWeight: 400,
              fontSize: "50px", 
              lineHeight: "100%",
              textAlign: "center",
              letterSpacing: "0%", 
            }}
          >
            Power that rises from within
          </h3>

          {/* Paragraph (for Desktop) */}
          <p
            className="hidden md:block mb-8 text-[20px] leading-[28px] text-center"
            style={{
              color: textColor,
              fontFamily: "Rubik, sans-serif",
              fontWeight: 300,
              letterSpacing: "0%",
            }}
          >
            Pranoshakti is a potent Ayurvedic blend crafted to support men’s
            stamina, vitality, and endurance naturally. Enriched with
            Ashwagandha, Shilajit, and Safed Musli, it helps awaken inner energy
            and promote lasting strength — the natural way to feel alive,
            focused, and confident.
          </p>

          {/* Four Boxes - Custom Mobile Layout (Uses the fixed renderTrustBox) */}
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
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mb-3 md:mb-8">
            {boxData.map((box, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl scale-110 "
                style={{ backgroundColor: iconBoxBg }}
              >
                <div
                  className="w-16 h-16 mb-1 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: darkGreenIconBg }}
                >
                  <Image src={box.src} alt={box.label} width={40} height={40} />
                </div>
                <p
                  className="text-sm font-medium text-center"
                  style={{ color: textColor }}
                  // Use dangerouslySetInnerHTML to render the <br /> tag
                  dangerouslySetInnerHTML={{ __html: box.label }}
                />
              </div>
            ))}
          </div>

          {/* Pink text for Mobile */}
          <h3
            className="block md:hidden text-5xl mt-2" 
            style={{
              color: "#C5151D",
              fontFamily: "Limelight, cursive",
              fontWeight: 400,
              fontSize: "30px", 
              lineHeight: "100%",
              textAlign: "center",
            }}
          >
            Power that rises from within
          </h3>
        </div>
      </div>

      {/* Bottom wave – only visible on desktop */}
    </section>
  );
};

export default AboutAakritiSection;