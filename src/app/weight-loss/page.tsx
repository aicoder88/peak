import WeightLossLandingPage from "@/components/WeightLossLandingPage";
import { Metadata } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.peaklifeperformance.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Medical Weight Loss Scottsdale | Semaglutide & Tirzepatide | GLP-1 Clinic Arizona",
  description: "Medical weight loss with Wegovy, Zepbound & Mounjaro in Scottsdale AZ. Board-certified physicians. FDA-approved GLP-1 medications. Free consultation. Call 480-979-2194.",
  keywords: [
    "medical weight loss Scottsdale",
    "semaglutide weight loss Arizona",
    "Wegovy doctor Scottsdale",
    "Ozempic weight loss near me",
    "tirzepatide Scottsdale AZ",
    "Mounjaro weight loss Arizona",
    "Zepbound clinic Scottsdale",
    "GLP-1 weight loss Phoenix",
    "weight loss clinic Scottsdale",
    "medical weight loss Arizona"
  ],
  openGraph: {
    title: "Medical Weight Loss Scottsdale | Semaglutide & GLP-1 Therapy",
    description: "Lose weight with FDA-approved GLP-1 medications. Physician-supervised program in Scottsdale, AZ. Free consultation. Call 480-979-2194.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${siteUrl}/weight-loss`,
  },
};

export default function WeightLossPage() {
  return <WeightLossLandingPage />;
}
