"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onCTAClick?: () => void;
}

export default function Navigation({ onCTAClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/trt", label: "TRT" },
    { href: "/weight-loss", label: "Weight Loss" },
    { href: "/additional-services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ];

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/peak-logo.jpg"
              alt="Peak Life Performance - TRT and Hormone Therapy Clinic"
              width={188}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 overflow-hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={handleCTAClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}