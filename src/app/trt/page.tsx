import TRTLandingPage from "@/components/TRTLandingPage";
import { Metadata } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.peaklifeperformance.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "TRT Clinic Scottsdale | Testosterone Replacement Therapy | Low T Treatment Arizona",
  description: "Low testosterone symptoms? Get TRT in Scottsdale AZ. Board-certified physicians, FDA-approved medications. Free consultation. Same-week appointments available. Call 480-979-2194.",
  keywords: [
    "TRT Scottsdale",
    "testosterone replacement therapy Arizona",
    "low testosterone treatment Scottsdale",
    "TRT clinic near me",
    "testosterone therapy Phoenix",
    "low T doctor Arizona",
    "hormone therapy men Scottsdale",
    "testosterone injections Arizona",
    "TRT doctor Scottsdale AZ",
    "male hormone clinic Arizona"
  ],
  openGraph: {
    title: "TRT Clinic Scottsdale | Low Testosterone Treatment",
    description: "Feeling tired, low energy? Get testosterone replacement therapy from board-certified physicians in Scottsdale. Free consultation. Call 480-979-2194.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${siteUrl}/trt`,
  },
};

export default function TRTPage() {
  return <TRTLandingPage />;
}
