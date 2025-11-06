"use client";
import React from "react";
import NextImage from "next/image";

const LovedByWomenSection = () => {
  // Styles and Constants
  const headingTextColor = "#4B5563";
  const darkHeadingColor = "#646464"; 
  const playButtonImgSrc = "/akriti-playbutton-new.png";
  
  // FIXED: Added missing underlineSrc constant
  const underlineSrc = "/rejivika-about-underline.svg";

  const models = [
    { 
      id: 1, 
      image: "/rejivika-model1.png", 
      alt: "Model 1 showcasing product" 
    },
    { 
      id: 2, 
      image: "/rejivika-model2.png", 
      alt: "Model 2 showcasing product" 
    },
    { 
      id: 3, 
      image: "/rejivika-model3.png", 
      alt: "Model 3 showcasing product" 
    },
    { 
      id: 4, 
      image: "/rejivika-model4.png", 
      alt: "Model 4 showcasing product" 
    },
  ];

  // --- NEW CONSTANTS FOR IMAGE BOX DIMENSIONS ---
  const IMAGE_WIDTH = '300px';
  const IMAGE_HEIGHT = '530px';
  // ----------------------------------------------

  // I will leave the minWidth value as it was in your input '1350px' 

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col items-center py-10"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: "1969 725 Loved by Women Across World" */}
        <div className="text-center mb-10">
          
          <div className="flex flex-col items-center">
            <h2
              className="font-normal mb-1 text-[36px]"
              style={{
                fontFamily: "Rubik, sans-serif",
                color: darkHeadingColor,
                lineHeight: '100%',
              }}
            >
              Stories of Self Love
            </h2>
            <NextImage
              src={underlineSrc}
              alt="Underline"
              width={150}
              height={10}
              className="mt-1 scale-180"
            />
          </div>
        </div>

        {/* Testimonials Grid Container */}
        {/* MODIFIED: The grid switches to horizontal scrolling on screens smaller than large (lg) */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible">
          
          {/* Inner Container: Uses Flex for mobile scrolling, Grid for desktop */}
          <div 
            className="flex lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 pb-4"
            // MODIFIED: Sets a wide minimum width on mobile to force horizontal scroll (4 cards * ~250px each)
            style={{ minWidth: '1000px' }} 
          >
            {models.map((model) => (
              <div 
                key={model.id} 
                // MODIFIED: Set fixed width for mobile card consistency, then full width on lg
                className="relative flex-shrink-0 w-[240px] h-[360px] lg:w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl group cursor-pointer"
              >
                {/* Model Image */}
                <NextImage
                  src={model.image}
                  alt={model.alt}
                  fill // Use fill to make image cover parent
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 700px) 240px, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay with Play Button */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-opacity-10 hover:bg-opacity-20 transition-all"
                  onClick={() => console.log('Playing video for', model.alt)}
                >
                  <NextImage
                    src={playButtonImgSrc}
                    alt="Play Video"
                    width={70} 
                    height={70}
                    className="z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LovedByWomenSection;