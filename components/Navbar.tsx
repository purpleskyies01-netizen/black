// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-black border-b-4 border-red-900 sticky top-0 z-50 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 md:w-9 md:h-9 text-red-600 animate-pulse" />
              <h1 className="text-2xl md:text-3xl font-black text-red-600 tracking-widest uppercase">
                DARKBLACKMAIL
              </h1>
            </div>

            {/* Desktop Status */}
            <div className="hidden md:flex items-center space-x-3">
              <span className="bg-red-800 text-white px-4 py-1.5 rounded-full text-xs font-bold animate-pulse">
                WV LEAK IMMINENT
              </span>
              <span className="text-gray-500 text-xs font-mono">
                SECURE ACCESS
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-red-600 hover:bg-red-900 rounded-lg transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer – Slide from Right */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black bg-opacity-80" />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-xs bg-black border-l-4 border-red-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-red-600 hover:bg-red-900 rounded-lg transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-9 h-9 text-red-600 animate-pulse" />
                <h2 className="text-2xl font-black text-red-600 uppercase tracking-widest">
                  DARKBLACKMAIL
                </h2>
              </div>

              <div className="w-full space-y-4 text-center">
                <div className="bg-red-800 text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse">
                  WV LEAK IMMINENT
                </div>
                <p className="text-gray-500 text-xs font-mono">
                  SECURE ACCESS • NO ESCAPE
                </p>
              </div>

              <div className="w-full border-t border-red-800 pt-4">
                <p className="text-red-400 text-sm font-black uppercase">
                  12 HOURS REMAINING
                </p>
                <p className="text-red-300 text-xs mt-1">
                  Comply or be exposed to WVU, family, and public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
