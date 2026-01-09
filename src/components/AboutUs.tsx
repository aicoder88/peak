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
      description: "Supporting excellence in health, business, and relationships"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.webp"
            alt="Peak Life Performance Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Redefining <span className="text-accent">Male</span><br />
              Performance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              We are a team of medical professionals and performance coaches dedicated to helping you achieve your highest potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Peak Life Performance, our mission is to empower men to achieve their highest potential in all aspects of life—health, business, and careers. We are dedicated to optimizing male performance through personalized hormone optimization and peptide therapy, comprehensive weight loss treatments, and tailored sexual health solutions. By connecting our patients with a network of expert athletic trainers, life and performance coaches, and business and entrepreneurship mentors, we provide the tools and support necessary for holistic well-being and success. At our core, we believe in fostering a strong community where every man can thrive and reach peak performance in every area of life.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/science-abstract.webp"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted/20 p-8 rounded-xl border border-border/50 hover:bg-muted/40 transition-all group"
                  >
                    <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
                Leadership Team
              </h2>

              {/* Jeff Zitsch */}
              <div className="bg-background rounded-2xl p-8 md:p-10 mb-10 shadow-xl border border-border/50">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/Jeff.jpg"
                        alt="Jeff Zitsch"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      Jeff Zitsch
                    </h3>
                    <p className="text-accent font-bold text-lg mb-6 uppercase tracking-wide">Chief Executive Officer</p>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
              <div className="bg-background rounded-2xl p-8 md:p-10 shadow-xl border border-border/50">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/raj.png"
                        alt="Dr. Raj Parmar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      Dr. Raj Parmar
                    </h3>
                    <p className="text-accent font-bold text-lg mb-6 uppercase tracking-wide">
                      Chief Medical Officer & Medical Director
                    </p>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
              <div className="mt-20 text-center">
                <h3 className="text-xl font-semibold text-primary mb-6">Connect With Us</h3>
                <div className="flex justify-center gap-8">
                  <a
                    href="https://www.instagram.com/peaklifeperformance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-all hover:scale-110"
                  >
                    <Instagram className="h-10 w-10" />
                  </a>
                  <a
                    href="https://www.facebook.com/PLP247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-all hover:scale-110"
                  >
                    <Facebook className="h-10 w-10" />
                  </a>
                  <a
                    href="https://twitter.com/PeakLife247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-all hover:scale-110"
                  >
                    <Twitter className="h-10 w-10" />
                  </a>
                </div>
              </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join the Peak Life Performance community and discover what it means to operate
              at your highest potential.
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
