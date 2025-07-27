"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useClarityForm } from "@/hooks/useClarityForm";

export default function ClarityCardPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { formData, errors, handleChange, handleSubmit } = useClarityForm();

  const onSubmit = async (data: typeof formData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to submit form';
        try {
          // Try to parse error as JSON
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.message || errorMessage;
        } catch (e) {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }
      
      // Redirect to confirmation page on success
      router.push('/confirmation');
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen relative pt-20">
        <div className="absolute inset-0" />
        <div className="relative z-10 max-w-xl mx-auto px-8 pt-12">
          <div className="bg-white/80 rounded-lg shadow-sm p-8 mb-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="mb-4 font-sans text-[42px] text-gray-900 tracking-[-0.025em] leading-[1.2] font-bold">
              PromptTANK™
            </h1>
            <p className="mb-3 mx-auto max-w-lg font-sans text-[22px] text-gray-700 tracking-[-0.01em] leading-[1.4] font-medium">
              AI Clarity for Leaders
            </p>
            <p className="mb-8 mx-auto max-w-lg font-sans text-[18px] text-gray-600 tracking-[-0.01em] leading-[1.5]">
              Education | Guidance | Teams
            </p>
            <p className="mx-auto max-w-lg font-sans text-[16px] text-gray-600 tracking-[-0.01em] leading-[1.5] border-t border-gray-200 pt-6 font-medium">
              Frustrated by vague AI advice? Answer 7 questions and get personalized clarity on what's slowing you down in 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 pb-8">
            {/** Email **/}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                Email
              </Label>
              <Input
                type="email"
                className="h-12 w-full border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/** Role **/}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                Your Role / Title
              </Label>
              <Input
                className="h-12 w-full border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. CEO, Head of Ops, Founder, VP Strategy"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
              />
              {errors.role && (
                <p className="mt-1 text-red-500 text-sm">{errors.role}</p>
              )}
            </div>

            {/** Industry **/}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                Industry
              </Label>
              <Input
                className="h-12 w-full border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="e.g. B2B SaaS, Life Sciences, Legal, Nonprofit"
                value={formData.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
              />
              {errors.industry && (
                <p className="mt-1 text-red-500 text-sm">{errors.industry}</p>
              )}
            </div>

            {/* Workflow Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                Where are things leaking time/money?
              </Label>
              <Input
                className="h-12 w-full border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] text-[#3a3a3a]"
                placeholder="e.g. Repetitive proposals, scattered team input, content bottlenecks"
                value={formData.workflow}
                onChange={(e) => handleChange("workflow", e.target.value)}
              />
              {errors.workflow && (
                <p className="mt-1 text-red-500 text-sm">{errors.workflow}</p>
              )}
            </div>

            {/* Frequency Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                What is your dream outcome? What do you wish ran smoother?
              </Label>
              <Input
                className="h-12 w-full border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] text-[#3a3a3a]"
                placeholder="e.g. Hiring funnel, reporting, leadership prep, client comms"
                value={formData.frequency}
                onChange={(e) => handleChange("frequency", e.target.value)}
              />
              {errors.frequency && (
                <p className="mt-1 text-red-500 text-sm">{errors.frequency}</p>
              )}
            </div>

            {/* Tools Field */}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                Tools you already use (Optional)
              </Label>
              <Input
                className="h-12 w-full border-0 border-b border-gray-200 bg-white rounded-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] text-[#3a3a3a]"
                placeholder="e.g. Slack, Notion, GDocs, Trello"
                value={formData.tools}
                onChange={(e) => handleChange("tools", e.target.value)}
              />
              {errors.tools && (
                <p className="mt-1 text-red-500 text-sm">{errors.tools}</p>
              )}
            </div>

            {/** Pain Point **/}
            <div className="mb-3">
              <Label className="block mb-2 font-sans text-[12px] text-[#444] font-semibold">
                What's your biggest friction right now?
              </Label>
              <p className="mb-2 font-sans text-[13px] text-[#666] italic">
                No character limit. Speak freely — the sharper the context, the better.
              </p>
              <Textarea
                className="min-h-24 w-full border-0 border-b border-gray-200 bg-white rounded-none resize-none focus:border-gray-400 focus:ring-0 font-sans text-[14px] font-normal text-[#3a3a3a]"
                placeholder="What's frustrating you most right now?"
                value={formData.painPoint}
                onChange={(e) => handleChange("painPoint", e.target.value)}
              />
              {errors.painPoint && (
                <p className="mt-1 text-red-500 text-sm">{errors.painPoint}</p>
              )}
            </div>

            {/** Consent **/}
            <div className="flex items-start space-x-3 pt-4 mb-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => {
                  // Convert Checkbox's checked state to boolean
                  handleChange("consent", !!checked);
                }}
                className="mt-1 h-4 w-4"
              />
              <Label
                htmlFor="consent"
                className="font-sans text-[14px] text-[#666]"
              >
                I know this isn't legal or medical advice — just clarity.
              </Label>
            </div>
            {errors.consent && (
              <p className="mt-1 text-red-500 text-sm">{errors.consent}</p>
            )}

            {/* Submit Button */}
            <div className="pt-6 text-center">
              {submitError && (
                <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                  {submitError}
                </div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-4 w-full transition-all duration-300 ease-out hover:shadow-md"
                style={{ height: "auto" }}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-medium">
                    {isSubmitting ? 'Submitting...' : 'Break Down My Workflow'}
                  </span>
                  <span className="text-xs text-center text-gray-200 max-w-[200px]">
                    Includes a free 20-minute call
                  </span>
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

          </div>
          
          {/* How It Works Section */}
          <div className="mt-8 mb-8 pt-12 border-t border-[#ddd] bg-white/80 rounded-lg shadow-sm p-8">
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
