"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Activity,
  Utensils,
  Heart,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Syringe,
  Clock,
  Users,
  Star,
  BadgeCheck,
  Calendar,
  Shield,
  Pill
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

const howItWorks = [
  {
    icon: Activity,
    title: "Appetite Regulation",
    description: "GLP-1 medications help regulate appetite signals, which may support reduced caloric intake."
  },
  {
    icon: Utensils,
    title: "Satiety Support",
    description: "May help you feel satisfied with smaller portions by slowing gastric emptying."
  },
  {
    icon: Heart,
    title: "Metabolic Support",
    description: "Works alongside healthy diet and exercise to support your weight management goals."
  },
  {
    icon: Syringe,
    title: "Weekly Administration",
    description: "Convenient once-weekly injection administered at home or in our office."
  }
];

const programComponents = [
  "Initial medical evaluation and comprehensive lab work",
  "Customized medication dosing with gradual increases",
  "Regular progress monitoring and follow-up appointments",
  "Nutritional guidance and lifestyle counseling",
  "Ongoing physician oversight and support"
];

const eligibilityCriteria = [
  "BMI of 30 or higher (obesity)",
  "BMI of 27 or higher with weight-related health conditions",
  "Have not achieved goals through diet and exercise alone",
  "Committed to lifestyle modifications alongside treatment"
];

const sideEffects = {
  common: [
    "Nausea (especially when starting or increasing dose)",
    "Digestive discomfort",
    "Decreased appetite",
    "Fatigue",
    "Injection site reactions"
  ],
  serious: [
    "Pancreatitis (inflammation of the pancreas)",
    "Gallbladder problems",
    "Kidney issues",
    "Serious allergic reactions"
  ]
};

const contraindications = [
  "Personal or family history of medullary thyroid carcinoma (MTC)",
  "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
  "History of pancreatitis",
  "Severe gastrointestinal disease",
  "Pregnancy or planning to become pregnant"
];

const faqs = [
  {
    question: "What are GLP-1 medications?",
    answer: "GLP-1 receptor agonists (such as tirzepatide and semaglutide) are a class of medications that mimic hormones involved in appetite regulation and blood sugar control. When combined with diet and exercise, they may support weight management goals. These medications require a prescription and medical evaluation."
  },
  {
    question: "How much weight can I expect to lose?",
    answer: "Individual results vary significantly. Weight loss outcomes depend on many factors including adherence to medication and dosing schedules, diet and exercise, starting weight, metabolism, and individual physiology. We cannot guarantee specific weight loss amounts. Your provider will discuss realistic expectations during your consultation."
  },
  {
    question: "Are these medications FDA-approved?",
    answer: "Yes, we use FDA-approved GLP-1 medications including Wegovy, Zepbound, and Mounjaro for weight management in eligible patients. Your provider will discuss medication options during your consultation."
  },
  {
    question: "What are the potential side effects?",
    answer: "Common side effects include nausea (especially when starting), digestive discomfort, decreased appetite, and injection site reactions. Serious but rare side effects may include pancreatitis, gallbladder problems, and kidney issues. GLP-1 medications also carry a boxed warning regarding thyroid C-cell tumors observed in animal studies. Our providers will discuss all risks during your evaluation."
  },
  {
    question: "Who is NOT a candidate for GLP-1 therapy?",
    answer: "GLP-1 medications are contraindicated in patients with personal or family history of medullary thyroid carcinoma, Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), or history of pancreatitis. They may not be appropriate for those with severe GI disease, diabetic retinopathy, or those who are pregnant. A thorough medical evaluation is required to determine eligibility."
  },
  {
    question: "How long do I need to take the medication?",
    answer: "Treatment duration varies by individual. GLP-1 medications are typically used as part of a long-term weight management strategy. Stopping medication may result in weight regain. Your provider will work with you to develop a sustainable plan that aligns with your goals."
  },
  {
    question: "Does insurance cover GLP-1 medications?",
    answer: "Insurance coverage varies significantly by plan and individual circumstances. Many plans have specific criteria for coverage. We offer transparent self-pay pricing and can provide documentation if you wish to submit to your insurance for potential reimbursement."
  }
];

export default function WeightLossLandingPage() {
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
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70"
            alt="Medical Weight Loss Scottsdale - GLP-1 Semaglutide Tirzepatide Arizona"
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
              Medical Weight Loss in{" "}
              <span className="text-accent">Scottsdale, AZ</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-xl font-medium">
              Semaglutide & Tirzepatide (Wegovy, Zepbound, Mounjaro)
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Physician-supervised GLP-1 weight loss program. Comprehensive evaluation.
              Personalized treatment plans. Ongoing support.
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
                <Pill className="h-4 w-4" />
                <span>Wegovy, Zepbound, Mounjaro</span>
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
              Individual results vary. Weight loss depends on adherence to treatment, diet, exercise,
              and individual factors. Consultation required for eligibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is GLP-1 Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Understanding GLP-1 Weight Loss Therapy
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  GLP-1 receptor agonists are a class of medications that work by mimicking
                  hormones involved in appetite regulation and blood sugar control.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  When combined with diet and exercise, these medications may support weight
                  management goals by helping regulate appetite and promoting feelings of fullness.
                </p>
                <p className="text-muted-foreground">
                  Our comprehensive program includes medical evaluation, personalized medication
                  protocols, and ongoing support to help you work toward your goals.
                </p>
              </div>

              {/* Compounding Disclosure - commented out, using FDA-approved medications
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Medication Options</h3>
                  <p className="text-sm text-blue-700 mb-4">
                    We offer both FDA-approved brand-name medications (when available) and
                    tirzepatide formulations from licensed compounding pharmacies.
                  </p>
                  <div className="bg-blue-100 rounded p-4">
                    <p className="text-xs text-blue-800">
                      <strong>Compounding Disclosure:</strong> Compounded medications are prepared
                      by licensed compounding pharmacies pursuant to a prescription. Compounded
                      medications are not FDA-approved finished drug products, though they contain
                      active pharmaceutical ingredients.
                    </p>
                  </div>
                </div>
              </div>
              */}

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-primary mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Comprehensive medical evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Personalized dosing protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Regular monitoring and follow-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Lifestyle and nutrition guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
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
                How Semaglutide & Tirzepatide Work for Weight Loss
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the science behind GLP-1 medications like Wegovy, Zepbound, and Mounjaro
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-lg p-6 border border-border text-center"
                  >
                    <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20">
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
                Our Scottsdale Weight Loss Program
              </h2>
              <p className="text-lg text-muted-foreground">
                More than just medication—a complete medical weight management approach
              </p>
            </div>

            <div className="space-y-4">
              {programComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-muted/30 p-6 rounded-lg border border-border"
                >
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-lg text-foreground">{component}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Am I a Candidate for Medical Weight Loss?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                A medical evaluation at our Scottsdale clinic determines eligibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="font-bold text-xl mb-6">You may be a candidate if you:</h3>
                <ul className="space-y-4">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-8 border border-red-400/30">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-300" />
                  Contraindications
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  GLP-1 medications are NOT appropriate for individuals with:
                </p>
                <ul className="space-y-3 text-sm">
                  {contraindications.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-primary-foreground/90">
                      <span className="text-red-300">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-primary-foreground/70 mt-8 italic">
              Not all patients qualify for GLP-1 therapy. A comprehensive medical evaluation
              is required to determine if this treatment is appropriate for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Potential Benefits Section */}
      <section className="py-20">
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
                Potential Benefits*
              </h2>
              <p className="text-lg text-muted-foreground">
                When combined with diet and exercise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <Scale className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-primary mb-2">Weight Management Support</h3>
                <p className="text-muted-foreground">
                  May support your weight management goals when combined with lifestyle changes.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <Utensils className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-primary mb-2">Appetite Regulation</h3>
                <p className="text-muted-foreground">
                  Many patients report reduced appetite and feeling satisfied with smaller portions.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <Clock className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-primary mb-2">Convenient Dosing</h3>
                <p className="text-muted-foreground">
                  Once-weekly administration for easier adherence to treatment.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg text-primary mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Regular check-ins and adjustments to optimize your treatment plan.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-sm text-amber-800">
                <strong>*Results Disclaimer:</strong> Individual results vary significantly.
                Benefits are not guaranteed and depend on multiple factors including adherence
                to medication, diet, exercise, and individual physiology. The experiences of
                other patients should not be interpreted as expected outcomes.{" "}
                <Link href="/medical-disclaimer" className="text-accent hover:underline">
                  See Medical Disclaimer
                </Link>
                .
              </p>
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
              Transparency about risks is important to us.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg text-primary mb-4">Common Side Effects</h3>
                <ul className="space-y-2">
                  {sideEffects.common.map((effect, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-amber-500">•</span>
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg text-primary mb-4">Serious Side Effects (Rare)</h3>
                <ul className="space-y-2">
                  {sideEffects.serious.map((effect, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-red-500">•</span>
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Black Box Warning */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Important Safety Information</h3>
                  <p className="text-sm text-red-700">
                    GLP-1 receptor agonists carry a boxed warning regarding thyroid C-cell tumors.
                    In rodent studies, these medications caused thyroid C-cell tumors. It is not
                    known whether they cause thyroid C-cell tumors, including medullary thyroid
                    carcinoma, in humans. These medications are contraindicated in patients with
                    personal or family history of medullary thyroid carcinoma (MTC) or Multiple
                    Endocrine Neoplasia syndrome type 2 (MEN 2).
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              Our providers will discuss all potential risks and benefits during your evaluation.{" "}
              <Link href="/medical-disclaimer" className="text-accent hover:underline">
                See full Medical Disclaimer
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Investment in Your Health
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transparent pricing with no hidden fees
            </p>

            <div className="bg-muted/30 rounded-lg p-8 border border-border mb-8">
              <p className="text-muted-foreground mb-4">
                Our weight management program includes initial consultation, medical evaluation,
                medication, regular monitoring, and ongoing support.
              </p>
              <p className="text-lg font-semibold text-primary">
                Contact us for current pricing information and payment options.
              </p>
            </div>

            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              Get Pricing Information
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
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
                GLP-1 Weight Loss FAQs - Semaglutide & Tirzepatide Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border px-6"
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
              Start Your Weight Loss Journey in Scottsdale Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Schedule a consultation at our Arizona clinic to learn if GLP-1 therapy is right for you.
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
      <LandingPageDisclaimer treatment="glp1" />

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
