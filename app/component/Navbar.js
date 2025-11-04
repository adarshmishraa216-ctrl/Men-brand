"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bgColor = "#FFF4E6";
  const borderColor = "#E1E1E1";
  const buttonBgColor = "#007850";
  const buttonRadius = "49px";
  const linkTextColor = "#000000";

  const navLinks = [
    { label: "Benefits", href: "/benefits" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "How to use", href: "/how-to-use" },
    { label: "Faq's", href: "/faqs" },
    { label: "Reviews", href: "/reviews" },
  ];

  const MenuIcon = () => (
    <svg
      className="w-6 h-6 text-black cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  return (
    <nav
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      className="w-full border-b-[0.5px] flex justify-center relative"
    >
      <div className="w-full max-w-[1440px]">
        {/* Header Row */}
        <div className="flex flex-row items-center py-2 px-6 lg:px-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="outline-none focus:outline-none focus:ring-0">
              <Image
                src="/akriti-icon.png"
                alt="Charvak Ayurveda Logo"
                width={140}
                height={48}
                priority
                className="select-none outline-none focus:outline-none focus:ring-0 border-none"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex grow justify-center items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:opacity-70 transition duration-150 mx-4"
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  color: linkTextColor,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <Link href="/order" passHref legacyBehavior>
              <button
                style={{
                  backgroundColor: buttonBgColor,
                  borderRadius: buttonRadius,
                }}
                className="text-white text-base font-medium py-2.5 px-4 shadow-md transition duration-200 hover:opacity-90"
              >
                Order Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{ backgroundColor: bgColor }}
          className="lg:hidden absolute top-full left-0 w-full shadow-lg z-20 flex flex-col items-center py-4 space-y-3 border-t border-gray-200"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2 hover:bg-gray-100 transition duration-150"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: linkTextColor,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
