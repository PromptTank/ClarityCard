import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white/85 rounded-lg shadow-sm p-10 text-center">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Thanks!
            </h1>

            <div className="prose prose-lg text-gray-600 mb-12 max-w-md mx-auto">
              <p className="mb-6">
                You'll receive a diagnostic email in 24 hours + an invitation to
                a free Clarity Call with Dan and Brian.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/">
                <Button className="px-8 py-3 text-base font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 hover:scale-[1.02]">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
