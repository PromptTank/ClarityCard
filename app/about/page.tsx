import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      <main className="pt-24 px-4 sm:px-6 md:px-8">
        <div className="relative z-10 mx-auto mb-12 max-w-4xl rounded-xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">
          {/* Company Header */}
          <div className="py-16 text-center">
            <h1 className="mb-4 text-4xl font-light leading-tight tracking-tight text-gray-900">
              PromptTANK™
            </h1>

            <p className="mx-auto mb-2 max-w-2xl text-xl font-medium leading-relaxed tracking-tight text-gray-600">
              AI Clarity for Leaders
            </p>
            <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-gray-500">
              Education | Strategy | Governance*
            </p>
          </div>

          {/* Team Bios */}
          <div className="py-16">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Brian */}
              <div className="rounded-lg bg-white/80 p-6 text-center shadow-sm">
                <div className="mx-auto mb-6 h-40 w-32 overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/brian.png"
                    alt="Brian's profile picture"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className=" text-2xl font-normal tracking-tight text-gray-900">
                  C. Brian Smith
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  brian@theprompttank.com
                </p>
                <h4 className="mb-2 text-base font-medium text-gray-700">
                  Co-Founder, PromptTANK LLC
                </h4>

                <ul className="space-y-2 text-left text-[15px] leading-6 text-gray-600">
                  <li className="list-disc pl-5">
                    Yale-trained linguist (BA, 2001) and certified AI Consultant
                    (IRLLC, 2025).
                  </li>
                  <li className="list-disc pl-5">
                    Supported Google Bard (Gemini) early language testing.
                  </li>
                  <li className="list-disc pl-5">
                    Co-creator of the Clarity Ecosystem™ (Clarity Card™,
                    Teardown™, Assessment™).
                  </li>
                  <li className="list-disc pl-5">
                    Trained in modular and Agentic AI under Jules White
                    (Vanderbilt, 2024).
                  </li>
                  <li className="list-disc pl-5">
                    Creator of AI Stats &amp; Vision (2023), guiding real-world
                    enterprise AI adoption.
                  </li>
                </ul>
              </div>

              {/* Dan */}
              <div className="rounded-lg bg-white/80 p-6 text-center shadow-sm">
                <div className="mx-auto mb-6 h-40 w-32 overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/dan.png"
                    alt="Dan's profile picture"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className=" text-2xl font-normal tracking-tight text-gray-900">
                  Dan McCarthy
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  dan@theprompttank.com
                </p>
                <h4 className="mb-2 text-base font-medium text-gray-700">
                  Co-Founder, PromptTANK LLC
                </h4>

                <ul className="space-y-2 text-left text-[15px] leading-6 text-gray-600">
                  <li className="list-disc pl-5">
                    Certified AI Consultant (IRLLC, 2025)
                  </li>
                  <li className="list-disc pl-5">
                    Certified in Advanced Prompt and Context Engineering, and
                    Agentic AI Leadership under Jules White (Vanderbilt)
                  </li>
                  <li className="list-disc pl-5">
                    Certified in AI Leadership for Businesses by Lauren Vriens,
                    Chief AI Officer (ex-Accenture, Chief AI Officer at Revel)
                  </li>
                  <li className="list-disc pl-5">
                    20-year legacy and digital media strategist + professional
                    content and brand storyteller who speaks SEO, GPT, and ROI
                    for business success in the for-profit and non-profit
                    sectors.
                  </li>
                  <li className="list-disc pl-5">
                    Advises executive teams on prompt engineering, automation
                    pathways, and LLM best practices for businesses within
                    regulated industries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft CTA */}
          <div className="py-12 text-center">
            <div className="mx-auto max-w-lg rounded-lg bg-white/80 p-8 shadow-sm">
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Ready to see what's slowing you down?
              </p>

              <Link href="/clarity-card">
                <Button className="rounded-lg px-8 py-3 text-base font-medium tracking-tight text-white transition-all duration-200 bg-gray-900 hover:bg-gray-800">
                  Get Your Clarity Card™
                </Button>
              </Link>
            </div>
          </div>

          {/* Spacer for breathing room */}
          <div className="py-6" />
        </div>
      </main>
    </div>
  );
}
