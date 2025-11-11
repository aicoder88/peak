import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setFormData({ name: "", email: "", phone: "", goals: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">What are your goals? *</Label>
                <Textarea
                  id="goals"
                  name="goals"
                  placeholder="Tell us about your fitness and performance goals..."
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  className="min-h-[100px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-accent hover:bg-accent/90 text-primary font-semibold text-lg"
              >
                Book Free Consultation
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
