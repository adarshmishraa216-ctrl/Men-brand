"use client";
import React, { useState } from "react";
import Image from "next/image";

const IngredientsSection = () => {
  // --- CONFIGURATION ---
  const sectionBgColor = "#FFFFFF";
  const preservativesText = "Preservatives: Sodium Benzoate I.P., Gel Base";
  const darkGrayColor = "#666666";
  const redColor = "#E3459B"; // Using the color from the Rejivika context

  // --- TAB STATE ---
  const [activeTab, setActiveTab] = useState("capsule"); // 'capsule' or 'gel'

  // --- INGREDIENT DATA ---
  const ingredientData = {
    capsule: [
      { name: "Bargad", scientific: "Ficus benghalensis", amount: "100 mg" },
      { name: "Shatavari", scientific: "Asparagus racemosus", amount: "250 mg" },
      { name: "Lodhra", scientific: "Symplocos racemosa", amount: "300 mg" },
      { name: "Abhrakh Bhasma", scientific: "Classical Medicine", amount: "100 mg" },
      { name: "Nirgundi", scientific: "Vitex negundo", amount: "250 mg" },
      { name: "Aloevera", scientific: "Aloe barbadensis", amount: "2 ml" },
    ],
    gel: [
      { name: "Neem", scientific: "Azadirachta indica", amount: "10 mg" },
      { name: "Peepal", scientific: "Ficus religiosa", amount: "10 mg" },
      { name: "Bargad", scientific: "Ficus benghalensis", amount: "40 mg" },
      { name: "Gular", scientific: "Ficus glomerata", amount: "30 mg" },
      { name: "Shatavari", scientific: "Asparagus racemosus", amount: "100 mg" },
      { name: "Lodhra", scientific: "Symplocos racemosa", amount: "100 mg" },
    ],
  };

  // --- RENDERING FUNCTIONS ---

  // Renders the Tabs (Capsule/Gel Buttons)
  const renderTabs = () => (
    // The tabs container itself is now flush left (no ml-0 needed if parent is flex-start)
    <div className="flex gap-4 mb-4">
      {["capsule", "gel"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 text-sm font-medium rounded-3xl transition duration-200 border-2 whitespace-nowrap
            ${
              activeTab === tab
                ? "bg-red-200 text-white border-red-400"
                : "bg-white text-red-400 border-gray-300 hover:border-gray-400"
            }`}
          style={{
            borderColor: activeTab === tab ? redColor : "#ccc",
            backgroundColor: activeTab === tab ? redColor : "white",
            color: activeTab === tab ? "white" : darkGrayColor,
          }}
        >
          {tab === "capsule"
            ? "Rejivika Capsule Ingredients"
            : "Rejivika Gel Ingredients"}
        </button>
      ))}
    </div>
  );

  // Renders the Content Table for the active tab
  const renderIngredientTable = (data) => (
    // Outer div for styling (no w-full, allowing inner content to dictate width)
    <div className="h-auto bg-[#FFF2E1] p-5 rounded-xl shadow-inner">
      {/* FIX: min-w-[300px] ensures content is wider than viewport, enabling scroll */}
      <div className="grid grid-cols-[1fr_1fr_max-content] gap-y-3 font-rubik text-base min-w-[300px]"> 
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <p className="font-medium text-left">{item.name}</p>
            <p className="text-left text-gray-600">{item.scientific}</p>
            <p className="font-semibold text-right text-black">{item.amount}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="relative w-full overflow-visible flex justify-center py-10"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-1 sm:px-6 lg:px-8">
        {/* --- DESKTOP VIEW: Side-by-Side (Visible on lg and up) --- */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-12 w-full">
          
          {/* Left Section (Heading, Tabs, Table) - Takes 55% width */}
          <div className="flex flex-col w-[55%] shrink-0 pt-10">
            
            {/* Heading Section (Text + Underline) */}
            <div className="mb-6 w-full flex justify-start">
              <div className="flex flex-col items-start">
                <h2
                  className="text-center text-4xl transform translate-x-28" 
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 400, 
                    lineHeight: "100%",
                    color: darkGrayColor,
                  }}
                >
                  Rejivika <span style={{ fontWeight: 500 }}>Ingredients</span>
                </h2>
                <Image
                  src="/rejivika-about-underline.svg"
                  alt="Heading underline graphic"
                  width={200}
                  height={10}
                  className="mt-1 transform translate-x-40 scale-120" 
                />
              </div>
            </div>
           <div className="tranform -translate-x-23">
            {/* Tabs (Buttons) - ALIGNMENT FIXED */}
            {renderTabs()}

            {/* Ingredient Table Content - ALIGNMENT FIXED */}
            {renderIngredientTable(ingredientData[activeTab])}
            </div>
            {/* Preservatives Note */}
            <p className="w-full text-left text-sm mt-4 text-gray-700">
              {preservativesText}
            </p>
          </div>
          {/* END of Left Section */}

          {/* Right Section (Raw Materials Image) - Takes 45% width */}
          <div className="relative w-[45%] h-[450px] flex justify-center items-start pt-10">
            <Image
              src="/rejivika-ingridient-mainimg.png"
              alt="Ayurvedic Raw Materials"
              fill
              className="object-contain scale-110 m-7 tranform translate-x-2 translate-y-5 "
              sizes="(max-width: 1000px) 0, 45vw"
            />
          </div>
        </div>
        {/* --- END DESKTOP VIEW --- */}
         
        
        {/* --- MOBILE VIEW: Stacked and Centered (Hidden on lg and up) --- */}
        <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
          
          {/* Side-by-Side Container for Heading and Image */}
          <div className="flex w-full justify-between items-center px-4 mb-4">
            {/* Left Side: Heading Section (Takes 65% width) */}
            <div className="flex flex-col items-start justify-center w-[65%]">
              <h2
                className="text-left text-2xl" 
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 400,
                  lineHeight: "100%",
                  color: darkGrayColor,
                }}
              >
                Rejivika <span style={{ fontWeight: 500 }}>Ingredients</span>
              </h2>
              <Image
                src="/rejivika-about-underline.svg"
                alt="Heading underline graphic"
                width={150}
                height={8}
                className="mt-1 transform translate-x-2" 
              />
            </div>

            {/* Right Side: Raw Materials Image (Takes 35% width) */}
            <div className="relative w-[35%] h-[120px] flex justify-center items-center">
              <Image
                src="/rejivika-ingridient-mainimg.png"
                alt="Ayurvedic Ingredients"
                fill
                className="object-contain scale-125" 
              />
            </div>
          </div>
          {/* END Side-by-Side Container */}

          {/* Tabs (Buttons) - Mobile - ALIGNMENT FIXED */}
          <div className="w-full px-4">
            {renderTabs()}
          </div>

          {/* Ingredient Table Content - Mobile - HORIZONTAL SCROLL FIX */}
          <div className="w-full overflow-x-auto px-4 ">
            {renderIngredientTable(ingredientData[activeTab])}
          </div>

          {/* Preservatives Note */}
          <p className="w-full text-left text-sm mt-4 text-gray-700 px-4">
            {preservativesText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;