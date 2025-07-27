import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 relative z-10">
          {/* Company Header */}
          <div className="text-center py-16">
            <h1
              className="mb-4 text-gray-900"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "36px",
                fontWeight: "300",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
            >
              PromptTANK™
            </h1>

            <p
              className="text-gray-600 max-w-2xl mx-auto mb-2"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "1.5",
                letterSpacing: "-0.01em",
              }}
            >
              AI Clarity for Leaders
            </p>
            <p
              className="text-gray-500 max-w-2xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
            >
              Education | Guidance | Teams
            </p>
          </div>

          {/* Team Bios */}
          <div className="py-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Brian */}
              <div className="text-center bg-white/80 p-6 rounded-lg shadow-sm">

                <div className="w-32 h-40 mx-auto mb-6 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/brian.png" 
                    alt="Brian's profile picture" 
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3
                  className="mb-4 text-gray-900"
                  style={{
                    fontFamily:
                      '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: "24px",
                    fontWeight: "400",
                    letterSpacing: "-0.01em",
                  }}
                >
                  C. Brian Smith
                </h3>
                <h4 className="mb-2 text-gray-700" style={{
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: "16px",
                  fontWeight: "500",
                }}>
                  Co-Founder, PromptTANK LLC
                </h4>

                <div className="space-y-2 text-gray-600 text-left">
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Yale-trained linguist (BA, 2001) and certified AI Consultant (IRLLC, 2025).
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Supported Google Bard (Gemini) early language testing.
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Co-creator of the Clarity Ecosystem™ (Clarity Card™, Teardown™, Assessment™).
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Trained in modular and Agentic AI under Jules White (Vanderbilt, 2024).
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Creator of AI Stats & Vision (2023), guiding real-world enterprise AI adoption.
                  </p>
                </div>
              </div>

              {/* Dan */}
              <div className="text-center bg-white/80 p-6 rounded-lg shadow-sm">

                <div className="w-32 h-40 mx-auto mb-6 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/dan.png" 
                    alt="Dan's profile picture" 
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3
                  className="mb-4 text-gray-900"
                  style={{
                    fontFamily:
                      '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: "24px",
                    fontWeight: "400",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Dan
                </h3>
                <h4 className="mb-2 text-gray-700" style={{
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: "16px",
                  fontWeight: "500",
                }}>
                  Co-Founder, PromptTANK LLC
                </h4>

                <div className="space-y-2 text-gray-600 text-left">
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Certified AI Consultant (IRLLC, 2025)
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Trained in Agentic AI under Jules White (Vanderbilt)
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Certified in AI Leadership for Businesses by Lauren Vriens, Chief AI Officer (ex-Accenture, Revel)
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • 20-year professional storyteller who speaks SEO, GPT, and ROI
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    • Advises executive teams on prompt engineering and LLM best practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft CTA */}
          <div className="text-center py-12">
            <div className="max-w-lg mx-auto bg-white/80 p-8 rounded-lg shadow-sm">
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

          {/* Spacer for breathing room */}
          <div className="py-6"></div>
        </div>
      </main>
    </div>
  );
}
