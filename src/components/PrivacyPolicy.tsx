"use client"

import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-lg prose-gray"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
                <p>
                  Peak Life Performance (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-primary mb-2">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Name, email address, and phone number</li>
                  <li>Location/city information</li>
                  <li>Health-related information you provide through consultation forms</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-2 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Device and browser information</li>
                  <li>IP address and general location</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Respond to your consultation requests and inquiries</li>
                  <li>Provide and improve our healthcare services</li>
                  <li>Communicate with you about appointments and services</li>
                  <li>Send important updates about our services</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Health Information (HIPAA Notice)</h2>
                <p>
                  As a healthcare provider, we are committed to protecting your Protected Health Information (PHI)
                  in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
                </p>
                <p className="mt-4">
                  <strong>Important:</strong> Information submitted through our website contact forms is used
                  solely to schedule consultations and respond to inquiries. Once you become a patient, your
                  medical information is governed by our separate HIPAA Notice of Privacy Practices, which will
                  be provided to you.
                </p>
                <p className="mt-4">
                  We do not sell or share your health information for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking Technologies</h2>
                <p>Our website may use:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Google Analytics to understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Meta Pixel for advertising measurement (if enabled)</li>
                </ul>
                <p className="mt-4">
                  You can control cookie preferences through your browser settings. Disabling certain cookies
                  may limit website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Services</h2>
                <p>We may share information with trusted third parties who assist us in operating our website and services:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Email Services:</strong> To send appointment confirmations and communications</li>
                  <li><strong>Analytics:</strong> Google Analytics for website performance analysis</li>
                  <li><strong>Advertising:</strong> Meta/Facebook for advertising measurement</li>
                </ul>
                <p className="mt-4">
                  These providers are contractually obligated to protect your information and use it only
                  for the services they provide to us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-2 mt-6">California Residents (CCPA)</h3>
                <p>
                  California residents have additional rights under the California Consumer Privacy Act (CCPA),
                  including the right to know what personal information is collected, request deletion, and
                  opt out of the sale of personal information. We do not sell personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes
                  outlined in this Privacy Policy, unless a longer retention period is required by law.
                  Medical records are retained in accordance with applicable healthcare regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly
                  collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be indicated
                  by the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this
                  Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="mt-4 bg-muted/30 p-6 rounded-lg">
                  <p><strong>Peak Life Performance</strong></p>
                  <p>17787 N Perimeter Dr Unit A-111</p>
                  <p>Scottsdale, AZ</p>
                  <p className="mt-2">
                    Email: <a href="mailto:PLP@peaklifeperformance.com" className="text-accent hover:underline">PLP@peaklifeperformance.com</a>
                  </p>
                  <p>
                    Phone: <a href="tel:480-979-2194" className="text-accent hover:underline">480-979-2194</a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
