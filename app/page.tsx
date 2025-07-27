"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { Header } from "@/components/header";

export default function ClarityCardPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-8">
          {/* Hero Section */}
          <div className="text-center bg-white/80 rounded-lg shadow-sm mx-auto my-8 p-10">
            {/* Certificate Badge */}
            <div className="mb-10 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/cert.png"
                  alt="IR LLC Certification"
                  width={128}
                  height={128}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className="mb-6 text-gray-900 max-w-3xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "48px",
                fontWeight: "300",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              PromptTANK™
            </h1>

            {/* Subheading */}
            <p
              className="mb-4 text-gray-700 max-w-xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "28px",
                fontWeight: "400",
                lineHeight: "1.4",
                letterSpacing: "-0.01em",
              }}
            >
              AI Clarity for Leaders
            </p>

            {/* Second Subheading */}
            <p
              className="mb-12 text-gray-600 max-w-xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "1.4",
                letterSpacing: "-0.01em",
              }}
            >
              Education | Guidance | Teams
            </p>

            {/* CTA Section */}
            <div className="mt-8 mb-2 py-6 border-t border-gray-100">
              <p
                className="mb-8 text-gray-600"
                style={{
                  fontFamily:
                    '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.5",
                }}
              >
                Ready to see what's slowing you down?
              </p>

              {/* CTA Button */}
              <div>
                <Link href="/clarity-card">
                  <Button
                    className="px-8 py-3 text-base font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200"
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Get Your Clarity Card™
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Spacer for breathing room */}
          <div className="py-20"></div>
        </div>
      </main>
    </div>
  );
}
