import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Checkmark Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Thank You for Your Submission!
          </h1>

          <div className="prose prose-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            <p className="mb-6">
              We've received your Clarity Card submission and our team is currently reviewing it.
            </p>
            <p className="mb-6">
              You'll receive an email within 24 hours with a link to book your free 20-minute consultation call.
              During this call, we'll walk through your workflow and discuss how we can help streamline your processes.
            </p>
            <p>
              In the meantime, feel free to explore our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page to learn more about our approach.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/">
              <Button className="px-8 py-6 text-base font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 hover:scale-[1.02]">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
