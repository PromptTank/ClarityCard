"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ClarityCardPage() {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    industry: "",
    workflow: "",
    frequency: "",
    tools: "",
    painPoint: "",
    consent: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = Object.entries(formData).every(([key, value]) => {
    if (key === "consent") return value === true;
    if (key === "email") {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value.toString().trim());
    }
    return value.toString().trim() !== "";
  });

  return (
    <div className="min-h-screen">
      <Header />

      <div className="min-h-screen relative pt-20">
        {/* Gradient Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 max-w-xl mx-auto px-8 pt-12">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="mb-4 uppercase font-sans text-[12px] text-[#666] tracking-[0.8px] leading-[1.3] font-medium">
              Engineered by Google-trained AI strategists
            </p>

            <h1 className="mb-5 font-sans text-[42px] text-[#1a1a1a] tracking-[-0.025em] leading-[1.2] font-bold">
              Clarity Card™
            </h1>

            <p className="mx-auto max-w-lg font-sans text-[18px] text-[#2a2a2a] tracking-[-0.01em] leading-[1.5] font-medium">
              AI doesn't know your workflow. PromptTANK does
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3 pb-8">
            {/* Email Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                Email Address
              </Label>
              <Input
                type="email"
                className="h-12 border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            {/* Role Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                Your Role / Job Title
              </Label>
              <Input
                className="h-12 border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. Founder — I'm the bottleneck and the backstop"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
              />
            </div>

            {/* Industry Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                Industry / Sector
              </Label>
              <Input
                className="h-12 border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. Online education — group coaching for creatives"
                value={formData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
              />
            </div>

            {/* Workflow Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                Workflow to Improve or Delegate
              </Label>
              <Input
                className="h-12 border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. Lead follow-up after first calls that vanish"
                value={formData.workflow}
                onChange={(e) => handleInputChange("workflow", e.target.value)}
              />
            </div>

            {/* Frequency Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                How Often You Do This
              </Label>
              <Input
                className="h-12 border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. Daily — or should, if I had the bandwidth"
                value={formData.frequency}
                onChange={(e) => handleInputChange("frequency", e.target.value)}
              />
            </div>

            {/* Tools Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                Tools or Platforms You Use Today
              </Label>
              <Input
                className="h-12 border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. Gmail, Calendly, half-broken Zapier flows"
                value={formData.tools}
                onChange={(e) => handleInputChange("tools", e.target.value)}
              />
            </div>

            {/* Pain Point Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] tracking-[-0.25px] font-semibold">
                Biggest Pain Point
              </Label>
              <p className="mb-2 font-sans text-[13px] text-[#666] tracking-[0.02em] font-normal italic">
                Write freely. Clarity sharpens with context. No character limit.
              </p>
              <Textarea
                className="min-h-24 border-0 border-b border-gray-200 bg-white rounded-none resize-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g., I copy info between Gmail, Notion, and ClickUp, and always forget to update one of them. I waste time digging through old threads to confirm next steps. It's manual, error-prone, and I can't delegate it because it only lives in my head."
                value={formData.painPoint}
                onChange={(e) => handleInputChange("painPoint", e.target.value)}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3 pt-4 mb-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) =>
                  handleInputChange("consent", checked as boolean)
                }
                className="h-4 w-4 mt-0.5"
              />
              <Label
                htmlFor="consent"
                className="leading-5 font-sans text-[14px] text-[#666] font-normal"
              >
                I know this isn't legal or medical advice — just clarity.
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-6 text-center">
              <Button
                type="submit"
                disabled={!isFormValid}
                className={`
                  rounded-lg group relative transition-all duration-300 ease-out hover:cursor-pointer
                  hover:scale-[1.02] active:scale-[0.98] py-12 
                  ${
                    isFormValid
                      ? "text-white bg-gray-900 cursor-pointer"
                      : "text-white bg-gray-900 cursor-not-allowed"
                  }
                `}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="">Break Down My Workflow</div>
                  <div className="">
                    Includes a free 20-minute call to walk through what's
                    slowing you down.
                  </div>
                </div>
              </Button>

              <p className="mt-4 mb-3 font-sans text-[14px] text-[#444] font-medium tracking-[0.005em] text-center">
                Your input becomes your Clarity Map. Nothing else.
              </p>

              <p className="mt-2 font-sans text-[12px] text-[#888] font-semibold tracking-[0.005em] text-center">
                We'll reply within 24 hours to schedule your review
              </p>
            </div>
          </form>

          {/* How It Works Section */}
          <div className="mt-16 mb-8 pt-12 border-t border-[#ddd]">
            <h3 className="text-center mb-10 uppercase font-sans text-[12px] text-[#666] tracking-[0.15em] font-normal [font-variant:small-caps]">
              How It Works
            </h3>

            <div className="space-y-8">
              <div className="text-center">
                <h4 className="font-sans text-[16px] text-[#444] font-light mb-2 [font-feature-settings:'tnum']">
                  ① Name the drag.
                </h4>
                <p className="font-sans text-[13px] text-[#666] font-light leading-[1.5] whitespace-nowrap">
                  You write down what's slowing you down. Be specific.
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-sans text-[16px] text-[#444] font-light mb-2 [font-feature-settings:'tnum']">
                  ② We map the system.
                </h4>
                <p className="font-sans text-[13px] text-[#666] font-light leading-[1.5] whitespace-nowrap">
                  Your tools, time leaks, and the steps no one owns.
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-sans text-[16px] text-[#444] font-light mb-2 [font-feature-settings:'tnum']">
                  ③ You see what to change.
                </h4>
                <p className="font-sans text-[13px] text-[#666] font-light leading-[1.5] whitespace-nowrap">
                  One call. No pitch. Just what to automate, delete, or
                  delegate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
