"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";
import Image from "next/image";

interface CTASectionProps {
  onCTAClick?: () => void;
}

export default function CTASection({ onCTAClick = () => {} }: CTASectionProps) {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden border-y-4 border-accent">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=70"
          alt="CTA Background"
          fill
          className="object-cover opacity-20"
          quality={70}
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-accent rounded-none"
          >
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              Limited Availability
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
            Ready to Reclaim Your <span className="text-accent">Power?</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-400 mb-10 leading-relaxed">
            Join the wave of men across the country who've transformed their lives through optimized testosterone levels and performance recovery. Your journey to Peak Life Performance starts now.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-7 text-lg rounded-none shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group uppercase tracking-wide"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray-500"
          >
            <Clock className="h-5 w-5" />
            <span className="text-sm">
              Only 3 consultation slots remaining this month
            </span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-12 border-t border-gray-800"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-xl font-bold">✓</span>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-xl font-bold">✓</span>
                <span>Same-Day Response</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}