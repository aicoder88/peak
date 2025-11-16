"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyMobileCTAProps {
  onCTAClick: () => void;
}

export default function StickyMobileCTA({ onCTAClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t-2 border-accent/20 shadow-2xl p-4"
          >
            <Button
              onClick={onCTAClick}
              className="w-full h-14 bg-accent hover:bg-accent/90 text-primary font-semibold text-lg rounded-full shadow-lg"
            >
              Book Free Consultation
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
