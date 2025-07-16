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
          <div className="text-center py-20">
            {/* Certificate Badge */}
            <div className="mb-12 flex justify-center">
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
              className="mb-8 text-gray-900 max-w-3xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "48px",
                fontWeight: "300",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Verified Proficiency in AI Consulting
            </h1>

            {/* Subheading */}
            <p
              className="mb-16 text-gray-600 max-w-xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "1.4",
                letterSpacing: "-0.01em",
              }}
            >
              Google-trained. Workflow-obsessed.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <Link href="/clarity-card">
                <Button
                  className="px-12 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 hover:scale-[1.02]"
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

            {/* Microcopy */}
            <p
              className="text-gray-500 max-w-md mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.5",
                fontStyle: "italic",
              }}
            >
              We trained LLMs. Now we help humans catch up.
            </p>
          </div>

          {/* Spacer for breathing room */}
          <div className="py-20"></div>
        </div>
      </main>
    </div>
  );
}
