import { z } from "zod";

export const serviceInterestOptions = [
  { value: "gollistic-healing", label: "Gollistic Healing" },
  { value: "life-coaching", label: "Life Coaching" },
  { value: "gurbani-teaching", label: "Gurbani Teaching" },
  { value: "general", label: "General Inquiry" },
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  serviceInterest: z.enum(
    serviceInterestOptions.map((option) => option.value) as [string, ...string[]],
    { message: "Please choose what you're reaching out about." },
  ),
  message: z.string().trim().min(10, "Please share a few details so I can help."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
