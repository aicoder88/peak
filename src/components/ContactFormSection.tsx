'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactFormSection() {
  const { form, submitted, submitError, onSubmit, isSubmitting } = useContactForm({
    redirectTo: "/thank-you",
    analyticsEvent: "generate_lead",
    analyticsParams: { form: "contact_form_section" },
  });
  const { register, formState: { errors } } = form;

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-b from-background to-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Start Your Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your free consultation and take the first step towards peak performance. Our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          {!submitted ? (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="section-name">Full Name *</Label>
                  <Input
                    id="section-name"
                    placeholder="John Doe"
                    {...register("name")}
                    className={`h-12 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="section-email">Email Address *</Label>
                  <Input
                    id="section-email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="section-phone">Phone Number</Label>
                  <Input
                    id="section-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    className={`h-12 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="section-location">Location *</Label>
                  <Input
                    id="section-location"
                    placeholder="City, State"
                    {...register("location")}
                    className={`h-12 ${errors.location ? 'border-red-500' : ''}`}
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500">{errors.location.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    id="section-scheduleEvaluation"
                    type="checkbox"
                    {...register("scheduleEvaluation")}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">Schedule an Evaluation</span>
                </label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="section-message">Message</Label>
                <Textarea
                  id="section-message"
                  placeholder="Tell us about your fitness and performance goals..."
                  {...register("message")}
                  className={`min-h-[120px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm" role="alert">
                  {submitError}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to receive communications from Peak Life Performance.
                No spam, unsubscribe anytime.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6"
              >
                <CheckCircle2 className="h-10 w-10 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                We'll be in touch within 24 hours to schedule your free consultation.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
