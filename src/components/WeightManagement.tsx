"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Scale, Target, Heart, Activity, TrendingDown, Zap, Beaker, Pill, Brain } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";
import { LandingPageDisclaimer } from "./shared/ComplianceDisclaimer";

export default function WeightManagement() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    { icon: Scale, text: "May support your weight management goals*" },
    { icon: Target, text: "Appetite and portion control support" },
    { icon: TrendingDown, text: "Many patients report reduced food cravings" },
    { icon: Heart, text: "Comprehensive medical monitoring" },
    { icon: Activity, text: "May help improve physical comfort*" },
    { icon: Zap, text: "Personalized treatment approach" }
  ];

  const programComponents = [
    "Customized GLP-1 dosing with gradual increases",
    "MIC B12 injections to enhance fat processing and energy",
    "Personalized diet and exercise counseling",
    "Mindset coaching for sustainable habit change"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/weight-hero.webp"
            alt="Weight Management Science"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Advanced <span className="text-accent">Metabolic</span><br />
              Optimization
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Groundbreaking dual-incretin protocols engineered to transform your physiology and unlock peak performance.
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-accent/20"
            >
              Start Your Transformation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Image
            src="/science-abstract.webp"
            alt="Science Abstract"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Scientific Weight Management
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Peak Life Performance offers a comprehensive weight management program featuring our tirzepatide (GLP-1)/Glycine/B12 formula combined with supportive therapies and coaching.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our dual-incretin therapy may help patients feel fuller longer, supporting reduced food intake and appetite regulation.
                </p>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-xs text-blue-800">
                    <strong>Compounding Disclosure:</strong> Our tirzepatide formulations may be prepared by licensed
                    compounding pharmacies. Compounded medications are not FDA-approved finished drug products.
                    <a href="/medical-disclaimer" className="text-accent ml-1 hover:underline">Learn more</a>.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Activity className="h-6 w-6 text-accent" />
                  Core Mechanism: Tirzepatide
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tirzepatide works through two hormone pathways simultaneously:
                </p>
                <ul className="space-y-4">
                  {[
                    "Dual GLP-1 + GIP receptor activation",
                    "Slows gastric emptying → you feel full longer",
                    "Reduces appetite signaling in the brain",
                    "Enhances insulin sensitivity",
                    "Improves fat metabolism and nutrient partitioning"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Mechanism Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                How Our Formula Works
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Our tirzepatide/Glycine/B12 formula combines three powerful components for optimal results
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* GLP-1 + GIP */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background p-8 rounded-xl border border-border/50 shadow-sm"
                >
                  <div className="bg-accent/10 p-4 rounded-lg w-fit mb-6">
                    <Beaker className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Dual-Incretin Therapy</h3>
                  <p className="text-muted-foreground mb-4">
                    Tirzepatide activates both GLP-1 and GIP receptors simultaneously, which may support weight management goals.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Lower calorie intake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Improved blood sugar control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Reduced cravings</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Glycine */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-background p-8 rounded-xl border border-border/50 shadow-sm"
                >
                  <div className="bg-accent/10 p-4 rounded-lg w-fit mb-6">
                    <Brain className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Why Glycine?</h3>
                  <p className="text-muted-foreground mb-4">
                    Glycine is not just a filler—it has supportive metabolic and neurologic roles that enhance treatment tolerability.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Supports glucose metabolism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>May reduce nausea and GI irritation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Supports sleep quality and recovery</span>
                    </li>
                  </ul>
                </motion.div>

                {/* B12 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-background p-8 rounded-xl border border-border/50 shadow-sm"
                >
                  <div className="bg-accent/10 p-4 rounded-lg w-fit mb-6">
                    <Pill className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Why Vitamin B12?</h3>
                  <p className="text-muted-foreground mb-4">
                    B12 is essential for energy production and nerve function, especially important during weight loss.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Required for red blood cell production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Prevents fatigue during caloric restriction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Supports energy and adherence</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Protocol Components
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {programComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-muted/20 p-8 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all hover:border-accent/50 group"
                  >
                    <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-lg font-medium text-foreground pt-2">{component}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Potential Benefits*
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
                      className="bg-background p-8 rounded-xl border border-border/50 hover:bg-muted/20 transition-all group"
                    >
                      <Icon className="h-10 w-10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-lg font-medium text-foreground">{benefit.text}</p>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8 italic">
                *Individual results vary. Benefits are not guaranteed and depend on adherence to treatment,
                diet, exercise, and individual factors.{" "}
                <a href="/medical-disclaimer" className="text-accent hover:underline">
                  See Medical Disclaimer
                </a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/science-abstract.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Clinical Eligibility
              </h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
                <p className="text-xl mb-6 leading-relaxed">
                  Adults 18+ diagnosed as obese (BMI &gt;30) or overweight (BMI &gt;27) with
                  weight-related health conditions qualify for our GLP-1 program.
                </p>
                <p className="text-lg text-white/80">
                  The treatment is not recommended for those with specific contraindications
                  including certain medical histories. Our team will conduct a thorough evaluation
                  during your consultation to ensure this program is right for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Contact Peak Life Performance to begin your weight management journey and improve
              your overall health.
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-8 h-auto text-xl shadow-xl shadow-accent/20"
            >
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <LandingPageDisclaimer treatment="glp1" />

      <Footer />
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
}
