"use client"

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { useRouter } from "next/navigation";

interface UseContactFormOptions {
  onSuccess?: () => void;
  /**
   * If set, the user will be redirected immediately after a successful submit.
   * Useful for "thank you" destination conversions.
   */
  redirectTo?: string;
  /**
   * Fire a GA4 event on successful submit. You can mark this event as a conversion in GA4,
   * and optionally import it into Google Ads.
   */
  analyticsEvent?: string;
  analyticsParams?: Record<string, unknown>;
  /**
   * How long to show the inline "submitted" UI before resetting the form.
   * Ignored when redirectTo is set.
   */
  resetAfterMs?: number;
}

export function useContactForm(options: UseContactFormOptions = {}) {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const resetTimerRef = useRef<number | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      scheduleEvaluation: false,
      message: "",
    },
  });

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Fire analytics after we've confirmed the server accepted the submission.
      if (options.analyticsEvent && typeof window !== "undefined") {
        // gtag is injected in src/app/layout.tsx when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
        const w = window as unknown as {
          dataLayer?: any[];
          gtag?: (...args: any[]) => void;
        };

        w.dataLayer = w.dataLayer || [];
        w.gtag =
          w.gtag ||
          function gtag(...args: any[]) {
            w.dataLayer!.push(args);
          };

        w.gtag("event", options.analyticsEvent, options.analyticsParams ?? {});
      }

      if (options.redirectTo) {
        setSubmitted(true);
        form.reset();
        options.onSuccess?.();
        router.push(options.redirectTo);
        return;
      }

      setSubmitted(true);
      const resetAfterMs = options.resetAfterMs ?? 3000;
      resetTimerRef.current = window.setTimeout(() => {
        setSubmitted(false);
        form.reset();
        options.onSuccess?.();
      }, resetAfterMs);
    } catch (err) {
      setSubmitError('Failed to send message. Please try again or call us directly.');
      console.error('Form submission error:', err);
    }
  };

  return {
    form,
    submitted,
    submitError,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  };
}
