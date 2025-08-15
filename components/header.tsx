"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when pathname changes (navigation occurs)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/clarity-card", label: "Clarity Card™" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay - Positioned outside the header */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
      
      {/* Mobile Menu Drawer - Positioned outside the header */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 md:hidden`}
      >
        {/* Close (X) Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
          aria-label="Close menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-800"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col h-full pt-20 px-8 pb-8">
          <nav className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-medium transition-colors hover:text-gray-900 ${
                  pathname === link.href ? "text-gray-900" : "text-gray-600"
                }`}
                style={{
                  fontFamily:
                    '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Regular Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/15 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <Image
                src="/PromptTankLogo.png"
                alt="PromptTANK Logo"
                width={150}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                    pathname === link.href ? "text-gray-900" : "text-gray-600"
                  }`}
                  style={{
                    fontFamily:
                      '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Hamburger Button - Higher z-index than overlay but same as drawer */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer z-50"
              aria-label="Toggle menu"
            >
              <span 
                className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span 
                className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
