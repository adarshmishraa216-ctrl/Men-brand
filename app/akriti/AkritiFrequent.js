// The code remains identical to the last working version.
// The click-outside functionality is already implemented via useEffect and useRef, 
// which is the appropriate way to handle this behavior on interactive desktop components.
"use client";
import React, { useState, useRef, useEffect } from "react"; // Import useState, useRef, useEffect
import NextImage from "next/image";

const FAQSection = () => {
  // Styles and Colors
  const sectionBgColor = "#FFFFFF";
  // The dark text color shown in the screenshot is close to this dark gray
  const questionColor = "#374151"; 
  const answerColor = "#1F2937"; // Darker text for readability
  
  // You MUST provide the correct paths for these images
  const plusIconImageSrc = "/akriti-freq-plus.png"; // Placeholder for PLUS icon
  const minusIconImageSrc = "/akriti-faq-minus.svg"; // Placeholder for MINUS/Close icon

  // Assets
  const headingImageSrc = "/akriti-freq-newhead.svg";
  const sideImageSrc = "/akriti-freq-product.png";
  
  // State to track which FAQ item is open
  const [openId, setOpenId] = useState(null);

  // --- NEW: Ref to detect clicks outside the FAQ container ---
  const faqRef = useRef(null); 
  // ---------------------------------------------------------

  // --- UPDATED FAQ DATA WITH SCREENSHOT CONTENT ---
  const faqs = [
    {
      id: 1,
      question: "How often should I use Aakriti?",
      answer:
        "Use twice daily — once in the morning and once before bedtime — for best results. Massage in circular upward motions for 3–5 minutes until fully absorbed.",
    },
    {
      id: 2,
      question: "How long before I see visible results?",
      answer:
        "Most users notice improved skin tone and softness within 3–6 weeks of consistent use. Results may vary depending on individual skin type and routine.",
    },
    {
      id: 3,
      question: "Is Aakriti safe for sensitive skin?",
      answer:
        "Yes. Aakriti is made with 100% Ayurvedic ingredients and a mild gel base suitable for most skin types. We recommend doing a patch test before first use to ensure compatibility.",
    },
    {
      id: 4,
      question: "Can I use it during pregnancy or breastfeeding?",
      answer:
        "No. As per product guidelines, Aakriti should be avoided during pregnancy and breastfeeding. Please consult your healthcare provider if you have any concerns.",
    },
    {
      id: 5,
      question: "Who can use Aakriti?",
      answer:
        "Aakriti is suitable for adult women looking for natural, Ayurvedic support for skin tone, firmness, and overall bust-area wellness.",
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
          {/* Heading Image */}
          <div className="mb-8 sm:mb-10">
            <img
              src={headingImageSrc}
              alt="Frequently Asked Questions Heading"
              className="w-auto h-auto max-w-full md:transform md:translate-x-30"
            />
          </div>

          {/* FAQ Items */}
          <div className="w-full space-y-5">
            {faqs.map((faq) => {
              const isOpen = faq.id === openId;
              return (
                <div
                  key={faq.id}
                  className="w-full"
                >
                  <div 
                    className={`flex justify-between items-start pr-2 rounded-lg transition duration-300 shadow-md ${
                        isOpen ? 'bg-[#E6EAE2] hover:bg-[#E6EAE2]' : 'bg-zinc-100 hover:bg-zinc-200' // Darker color for open state
                    } cursor-pointer`}
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
                    <div className="flex-shrink-0 flex items-center justify-center h-full pt-3 pr-3">
                        <NextImage
                            src={isOpen ? minusIconImageSrc : plusIconImageSrc}
                            alt={isOpen ? "Collapse Answer" : "Expand Answer"}
                            width={30} // Adjusted size for better visual balance
                            height={30}
                            className="transition-transform duration-300"
                        />
                    </div>
                  </div>

                  {/* Answer Drawer */}
                  <div
                    // Conditional classes for height/visibility
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0 pt-0'
                    }`}
                  >
                    <p 
                        className="text-sm sm:text-base font-normal px-4 pb-4" 
                        style={{ color: answerColor, whiteSpace: 'pre-wrap' }} 
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
            className="object-contain scale-110 transform -translate-y-7"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;