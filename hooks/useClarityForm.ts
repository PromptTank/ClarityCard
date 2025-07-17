"use client";

import { useState } from "react";
import { clarityFormSchema, ClarityFormData } from "@/lib/clarityFormSchema";
import { z, ZodError } from "zod";

export function useClarityForm() {
  const [formData, setFormData] = useState<ClarityFormData>({
    email: "",
    role: "",
    industry: "",
    workflow: "",
    frequency: "",
    tools: "",
    painPoint: "",
    consent: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ClarityFormData, string>>
  >({});

  const handleChange = <K extends keyof ClarityFormData>(
    field: K,
    value: ClarityFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    try {
      clarityFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors: typeof errors = {};
        err.errors.forEach((e) => {
          const key = e.path[0] as keyof ClarityFormData;
          fieldErrors[key] = e.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit =
    (onValid: (data: ClarityFormData) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) onValid(formData);
    };

  return { formData, errors, handleChange, handleSubmit };
}
