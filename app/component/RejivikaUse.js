"use client";
import React from "react";
import Image from "next/image";

const HowToUseSection = () => {
  // --- COLOR DEFINITIONS ---
  const sectionBgColor = "transparent"; 
  // FIXED: Changed mobile container background color to white (#FFFFFF)
  const mobileContainerBgColor = "#FFFFFF"; 
  const desktopBgColor = "#F0F0F0"; 
  
  const instructionTextColor = "#4B5563";
  const listTextColor = "#6B7280";
  const darkHeadingColor = "#333333";
  // NEW: Specific color for Rejivika Capsule/Gel headings
  const productHeadingColor = "#2A4E42"; 
  const DESKTOP_TEXT_WIDTH = "360px";

  // --- CONTENT DATA ---
  const capsuleInstructions = [
    "Dose: Take 2 capsules, twice daily (morning & evening) with water or lukewarm milk.",
    "Consistency: Use every day at the same time.",
    "Guidance: Or as directed by your physician.",
  ];

  const gelInstructions = [
    "1. Apply: On clean, dry area, apply a thin layer of gel.",
    "2. Method: Gently massage to spread evenly; use at night or as advised.",
    "3. Absorb: Leave on to absorb fully; avoid washing immediately.",
  ];

  const proTipsImageMatch = [
    "Apply after a shower on clean, dry skin.",
    "Avoid during pregnancy or breastfeeding.",
    "Store in a cool, dry place, away from direct sunlight.",
  ];

  const proTips = [
    "Use capsules and gel together for comprehensive care.",
    "Store in a cool, dry place, away from direct sunlight.",
    "Avoid during pregnancy & breastfeeding.",
    "Keep the bottle tightly closed; use within 30 days of opening.",
    "Do a patch test for first-time users.",
  ];

  // Placeholder images for Capsule/Gel icons and products
  const capsuleBottleSrc = "/rejivik-use-pinkcircle.svg";
  const gelJarSrc = "/rejivik-use-pinkcircle2.svg.svg";
  const underlineSrc = "/rejivika-about-underline.svg";
  // const waveUnderlineSrc = "/rejivika-use-underline.svg"; // Not used

  // --- UTILITY COMPONENT FOR CAPSULE/GEL BLOCK ---
  const InstructionBlock = ({ title, src, instructions, isMobile = false }) => {
    
    const imageSize = isMobile ? 80 : 60;
    
    // Classes for the main instruction container
    const containerClasses = isMobile
      ? `flex-row items-start justify-between w-full`
      : "flex-row items-start justify-start gap-4"; 

    // Mobile specific title, for the mobile product icon/type
    const mobileProductTypeText = title.includes("Capsules") ? "Capsules" : "Gel";

    return (
      <div
        className={`flex ${containerClasses} mb-6`} 
        // FIXED: Increased max-width for tablet view
        style={{ maxWidth: isMobile ? "90%" : DESKTOP_TEXT_WIDTH }} 
      >
        
        {/* Left Column: Image ONLY (Desktop) / Image + Product Type (Mobile) */}
        <div 
            className={`flex-shrink-0 flex flex-col items-center ${isMobile ? "mr-3" : "pt-1"}`}
        >
            {/* Image */}
            <div className={`${isMobile ? "w-20 h-20" : "w-16 h-16"} mb-1`}>
                <Image
                    src={src}
                    alt={title}
                    width={imageSize}
                    height={imageSize}
                    // FIXED: Corrected invalid class 'lg:tranform' to 'lg:transform'
                    // The scale-120 is preserved to increase the image size.
                    className="rounded-full object-cover scale-120 lg:scale-180 lg:transform lg:-translate-x-4 lg:translate-y-4"
                />
            </div>
            {/* REMOVED REDUNDANT MOBILE PRODUCT TYPE TEXT */}
        </div>

        {/* Right Column: Title (Single Line) and Instructions */}
        <div
          className="flex flex-col items-start"
          // FIXED: Increased max-width allocation for instructions on tablet
          style={{ maxWidth: isMobile ? "75%" : "calc(100% - 70px)" }} 
        >
          
          <h3
            // FIXED: Changed color to productHeadingColor (#2A4E42) and kept size/weight/line-height
            className="text-[20px] font-normal mb-1 whitespace-nowrap" 
            style={{ 
              fontFamily: "Rubik, sans-serif", 
              color: productHeadingColor, // Applied new color
              lineHeight: '100%', // Matching line-height: 100%
            }}
          >
            {title}
          </h3>


          {/* Render instructions */}
          <div
            className="text-sm space-y-1"
            style={{ color: instructionTextColor }}
          >
            {instructions.map((item, index) => (
              <p key={index} className="leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  // --- END UTILITY COMPONENT ---

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: mobileContainerBgColor }} // This is now white
    >
      {/* ===== Decorative Grey Background (Desktop only) - FULL WIDTH GREY BG (#F0F0F0) ===== */}
      <div
        className="hidden lg:block absolute inset-0 z-0"
        style={{ backgroundColor: desktopBgColor }}
      ></div>

      {/* ===== Desktop Version (lg:flex) ===== */}
      <div
        className="hidden lg:flex w-full h-auto flex-row items-start justify-between gap-12 px-8 py-10 max-w-[1400px] mx-auto relative z-10 self-stretch" 
        style={{ backgroundColor: sectionBgColor }} 
      >
        {/* Left Side: Image of Two Models */}
        <div className="relative w-1/2 h-auto flex-shrink-0 flex justify-center items-center self-stretch">
          <Image
            src="/rejivika-use-model.png"
            alt="Two models with products"
            fill
            className="object-contain scale-125 object-left"
            sizes="50vw"
            priority
          />
        </div>

        {/* Right Side: Content (Heading, Instructions, Pro Tips) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:py-4 lg:px-6 self-stretch "> 
          
          {/* Heading - DESKTOP VERSION (KEEP AS IS) */}
          <div className="mb-4 w-full flex flex-col items-center">
            <h2
              // Preserved existing style and incorrect class
              className="text-[40px] font-normal transform -translate-x-45"
              style={{
                fontFamily: "Rubik, sans-serif",
                color: darkHeadingColor,
              }}
            >
              How to use
            </h2>
            {/* Underline Image component */}
            <div className="h-3 w-full flex  justify-center">
              <Image
                src={underlineSrc} // Using the underlineSrc consistently
                alt="Underline"
                width={150}
                height={10}
                // Preserved existing style and incorrect class
                className="mt-1 transform -translate-x-45 -translate-y-3"
              />
            </div>
          </div>

          {/* Instruction Blocks Container */}
          <div className="flex flex-col space-y-3 flex-grow"> 
            <InstructionBlock
              title="Rejivika Capsules"
              src={capsuleBottleSrc}
              instructions={capsuleInstructions}
              
            />
            <InstructionBlock
              title="Rejivika Gel"
              src={gelJarSrc}
              instructions={gelInstructions}
            />
          </div>

          {/* Pro Tips */}
          <div className="mt-8"> 
            <h4
              // Preserved existing classes
              className="text-sm font-light"
              style={{ color: darkHeadingColor }}
            >
              Pro Tips:
            </h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {proTips.map((item, index) => (
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

      {/* ===== Mobile Version (block lg:hidden) - TABLET RESPONSIVENESS ADDED ===== */}
      <div 
        // FIXED: Added md:max-w-3xl (approx 600px) and md:px-6 for better tablet width and padding
        className="block lg:hidden w-full relative z-10 px-4 py-8 md:max-w-3xl md:px-6 mx-auto" 
      >
        
        {/* 1. Main Heading (How to use) - OUTSIDE GREY BOX */}
        <div className="flex flex-col items-center mb-5">
            <h2
              className="text-3xl font-normal"
              style={{
                fontFamily: "Rubik, sans-serif",
                color: darkHeadingColor,
              }}
            >
              How to use
            </h2>
            {/* Underline Image component */}
            <Image
              src={underlineSrc}
              alt="Underline"
              width={150}
              height={10}
              className="mt-1"
            />
          </div>

        {/* Main Grey Card Container - ONLY INSTRUCTIONS AND PRO TIPS */}
        <div
          // FIXED: Removed inline style maxWidth: "400px" as it is now controlled by the parent md:max-w-3xl
          className="w-full bg-[#F0F0F0] mx-auto rounded-b-xl p-6" 
        >

          {/* 2. Instruction Blocks (Capsule & Gel) - USING InstructionBlock */}
          <div 
             // FIXED: Changed instruction blocks to flex-row and flex-wrap on tablets to potentially place them side-by-side if desired, or at least maximize horizontal space.
            className="w-full space-y-6 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-x-8"
          >
            
            {/* InstructionBlock for Capsules */}
            <InstructionBlock
              title="Rejivika Capsules"
              src={capsuleBottleSrc}
              instructions={capsuleInstructions}
              isMobile={true}
            />
            
            {/* InstructionBlock for Gel */}
            <InstructionBlock
              title="Rejivika Gel"
              src={gelJarSrc}
              instructions={gelInstructions}
              isMobile={true}
            />
            
          </div>

          {/* 3. Side-by-Side Container for Image and Pro Tips */}
          <div className="flex flex-row items-end justify-between w-full mt-4 pt-4">
            {/* Left Column: Pro Tips / Best Results List */}
            <div 
                // FIXED: Set width to 5/12 on tablet for better visual balance with the image
                className="w-1/2 md:w-5/12 text-left pr-2 mb-4"
            >
              <h4
                // Preserved existing classes
                className="text-semi font-light mb-2"
                style={{ color: darkHeadingColor }}
              >
                For best results:
              </h4>
              <ul className="list-disc ml-4 space-y-1 text-sm">
                {proTipsImageMatch.map((item, index) => (
                  <li
                    key={index}
                    className="leading-tight"
                    style={{ color: listTextColor }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Product Model Image */}
            <div 
                // FIXED: Set width to 7/12 on tablet
                className="relative w-1/2 md:w-7/12 h-[200px] flex justify-center items-end flex-shrink-0"
            >
              <Image
                src="/rejivika-use-model.png"
                alt="Models with products"
                fill
                className="object-contain scale-130 object-bottom transform -translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;