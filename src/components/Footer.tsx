"use client"

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onCTAClick?: () => void;
}

export default function Footer({ onCTAClick = () => {} }: FooterProps) {
  return (
    <footer className="bg-black text-white border-t-4 border-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white uppercase tracking-tight">
              Peak Life<br />
              <span className="text-accent">Performance</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Medical-grade testosterone replacement therapy for men who demand excellence.
            </p>
            <Button
              onClick={onCTAClick}
              className="bg-accent hover:bg-accent/90 text-white font-bold rounded-none uppercase tracking-wide"
            >
              Get Started
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent transition-colors">
                  TRT Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-accent transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Testosterone Replacement</li>
              <li className="text-gray-400">Lab Testing & Analysis</li>
              <li className="text-gray-400">Medical Consultations</li>
              <li className="text-gray-400">Ongoing Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>info@peaklifeperformance.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>San Francisco, CA</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-none bg-gray-800 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-none bg-gray-800 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-none bg-gray-800 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 Peak Life Performance. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}