"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Users, Heart, TrendingUp, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";

export default function AboutUs() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering men to achieve their highest potential in all aspects of life"
    },
    {
      icon: Users,
      title: "Collaborative Care",
      description: "Connecting patients with athletic trainers, life coaches, and business mentors"
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Comprehensive health optimization through personalized treatments"
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Supporting excellence in health, business, and careers"
    }
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
              About Peak Life Performance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Empowering men to achieve their highest potential in health, business, and careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Peak Life Performance aims to empower men to achieve their highest potential
                in all aspects of life—health, business, and careers. We provide personalized
                hormone replacement therapy, weight loss treatments, and sexual health solutions
                while connecting patients with athletic trainers, life coaches, and business mentors.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted/30 p-6 rounded-xl"
                  >
                    <Icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Leadership Team
              </h2>

              {/* Jeff Zitsch */}
              <div className="bg-background rounded-xl p-8 mb-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/Jeff.jpg"
                      alt="Jeff Zitsch"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Jeff Zitsch
                    </h3>
                    <p className="text-accent font-semibold mb-4">Chief Executive Officer</p>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Jeff brings nearly ten years of healthcare administration experience,
                        collaborating with surgical practices nationwide. As CEO, he focuses on
                        optimizing male performance through fitness knowledge, hormone therapy,
                        and nutritional guidance.
                      </p>
                      <p>
                        Beyond healthcare, Jeff serves as a business coach and career mentor,
                        building community through collaborative networks. He believes success
                        emerges from collective support and resource-sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dr. Raj Parmar */}
              <div className="bg-background rounded-xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/raj.png"
                      alt="Dr. Raj Parmar"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Dr. Raj Parmar
                    </h3>
                    <p className="text-accent font-semibold mb-4">
                      Chief Medical Officer & Medical Director
                    </p>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Dr. Parmar graduated from the University of Osteopathic Medicine in
                        Des Moines, Iowa. He holds board certification in Internal Medicine
                        with specialized training in Endocrinology.
                      </p>
                      <p>
                        His approach integrates osteopathic principles emphasizing holistic,
                        preventative, evidence-based care with pharmaceutical treatments. As
                        someone living with Type 1 Diabetes, Dr. Parmar brings firsthand
                        understanding of chronic health management and metabolic optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">Connect With Us</h3>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.instagram.com/peaklifeperformance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Instagram className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.facebook.com/PLP247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Facebook className="h-8 w-8" />
                  </a>
                  <a
                    href="https://twitter.com/PeakLife247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Twitter className="h-8 w-8" />
                  </a>
                </div>
              </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the Peak Life Performance community and discover what it means to operate
              at your highest potential.
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
