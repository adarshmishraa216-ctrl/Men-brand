
"use client";

import { useEffect, useState } from "react";

export default function MobileBuyButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className="fixed left-0 w-full bg-[#FFF2E1] shadow-lg border-t border-gray-200 flex justify-center py-3 z-[9999] md:hidden"
      style={{
        position: "fixed",
        
        bottom: "0px",
        paddingBottom: "calc(env(safe-area-inset-bottom) + 10px)",
        transform: "translateY(0)",
        transition: "transform 0.3s ease-in-out",
        willChange: "transform",
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <button
        className="w-[90%] text-white text-lg font-semibold rounded-full py-3 transition-transform duration-200 hover:scale-[1.03]"
        style={{ backgroundColor: "#1B8065" }}
        onClick={() => (window.location.href = "/shop")}
      >
        Order Now
      </button>
    </div>
  );
}
