"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

interface UseContactFormOptions {
  onSuccess?: () => void;
}

export function useContactForm(options: UseContactFormOptions = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
        options.onSuccess?.();
      }, 3000);
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
