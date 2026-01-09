"use client"

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function MedicalDisclaimer() {
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
              Medical Disclaimer
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Important Information About Our Services
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
            className="max-w-4xl mx-auto"
          >
            {/* Important Notice Box */}
            <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-amber-800 mb-2">Important Notice</h2>
                  <p className="text-amber-700">
                    The information provided on this website is for general educational and informational
                    purposes only. It is not intended to be a substitute for professional medical advice,
                    diagnosis, or treatment. Always seek the advice of your physician or other qualified
                    healthcare provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">General Medical Disclaimer</h2>
                <p>
                  Peak Life Performance provides information about testosterone replacement therapy (TRT),
                  GLP-1 weight management programs, and related healthcare services. The content on our
                  website, including text, graphics, images, and other material, is intended solely for
                  informational purposes.
                </p>
                <p className="mt-4">
                  <strong>Nothing on this website should be construed as medical advice.</strong> The
                  information is not intended to diagnose, treat, cure, or prevent any disease. You should
                  not use the information on this website for diagnosing or treating a health problem or
                  disease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Individual Results May Vary</h2>
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-primary mb-2">Results Disclaimer</p>
                  <p>
                    Individual results from any treatment program may vary significantly. Results depend
                    on many factors including but not limited to: individual health status, adherence to
                    treatment protocols, diet, exercise, lifestyle factors, genetics, and individual physiology.
                  </p>
                  <p className="mt-4">
                    <strong>We make no guarantees regarding treatment outcomes.</strong> Any testimonials,
                    success stories, or results mentioned on our website represent individual experiences
                    and should not be interpreted as expected or typical outcomes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Testosterone Replacement Therapy (TRT)</h2>
                <p>
                  Testosterone replacement therapy is a prescription treatment for men with clinically
                  diagnosed low testosterone (hypogonadism). TRT is only available after evaluation by
                  a licensed physician, including laboratory testing to confirm testosterone deficiency.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Treatment Eligibility</h3>
                <p>
                  Not all patients qualify for testosterone replacement therapy. Treatment eligibility
                  is determined solely by our licensed medical providers based on comprehensive evaluation,
                  including medical history, physical examination, and laboratory results.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Potential Risks and Side Effects</h3>
                <p>TRT may carry potential risks and side effects, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Increased red blood cell count (polycythemia)</li>
                  <li>Acne or oily skin</li>
                  <li>Sleep apnea (worsening of existing condition)</li>
                  <li>Breast enlargement (gynecomastia)</li>
                  <li>Testicular atrophy</li>
                  <li>Decreased sperm production and fertility</li>
                  <li>Cardiovascular effects (discuss with your provider)</li>
                  <li>Mood changes</li>
                  <li>Fluid retention</li>
                </ul>
                <p className="mt-4">
                  Regular monitoring through blood tests is required during TRT treatment. Discuss all
                  potential risks with your healthcare provider before beginning treatment.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">FDA-Approved Medications</h3>
                <p>
                  Testosterone cypionate and other testosterone formulations prescribed by our providers
                  are FDA-approved medications for the treatment of male hypogonadism.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">GLP-1 Weight Management Therapy</h2>
                <p>
                  Our weight management program may include GLP-1 receptor agonist medications (such as
                  tirzepatide or semaglutide). These medications require a prescription and comprehensive
                  medical evaluation.
                </p>

                {/* Compounding Pharmacy Disclosure - commented out, using FDA-approved medications
                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Compounding Pharmacy Disclosure</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 my-4">
                  <p className="text-blue-800">
                    <strong>Important:</strong> Some medications prescribed through our practice may be
                    prepared by licensed compounding pharmacies. Compounded medications are not FDA-approved
                    finished drug products. They are prepared pursuant to a prescription from a licensed
                    practitioner for an individual patient. The active pharmaceutical ingredients used in
                    compounded medications may be the subject of FDA-approved drugs.
                  </p>
                </div>
                */}

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">FDA-Approved GLP-1 Medications</h3>
                <p>
                  Brand-name GLP-1 medications such as Wegovy, Ozempic, Zepbound, and Mounjaro are
                  FDA-approved for specific indications. Your provider will discuss which medication
                  option is appropriate for your situation.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Black Box Warning</h3>
                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 my-4">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-red-800 mb-2">IMPORTANT SAFETY INFORMATION</p>
                      <p className="text-red-700">
                        GLP-1 receptor agonists, including tirzepatide and semaglutide, carry a boxed warning
                        regarding thyroid C-cell tumors. In rodent studies, these medications caused thyroid
                        C-cell tumors.
                      </p>
                      <p className="text-red-700 mt-2">
                        <strong>These medications are contraindicated in patients with:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mt-2 text-red-700">
                        <li>Personal or family history of medullary thyroid carcinoma (MTC)</li>
                        <li>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                      </ul>
                      <p className="text-red-700 mt-2">
                        It is not known whether these medications cause thyroid C-cell tumors, including
                        medullary thyroid carcinoma, in humans. Discuss these risks with your healthcare provider.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Potential Side Effects of GLP-1 Medications</h3>
                <p>Common side effects may include:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Nausea (especially when starting treatment or increasing dose)</li>
                  <li>Vomiting</li>
                  <li>Diarrhea or constipation</li>
                  <li>Abdominal pain</li>
                  <li>Decreased appetite</li>
                  <li>Injection site reactions</li>
                  <li>Fatigue</li>
                  <li>Dizziness</li>
                </ul>
                <p className="mt-4">Serious side effects may include:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Pancreatitis (inflammation of the pancreas)</li>
                  <li>Gallbladder problems</li>
                  <li>Kidney problems</li>
                  <li>Serious allergic reactions</li>
                  <li>Hypoglycemia (low blood sugar) when used with certain other medications</li>
                </ul>
                <p className="mt-4">
                  <strong>Seek immediate medical attention</strong> if you experience severe abdominal pain,
                  signs of allergic reaction, or other concerning symptoms.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Additional Contraindications</h3>
                <p>GLP-1 medications may not be appropriate for individuals with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>History of pancreatitis</li>
                  <li>Severe gastrointestinal disease</li>
                  <li>Diabetic retinopathy</li>
                  <li>Pregnancy or planning to become pregnant</li>
                </ul>
                <p className="mt-4">
                  Always disclose your complete medical history to your healthcare provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">No Doctor-Patient Relationship</h2>
                <p>
                  Viewing information on this website or submitting a consultation request does not
                  establish a doctor-patient relationship. A doctor-patient relationship is only
                  established after a formal consultation with one of our licensed medical providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Emergency Situations</h2>
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <p className="text-red-800 font-semibold">
                    If you are experiencing a medical emergency, call 911 immediately or go to the
                    nearest emergency room. Do not rely on this website for emergency medical care.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">External Links</h2>
                <p>
                  Our website may contain links to external websites. We are not responsible for the
                  content or accuracy of any external sites. Links to external sites do not constitute
                  endorsement of their content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Disclaimer</h2>
                <p>
                  We may update this Medical Disclaimer from time to time. We encourage you to review
                  this page periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Medical Disclaimer or our services, please contact us:
                </p>
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

              {/* Final Summary Box */}
              <section className="mt-12">
                <div className="bg-muted/50 border rounded-lg p-8">
                  <h2 className="text-xl font-bold text-primary mb-4">Summary</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">1.</span>
                      <span>This website provides educational information only, not medical advice.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">2.</span>
                      <span>Individual results vary; we make no treatment guarantees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">3.</span>
                      <span>All treatments require evaluation by a licensed physician.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">4.</span>
                      <span>TRT and GLP-1 medications have potential risks and side effects.</span>
                    </li>
                    {/* Commented out - using FDA-approved medications
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">5.</span>
                      <span>Some medications may be compounded and are not FDA-approved finished products.</span>
                    </li>
                    */}
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">5.</span>
                      <span>Consult your healthcare provider before starting any treatment.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Links to Related Pages */}
              <section className="mt-8">
                <p className="text-center text-muted-foreground">
                  See also:{" "}
                  <Link href="/privacy-policy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  |{" "}
                  <Link href="/terms" className="text-accent hover:underline">
                    Terms of Service
                  </Link>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
