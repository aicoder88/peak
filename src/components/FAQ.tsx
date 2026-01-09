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
      answer: "TRT is a medically supervised treatment that restores healthy testosterone levels in men with low testosterone, also called hypogonadism. Testosterone is important for energy, muscle mass, libido, mood, and overall well-being. TRT helps relieve symptoms such as fatigue, low sex drive, decreased strength, and brain fog, while safely monitoring hormone levels to optimize health."
    },
    {
      question: "Who is a candidate for TRT?",
      answer: "Men with diagnosed low testosterone through blood tests experiencing symptoms like fatigue, low libido, depression, and reduced muscle mass may qualify, pending healthcare provider assessment."
    },
    {
      question: "How is low testosterone diagnosed?",
      answer: "Low testosterone is diagnosed with blood tests that measure total and free testosterone levels, often combined with a review of symptoms and medical history to ensure accurate assessment."
    },
    {
      question: "What are the common symptoms of low testosterone?",
      answer: "Low testosterone can cause fatigue, decreased libido, erectile dysfunction, depression, irritability, loss of muscle mass, increased body fat, and decreased bone density. Recognizing these signs early can help guide treatment and improve overall health."
    },
    {
      question: "How is TRT administered?",
      answer: "TRT can be administered through several methods including intramuscular injections, transdermal patches, topical gels, buccal tablets, and subcutaneous pellets. Your provider will help choose the method best suited to your needs and lifestyle."
    },
    {
      question: "How long does it take to see results from TRT?",
      answer: "Some men notice improvements in energy, mood, and libido within a few weeks. Other benefits, like increased strength and muscle mass, may take several months. Results vary by individual and depend on health, hormone levels, and adherence to the treatment plan."
    },
    {
      question: "Are there any risks or side effects associated with TRT?",
      answer: "TRT is generally safe when medically supervised, but potential side effects can include acne, sleep apnea, increased red blood cell count, prostate enlargement, and cardiovascular risks. Regular monitoring by your healthcare provider helps manage these risks and ensures safe, effective treatment."
    },
    {
      question: "Can TRT cause infertility?",
      answer: "TRT can reduce sperm production and may lead to infertility in some men. Using HCG alongside TRT can help maintain testicular function and support fertility while on therapy. It's important to discuss fertility goals with your provider before starting treatment."
    },
    {
      question: "Does TRT increase the risk of prostate cancer?",
      answer: "Research shows TRT does not significantly raise prostate cancer risk. Men with existing prostate conditions should be monitored, but with regular check-ups and lab tests, TRT is generally safe and well-managed."
    },
    {
      question: "How often will I need to see my doctor while on TRT?",
      answer: "Follow-up visits with your doctor usually occur every 3 to 6 months to monitor testosterone levels and overall health. At our clinic, nurses closely track your labs and symptoms more frequently, ensuring your treatment is safe, effective, and tailored to your needs."
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
      answer: "Many men notice improvements in mood, energy, focus, and overall mental well-being while on TRT. These benefits can help reduce symptoms such as irritability, fatigue, and brain fog. Regular monitoring by your healthcare team ensures any changes in mood or mental health are addressed promptly for safe, effective treatment."
    },
    {
      question: "Can TRT help with weight loss?",
      answer: "TRT can help increase muscle mass and improve metabolism, which may contribute to reducing body fat and supporting weight management. When combined with a healthy diet, exercise, and lifestyle changes, TRT can be an effective part of a comprehensive approach to achieving and maintaining a healthier body composition."
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

  const sermorelinFaqs = [
    {
      question: "Who Is Sermorelin Therapy For?",
      answer: "Sermorelin is ideal for adults experiencing signs of growth hormone decline—such as fatigue, reduced muscle mass, slower recovery, stubborn fat, or poor sleep. It's commonly used by men and women over 30 looking to restore energy, improve body composition, and support long-term vitality without synthetic HGH."
    },
    {
      question: "How Is Sermorelin Administered?",
      answer: "Sermorelin is typically given as a subcutaneous injection using a small insulin-type needle. It's usually administered before bed to align with your body's natural GH release cycle. Most patients self-inject at home after brief training from our clinical team."
    },
    {
      question: "How Long Does It Take to See Results?",
      answer: "Some patients notice improved sleep and energy within 2–4 weeks. More significant changes—like increased muscle tone, fat loss, and enhanced recovery—typically develop over 3–6 months of consistent use. Results depend on individual factors such as baseline hormone levels, age, and lifestyle."
    },
    {
      question: "Is Sermorelin Safe?",
      answer: "Yes, when prescribed and monitored by a licensed provider. Sermorelin stimulates your body's own growth hormone production rather than introducing synthetic hormones directly. Common side effects are mild and may include injection site reactions, headache, or flushing. Regular lab monitoring ensures safety and effectiveness."
    },
    {
      question: "How Is Sermorelin Different From HGH?",
      answer: "HGH (human growth hormone) directly replaces growth hormone in the body. Sermorelin, on the other hand, stimulates your pituitary gland to produce its own GH naturally. This makes Sermorelin a safer, more sustainable option with fewer side effects and a lower risk of hormonal imbalance or dependency."
    },
    {
      question: "Will Sermorelin Help With Weight Loss?",
      answer: "Sermorelin can support fat loss by promoting lean muscle growth and improving metabolism. While it's not a weight loss drug on its own, it enhances your body's ability to burn fat—especially when combined with proper nutrition, exercise, and sleep."
    },
    {
      question: "Do I Need Lab Testing Before Starting?",
      answer: "Yes. At Peak Life Performance, we require baseline lab work to evaluate your hormone levels, IGF-1, metabolic markers, and overall health. This ensures Sermorelin is appropriate for you and allows us to track progress throughout treatment."
    },
    {
      question: "Is Sermorelin FDA Approved?",
      answer: "Sermorelin was FDA-approved for use in children with growth hormone deficiency. While it is no longer actively marketed under its original brand, it remains legally available through compounding pharmacies for off-label use in adults under physician supervision. At Peak Life Performance, we prescribe Sermorelin only from licensed, regulated compounding pharmacies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/faq-hero.webp"
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

      {/* TRT FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Testosterone Replacement Therapy (TRT)
              </h2>
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

      {/* Sermorelin FAQ Section */}
      <section className="py-20 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                Sermorelin Peptide Therapy
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                Learn about growth hormone optimization through Sermorelin therapy.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {sermorelinFaqs.map((faq, index) => (
                  <AccordionItem
                    key={`sermorelin-${index}`}
                    value={`sermorelin-item-${index}`}
                    className="bg-background rounded-xl px-6 border border-border/50 hover:border-accent/30 transition-colors"
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
