"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Scale, Target, Heart, Activity, TrendingDown, Zap } from "lucide-react";
import { useState } from "react";
import Navigation from "./Navigation";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";

export default function WeightManagement() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    { icon: Scale, text: "Weight loss of 10-20 lbs within the first three months" },
    { icon: Target, text: "Appetite and portion control" },
    { icon: TrendingDown, text: "Reduced food cravings" },
    { icon: Heart, text: "Lower diabetes and heart disease risk" },
    { icon: Activity, text: "Decreased joint pain" },
    { icon: Zap, text: "Improved confidence and self-image" }
  ];

  const programComponents = [
    "Customized Semaglutide dosing with gradual increases",
    "MIC B12 injections to enhance fat processing and energy",
    "Personalized diet and exercise counseling",
    "Mindset coaching for sustainable habit change"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              GLP-1 Weight Management Program
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Groundbreaking weight loss medications that are transforming the medical weight loss community
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
            >
              Start Your Weight Loss Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Comprehensive Weight Loss Solution
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Peak Life Performance offers a comprehensive GLP-1 weight loss program featuring
                customized Semaglutide injections combined with supportive therapies and coaching.
              </p>
              <div className="bg-background rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  How It Works
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our FDA-approved GLP-1 treatments help patients feel fuller longer, reducing food
                  intake and appetite while boosting metabolism. These groundbreaking medications are
                  transforming lives across the medical weight loss community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Program Components
              </h2>
              <div className="grid gap-6">
                {programComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-muted/30 p-6 rounded-lg"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground">{component}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-background p-6 rounded-xl shadow-lg"
                    >
                      <Icon className="h-10 w-10 text-accent mb-4" />
                      <p className="text-foreground">{benefit.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Eligibility Requirements
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Adults 18+ diagnosed as obese (BMI &gt;30) or overweight (BMI &gt;27) with
                weight-related health conditions qualify for our GLP-1 program.
              </p>
              <p className="text-muted-foreground">
                The treatment is not recommended for those with specific contraindications
                including certain medical histories. Our team will conduct a thorough evaluation
                during your consultation to ensure this program is right for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* hCG Information Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                hCG in Testosterone Replacement Therapy
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                For patients undergoing testosterone replacement therapy, we also offer hCG
                (human chorionic gonadotropin) as a complementary treatment.
              </p>
              <p className="text-muted-foreground">
                hCG plays an important role in maintaining testicular size and preserving
                fertility during TRT treatment, ensuring comprehensive care for our patients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact Peak Life Performance to begin your weight loss journey and improve
              your overall health.
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
            >
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

        <Footer />
      </div>
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
}
