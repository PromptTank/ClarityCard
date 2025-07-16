"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/15 backdrop-blur-sm border-b border-gray-100">
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

          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                pathname === "/" ? "text-gray-900" : "text-gray-600"
              }`}
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              }}
            >
              Home
            </Link>
            <Link
              href="/clarity-card"
              className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                pathname === "/clarity-card" ? "text-gray-900" : "text-gray-600"
              }`}
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              }}
            >
              Clarity Card™
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                pathname === "/about" ? "text-gray-900" : "text-gray-600"
              }`}
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              }}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
