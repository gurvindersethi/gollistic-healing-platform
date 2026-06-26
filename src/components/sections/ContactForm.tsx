"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contact } from "@/content/shared/site";
import {
  contactFormSchema,
  serviceInterestOptions,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function buildMailto(values: ContactFormValues) {
  const serviceLabel =
    serviceInterestOptions.find((option) => option.value === values.serviceInterest)?.label ??
    "General Inquiry";

  const subject = `${serviceLabel} inquiry from ${values.name}`;
  const bodyLines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    `Interested in: ${serviceLabel}`,
    "",
    values.message,
  ].filter((line): line is string => line !== null);

  const params = new URLSearchParams({ subject, body: bodyLines.join("\n") });
  return `mailto:${contact.email}?${params.toString()}`;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", serviceInterest: "general", message: "" },
  });

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const messageId = useId();

  const onSubmit = (values: ContactFormValues) => {
    window.location.href = buildMailto(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor={nameId} className="font-bold text-ink">
          Name
        </label>
        <input
          id={nameId}
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className={cn(
            "rounded-lg border border-border bg-surface px-4 py-3 text-ink",
            errors.name && "border-red-600",
          )}
          {...register("name")}
        />
        {errors.name && (
          <p id={`${nameId}-error`} className="text-sm text-red-700">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className="font-bold text-ink">
          Email
        </label>
        <input
          id={emailId}
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          className={cn(
            "rounded-lg border border-border bg-surface px-4 py-3 text-ink",
            errors.email && "border-red-600",
          )}
          {...register("email")}
        />
        {errors.email && (
          <p id={`${emailId}-error`} className="text-sm text-red-700">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={phoneId} className="font-bold text-ink">
          Phone <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id={phoneId}
          type="tel"
          autoComplete="tel"
          className="rounded-lg border border-border bg-surface px-4 py-3 text-ink"
          {...register("phone")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={serviceId} className="font-bold text-ink">
          What are you reaching out about?
        </label>
        <select
          id={serviceId}
          aria-invalid={errors.serviceInterest ? "true" : "false"}
          aria-describedby={errors.serviceInterest ? `${serviceId}-error` : undefined}
          className={cn(
            "rounded-lg border border-border bg-surface px-4 py-3 text-ink",
            errors.serviceInterest && "border-red-600",
          )}
          {...register("serviceInterest")}
        >
          {serviceInterestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.serviceInterest && (
          <p id={`${serviceId}-error`} className="text-sm text-red-700">
            {errors.serviceInterest.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="font-bold text-ink">
          Message
        </label>
        <textarea
          id={messageId}
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className={cn(
            "rounded-lg border border-border bg-surface px-4 py-3 text-ink",
            errors.message && "border-red-600",
          )}
          {...register("message")}
        />
        {errors.message && (
          <p id={`${messageId}-error`} className="text-sm text-red-700">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Opening your email…" : "Send Message"}
      </Button>
      <p className="text-sm text-ink-soft">
        This opens your email app with your message ready to send to {contact.email}.
      </p>
    </form>
  );
}
