"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Battery,
  Brain,
  Dumbbell,
  Heart,
  Shield,
  Clock,
  Stethoscope,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Star,
  BadgeCheck,
  Calendar,
  Users
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";
import { LandingPageDisclaimer } from "./shared/ComplianceDisclaimer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const symptoms = [
  { icon: Battery, question: "Do you often feel fatigued, even after a full night's sleep?" },
  { icon: Brain, question: "Have you noticed changes in your mood, motivation, or mental clarity?" },
  { icon: Dumbbell, question: "Is it harder to build or maintain muscle, despite regular exercise?" },
  { icon: Heart, question: "Has your interest in intimacy decreased?" },
  { icon: Shield, question: "Do you feel like you've lost your edge or competitive drive?" },
];

const processSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "Discuss your symptoms and goals with our team. We'll answer your questions and explain the evaluation process."
  },
  {
    step: "2",
    title: "Comprehensive Lab Panel",
    description: "Blood work to evaluate your testosterone levels, metabolic markers, and overall health indicators."
  },
  {
    step: "3",
    title: "Physician Evaluation",
    description: "A licensed medical provider reviews your results and determines if TRT is appropriate for you."
  },
  {
    step: "4",
    title: "Personalized Treatment",
    description: "If you qualify, receive an individualized protocol with ongoing monitoring and support."
  }
];

const credentials = [
  {
    icon: Stethoscope,
    title: "Board-Certified Physicians",
    description: "Licensed medical doctors specializing in hormone optimization"
  },
  {
    icon: Shield,
    title: "FDA-Approved Medications",
    description: "Pharmaceutical-grade testosterone formulations"
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Monitoring",
    description: "Regular lab work and follow-ups to ensure safety"
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "Access to our medical team throughout your treatment"
  }
];

const faqs = [
  {
    question: "What is Testosterone Replacement Therapy (TRT)?",
    answer: "TRT is a medically supervised treatment designed for men with clinically diagnosed low testosterone (hypogonadism). It aims to restore testosterone levels to a healthy range through physician-prescribed protocols. Treatment is individualized based on lab results, medical history, and health goals."
  },
  {
    question: "How do I know if I have low testosterone?",
    answer: "Common symptoms may include fatigue, decreased energy, mood changes, difficulty building muscle, and reduced libido. However, these symptoms can have multiple causes. The only way to diagnose low testosterone is through blood testing ordered by a healthcare provider. During your consultation, we'll discuss your symptoms and order appropriate lab work."
  },
  {
    question: "Is TRT safe?",
    answer: "TRT is generally considered safe when prescribed and monitored by a qualified physician. Like all medical treatments, it carries potential risks including increased red blood cell count, acne, sleep apnea, and possible cardiovascular effects. Regular monitoring through blood tests is required. Our physicians will discuss all potential risks and benefits during your evaluation."
  },
  {
    question: "What results can I expect from TRT?",
    answer: "Individual results vary significantly. Some men report improvements in energy, mood, and physical performance, while others may see more modest changes. Results depend on many factors including your baseline testosterone levels, overall health, and adherence to treatment protocols. We cannot guarantee specific outcomes."
  },
  {
    question: "Does insurance cover TRT?",
    answer: "Insurance coverage varies by plan and individual circumstances. Some insurance plans cover TRT for men with documented hypogonadism, while others may not. We recommend checking with your insurance provider. We also offer transparent self-pay pricing for patients who prefer not to use insurance."
  },
  {
    question: "How long does treatment take to work?",
    answer: "Response times vary by individual. Some patients notice changes within weeks, while for others it may take several months. Your provider will monitor your progress through regular lab work and adjust treatment as needed."
  }
];

export default function TRTLandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCTAClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=70"
            alt="TRT Clinic Scottsdale - Testosterone Replacement Therapy Arizona"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
                <BadgeCheck className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Board-Certified Physicians</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-green-600 text-sm font-medium">FDA-Approved Medications</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
              Low Testosterone Treatment in{" "}
              <span className="text-accent">Scottsdale, AZ</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-xl font-medium">
              Feeling tired, low energy, or not like yourself? You may have Low T.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Get a comprehensive testosterone evaluation from experienced physicians.
              Personalized TRT protocols. Ongoing monitoring and support.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 mb-8 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Trusted by Arizona Men</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Scottsdale, AZ</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-accent/20"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 text-lg px-8 py-6 h-auto bg-background/80"
                asChild
              >
                <a href="tel:480-979-2194">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 480-979-2194
                </a>
              </Button>
            </div>

            {/* Urgency Message */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 mb-4">
              <Clock className="h-4 w-4 text-amber-600" />
              <span className="text-sm text-amber-700 font-medium">Same-week appointments available</span>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Results vary by individual. A consultation does not guarantee treatment eligibility.
              All treatments require physician evaluation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Common Signs of Low Testosterone in Men
              </h2>
              <p className="text-lg text-muted-foreground">
                Do any of these Low T symptoms sound familiar?
              </p>
            </div>

            <div className="space-y-4">
              {symptoms.map((symptom, index) => {
                const Icon = symptom.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-background p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
                  >
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-lg text-foreground">{symptom.question}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> These symptoms may have multiple causes. Only a
                  licensed healthcare provider can diagnose low testosterone through proper
                  evaluation and laboratory testing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is TRT Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  What is Testosterone Replacement Therapy?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Testosterone Replacement Therapy (TRT) is a medically supervised treatment
                  designed for men with clinically diagnosed low testosterone (hypogonadism).
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  When testosterone levels fall below the normal range, men may experience
                  symptoms that affect quality of life. TRT aims to restore testosterone to
                  healthy levels through physician-prescribed protocols.
                </p>
                <p className="text-muted-foreground">
                  Treatment is individualized based on your lab results, medical history,
                  and health goals. Not all patients qualify for TRT—eligibility is determined
                  through comprehensive medical evaluation.
                </p>
              </div>

              <div className="relative h-80 md:h-full min-h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=70"
                  alt="Medical Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How TRT Works at Our Scottsdale Clinic</h2>
              <p className="text-lg text-primary-foreground/80">
                A comprehensive approach to evaluating and treating low testosterone in Arizona
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-primary-foreground/70 mt-8 italic">
              Not all patients qualify for TRT. Treatment eligibility is determined by a
              licensed physician based on comprehensive medical evaluation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Our TRT Clinic in Scottsdale
              </h2>
              <p className="text-lg text-muted-foreground">
                Arizona&apos;s trusted testosterone replacement therapy provider
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted/30 rounded-lg p-6 border border-border hover:border-accent/50 transition-colors text-center"
                  >
                    <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-primary">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side Effects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Understanding Potential Side Effects
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Like all medical treatments, TRT carries potential risks. We believe in transparency.
            </p>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-lg text-primary mb-4">Potential side effects may include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Increased red blood cell count (polycythemia)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Acne or oily skin
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Sleep apnea (worsening of existing condition)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Breast enlargement
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Testicular changes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Decreased sperm production
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Mood changes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Fluid retention
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Regular monitoring through blood tests is required during treatment. Our physicians
                will discuss all potential risks and benefits during your evaluation.{" "}
                <Link href="/medical-disclaimer" className="text-accent hover:underline">
                  See full Medical Disclaimer
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                TRT FAQs - Common Questions About Testosterone Therapy
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted/30 rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your TRT Journey in Scottsdale Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Schedule a free consultation with our Arizona testosterone specialists.
              No obligation. No commitment required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 h-auto shadow-xl"
              >
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href="tel:480-979-2194">
                  <Phone className="mr-2 h-5 w-5" />
                  480-979-2194
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Scottsdale, AZ</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:PLP@peaklifeperformance.com" className="hover:text-accent">
                  PLP@peaklifeperformance.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Disclaimer Footer */}
      <LandingPageDisclaimer treatment="trt" />

      <Footer onCTAClick={handleCTAClick} />
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
        <div className="flex gap-2">
          <Button
            onClick={handleCTAClick}
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Free Consultation
          </Button>
          <Button
            variant="outline"
            className="h-12 px-4 border-2"
            asChild
          >
            <a href="tel:480-979-2194">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
