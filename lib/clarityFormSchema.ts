import { z } from "zod";

export const clarityFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  role: z.string().min(1, { message: "Required" }),
  industry: z.string().min(1, { message: "Required" }),
  workflow: z.string().min(1, { message: "Required" }),
  frequency: z.string().min(1, { message: "Required" }),
  tools: z.string().min(1, { message: "Required" }),
  painPoint: z.string().min(1, { message: "Required" }),
  consent: z.boolean().refine(
    (val) => val === true,
    { message: "You must accept consent" }
  ),
});

export type ClarityFormData = z.infer<typeof clarityFormSchema>;
