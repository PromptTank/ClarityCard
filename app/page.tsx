"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

export default function ClarityCardPage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      <main className="pt-24">
        <div className="mx-auto max-w-4xl px-8">
          {/* Hero Section */}
          <div className="mx-auto my-8 rounded-lg bg-white/80 p-10 text-center shadow-sm">
            {/* Certificate Badge */}
            <div className="mb-10 flex justify-center">
              <div className="h-32 w-32 overflow-hidden rounded-full">
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
            <h1 className="mx-auto mb-6 max-w-3xl text-5xl font-light leading-tight tracking-[-0.02em] text-gray-900">
              PromptTANK™
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-4 max-w-xl text-[28px] font-normal leading-snug tracking-[-0.01em] text-gray-700">
              AI Clarity for Leaders
            </p>

            {/* Second Subheading */}
            <p className="mx-auto mb-12 max-w-xl text-[20px] font-normal leading-snug tracking-[-0.01em] text-gray-600">
              Education | Strategy | Governance*
            </p>

            {/* CTA Section */}
            <div className="mt-8 mb-2 border-t border-gray-100 py-6">
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Ready to see what's slowing you down?
              </p>

              {/* CTA Button */}
              <div>
                <Link href="/clarity-card">
                  <Button className="rounded-lg px-8 py-3 text-base font-medium tracking-[-0.01em] text-white transition-all duration-200 bg-gray-900 hover:bg-gray-800">
                    Get Your Clarity Card™
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Spacer for breathing room */}
          <div className="py-20" />
        </div>
      </main>
    </div>
  );
}
