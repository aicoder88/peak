import Home from "@/components/home";
import type { Metadata } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.peaklifeperformance.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "TRT Scottsdale | Peak Life Performance",
  description:
    "Peak Life Performance is a Scottsdale, AZ men's health clinic specializing in testosterone replacement therapy (TRT), hormone optimization, and medical weight loss. Free consultation. Call 480-979-2194.",
  keywords: [
    "TRT Scottsdale",
    "testosterone replacement therapy Scottsdale",
    "TRT clinic Scottsdale AZ",
    "low testosterone treatment Scottsdale",
    "men's health clinic Scottsdale",
    "hormone optimization Scottsdale",
  ],
  openGraph: {
    title: "TRT Scottsdale | Peak Life Performance",
    description:
      "Scottsdale, AZ men's health clinic specializing in TRT and hormone optimization. Free consultation. Call 480-979-2194.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

export default function Page() {
  return <Home />;
}
