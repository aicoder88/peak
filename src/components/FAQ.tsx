"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";

export default function FAQ() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const faqs = [
    {
      question: "What is Testosterone Replacement Therapy (TRT)?",
      answer: "TRT is a medical treatment designed to restore healthy testosterone levels in men who have low testosterone, also known as hypogonadism."
    },
    {
      question: "Who is a candidate for TRT?",
      answer: "Men with diagnosed low testosterone through blood tests experiencing symptoms like fatigue, low libido, depression, and reduced muscle mass may qualify, pending healthcare provider assessment."
    },
    {
      question: "How is low testosterone diagnosed?",
      answer: "Low testosterone is typically diagnosed through blood tests that measure total and free testosterone levels."
    },
    {
      question: "What are the common symptoms of low testosterone?",
      answer: "Common symptoms include fatigue, decreased libido, erectile dysfunction, depression, irritability, loss of muscle mass, increased body fat, and decreased bone density."
    },
    {
      question: "How is TRT administered?",
      answer: "TRT can be administered through several methods including intramuscular injections, transdermal patches, topical gels, buccal tablets, and subcutaneous pellets."
    },
    {
      question: "How long does it take to see results from TRT?",
      answer: "Some men may notice improvements in energy levels, mood, and libido within a few weeks, while full benefits take several months."
    },
    {
      question: "Are there any risks or side effects associated with TRT?",
      answer: "Potential side effects include acne, sleep apnea, increased red blood cell count, prostate enlargement, and cardiovascular concerns requiring regular monitoring."
    },
    {
      question: "Can TRT cause infertility?",
      answer: "TRT can reduce sperm production and may lead to infertility in some men."
    },
    {
      question: "Does TRT increase the risk of prostate cancer?",
      answer: "Research suggests TRT doesn't significantly increase prostate cancer risk, though closely monitored men with existing conditions remain prudent."
    },
    {
      question: "How often will I need to see my doctor while on TRT?",
      answer: "Regular follow-up visits, typically every 3 to 6 months, are necessary to monitor testosterone levels."
    },
    {
      question: "Can lifestyle changes impact testosterone levels?",
      answer: "Yes. Maintaining a healthy diet, exercising regularly, managing stress, getting enough sleep, and reducing alcohol intake supports healthy testosterone."
    },
    {
      question: "Is TRT a lifelong treatment?",
      answer: "Duration depends on individual circumstances; some require lifelong treatment while others use it temporarily."
    },
    {
      question: "Can women use TRT?",
      answer: "TRT is generally prescribed for men. However, in certain cases, women with low testosterone levels may receive low-dose testosterone therapy."
    },
    {
      question: "Will TRT affect my mood and mental health?",
      answer: "Many men experience improvements in mood, energy, and mental health, though monitoring changes remains important."
    },
    {
      question: "Can TRT help with weight loss?",
      answer: "TRT can help increase muscle mass and reduce body fat, which may contribute to weight loss."
    },
    {
      question: "Are there alternatives to TRT for low testosterone?",
      answer: "Alternatives include lifestyle modifications, Clomiphene Citrate, and hCG medications stimulating natural testosterone production."
    },
    {
      question: "How much does TRT cost?",
      answer: "Costs vary based on administration method, dosage, and insurance coverage; discuss with healthcare providers."
    },
    {
      question: "Can I travel while on TRT?",
      answer: "Yes, but plan ahead ensuring adequate medication supply and carrying doctor's notes, especially internationally."
    },
    {
      question: "What should I do if I miss a dose of TRT medication?",
      answer: "Follow provider instructions; contact them for injection guidance without doubling doses."
    },
    {
      question: "How do I start TRT?",
      answer: "Schedule an appointment with hormone therapy specialists who conduct evaluations including blood tests and symptom reviews."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/faq-hero.png"
            alt="FAQ Background"
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
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert answers to your questions about hormone therapy, optimization, and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/science-abstract.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Schedule a free consultation with our hormone therapy specialists to get
              personalized answers and start your journey to peak performance.
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
