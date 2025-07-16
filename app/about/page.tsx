import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-8">
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
              PromptTANK LLC
            </h1>

            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "-0.01em",
              }}
            >
              We bridge the gap between AI capability and human workflow
              reality.
            </p>
          </div>

          {/* Team Bios */}
          <div className="py-16">
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {/* Brian */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span
                    className="text-2xl font-light text-gray-600"
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    }}
                  >
                    B
                  </span>
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
                  Brian
                </h3>

                <div className="space-y-3 text-gray-600">
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    Former Google AI researcher who spent three years training
                    language models.
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    Now helps founders turn AI promises into workflow reality.
                  </p>
                </div>
              </div>

              {/* Dan */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span
                    className="text-2xl font-light text-gray-600"
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    }}
                  >
                    D
                  </span>
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

                <div className="space-y-3 text-gray-600">
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    Operations strategist who's automated workflows for 200+
                    companies.
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    Specializes in finding the human bottlenecks AI can actually
                    solve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft CTA */}
          <div className="text-center py-16">
            <div className="max-w-lg mx-auto">
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
          <div className="py-12"></div>
        </div>
      </main>
    </div>
  );
}
