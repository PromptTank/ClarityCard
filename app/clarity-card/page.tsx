"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit form";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.message || errorMessage;
        } catch {
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      router.push("/confirmation");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Header />

      <main className="pt-20">
        <div className="mx-auto max-w-xl px-8 pt-12">
          <div className="mb-8 rounded-lg bg-white/80 p-8 shadow-sm">
            {/* Header Section */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                PromptTANK™
              </h1>
              <p className="mx-auto mb-3 max-w-lg text-xl font-medium leading-snug tracking-tight text-neutral-700">
                AI Clarity for Leaders
              </p>
              <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed tracking-tight text-neutral-600">
                Education | Strategy | Governance*
              </p>
              <p className="mx-auto max-w-lg border-t border-gray-200 pt-6 text-base font-medium leading-relaxed tracking-tight text-neutral-600">
                Frustrated by vague AI advice? Answer 7 questions for tailored
                clarity.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 pb-8">
              {/* Email */}
              <div className="mb-3">
                <Label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="h-12 w-full rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Role */}
              <div className="mb-3">
                <Label
                  htmlFor="role"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  Your Role / Title
                </Label>
                <Input
                  id="role"
                  className="h-12 w-full rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="e.g. CEO, Head of Ops, Founder, VP Strategy"
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  aria-invalid={!!errors.role}
                  aria-describedby={errors.role ? "role-error" : undefined}
                />
                {errors.role && (
                  <p id="role-error" className="mt-1 text-sm text-red-500">
                    {errors.role}
                  </p>
                )}
              </div>

              {/* Industry */}
              <div className="mb-3">
                <Label
                  htmlFor="industry"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  Industry
                </Label>
                <Input
                  id="industry"
                  className="h-12 w-full rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="e.g. B2B SaaS, Life Sciences, Legal, Nonprofit"
                  value={formData.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                  aria-invalid={!!errors.industry}
                  aria-describedby={
                    errors.industry ? "industry-error" : undefined
                  }
                />
                {errors.industry && (
                  <p id="industry-error" className="mt-1 text-sm text-red-500">
                    {errors.industry}
                  </p>
                )}
              </div>

              {/* Workflow */}
              <div className="mb-3">
                <Label
                  htmlFor="workflow"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  Where are things leaking time/money?
                </Label>
                <Input
                  id="workflow"
                  className="h-12 w-full rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="e.g. Repetitive proposals, scattered team input, content bottlenecks"
                  value={formData.workflow}
                  onChange={(e) => handleChange("workflow", e.target.value)}
                  aria-invalid={!!errors.workflow}
                  aria-describedby={
                    errors.workflow ? "workflow-error" : undefined
                  }
                />
                {errors.workflow && (
                  <p id="workflow-error" className="mt-1 text-sm text-red-500">
                    {errors.workflow}
                  </p>
                )}
              </div>

              {/* Dream Outcome */}
              <div className="mb-3">
                <Label
                  htmlFor="frequency"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  What is your dream outcome? What do you wish ran smoother?
                </Label>
                <Input
                  id="frequency"
                  className="h-12 w-full rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="e.g. Hiring funnel, reporting, leadership prep, client comms"
                  value={formData.frequency}
                  onChange={(e) => handleChange("frequency", e.target.value)}
                  aria-invalid={!!errors.frequency}
                  aria-describedby={
                    errors.frequency ? "frequency-error" : undefined
                  }
                />
                {errors.frequency && (
                  <p id="frequency-error" className="mt-1 text-sm text-red-500">
                    {errors.frequency}
                  </p>
                )}
              </div>

              {/* Tools */}
              <div className="mb-3">
                <Label
                  htmlFor="tools"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  Tools you already use (Optional)
                </Label>
                <Input
                  id="tools"
                  className="h-12 w-full rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="e.g. Slack, Notion, GDocs, Trello"
                  value={formData.tools}
                  onChange={(e) => handleChange("tools", e.target.value)}
                  aria-invalid={!!errors.tools}
                  aria-describedby={errors.tools ? "tools-error" : undefined}
                />
                {errors.tools && (
                  <p id="tools-error" className="mt-1 text-sm text-red-500">
                    {errors.tools}
                  </p>
                )}
              </div>

              {/* Pain Point */}
              <div className="mb-3">
                <Label
                  htmlFor="painPoint"
                  className="mb-2 block text-xs font-semibold text-neutral-700"
                >
                  What's your biggest friction right now?
                </Label>
                <p className="mb-2 text-sm italic text-neutral-600">
                  No character limit. Speak freely — the sharper the context,
                  the better.
                </p>
                <Textarea
                  id="painPoint"
                  className="min-h-24 w-full resize-none rounded-none border-0 border-b border-gray-200 bg-white text-sm text-neutral-700 focus:border-gray-400 focus:ring-0"
                  placeholder="What's frustrating you most right now?"
                  value={formData.painPoint}
                  onChange={(e) => handleChange("painPoint", e.target.value)}
                  aria-invalid={!!errors.painPoint}
                  aria-describedby={
                    errors.painPoint ? "painpoint-error" : undefined
                  }
                />
                {errors.painPoint && (
                  <p id="painpoint-error" className="mt-1 text-sm text-red-500">
                    {errors.painPoint}
                  </p>
                )}
              </div>

              {/* Consent */}
              <div className="mb-2 flex items-start space-x-3 pt-4">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    handleChange("consent", !!checked)
                  }
                  className="mt-1 h-4 w-4"
                  aria-invalid={!!errors.consent}
                  aria-describedby={
                    errors.consent ? "consent-error" : undefined
                  }
                />
                <Label htmlFor="consent" className="text-sm text-neutral-600">
                  I know this isn't legal or medical advice — just clarity.
                </Label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="mt-1 text-sm text-red-500">
                  {errors.consent}
                </p>
              )}

              {/* Submit */}
              <div className="pt-6 text-center">
                {submitError && (
                  <div
                    className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-600"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-auto w-full rounded-lg bg-gray-900 px-4 py-4 text-white transition-all duration-300 ease-out hover:bg-gray-800 hover:shadow-md disabled:opacity-70"
                  aria-busy={isSubmitting}
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="font-medium">
                      {isSubmitting
                        ? "Submitting..."
                        : "Break Down My Workflow"}
                    </span>
                    <span className="max-w-[200px] text-center text-xs text-gray-200">
                      Includes a free 20-minute call
                    </span>
                  </div>
                </Button>

                <p className="mt-4 mb-3 text-center text-sm font-medium tracking-wide text-neutral-700">
                  Your input becomes your Clarity Map. Nothing else.
                </p>
                <p className="mt-2 text-center text-xs font-semibold tracking-wide text-neutral-500">
                  We'll reply within 24 hours to schedule your review
                </p>
              </div>
            </form>
          </div>

          {/* How It Works */}
          <section className="mb-8 mt-8 rounded-lg bg-white/80 p-8 shadow-sm border-t border-gray-200 pt-12">
            <h3 className="mb-10 text-center font-normal uppercase tracking-[0.15em] text-neutral-600 [font-variant:small-caps] text-xs">
              How It Works
            </h3>

            <div className="space-y-8">
              <div className="text-center">
                <h4 className="mb-2 text-base font-light text-neutral-700 [font-feature-settings:'tnum']">
                  ① Name the drag.
                </h4>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  You write down what's slowing you down. Be specific.
                </p>
              </div>

              <div className="text-center">
                <h4 className="mb-2 text-base font-light text-neutral-700 [font-feature-settings:'tnum']">
                  ② We map the system.
                </h4>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  Your tools, time leaks, and the steps no one owns.
                </p>
              </div>

              <div className="text-center">
                <h4 className="mb-2 text-base font-light text-neutral-700 [font-feature-settings:'tnum']">
                  ③ You see what to change.
                </h4>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  One call. No pitch. Just what to automate, delete, or
                  delegate.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
