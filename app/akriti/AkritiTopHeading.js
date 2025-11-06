"use client";
import React from "react";

const TopHeading = () => {
  return (
    <div
      style={{ backgroundColor: "#2A4E42" }}
      className="flex w-full justify-center"
    >
      <div className="w-full max-w-[1440px]">
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center 
            py-1.5 px-2 text-center
          "
        >
          <p
            className="
              text-white 
              text-[10px] xs:text-[11px] sm:text-[8px] md:text-base 
              font-light leading-snug tracking-wide
              whitespace-nowrap
            "
          >
            Free Shipping on All Prepaid Orders • COD Available • 100% Ayurvedic & Made in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
