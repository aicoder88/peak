"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Scale, Target, Heart, Activity, TrendingDown, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
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

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/weight-hero.png"
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
              Groundbreaking GLP-1 protocols engineered to transform your physiology and unlock peak performance.
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
            src="/science-abstract.png"
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
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Scientific Weight Management
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Peak Life Performance offers a comprehensive GLP-1 weight loss program featuring
                  customized Semaglutide injections combined with supportive therapies and coaching.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our FDA-approved GLP-1 treatments help patients feel fuller longer, reducing food
                  intake and appetite while boosting metabolism. These groundbreaking medications are
                  transforming lives across the medical weight loss community.
                </p>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Activity className="h-6 w-6 text-accent" />
                  The Mechanism
                </h3>
                <ul className="space-y-4">
                  {[
                    "Targets brain receptors regulating appetite",
                    "Slows gastric emptying for prolonged satiety",
                    "Improves insulin sensitivity",
                    "Promotes metabolic efficiency"
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

      {/* Program Components */}
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
                    className="flex items-start gap-4 bg-background p-8 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all hover:border-accent/50 group"
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
                Expected Outcomes
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
                      className="bg-muted/20 p-8 rounded-xl border border-border/50 hover:bg-muted/40 transition-all group"
                    >
                      <Icon className="h-10 w-10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-lg font-medium text-foreground">{benefit.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/science-abstract.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
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

      {/* hCG Information Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  hCG Optimization
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  For patients undergoing testosterone replacement therapy, we also offer hCG
                  (human chorionic gonadotropin) as a complementary treatment.
                </p>
                <p className="text-muted-foreground">
                  hCG plays an important role in maintaining testicular size and preserving
                  fertility during TRT treatment, ensuring comprehensive care for our patients.
                </p>
              </div>
              <div className="flex-1 bg-muted/30 p-8 rounded-2xl border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Synergistic Effect</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimizing your hormonal profile while managing weight creates a powerful
                  synergy for body composition changes.
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
              Contact Peak Life Performance to begin your weight loss journey and improve
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

      <Footer />
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
}
