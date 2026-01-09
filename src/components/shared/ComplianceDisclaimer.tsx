"use client"

import Link from "next/link";
import { cn } from "@/lib/utils";

type DisclaimerType = "general" | "trt" | "glp1" | "results" | "compounding";
type DisclaimerVariant = "inline" | "box" | "footer" | "banner";
type DisclaimerSize = "small" | "medium" | "large";

interface ComplianceDisclaimerProps {
  type: DisclaimerType;
  variant?: DisclaimerVariant;
  size?: DisclaimerSize;
  className?: string;
  showLink?: boolean;
}

const disclaimerContent: Record<DisclaimerType, string> = {
  general: "The information provided is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider.",
  trt: "Testosterone Replacement Therapy requires evaluation by a licensed physician. TRT may not be appropriate for everyone. Potential risks include increased red blood cell count, acne, sleep apnea, and cardiovascular effects. Individual results vary.",
  glp1: "GLP-1 medications require a prescription and medical evaluation. Individual results vary significantly. Side effects may include nausea, digestive discomfort, and injection site reactions. Not appropriate for patients with certain medical conditions including history of medullary thyroid carcinoma or MEN2.",
  results: "Individual results may vary. Outcomes depend on multiple factors including adherence to treatment protocols, diet, exercise, and individual physiology. We make no guarantees regarding treatment outcomes.",
  compounding: "Some medications may be prepared by licensed compounding pharmacies. Compounded medications are not FDA-approved finished drug products, though they contain active pharmaceutical ingredients.",
};

const sizeClasses: Record<DisclaimerSize, string> = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-base",
};

const variantClasses: Record<DisclaimerVariant, string> = {
  inline: "text-muted-foreground italic",
  box: "bg-muted/30 border border-border rounded-lg p-4",
  footer: "bg-muted/50 border-t border-border py-6 px-4",
  banner: "bg-amber-50 border-l-4 border-amber-400 p-4",
};

export default function ComplianceDisclaimer({
  type,
  variant = "inline",
  size = "small",
  className,
  showLink = true,
}: ComplianceDisclaimerProps) {
  const content = disclaimerContent[type];

  return (
    <div
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <p className={variant === "banner" ? "text-amber-800" : "text-muted-foreground"}>
        {content}
        {showLink && (
          <>
            {" "}
            <Link
              href="/medical-disclaimer"
              className="text-accent hover:underline font-medium"
            >
              See Medical Disclaimer
            </Link>
            .
          </>
        )}
      </p>
    </div>
  );
}

// Pre-configured disclaimer components for common use cases
export function ResultsDisclaimer({ className }: { className?: string }) {
  return (
    <ComplianceDisclaimer
      type="results"
      variant="inline"
      size="small"
      className={className}
    />
  );
}

export function TRTDisclaimer({ className }: { className?: string }) {
  return (
    <ComplianceDisclaimer
      type="trt"
      variant="box"
      size="small"
      className={className}
    />
  );
}

export function GLP1Disclaimer({ className }: { className?: string }) {
  return (
    <ComplianceDisclaimer
      type="glp1"
      variant="box"
      size="small"
      className={className}
    />
  );
}

export function CompoundingDisclaimer({ className }: { className?: string }) {
  return (
    <ComplianceDisclaimer
      type="compounding"
      variant="banner"
      size="small"
      className={className}
    />
  );
}

// Full page footer disclaimer for landing pages
export function LandingPageDisclaimer({
  treatment
}: {
  treatment: "trt" | "glp1" | "both"
}) {
  return (
    <section className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs text-muted-foreground text-center uppercase tracking-wider font-semibold mb-4">
            Important Information
          </p>

          <p className="text-xs text-muted-foreground">
            <strong>Medical Disclaimer:</strong> The information on this page is for educational purposes
            only and is not intended as medical advice. Always consult with a qualified healthcare
            provider before starting any treatment.
          </p>

          {(treatment === "trt" || treatment === "both") && (
            <p className="text-xs text-muted-foreground">
              <strong>TRT Disclosure:</strong> Testosterone Replacement Therapy requires evaluation by a
              licensed physician. Not all patients qualify. TRT carries potential risks including increased
              red blood cell count, acne, sleep apnea, and cardiovascular effects.
            </p>
          )}

          {(treatment === "glp1" || treatment === "both") && (
            <>
              <p className="text-xs text-muted-foreground">
                <strong>GLP-1 Disclosure:</strong> GLP-1 medications require a prescription and medical
                evaluation. Side effects may include nausea, digestive discomfort, and injection site
                reactions. GLP-1 medications carry warnings regarding thyroid C-cell tumors and are
                contraindicated in patients with personal or family history of medullary thyroid carcinoma
                or MEN2.
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Compounding Disclosure:</strong> Some medications may be prepared by licensed
                compounding pharmacies. Compounded medications are not FDA-approved finished drug products.
              </p>
            </>
          )}

          <p className="text-xs text-muted-foreground">
            <strong>Results Disclaimer:</strong> Individual results may vary significantly. Outcomes depend
            on adherence to treatment, lifestyle factors, and individual physiology. We make no guarantees
            regarding treatment outcomes.
          </p>

          <p className="text-xs text-muted-foreground text-center mt-6">
            <Link href="/medical-disclaimer" className="text-accent hover:underline">
              Read Full Medical Disclaimer
            </Link>
            {" | "}
            <Link href="/privacy-policy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms" className="text-accent hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
