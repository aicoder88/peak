"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const { form, submitted, submitError, onSubmit, isSubmitting } = useContactForm({
    onSuccess: () => onOpenChange(false),
    redirectTo: "/thank-you",
    analyticsEvent: "generate_lead",
    analyticsParams: { form: "consultation_dialog" },
  });

  const { register, formState: { errors } } = form;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                Start Your Transformation
              </DialogTitle>
              <DialogDescription className="text-base">
                Book your free consultation and take the first step towards peak performance.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  className={`h-12 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
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
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  {...register("location")}
                  className={`h-12 ${errors.location ? 'border-red-500' : ''}`}
                />
                {errors.location && (
                  <p className="text-sm text-red-500">{errors.location.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    id="scheduleEvaluation"
                    type="checkbox"
                    {...register("scheduleEvaluation")}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">Schedule an Evaluation</span>
                </label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your fitness and performance goals..."
                  {...register("message")}
                  className={`min-h-[100px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm" role="alert">
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
          </>
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
      </DialogContent>
    </Dialog>
  );
}
