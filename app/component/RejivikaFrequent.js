"use client";
import React, { useState, useRef, useEffect } from "react"; // Import useState, useRef, useEffect
import NextImage from "next/image";

const FAQSection = () => {
  // Styles and Colors
  const sectionBgColor = "#FFFFFF";
  const darkGrayColor = "#666666"; // A common dark gray
  const redColor = "#646464";
  const underlineSrc = "/rejivika-about-underline.svg";
  
  // The dark text color shown in the screenshot is close to this dark gray
  const questionColor = "#374151";
  const answerColor = "#1F2937"; // Darker text for readability

  // You MUST provide the correct paths for these images
  const plusIconImageSrc = "/akriti-freq-plus.png"; // Placeholder for PLUS icon
  const minusIconImageSrc = "/akriti-faq-minus.svg"; // Placeholder for MINUS/Close icon

  // Assets
  
  const sideImageSrc = "/rejivika-faq-product.png";

  // State to track which FAQ item is open
  const [openId, setOpenId] = useState(null);

  // --- NEW: Ref to detect clicks outside the FAQ container ---
  const faqRef = useRef(null);
  // ---------------------------------------------------------

  // --- UPDATED FAQ DATA WITH SCREENSHOT CONTENT ---
  const faqs = [
    {
      id: 1,
      question: "What is Rejivika and how does it work?",
      answer:
        "For long-lasting results, it’s recommended to take Pranoshakti consistently for at least 3 to 6 months. Ayurveda works gradually to strengthen your system from within not just give temporary boosts.",
    },
    {
      id: 2,
      question: "How long should I use Rejivika for best results?",
      answer:
        "Pranoshakti is formulated for adult men aged 18 and above who wish to improve stamina, vitality, and energy. It’s not intended for minors or women. For best results, maintain a balanced lifestyle with good diet and exercise.",
    },
    {
      id: 3,
      question: "Can I use only the gel or the capsule?",
      answer:
        "Absolutely. Made from pure Ayurvedic herbs like Ashwagandha, Safed Musli, and Shilajit, Pranoshakti is 100% safe for daily consumption when taken as per the recommended dose. No side effects — only steady, natural growth in stamina and vitality.",
    },
    {
      id: 4,
      question: "Is Rejivika safe for daily use?",
      answer:
        "Not at all. Pranoshakti is formulated for every man whether you work long hours, travel often, or lead a busy lifestyle. It helps improve daily stamina, focus, and overall energy levels naturally, making it suitable for any adult looking to stay active and confident.",
    },
    {
      id: 5,
      question: "What precautions should I follow while using Rejivika?",
      answer:
        "You may start feeling increased energy and focus within a few weeks, but true transformation happens over time. Regular use for 3–6 months helps balance energy, stamina, and vitality naturally.",
    },
  ];
  // --- END UPDATED FAQ DATA ---

  // Toggle function handles opening and closing drawers
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id); // Close if open, open if closed
  };

  // --- NEW: useEffect for click outside detection ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the ref exists and the click is outside the FAQ container, close the drawer
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenId(null);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [faqRef]); // Dependency on faqRef, though it won't change

  // ---------------------------------------------------

  return (
    <section
      className="relative w-full overflow-hidden flex justify-center py-5"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div
        className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10"
        ref={faqRef} // --- Attach the ref to the main content container ---
      >
        {/* LEFT SIDE — FAQ LIST */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Heading */}
         <div className="flex flex-col items-center w-full mb-8 sm:mb-10"> {/* Centering the heading and underline */}
            <h2
              // FIXED: Updated class to use font-normal (400) and lg:text-[36px]
              className="text-[25px] lg:text-[36px] font-normal mb-1 whitespace-nowrap" 
              style={{
                fontFamily: "Rubik, sans-serif",
                // fontWeight: 400 is handled by font-normal class
                lineHeight: "100%", // Matching line-height: 100%
                color: darkGrayColor,
              }}
            >
              Frequently Asked{" "}
              <span style={{ color: redColor }}>Questions</span>
            </h2>
            {/* Underline Image */}
            <NextImage
              src={underlineSrc}
              alt="Underline"
              width={150} // Adjust width as needed
              height={10} // Adjust height as needed
              className="mt-1 lg:scale-250 scale-200"
            />
          </div>

          {/* FAQ Items */}
          <div className="w-full space-y-5">
            {faqs.map((faq) => {
              const isOpen = faq.id === openId;
              return (
                <div key={faq.id} className="w-full">
                  <div
                    // FIX: Removed conditional background color based on isOpen.
                    // Now consistently uses bg-zinc-100 (the default closed color).
                    className={`flex justify-between items-start pr-2 rounded-lg transition duration-300 bg-zinc-100 cursor-pointer`}
                    onClick={() => handleToggle(faq.id)}
                  >
                    {/* Question and Icon Container */}
                    <div className="flex-grow flex items-center px-4 py-5">
                      <span
                        className="text-base sm:text-lg font-medium leading-tight"
                        style={{ color: questionColor }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon (Toggle button container is still the main div) */}
                    <div className="flex-shrink-0 flex items-center justify-center h-full pt-4 pr-3">
                      <NextImage
                        // The icon still changes to show open/closed state visually
                        src={isOpen ? minusIconImageSrc : plusIconImageSrc}
                        alt={isOpen ? "Collapse Answer" : "Expand Answer"}
                        width={40}
                        height={40}
                        className="transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Answer Drawer */}
                  <div
                    // Conditional classes for height/visibility
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "max-h-96 opacity-100 pt-3"
                        : "max-h-0 opacity-0 pt-0"
                    }`}
                  >
                    <p
                      className="text-sm sm:text-base font-normal px-4 pb-4"
                      style={{ color: answerColor, whiteSpace: "pre-wrap" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE — PRODUCT IMAGE (Hidden on small screens) */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[650px] flex justify-center items-center p-5 lg:p-1 transform rotate-1 scale-110 transition-transform duration-500 -mt-6 lg:mt-0 hidden lg:flex">
          <NextImage
            src={sideImageSrc}
            alt="Aakriti Product Box"
            fill
            className="object-contain scale-105 transform -translate-y-7 translate-x-7"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;