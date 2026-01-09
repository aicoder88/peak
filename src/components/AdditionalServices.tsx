"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Syringe,
  Heart,
  Activity,
  Moon,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Brain
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdditionalServices() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const services = [
    {
      icon: Sparkles,
      title: "Sermorelin (Peptide Therapy)",
      subtitle: "Performance & Recovery",
      description: "Peptide-based growth hormone optimization designed to support deep sleep, recovery, lean muscle maintenance, fat metabolism, and overall vitality—without suppressing natural hormone production."
    },
    {
      icon: Syringe,
      title: "Vitamin B12 Injections",
      subtitle: "Energy & Metabolism",
      description: "Targeted support for energy, metabolism, neurologic function, and red blood cell production. Commonly used to combat fatigue, support weight loss programs, and enhance overall performance."
    },
    {
      icon: Heart,
      title: "hCG for Fertility Preservation",
      subtitle: "Testicular Function Support",
      description: "Human chorionic gonadotropin (hCG) is used to support testicular function and sperm production, often alongside or independent of testosterone therapy, for men concerned about fertility preservation or family planning."
    },
    {
      icon: Zap,
      title: "Sexual Function Medications",
      subtitle: "Performance Enhancement",
      description: "Personalized treatment options for erectile function, libido, and sexual performance, tailored to each patient's physiology—available with or without testosterone therapy."
    },
    {
      icon: Activity,
      title: "Therapeutic Massage",
      subtitle: "Thursdays",
      description: "In-clinic massage therapy available weekly to support muscle recovery, stress reduction, circulation, and nervous system balance as part of a comprehensive performance and wellness plan."
    },
    {
      icon: Moon,
      title: "Sleep Study & Analysis",
      subtitle: "Rest Optimization",
      description: "Advanced sleep evaluation to identify issues such as sleep apnea, poor sleep quality, or disrupted sleep architecture—because optimized hormones, metabolism, and recovery all start with quality sleep."
    }
  ];

  const sermorelinBenefits = [
    {
      title: "Supports Natural Growth Hormone Production",
      description: "Sermorelin has been shown to increase endogenous growth hormone secretion and IGF-1 levels, supporting metabolic health and cellular repair."
    },
    {
      title: "Improved Sleep Quality",
      description: "Growth hormone is released primarily during deep (slow-wave) sleep, and optimizing GH secretion may support more restorative sleep patterns."
    },
    {
      title: "Enhanced Energy and Vitality",
      description: "Growth hormone plays a role in energy metabolism and tissue regeneration, and increased physiologic GH output may contribute to improved daytime energy levels."
    },
    {
      title: "Body Composition Support",
      description: "Growth hormone promotes lipolysis (fat breakdown) and helps preserve lean muscle mass, which may support healthier body composition when combined with proper nutrition and exercise."
    },
    {
      title: "Recovery and Tissue Repair",
      description: "Growth hormone is involved in protein synthesis, tissue repair, and cellular regeneration, and stimulating natural GH release may aid recovery from physical training and exertion."
    },
    {
      title: "Skin, Collagen, and Connective Tissue Health",
      description: "Growth hormone influences collagen synthesis and connective tissue maintenance, which may contribute to improved skin elasticity."
    }
  ];

  const sermorelinFaqs = [
    {
      question: "Who Is Sermorelin Therapy For?",
      answer: "Sermorelin may be beneficial for adults experiencing symptoms associated with declining growth hormone levels, such as low energy, poor sleep quality, difficulty building muscle, increased body fat, or slower recovery. It is commonly used by individuals focused on performance optimization, healthy aging, and overall wellness."
    },
    {
      question: "How Is Sermorelin Administered?",
      answer: "Sermorelin is typically administered as a small subcutaneous injection, often taken in the evening to align with the body's natural growth hormone release during sleep. Our providers will guide you through proper use and dosing."
    },
    {
      question: "How Long Does It Take to See Results?",
      answer: "Some individuals notice improvements in sleep quality and energy within 2–4 weeks. More visible changes in body composition, recovery, and overall vitality may develop over 8–12 weeks with consistent therapy. Results vary based on lifestyle, age, and individual physiology."
    },
    {
      question: "Is Sermorelin Safe?",
      answer: "Sermorelin has a favorable safety profile when prescribed and monitored by a qualified healthcare provider. Because it stimulates your body's own hormone production rather than replacing hormones directly, it is generally considered lower risk than synthetic growth hormone therapies. Mild side effects may include temporary redness at the injection site or mild headaches."
    },
    {
      question: "How Is Sermorelin Different From HGH?",
      answer: "Unlike synthetic HGH, sermorelin encourages natural, pulsatile growth hormone release from the pituitary gland. This helps preserve normal hormonal feedback mechanisms and reduces the risk of hormone suppression."
    },
    {
      question: "Will Sermorelin Help With Weight Loss?",
      answer: "Sermorelin supports fat metabolism and lean muscle preservation, which may contribute to improved body composition. It works best when combined with proper nutrition, resistance training, and healthy sleep habits."
    },
    {
      question: "Do I Need Lab Testing Before Starting?",
      answer: "Yes. Proper lab testing helps determine whether sermorelin is appropriate for you and allows us to personalize your treatment plan. Ongoing monitoring ensures safety and optimal results."
    },
    {
      question: "Is Sermorelin FDA Approved?",
      answer: "Sermorelin was previously FDA-approved for diagnostic use in children and is currently prescribed through compounding pharmacies for off-label adult wellness and performance optimization under medical supervision."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.webp"
            alt="Additional Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Additional <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A complete approach to performance, recovery, and long-term health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              At Peak Life Performance, optimization means more than hormones alone. Our Additional Services support recovery, energy, fertility, sexual function, and sleep—key drivers of health, confidence, and long-term success. Every service is designed to help men perform at their peak in life, business, and relationships.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background p-8 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all hover:border-accent/50 group"
                  >
                    <div className="bg-accent/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">{service.title}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{service.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sermorelin Deep Dive Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Peptide Therapy — <span className="text-accent">Sermorelin</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Growth hormone releasing hormone (GHRH) peptide therapy for performance optimization
              </p>
            </motion.div>

            {/* What Is Sermorelin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12 border border-border/50"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">What Is Sermorelin?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sermorelin is a growth hormone releasing hormone (GHRH) peptide that gently stimulates your pituitary gland to produce more of your body's own natural growth hormone (GH). Rather than supplying synthetic hormones, sermorelin works with your physiology, encouraging pulsatile, healthy GH release that supports metabolism, recovery, vitality, and healthy aging.
              </p>
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  How It Works
                </h4>
                <p className="text-muted-foreground">
                  Sermorelin mimics the first 29 amino acids of your body's own GH-releasing hormone. It binds to receptors in the pituitary gland to trigger increased secretion of growth hormone in rhythmic bursts—especially during deep sleep—and preserves your body's natural feedback systems without suppressing pituitary function.
                </p>
              </div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                Potential Benefits of Sermorelin Therapy
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sermorelinBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted/20 p-6 rounded-xl border border-border/50"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <h4 className="font-bold text-primary">{benefit.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose PLP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Peak Life Performance?</h3>
              <p className="text-lg mb-6 text-white/90">
                At Peak Life Performance, we take a personalized, evidence-based approach to peptide therapy. Your program is guided by:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Comprehensive lab analysis",
                  "Individualized dosing protocols",
                  "Ongoing provider oversight",
                  "Performance, recovery, and longevity optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/80 italic">
                We don't believe in one-size-fits-all treatment—your biology, goals, and lifestyle matter.
              </p>
            </motion.div>

            {/* Sermorelin FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                Sermorelin FAQ
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {sermorelinFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`sermorelin-${index}`}
                    className="bg-muted/30 rounded-xl px-6 border border-border/50 hover:border-accent/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold text-primary pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 text-lg leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground italic">
              Peptide therapy is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. All therapies are provided under medical supervision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/science-abstract.webp')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Schedule a free consultation to discuss which additional services are right for your goals.
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-8 h-auto shadow-xl shadow-accent/20"
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
