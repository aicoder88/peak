"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function TermsOfService() {
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
              Terms of Service
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
                <h2 className="text-2xl font-bold text-primary mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using the Peak Life Performance website and services, you agree to be
                  bound by these Terms of Service. If you do not agree to these terms, please do not
                  use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Description of Services</h2>
                <p>
                  Peak Life Performance provides information about testosterone replacement therapy (TRT),
                  weight management programs, and related healthcare services. Our website is designed to
                  provide educational information and facilitate consultations with our medical providers.
                </p>
                <p className="mt-4 font-semibold text-primary">
                  Important: The information on this website is for educational purposes only and does not
                  constitute medical advice. See our{" "}
                  <Link href="/medical-disclaimer" className="text-accent hover:underline">
                    Medical Disclaimer
                  </Link>{" "}
                  for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Eligibility</h2>
                <p>
                  Our services are intended for adults 18 years of age or older. By using our website
                  and services, you represent that you are at least 18 years old and have the legal
                  capacity to enter into these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Medical Services Disclaimer</h2>
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-primary mb-2">Not Medical Advice</p>
                  <p>
                    The content on this website is provided for general informational purposes only and
                    is not intended to be a substitute for professional medical advice, diagnosis, or
                    treatment. Always seek the advice of your physician or other qualified healthcare
                    provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
                <p className="mt-4">
                  <strong>Treatment Eligibility:</strong> All medical treatments, including testosterone
                  replacement therapy and GLP-1 medications, require evaluation by a licensed physician.
                  Not all patients qualify for treatment. Treatment decisions are made solely by our
                  medical providers based on individual patient evaluation.
                </p>
                <p className="mt-4">
                  <strong>Results Vary:</strong> Individual results from any treatment program may vary
                  significantly. Results depend on many factors including patient health, adherence to
                  treatment protocols, lifestyle factors, and individual physiology. We make no guarantees
                  regarding treatment outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">User Responsibilities</h2>
                <p>When using our website and services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide accurate and complete information in all forms and communications</li>
                  <li>Disclose your complete medical history to our providers</li>
                  <li>Not use our services for any unlawful purpose</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with the proper functioning of our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Consultation Requests</h2>
                <p>
                  Submitting a consultation request through our website does not establish a
                  patient-provider relationship. A patient-provider relationship is only established
                  after a formal consultation with one of our licensed medical providers.
                </p>
                <p className="mt-4">
                  We reserve the right to decline consultation requests or discontinue services at
                  our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software,
                  is the property of Peak Life Performance or its licensors and is protected by
                  copyright and other intellectual property laws.
                </p>
                <p className="mt-4">
                  You may not reproduce, distribute, modify, or create derivative works from any
                  content without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Peak Life Performance shall not be liable
                  for any indirect, incidental, special, consequential, or punitive damages arising
                  from your use of our website or services.
                </p>
                <p className="mt-4">
                  Our total liability for any claims arising from these Terms or your use of our
                  services shall not exceed the amount you paid to us in the twelve (12) months
                  preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Peak Life Performance, its officers,
                  directors, employees, and agents from any claims, damages, losses, or expenses
                  arising from your violation of these Terms or your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for
                  the content or practices of these external sites. Accessing third-party links is
                  at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Privacy</h2>
                <p>
                  Your use of our website and services is also governed by our{" "}
                  <Link href="/privacy-policy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective
                  immediately upon posting to our website. Your continued use of our services after
                  any changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of Arizona, without regard to its conflict of law provisions. Any disputes
                  arising from these Terms shall be resolved in the courts of Maricopa County, Arizona.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining
                  provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
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
